<template>
    <main class="container my-5">
            <div class="row">
                <section class="col-md-10 mx-auto">
                    <ul class="nav nav-tabs nav-tabsp nav-fill" id="productos" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="todos-tab" data-bs-toggle="tab" data-bs-target="#todos"
                                type="button" role="tab" aria-controls="todos" aria-selected="true">Todos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="tutoriales-tab" data-bs-toggle="tab" data-bs-target="#tutoriales"
                                type="button" role="tab" aria-controls="tutoriales" aria-selected="true">Tutoriales</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="noticias-tab" data-bs-toggle="tab" data-bs-target="#noticias"
                                type="button" role="tab" aria-controls="noticias" aria-selected="true">Noticias</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="dropdown-categorias" data-bs-toggle="dropdown"
                                href="#" role="button" aria-expanded="false">Más categorías</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown-categorias">
                                <li><a class="dropdown-item" href="#">Opción 1</a></li>
                                <li><a class="dropdown-item" href="#">Opción 2</a></li>
                                <li><a class="dropdown-item" href="#">Opción 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
            <div class="tab-content">
                <div id="todos" role="tabpanel" aria-labelledby="todos-tab"> <!-- class="tab-pane fade show active" -->
                    <section class="row">
                        <div v-for = "item in articulosArray" :key= "item.id" class="col-6 mt-5">
                            <div class="card m-auto shadow" style="width: 400px;">
                                <img v-bind:src= "item.img" class="card-img-top" alt="Imagen articulo">
                                <div class="card-body border-top text-start">
                                    <h6 class="card-title color-marca">{{item.clase}}</h6>                                    
                                    <h5 class="card-title text-black">{{item.titulo}}</h5>
                                    <p class="card-text text-black">
                                        {{item.descripcion}}<a href="#" class="text-danger">Leer más ...</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        </div>
    </main>
</template>

<script>
    export default {
    data() {
        return {
            articulosArray: [
                {
                    img: require('../assets/tutorial.png'),
                    clase: "Tutorial",
                    titulo: "¿Cómo ajustar los muebles adecuadamente?",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum qui vero dignissimos" 
                    +"provident, fuga cum illum eos voluptate rerum, est ipsam eum nesciunt? Sequi explicabo ipsam illum"
                    +"laborum culpa!"

                },
                {
                    img: require('../assets/tutorial.png'),
                    clase: "Tutorial",
                    titulo: "¿Cómo ajustar los muebles adecuadamente?",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum qui vero dignissimos" 
                    +"provident, fuga cum illum eos voluptate rerum, est ipsam eum nesciunt? Sequi explicabo ipsam illum"
                    +"laborum culpa!"

                },
                {
                    img: require('../assets/tutorial.png'),
                    clase: "Tutorial",
                    titulo: "¿Cómo ajustar los muebles adecuadamente?",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum qui vero dignissimos" 
                    +"provident, fuga cum illum eos voluptate rerum, est ipsam eum nesciunt? Sequi explicabo ipsam illum"
                    +"laborum culpa!"

                },
                {
                    img: require('../assets/tutorial.png'),
                    clase: "Tutorial",
                    titulo: "¿Cómo ajustar los muebles adecuadamente?",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum qui vero dignissimos" 
                    +"provident, fuga cum illum eos voluptate rerum, est ipsam eum nesciunt? Sequi explicabo ipsam illum"
                    +"laborum culpa!"

                },
                {
                    img: require('../assets/tutorial.png'),
                    clase: "Tutorial",
                    titulo: "¿Cómo ajustar los muebles adecuadamente?",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum qui vero dignissimos" 
                    +"provident, fuga cum illum eos voluptate rerum, est ipsam eum nesciunt? Sequi explicabo ipsam illum"
                    +"laborum culpa!"

                },
                {
                    img: require('../assets/tutorial.png'),
                    clase: "Tutorial",
                    titulo: "¿Cómo ajustar los muebles adecuadamente?",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum qui vero dignissimos" 
                    +"provident, fuga cum illum eos voluptate rerum, est ipsam eum nesciunt? Sequi explicabo ipsam illum"
                    +"laborum culpa!"

                },
            ]
        }
    },
    methods: {

    },
    }
</script>
