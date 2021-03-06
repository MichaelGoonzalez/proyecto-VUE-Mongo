import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios,axios)

axios.defaults.baseURL = 'http://localhost:3000/api';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')