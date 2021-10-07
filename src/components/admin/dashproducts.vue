<template>
    <div>
        <div class="container-fluid">
            <div class="row  ">
                <div class="col-md-2 barra2">
                    <img class="image" src="/img/logo.png" alt="">
                </div>
                <div class="col-md-10 text-right barra">
                    <ul class="navbar-nav mr-auto">
                        <li>
                            <a href="#" class="px-3 text-light perfil dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-user-circle"></i></a>

                            <div class="dropdown-menu" aria-labelledby="navbar-dropdown">
                                <a class="dropdown-item menuperfil cerrar" href="#"><i class="fas fa-sign-out-alt m-1"></i>Salir
                                </a>
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
                        <a href="#"><i class="fas fa-user-friends"></i><span>Usuarios</span></a>
                        <a href="#"><i class="fas fa-store"></i><span>Productos</span></a>
                        <a href="#"><i class="fas fa-clipboard-list"></i><span>Categorias</span></a>
                    </nav>
                </div>

                <main class="main col">
                    <div class="row justify-content-center align-content-center text-center d-flex">
                        <div class="col-md-6" >
                            <h2> <font size= "15"><b>Crear Producto</b> </font></h2>
                            <form @submit.prevent="agregarArticulo"> 
                                <div class="mb-3">
                                    <label for="producto" class="form-label"> <b> Nombre de producto </b></label>
                                    <input type="text" class="form-control" id="producto" aria-describedby="productoactual" v-model="atributos.nombre">
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="producto" class="form-label"> <b> Categoria </b></label>
                                    <select class="form-select" aria-label="Default select example" required v-model="atributos.categoria">
                                        <option selected>One</option>
                                        <option >Two</option>
                                        <option >Three</option>
                                    </select>
                                    <!-- <input type="text" class="form-control" id="producto" aria-describedby="productoactual"> -->
                                </div>
                                <div class="mb-3">
                                    <label for="codeproduct" class="form-label"> <b>Codigo Producto</b></label>
                                    <input type="text" class="form-control" id="codeproduct" v-model="atributos.codigo">
                                </div>
                                <div class="mb-3">
                                    <label for="precioProducto" class="form-label"> <b>Precio</b></label>
                                    <input type="number" class="form-control" id="precioProducto" v-model="atributos.precio">
                                </div>
                                <div class="mb-3">
                                    <label for="precioProducto" class="form-label"> <b>Cantidad a registrar</b></label>
                                    <input type="number" class="form-control" id="precioProducto" v-model="atributos.cantidad">
                                </div>
                                <div class="mb-3">
                                    <label for="precioProducto" class="form-label"> <b>Fecha de registro</b></label>
                                    <input type="date" class="form-control" id="precioProducto" v-model="atributos.fecha">
                                </div>
                                <div class="mb-3">
                                        <label for="articulodescripcion" class="form-label"> <b>Descripcion Articulo</b></label>
                                        <textarea class="form-control" id="articulodescripcion" rows="3" v-model="atributos.descripcion"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Crear Producto</button>
                            </form>
                        </div>

                        <div class="col-md-6">
                            <h2><font size= "15"><b>Lista de Productos</b> </font></h2>
                            <form>
                                <div class="mb-3">
                                <label for="producto" class="form-label" > <b>Nombre de producto</b></label>
                                <input type="text" class="form-control" id="producto" aria-describedby="productoactual">
                                <div id="emailHelp" class="form-text"></div>
                                </div>
                                <div class="mb-3">
                                <label for="codeproduct" class="form-label"> <b>Codigo Producto </b></label>
                                <input type="text" class="form-control" id="codeproduct">
                                </div>
                                <br>
                                    <button type="submit" class="btn btn-primary">Buscar Producto</button>
                                </form>
                                <br> 
                                <div class="mb-3">
                                    <div class="table-responsive">
                                        <table class="table table-striped table-hover ">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th>Codigo</th>
                                                    <th>Nombre Producto</th>
                                                    <th>Stock</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>0001</td>
                                                    <td>Taladro</td>
                                                    <td>5</td>
                                                </tr>
                                                <tr>
                                                    <td>0002</td>
                                                    <td>Pulidora</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>0235</td>
                                                    <td>Llave Lavamanos</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0237</td>
                                                    <td>Llave lavaplatos de mesa flexible</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0244</td>
                                                    <td>Palustre numero 6 Lufkin</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>0305</td>
                                                    <td>Pistola Manguera 4 Chorros</td>
                                                    <td>8</td>
                                                </tr>
                                                <tr>
                                                    <td>0254</td>
                                                    <td>Plafon Plastico</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>0259</td>
                                                    <td>Rodillo De felpa 9"</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0219</td>
                                                    <td>Interruptor doble</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>0220</td>
                                                    <td>interruptor sencillo</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0295</td>
                                                    <td>Toma-Corriente Doble</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0202</td>
                                                    <td>Espatula Inoxidable</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0213</td>
                                                    <td>Grifo Satinado Dorado</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0229</td>
                                                    <td>Llana Dentada</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0218</td>
                                                    <td>Interruptor + Toma</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0191</td>
                                                    <td>Disco de Corte Abracol 4 1/2</td>
                                                    <td>30</td>
                                                </tr>
                                                <tr>
                                                    <td>0230</td>
                                                    <td>Llana Lisa Mango Madera </td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0239</td>
                                                    <td>Flexometro 5 MTS</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0238</td>
                                                    <td>Flexometro 3 MTS</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0242</td>
                                                    <td>Nivel Aluminio 12" Uduke</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>0267</td>
                                                    <td>Sifon Lavamanos Desagüe</td>
                                                    <td>15</td>
                                                </tr>
                                            </tbody>
                                            

                                        </table>    
                                    </div>
                                </div>
                        </div>                   
                    </div>    
                </main>

            </div>
        </div>
    </div>
