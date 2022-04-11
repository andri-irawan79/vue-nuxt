<template>
  <v-app>
    <navbar-menu />
    <v-main>
      <v-row>
        <v-col :cols="menuValue ? '2': '0'" :class="menuValue ? 'd-inline-block': 'd-none'">
          <sidebar-menu />
        </v-col>
        <v-col :cols="menuValue ? '10': '12'">
          <v-container>
            <tampilan-utama />
          </v-container>
        </v-col>
      </v-row>
    </v-main>
    <footer-page />
  </v-app>
</template>

<script>
import FooterPage from '~/components/FooterPage.vue';
import SidebarMenu from '~/components/SidebarMenu.vue';
import NavbarMenu from '~/components/NavbarMenu.vue'
import TampilanUtama from '~/components/TampilanUtama.vue';

export default {
  name: 'App',
  components: { 
    SidebarMenu, 
    FooterPage, 
    NavbarMenu,
    TampilanUtama,
  },
  computed: {
    menuValue(){
      return this.$store.state.sidebar;
    }
  },
};
</script>
