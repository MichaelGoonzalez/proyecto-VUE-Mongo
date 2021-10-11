<template>
        <div id= "contenedor" class="container">
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
                        <li class="nav-item dropdown">
                            <!-- <a class="nav-link dropdown-toggle" id="dropdown-categorias" data-bs-toggle="dropdown"
                                href="#" role="button" aria-expanded="false">Más categorías</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown-categorias">
                                <li><a class="dropdown-item" href="#">Opción 1</a></li>
                                <li><a class="dropdown-item" href="#">Opción 2</a></li>
                                <li><a class="dropdown-item" href="#">Opción 3</a></li>
                            </ul> -->
                            <a class="nav-link" id="otros-tab" data-bs-toggle="tab" data-bs-target="#otros"
                                type="button" role="tab" aria-controls="otros" aria-selected="true">Otros</a>
                        </li>
                        <li class="nav-item">
                            <form class="d-flex justify-content-end mx-auto">
                                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                                <!-- <button class="btn btn-outline-success" type="submit">Buscar</button> -->
                            </form>
                        </li>
                    </ul>
                </section>
            </div>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="todos" role="tabpanel" aria-labelledby="todos-tab">
                    <section class="row">
                        <div v-for= "item in articulosTabla" :key= "item.id" class="col-12 col-md-4 col-lg-3 mt-5">
                            <div class="card m-auto shadow" style="width: 200px;">
                                <img v-bind:src= "item.url" class="card-img-top" alt="Imagen producto" width="200px" height="200px" >
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
                                <img v-bind:src= "item.url" class="card-img-top" alt="Imagen producto">
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
                                <img v-bind:src= "item.url" class="card-img-top" alt="Imagen producto">
                                <div class="card-body border-top text-start">
                                    <h5 class="card-title color-marca">{{item.nombre}}</h5>
                                    <p maxlength="10" class="card-text text-black">
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
                                <img v-bind:src= "item.url" class="card-img-top" alt="Imagen producto">
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
                                <img v-bind:src= "item.url" class="card-img-top" alt="Imagen producto">
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
            }
        },
        created(){
            this.listarArticulos();
        },
        methods: {
                listarArticulos(){
                this.axios.get('/listar-articulos')
                    .then((response)=>{
                        this.articulosTabla = response.data;
                        console.log(this.articulosTabla)
                    })
                    .catch(e=>{
                    console.log(e.response);
                })
            } 
        },
        computed:{
            forHogar: function(){
                return this.articulosTabla.filter(i => i.categoria === 'Hogar')
            },
            forElectricos: function(){
                return this.articulosTabla.filter(i => i.categoria === 'Electricos')
            },
            forHerramientas: function(){
                return this.articulosTabla.filter(i => i.categoria === 'Herramientas')
            },
            forOtros: function(){
                return this.articulosTabla.filter(i => i.categoria === 'Otros')
            }
            
        }
    }
</script>

<style>
    #contenedor{
        margin: 5%;
    }
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
</style>
