import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from "vue-router";
import router from "./router"
import VueTouch from "vue-touch";
import VueHtml2Canvas from 'vue-html2canvas';

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(Vuetify);
Vue.use(VueHtml2Canvas);
Vue.use(VueTouch, {name: 'v-touch'});
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    wishes: [],
    name: ""
  },
  getters: {
    getCurrentWishes: state => {
      return state.wishes
    }
  },
  mutations: {
    append (state, wish){
      if(state.wishes.indexOf(wish) === -1) state.wishes.push(wish);
      console.log(state.wishes)
    },
    addName (state, name){
      state.name = name;
    },
    deleteWish(state, wish) {
      let index = state.wishes.indexOf(wish)
      if (index !== -1) state.wishes.splice(index, 1)
      console.log(state.wishes)
    },
    clearAll(state) {
      state.wishes.splice(0, state.wishes.length)
    }
  }
})


Vue.config.productionTip = false
new Vue({
  el: '#app',
  store: store,
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
