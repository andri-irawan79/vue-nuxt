<template>
    
  <v-card flat class="mb-3 mx-auto">
      <h1 class="text-center mb-3">BERITA.COM</h1>
    <v-tabs
      background-color="white"
      center-active
      light
    >
      <v-tab @click="fetchNews()">Hot Topik</v-tab>
      <v-tab @click="searchByCategory('ekonomi')">Ekonomi</v-tab>
      <v-tab @click="searchByCategory('perbankan')">Perbankan</v-tab>
      <v-tab @click="searchByCategory('bisnis')">Bisnis</v-tab>
      <v-tab @click="searchByCategory('dunia')">Dunia</v-tab>
      <v-tab @click="searchByCategory('histori')">Histori</v-tab>
      <v-tab @click="searchByCategory('teknologi')">Teknologi</v-tab>
      <v-tab @click="searchByCategory('artis')">Artis</v-tab>
      <v-tab @click="searchByCategory('video')">Video</v-tab>
      <v-tab @click="searchByCategory('style')">Style</v-tab>
      <v-tab @click="searchByCategory('fashion')">Fashion</v-tab>
      <v-tab @click="searchByCategory('kesehatan')">Kesehatan</v-tab>
      <v-tab @click="searchByCategory('otomotif')">Otomotif</v-tab>
      <v-tab @click="searchByCategory('properti')">Properti</v-tab>
      <v-tab @click="searchByCategory('olahraga')">Sport</v-tab>
      <v-tab @click="searchByCategory('sepak bola')">Sepak Bola</v-tab>
      <v-tab @click="searchByCategory('travel')">Travel</v-tab>
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
            this.$store.dispatch('fetchByMenu', keyWord);
        }
    }
}
</script>

<style>

</style>