import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment';
import VueMoment from 'vue-moment'

require('moment/locale/es')

moment.locale('es')

Vue.use(VueMoment,{moment})

Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});

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