</template>


<style>
    body {
        background: #f1f1f1;
    }

    /* Para eliminar despues esta seccion, solo es para que se vean las letras - Arreglar */
    b{
        color: black;
    }
    /* ------------------------------------------------------------------- */

    .image {
        width: 179px;
    }

    .barra {
        background: #f4f4f4;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 5px;
        margin: 0;
    }

    .barra2 {
        background: #000;
        padding-top: 3px;
        padding-bottom: 0px;
        padding-left: 5px;
        margin: 0;
    }


    .dropdown-menu {
        margin: 5px;
        background: #252525;
        padding-left: 0px;
        padding-right: 0px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.568);
    }

    .menuperfil {
        color: white;
    }

    .cerrar:hover {
        background-color: #000;
        color: orange;
    }

    .far {
        font-size: 30px;
        color: orange;
    }

    .far:hover {
        color: black;
    }


    /*BARRA LATERAL*/

    .barra-lateral {
        background: #252525;
        color: #fff;
        min-width: 160px;
        min-height: 100vh;
        padding: 0px;
    }

    .barra-lateral a {
        color: #fff;
        font-size: 25px;
    }


    /*ESTILOS MENU*/

    .barra-lateral .menu a {
        display: block;
        padding: 10px;
        font-family: Roboto, sans-serif;
        font-weight: 500;

    }

    .barra-lateral .menu a:hover {
        color: #f6821f;
        text-decoration: none;
    }

    .active {
        background: #003C5D;
    }

    .barra-lateral .menu {
        border-top: 0px;
        margin-left: 20px;
    }

    .barra-lateral .menu a i {
        margin-right: 25px;
    }


    /*MAIN*/

    .main {
        padding-top: 50px;
        padding-left: 90px;
        padding-right: 90px;
        background: #fff;
    }

    /*crear usuario*/
    .contenedor h1 {
        color: #f6821f;
        font-size: 2.5rem;
    }

    .contenedor .element {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .contenedor .element .label {
        margin-bottom: 0px;
        text-align: left;
        color: black;
    }

    .contenedor .element input {
        width: 101%;
        padding: 3px;
        border-radius: 8px;
        border: 1.5px #cdc solid;
    }
    .btn{
        color: #cdc;
        background: #4160af;
        border-radius: 15px;
    }

    /*mediaquerys*/

    @media screen and (max-width:1300px) {
        .barra-lateral {
            min-width: auto;
        }

        .barra-lateral .menu a span {
            display: none;
        }

        .barra-lateral .menu a i {
            margin: 0;
        }

        .barra {
            min-width: auto;
        }

        .dropdown-menu {
            margin: 20px -79px 0px;
        }
    }

    @media screen and (max-width:575px) {
        .barra-lateral {
            min-height: auto;
        }

        .barra-lateral .menu a {
            display: inline-block;
            border-bottom: none;
        }

        .dropdown-menu {
            margin: 20px -78px 0px;
        }

        .logocppe {
            width: 100%;
        }

        body {
            background: #D3D3D3;
            font-size: 16px;
            overflow: visible;
        }
    }


    @media screen and (max-width:575px) {
        .barra-lateral {
            height: auto;
        }

        .barra-lateral.menu a {
            display: inline-block;
            border-bottom: none;
        }

        .dropdown-menu {
            margin: 20px -78 0px;
        }

        body {
            font-size: 16px;
            overflow: visible;
        }
    }
</style>

<script>
export default {
    data(){
        return{
            atributos: {
                nombre: "",
                categoria: "",
                codigo: "",
                precio: "",
                cantidad: "",
                fecha: "",
                descripcion: ""
            }
        }
    },
    methods:{
        agregarArticulo(){
            console.log(this.atributos)
        }
    }
}
</script>