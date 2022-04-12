<template>
    <v-navigation-drawer 
        color="info" 
        :value="menuValue" 
        stateless
        absolute
        dark
        hide-overlay

    >
        <v-list>
            <v-list-item router exact @click="fetchNews">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    Home
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <div style="cursor: pointer; padding: 2px;">
            <div v-for="artic in menuList" :key="artic.id">
                <div class="px-3 py-3 dark d-flex" @click="searchByMenu(artic.name)">
                    <v-avatar
                        color="warning"
                        size="35"
                    >
                    {{artic.name.charAt(0)}}{{artic.name.charAt(1)}}
                    </v-avatar>
                  <div class="ml-2" style="color: white"><strong>{{artic.name}}</strong></div>
                </div>
            </div>
        </div>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'SidebarMenu',
    computed: {
        menuValue(){
            return this.$store.state.sidebar;
        },
        menuList() {
            return this.$store.state.newsSources;
        },
    },
    methods: {
        searchByMenu(keyWord){
            const searchKey = `top-headlines?sources=${keyWord}`
            this.$store.dispatch('fetchByMenu', searchKey);
        },
        fetchNews() {
            this.$store.dispatch('fetchList');
        },
    },
}
</script>

<style>

</style>