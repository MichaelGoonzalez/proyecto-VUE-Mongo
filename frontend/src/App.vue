<template>
    <div class="d-flex w-100 h-100 mx-auto flex-column">
        <header class="mb-auto">
            <nav class="navbar navbar-expand-lg navbar-dark bg-black">
                <div class="container" style="margin-left:50px">
                    <router-link to="/" class="navbar-brand mx-xs-0 mx-sm-4 mx-lg-5">
                        <img src="../src/assets/logo.png" alt="" width="150" height="40" class="d-inline-block align-text-top" />
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div class="d-flex">
                            <ul id="nav" class="navbar-nav nav-masthead me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link" aria-current="page" exact-active-class="active color-marca">Inicio</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/nosotros" class="nav-link" active-class="active">Nosotros</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/productos" class="nav-link" active-class="active">Productos</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/articulos" class="nav-link" active-class="active">Artículos</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/contacto" class="nav-link" active-class="active">Contacto</router-link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <router-view></router-view>

        <footer class="footer mt-auto text-white bg-black p-3">
                <div class="container-fluid">
                    <div class="d-lg-flex justify-content-lg-center">
                        <div class=" ">
                            {{año}}
                            &copy;  Carvajal Materiales | Todos los derechos reservados.
                        </div>
                        <div id="redes-sociales" class="mx-4">
                            <a style="margin-left:6px" class="text-white" href="https://www.facebook.com/Carvajalmateriales" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a style="margin-left:6px" class="text-white" href="https://www.instagram.com/carvajalmateriales/" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a style="margin-left:6px" class="text-white" href="https://api.whatsapp.com/send?phone=%2B573003659340&fbclid=IwAR1Fs2TmR-vYJG0c8c1zhm4XzCFEJjWr2zbsaMjivUyG2SCrSoFVYx49qwA" target="_blank"><i class="fab fa-whatsapp"></i></a>
                        </div>
                        <div class="">
                            <router-link to="/login" class="admin text-white text-decoration-none hvr-bounce-in">Administrador</router-link>
                        </div>
                    </div>
                </div>
        </footer>
    </div>
</template>

<style>
    
    #nav a.router-link-exact-active {
        color: #f6821f;
    }
    .admin{
        padding: 0px;
        border-bottom: 3px #f6821f solid;
    }

</style>

<script>
    export default {
        name: 'App',
        data(){
            return {
                año: new Date().getFullYear()
            }
        },
        
    }
</script>