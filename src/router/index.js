import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/index.vue'
import Nosotros from '../components/nosotros.vue'
import Productos from '../components/productos.vue'
import Articulos from "../components/articulos.vue"
import Contacto from "../components/contacto.vue"
import Login from '../components/login.vue'
import Users from '../components/admin/dashusers.vue'
import DashProducts from '../components/admin/dashproducts.vue'
import Categorias from '../components/admin/dashcategories.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/nosotros', component: Nosotros},
    { path: '/productos', component: Productos},
    { path: '/articulos', component: Articulos},
    { path: '/contacto', component: Contacto},
    { path: '/login', component: Login},
    { path: '/dashusers', component: Users},
    { path: '/dashproducts', component: DashProducts},
    { path: '/dashcategories', component: Categorias}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router