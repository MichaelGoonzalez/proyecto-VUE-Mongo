<template>
  <div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 barra2">
                <img class="image" src="/img/logo.png" alt="">
            </div>
            <div class="col-md-10 text-right barra">
                <ul class="navbar-nav mr-auto">
                    <li>
                        <a href="#" class="px-3 text-light perfil dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-user-circle"></i></a>

                        <div class="dropdown-menu" aria-labelledby="navbar-dropdown">
                            <a class="dropdown-item menuperfil cerrar" href="#"><i class="fas fa-exchange-alt"></i> Cambiar Contraseña</a>
                            <a class="dropdown-item menuperfil cerrar" href="#"><i class="fas fa-sign-out-alt m-1"></i>cerrar sesión</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div> 

    <div class="container-fluid">
        <div class="row">
            <div class="barra-lateral col-md-2 col-sm-auto">
                <nav class="menu d-flex d-sm-block justify-content-center align-items-center flex-wrap" >
                    <router-link to="/dashusers"><i class="fas fa-user-friends"></i><span>Usuarios</span></router-link>
                    <router-link to="/dashproducts"><i class="fas fa-store"></i><span>Productos</span></router-link>
                    <router-link to="/dashcategories"><i class="fas fa-clipboard-list"></i><span>Categorias</span></router-link>
                </nav>
            </div>
            <main class="main col">
                <div class="row justify-content-center align-content-center text-center d-flex">
                    <div class="col-md-6">
                        <form action="crear-usuarios">
                            <div class="contenedor">
                                <h1>Crear usuario</h1>
                                <div class="element">
                                    <div class="label"><label for="name">Nombre</label></div>
                                    <input id="name" type="text" placeholder="Escriba el nombre de usuario"><br/>
                                </div>
                                <div class="element">
                                    <div class="label"><label for="email">Correo</label></div>
                                    <input id="email" type="email" placeholder="Escriba el correo electrónico"><br/>
                                </div>
                                <input class="btn" type="submit" value="Crear usuario"/>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        CONTENIDO2
                    </div>
                </div>

            </main>
        </div>
    </div>
  </div>
</template>