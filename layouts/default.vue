<template>
  <v-app>
    <tampilan-utama />
  </v-app>
</template>

<script>
  import TampilanUtama from '~/components/TampilanUtama.vue'
  export default {
    name: 'HomeView',
    components: {
      TampilanUtama,
    },
  }
</script>