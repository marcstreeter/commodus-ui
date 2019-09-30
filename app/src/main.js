import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
