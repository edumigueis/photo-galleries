/*
  Copyright (c) Eduardo Migueis 2020
*/
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueSession from 'vue-session'
import VuePageTransition from 'vue-page-transition'
// tem que vir entre chaves, porque não é default
import { routes } from './routes';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueSession);
Vue.use(VuePageTransition);

window.$ = window.jQuery = require('jquery')

new Vue({

  methods: {
    getUnits: function () {
      location.reload();
      once++;
    }
  },
  activated: function () {
    var once;
    if (once == 0 || once == 1)
      this.getUnits()
  }
});

const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
