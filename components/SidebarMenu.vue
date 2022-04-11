<template>
      <v-navigation-drawer color="info" :value="menuValue" absolute stateless>
        <div style="cursor: pointer; padding: 2px;">
            <div v-for="(artic, index) in newsList" :key="index">
                <div class="px-3 py-3 dark d-flex" @click="searchByMenu(artic.source.name)">
                    <v-avatar
                        color="success"
                        size="35"
                    >
                    <img :src="artic.urlToImage" :alt="artic.source.name">
                    </v-avatar>
                  <div class="ml-2" style="color: white;"><strong> {{artic.source.name}}</strong></div>
                </div>
            </div>
         </div>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'SidebarMenu',
    computed: {
        newsList() {
            return this.$store.state.articles;
        },
        menuValue(){
            return this.$store.state.sidebar;
        }
    },
    methods: {
        searchByMenu(keyWord){
            this.$store.dispatch('fetchByMenu', keyWord);
        }
    }
}
</script>

<style>

</style>