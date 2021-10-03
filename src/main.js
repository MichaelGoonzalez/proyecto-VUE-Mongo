import Vue from 'vue'
import App from './App.vue'
/* import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue' */
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
/* import 'bootstrap-vue/dist/bootstrap-vue.css' */

import Home from './components/index.vue'
import Productos from './components/productos.vue'
import Admin from './components/admin.vue'

/* Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons) */
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/productos', component: Productos},
  { path: '/admin', component: Admin}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
