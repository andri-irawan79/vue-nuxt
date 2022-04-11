import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      articles: [],
      statusPage: {
        isEmpty: null,
        isError: null,
      },
      sidebar: false,
    },
    getters: {
    },
    mutations: {
      setNews(state, payload) {
        state.articles = payload;
      },
      setStatusEmpty(state, payload) {
        state.statusPage.isEmpty = payload;
      },
      setStatusError(state, payload) {
        state.statusPage.isError = payload;
      },
      setIndex(state, payload) {
        state.index = payload;
      },
      setSidebar(state, payload) {
        state.sidebar = payload;
      },
    },
    actions: {
      fetchList(store) {
        axios
          .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=c0ad48b1da834686bda80c94e73a869f`)
          .then((response) => {
            store.commit("setNews", response.data.articles);
          })
          .catch((error) => {
            store.commit("setStatusError", error);
          });
      },
      fetchByMenu(store, payload) {
        axios
          .get(`https://newsapi.org/v2/everything?q=${payload}&apiKey=c0ad48b1da834686bda80c94e73a869f`)
          .then((response) => {
            store.commit("setNews", response.data.articles);
          })
          .catch((error) => {
            store.commit("setStatusErorr", error);
          });
      },
      changeSidebar(store, payload){
        store.commit('setSidebar', payload);
      },
      changeStatusPageEmpty(store, payload){
        store.commit('setStatusEmpty', payload);
      },
      changeStatusPageError(store, payload){
        store.commit('setStatusError', payload);
      }
    },
    modules: {
    }
  });
}

export default createStore;
