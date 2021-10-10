<template>
    <div class="container">
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
                <div class="tab-pane fade show active" id="todos" role="tabpanel" aria-labelledby="todos-tab">
                    <section class="row">
                        <div v-for = "item in articulosArray" :key= "item.id" class="col-12 col-lg-4 mt-5">
                            <div class="card m-auto shadow" style="width: 340px">
                                <img v-bind:src= "item.img" class="card-img-top" alt="Imagen articulo">
                                <div class="card-body border-top text-start">
                                    <h6 class="card-title color-marca">{{item.clase}}</h6>                                    
                                    <h5 class="card-title text-black">{{item.titulo}}</h5>
                                    <p class="card-text text-black">
                                        {{item.descripcion}}<a href="#" class="text-danger">Leer más...</a>
                                    </p>
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
            articulosArray: [
                {
                    img: require('../assets/noticiatul.jpg'),
                    clase: "Noticia",
                    titulo: "Más de 5.000 ferreteros podrán vender Soat usando app TÜL",
                    descripcion: "La plataforma llegó a un acuerdo con AXA Colpatria para que se pudiera prestar ese servicio. Cada año, los propietarios de vehículos automotores en Colombia deben renovar su Seguro Obligatorio de Accidentes de Tránsito (Soat)." 
                    +"  " + "Pensando en cómo seguir facilitando la adquisición de este seguro, la aplicación colombiana TÜL realizó una alianza con AXA Colpatria para que más de 5.000 ferreteros del país puedan vender el Soat digital. De esta manera, además de ofrecer materiales de construcción y herramientas, también incluirán un servicio nuevo e innovador que nunca se había comercializado por este canal."+" "+ "La alianza entre TÜL y AXA Colpatria, a través de su intermediario de seguros Orangreen Insurance, permitirá a miles de colombianos en las principales ciudades de Colombia adquirir su Soat digital de forma ágil en la ferretería más cercana."+"  "+" Según Andrés Ramírez, gerente de Asuntos Públicos de TÜL, este es un primer gran paso que da la empresa para lograr aumentar y diversificar las ventas de los ferreteros utilizando las ventajas que trae la tecnología." + " " + "Desde de TÜL también anunciaron que, en los próximos meses, el ferretero que tenga la app descargada podrá vender recarga de minutos de celular, alquilar herramientas y andamios y hacer pagos de facturas de servicios públicos. Hay que recordar que TÜL es una 'startup' que nació hace un año con el apoyo de Rappi y su objetivo es digitalizar el mercado de la ferretería."
                    

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
