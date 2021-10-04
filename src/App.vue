<template>
<div id="app">
    <b-navbar toggleable="md" type="dark" variant="black">
        <b-container>
            <b-navbar-brand href="../components/home.vue">
                <img src="../src/assets/logo.png" alt="" width="141" height="40" class="d-inline-block align-text-top" />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav-collapse">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="{name: '/'}">Home</b-nav-item>
                    <b-nav-item :to="{name: 'nosotros'}">Nosotros</b-nav-item>
                    <b-nav-item :to="{name: 'productos'}">Productos</b-nav-item>
                    <b-nav-item :to="{name: 'articulos'}">Artículos</b-nav-item>
                    <b-nav-item :to="{name: 'contacto'}">Contacto</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
    <router-view></router-view>
    <footer class="footer mt-auto text-white bg-black p-3">
        <div class="container-fluid">
            <div class="d-lg-flex justify-content-lg-center">
                <div class="">
                    {{obtenerAño()}}
                    &copy;  Carvajal Materiales | Todos los derechos reservados.
                    <div class="mx-4">
                        <a class="text-white" href="https://www.facebook.com/Carvajalmateriales" target="_blank"><i class="fab fa-facebook"></i></a>
                        <a class="text-white" href="https://www.instagram.com/carvajalmateriales/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a class="text-white" href="https://api.whatsapp.com/send?phone=%2B573003659340&fbclid=IwAR1Fs2TmR-vYJG0c8c1zhm4XzCFEJjWr2zbsaMjivUyG2SCrSoFVYx49qwA" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    </div>
                    <a class="text-white text-decoration-none" href="login.vue">Administrador</a>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
    export default {
        name: 'App',
        data(){
        return {
            año: ""
        }
        },
        methods: {
            obtenerAño(){
                return this.año = new Date().getFullYear();
            }
        }
    }
</script>