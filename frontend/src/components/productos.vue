<template>
        <div class="container mx-auto mt-5 mb-5">
            <div class="row">
                <section class="col-md-10 mx-auto">
                    <ul class="nav nav-tabs nav-tabsp nav-fill" id="productos" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="todos-tab" data-bs-toggle="tab" data-bs-target="#todos"
                                type="button" role="tab" aria-controls="todos" aria-selected="true">Todos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="materiales-tab" data-bs-toggle="tab" data-bs-target="#materiales"
                                type="button" role="tab" aria-controls="materiales" aria-selected="true">Hogar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="electricos-tab" data-bs-toggle="tab" data-bs-target="#electricos"
                                type="button" role="tab" aria-controls="electricos" aria-selected="true">Eléctricos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="maderas-tab" data-bs-toggle="tab" data-bs-target="#maderas"
                                type="button" role="tab" aria-controls="maderas" aria-selected="true">Herramientas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="tuberias-tab" data-bs-toggle="tab" data-bs-target="#tuberias"
                                type="button" role="tab" aria-controls="tuberias" aria-selected="true">Tuberías</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="otros-tab" data-bs-toggle="tab" data-bs-target="#otros"
                                type="button" role="tab" aria-controls="otros" aria-selected="true">Otros</a>
                        </li>
                        <li class="nav-item fontsearch" style="margin-left: 4%">
                                <i class="fas fa-search"></i>
                                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" v-model= "buscarProducto">
                        </li>
                        <li class="nav-item">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#cotizar" id="cart-btn">
                                <i class="material-icons" id="cart">shopping_cart</i></button>
                        </li>
                    </ul>
                    <div class="modal fade" tabindex="-1" id="cotizar" aria-hidden="true" aria-labelledby="cotizacion">
                        <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content text-dark">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="cotizacion">Cotización</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="background-color: white">
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <table class="table table-hover">
                                            <thead class="table-light" id="thead">
                                                <tr>
                                                    <th>Producto</th>
                                                    <th class="cantidad">Cantidad</th>
                                                    <th>Costo</th>
                                                    <th></th>
                                                </tr>  
                                            </thead>
                                            <tbody>
                                                <tr v-for= "(item,index) in carritoCompras" :key= "index">
                                                    <td>{{item.nombre}}</td>
                                                    <td>
                                                        <button v-bind:disabled= "item.cantidadCarrito == 1" @click= "reducirCantidadCarrito(index)"><i class="fas fa-minus hvr-push" style="padding-right: 12px"></i></button>{{item.cantidadCarrito}}<button v-bind:disabled = "item.cantidadCarrito == item.cantidad" @click= "incrementarCantidadCarrito(index)"><i class="fas fa-plus hvr-push" style="padding-left: 12px"></i></button>
                                                    </td>
                                                    <td>{{item.precio}}</td>
                                                    <td>
                                                        <button @click= "eliminarCotizacion(index)"><i class="fas fa-trash-alt hvr-push"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot style="border-bottom:hidden">
                                                <tr  v-if="carritoCompras.length !==0">
                                                    <td></td>
                                                    <td style="font-weight: bolder">Total</td>
                                                    <td>{{totalCotizacion()}}</td>
                                                </tr>
                                                <tr v-else>
                                                    <td></td>
                                                    <td>No tienes productos en el carrito</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn2">Guardar</button>
                                        <button type="button" class="btn btn-secondary " @click= "vaciarCarrito()">Cancelar</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="todos" role="tabpanel" aria-labelledby="todos-tab">
                    <section class="row">
                        <div v-for= "item in filtrarArticulos" :key= "item.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                            <div class="card m-auto shadow" style="width: 200px;">
                                <button type="button" class="tags" gloss="Añadir a cotización" @click="agregarCotizacion(item._id)"><i class="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                <img v-bind:src= "item.url" class="card-img-top" alt="Imagen producto" id="imagenes-producto">
                                <div class="card-body border-top text-start">
                                    <h5 class="card-title color-marca">{{item.nombre}}</h5>
                                    <p class="card-text text-black review__item__text">
                                        {{item.descripcion}}
                                    </p>
                                    <h5 class="card-title text-black">{{item.precio}}</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="tab-pane fade" id="materiales" role="tabpanel" aria-labelledby="materiales-tab">
                    <section class="row">
                        <div v-for= "item in forHogar" :key= "item.id"  class="col-12 col-md-4 col-lg-3 mt-5">
                            <div  class="card m-auto shadow" style="width: 200px;">
                                <button type="button" class="tags" gloss="Añadir a cotización" @click="agregarCotizacion(item._id)"><i class="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                <img v-bind:src= "item.url" class="card-img-top" alt="Imagen producto" id="imagenes-producto">
                                <div class="card-body border-top text-start">
                                    <h5 class="card-title color-marca">{{item.nombre}}</h5>
                                    <p class="card-text text-black review__item__text">
                                        {{item.descripcion}}
                                    </p>
                                    <h5 class="card-title text-black">{{item.precio}}</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="tab-pane fade" id="electricos" role="tabpanel" aria-labelledby="electricos-tab">
                    <section class="row">
                        <div v-for= "item in forElectricos" :key= "item.id1" class="col-12 col-md-4 col-lg-3 mt-5">
                            <div class="card m-auto shadow" style="width: 200px;">
                                <button type="button" class="tags" gloss="Añadir a cotización" @click="agregarCotizacion(item._id)"><i class="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                <img v-bind:src= "item.url" class="card-img-top" alt="Imagen producto" id="imagenes-producto"> 
                                <div class="card-body border-top text-start">
                                    <h5 class="card-title color-marca">{{item.nombre}}</h5>
                                    <p maxlength="10" class="card-text text-black review__item__text">
                                        {{item.descripcion}}
                                    </p>
                                    <h5 class="card-title text-black review__item__text">{{item.precio}}</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="tab-pane fade" id="maderas" role="tabpanel" aria-labelledby="maderas-tab">
                    <section class="row">
                        <div v-for= "item in forHerramientas" :key= "item.id3" class="col-12 col-md-4 col-lg-3 mt-5">
                            <div class="card m-auto shadow" style="width: 200px;">
                                <button type="button" class="tags" gloss="Añadir a cotización" @click="agregarCotizacion(item._id)"><i class="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                <img v-bind:src= "item.url" class="card-img-top" alt="Imagen producto" id="imagenes-producto">
                                <div class="card-body border-top text-start">
                                    <h5 class="card-title color-marca">{{item.nombre}}</h5>
                                    <p class="card-text text-black review__item__text">
                                        {{item.descripcion}}
                                    </p>
                                    <h5 class="card-title text-black">{{item.precio}}</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="tab-pane fade" id="tuberias" role="tabpanel" aria-labelledby="tuberias-tab">
                    <section class="row">
                        <div v-for= "item in forTuberias" :key= "item.id3" class="col-12 col-md-4 col-lg-3 mt-5">
                            <div class="card m-auto shadow" style="width: 200px;">
                                <button type="button" class="tags" gloss="Añadir a cotización" @click="agregarCotizacion(item._id)"><i class="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                <img v-bind:src= "item.url" class="card-img-top" alt="Imagen producto" id="imagenes-producto">
                                <div class="card-body border-top text-start">
                                    <h5 class="card-title color-marca">{{item.nombre}}</h5>
                                    <p class="card-text text-black review__item__text">
                                        {{item.descripcion}}
                                    </p>
                                    <h5 class="card-title text-black">{{item.precio}}</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="tab-pane fade" id="otros" role="tabpanel" aria-labelledby="otros-tab">
                    <section class="row">
                        <div v-for= "item in forOtros" :key= "item.id3" class="col-12 col-md-4 col-lg-3 mt-5">
                            <div class="card m-auto shadow" style="width: 200px;">
                                <button type="button" class="tags" gloss="Añadir a cotización" @click="agregarCotizacion(item._id)"><i class="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                <img v-bind:src= "item.url" class="card-img-top" alt="Imagen producto" id="imagenes-producto">
                                <div class="card-body border-top text-start">
                                    <h6 class="card-title color-marca">{{item.nombre}}</h6>
                                    <p class="card-text text-black review__item__text">
                                        {{item.descripcion}}
                                    </p>
                                    <h5 class="card-title text-black">{{item.precio}}</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                articulosTabla: [],
                carritoCompras: [],
                buscarProducto: ""
            }
        },
        created(){
            this.listarArticulos();
            let llenarCarrito = JSON.parse(localStorage.getItem("carritoCompras"))

            if (llenarCarrito !== null) {
                this.carritoCompras = llenarCarrito;
            }else{
                this.carritoCompras = []
            }
        },
        methods: {
            listarArticulos(){
                this.axios.get('/listar-articulos')
                .then((response)=>{
                    this.articulosTabla = response.data;
                })
                .catch(e=>{
                console.log(e.response);
                })
            },
            agregarCotizacion(id){
                this.axios.get(`/buscar-articulo/${id}`)
                .then(res=>{
                    res.data.cantidadCarrito = 1;
                    res.data.cantidad = parseInt(res.data.cantidad)
                    this.carritoCompras.unshift(res.data)
                    localStorage.setItem("carritoCompras",JSON.stringify(this.carritoCompras));
                })
                .catch(e=>{
                    console.log(e.response);
                })
            },
            incrementarCantidadCarrito(index){
                this.carritoCompras[index].cantidadCarrito += 1;
                localStorage.setItem("carritoCompras",JSON.stringify(this.carritoCompras));
            },
            reducirCantidadCarrito(index){
                this.carritoCompras[index].cantidadCarrito -= 1;
                localStorage.setItem("carritoCompras",JSON.stringify(this.carritoCompras));
            },
            eliminarCotizacion(index){
                this.carritoCompras.splice(index,1)
                localStorage.setItem("carritoCompras",JSON.stringify(this.carritoCompras));
            },
            totalCotizacion(){
                let a = 0;
                let b;
                this.carritoCompras.forEach(element => {
                    b = element.precio
                    b = b.replace("$","")
                    b = b.replace(",","")
                    a += parseInt(b) * element.cantidadCarrito
                });
                return new Intl.NumberFormat('es-MX').format(a);
            },
            vaciarCarrito(){
                this.carritoCompras = [];
                localStorage.setItem("carritoCompras",JSON.stringify(this.carritoCompras));
            }
        },
        computed:{
            filtrarArticulos: function(){
                return this.articulosTabla.filter((item)=>{
                    return item.nombre.toUpperCase().match(this.buscarProducto.toUpperCase());
                })
            },
            forHogar: function(){
                return this.articulosTabla.filter((i) => {
                    if(i.categoria === 'Hogar'){
                        return i.nombre.toUpperCase().match(this.buscarProducto.toUpperCase());
                    }
                })
            },
            forElectricos: function(){
                return this.articulosTabla.filter((i) => {
                    if(i.categoria === 'Eléctricos'){
                        return i.nombre.toUpperCase().match(this.buscarProducto.toUpperCase());
                    }
                })
            },
            forHerramientas: function(){
                return this.articulosTabla.filter((i) => {
                    if(i.categoria === 'Herramientas'){
                        return i.nombre.toUpperCase().match(this.buscarProducto.toUpperCase());
                    }
                })
            },
            forTuberias: function(){
                return this.articulosTabla.filter((i) => {
                    if(i.categoria === 'Tuberia'){
                        return i.nombre.toUpperCase().match(this.buscarProducto.toUpperCase());
                    }
                })
            },
            forOtros: function(){
                return this.articulosTabla.filter((i) => {
                    if(i.categoria === 'Otros'){
                        return i.nombre.toUpperCase().match(this.buscarProducto.toUpperCase());
                    }
                })
            }
            
        },
        mounted() {  
            document.title = "Productos";  
        } 
    }
</script>

<style>
    .review__item__text{
        cursor: pointer;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        overflow: hidden;
    }
    .review__item__text:hover{
        cursor: default;
        display: block;
    }
    #imagenes-producto{
        width: 200px;
        height: 200px;
    }
    #cart{
        color:#f6821f;
        font-size: 2em;
        margin-left: 3px;
    }
    #cart{
    transition: 0.4s all
    }

    #cart:hover{
    transform: scale(1.4)
    }
    button{
        border: none;
        padding: 0%;
        margin: 0%;
        color: #f6821f;
        background-color: transparent;

    }
    .modal-header{
        background: #000;
        color: #fff;
    }
    .btn-close{
        color:#fff;
    }
    .btn2{
        background: #f6821f;
        color: #fff;
        display: inline-block;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .btn2:hover{
        color: #fff;
        background-color: #fa7603;
        border-color: #fa7603;
    }
    .fas{
        color:#f6821f;
    }
    .cantidad{
        min-width: 90px;
    }
    #plus{
        position:absolute;
        right: 0%;
        font-size: 1.5em;
    }
</style>
