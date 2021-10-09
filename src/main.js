import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
/* import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'  */

/* import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'  */

/* Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons) */

Vue.config.productionTip = false
Vue.use(VueAxios,axios)

axios.defaults.baseURL = 'http://localhost:3000/api';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')