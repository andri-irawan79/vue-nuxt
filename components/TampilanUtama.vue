<template>    
<div>
    <menu-kategori />
    <div v-for="(artic, index) in newsList" :key="index">
      <v-card
        class="mx-auto my-5"
        max-width="900"
      >
          <v-img
            class="align-end"
            height="350px"
            :src="artic.urlToImage"
          >
          </v-img>
          <div class="px-3 pb-5">
          <v-card-title>{{artic.title}}</v-card-title>

          <v-card-text class="pb-10">
            <div>{{artic.content}}</div>
          </v-card-text>

          <v-card-actions>
          <v-row
            justify="space-between"
            align-content="center"
            class="d-flex flex-column flex-sm-row flex-nowrap"
          >
            <v-btn
              color="secondary"
              class="ml-1 order-2 order-sm-1 mt-3 mt-sm-2"
              rounded
              small
            >{{artic.source.name}}
            </v-btn>
            <div class="text-justify d-flex align-center order-1 order-sm-2 mb-3 mb-sm-0">
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <a href="www.redditmedia.com">
                    <v-icon
                      color="#FF4500"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >mdi-reddit
                    </v-icon>
                  </a>
                </template>
                <span>Reddit</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <a href="https://twitter.com/twitter">
                    <v-icon
                      color="info"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                    mdi-twitter
                    </v-icon>
                  </a>
                </template>
                <span>Twitter</span>
              </v-tooltip>
              
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <a href="https://id-id.facebook.com/">
                    <v-icon
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                    mdi-facebook
                    </v-icon>
                  </a>
                </template>
                <span>Facebook</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <a href="https://myaccount.google.com/profile">
                    <v-icon
                      color="red"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                    mdi-google-plus
                    </v-icon>
                  </a>
                </template>
                <span>Google+</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <a href="https://www.linkedin.com/">
                    <v-icon
                      color="blue"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >mdi-linkedin</v-icon>
                  </a>
                </template>
                <span>Lingked In</span>
              </v-tooltip>
            </div>

            <a :href="artic.url" target="_black" class="order-4 order-sm-3 mt-6 mt-sm-0 text-center">
              <v-btn color="info">
              READ MORE
            </v-btn>
            </a>
          </v-row>
        </v-card-actions>
      </div>
    </v-card>
  </div>
  <div>
    <div v-if="statusData.isEmpty || statusData.isError" class="text-center pt-10">
      <v-btn 
        :class="`my-5 ${refresh}`" 
        icon 
        @click="refreshPage()"
      >
        <v-icon x-large>mdi-refresh</v-icon>
      </v-btn>
      <h2 v-if="statusData.isEmpty">{{statusData.isEmpty}}</h2>
      <h2 v-if="statusData.isError">{{statusData.isError}}</h2>
    </div>
  </div>
  <v-spacer class="pb-5"></v-spacer>
</div>
</template>

<script>
import  MenuKategori from '@/components/MenuKategori.vue';

export default {
    name: 'TampilanUtama',
    components: {
      MenuKategori,
    },
    data(){
      return {
        status: null,
        refresh: ''
      };
    },
    computed: {
    newsList() {
      return this.$store.state.articles;
    },
    statusData() {
      return this.$store.state.statusPage;
    }
  },
  updated(){
    this.checkNews();  
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      this.$store.dispatch('fetchList');
    },
    refreshPage() {
      this.refresh = 'spinn';
      this.fetchNews();
    },
    stopSpinn() {
      this.refresh = '';
    },
    checkNews() {
      if(this.newsList.length === 0){
        this.$store.dispatch('changeStatusPageEmpty', 'Berita tidak ditemukan');
      } 
      else if(this.newsList.length > 0){
        this.$store.dispatch('changeStatusPageEmpty', this.status);
        this.$store.dispatch('changeStatusPageError', this.status);
      }
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  margin: 0 5px;
}
.spinn {
  animation: button-loading-spinner 1s ease 7;
}

@keyframes button-loading-spinner {
    from {
        transform: rotate(0turn);
    }

    to {
        transform: rotate(1turn);
    }
}
</style>