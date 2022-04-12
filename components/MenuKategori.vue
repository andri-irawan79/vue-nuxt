<template>
    
  <v-card flat class="mb-3 mx-auto">
      <h1 class="text-center mb-3">BERITA.COM</h1>
    <v-tabs
      background-color="white"
      center-active
      light
    >
      <v-tab @click="fetchNews()">Hot Topik</v-tab>
      <v-tab @click="searchByCategory('general')">General</v-tab>
      <v-tab @click="searchByCategory('entertainment')">Entertainment</v-tab>
      <v-tab @click="searchByCategory('business')">Bisnis</v-tab>
      <v-tab @click="searchByCategory('health')">Kesehatan</v-tab>
      <v-tab @click="searchByCategory('science')">Sains</v-tab>
      <v-tab @click="searchByCategory('sports')">Olahraga</v-tab>
      <v-tab @click="searchByCategory('technology')">Teknologi</v-tab>
      <!-- Cara lain -->
      <v-tab @click="searchByOthersCategory('style')">Style</v-tab>
      <v-tab @click="searchByOthersCategory('fashion')">Fashion</v-tab>
      <v-tab @click="searchByOthersCategory('otomotif')">Otomotif</v-tab>
      <v-tab @click="searchByOthersCategory('properti')">Properti</v-tab>
      <v-tab @click="searchByOthersCategory('travel')">Travel</v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
    name: 'MenuKategori',
    methods: {
        fetchNews() {
            this.$store.dispatch('fetchList');
        },
        
        searchByCategory(keyWord){
            const searchKey = `top-headlines?category=${keyWord}`;
            this.$store.dispatch('fetchByMenu', searchKey);
        },
        searchByOthersCategory(keyWord){
            const searchKey = `everything?q=${keyWord}`;
            this.$store.dispatch('fetchByMenu', searchKey);
        }
    }
}
</script>

<style>

</style>