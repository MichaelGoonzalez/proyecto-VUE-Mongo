<template>
    <div id="contenedor" class="container">
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
                    <li class="nav-item">
                            <a class="nav-link" id="consejos-tab" data-bs-toggle="tab" data-bs-target="#consejos"
                                type="button" role="tab" aria-controls="consejos" aria-selected="true">Consejos</a>
                        </li>
                   <!--  <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="dropdown-categorias" data-bs-toggle="dropdown"
                            href="#" role="button" aria-expanded="false">Más categorías</a>
                        <ul class="dropdown-menu" aria-labelledby="dropdown-categorias">
                            <li><a class="dropdown-item" href="#">Opción 1</a></li>
                            <li><a class="dropdown-item" href="#">Opción 2</a></li>
                            <li><a class="dropdown-item" href="#">Opción 3</a></li>
                        </ul>
                    </li> -->
                </ul>
            </section>
        </div>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="todos" role="tabpanel" aria-labelledby="todos-tab">
                <section class="row">
                    <div v-for = "item in articulosArray" :key= "item.id" class="col-12 col-lg-4 mt-5">
                        <div class="card m-auto shadow" style="width: 340px">
                            <img v-bind:src= "item.img" class="card-img-top" alt="Imagen articulo" style="height: 200px">
                            <div class="card-body border-top text-start">
                                <h6 class="card-title color-marca">{{item.clase}}</h6>                                    
                                <h5 class="card-title text-black">{{item.titulo}}</h5>
                                <p class="card-text text-black">
                                    {{item.descripcion}}<a :href = "item.url" class="text-danger">  Leer más...</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="tab-pane fade" id="tutoriales" role="tabpanel" aria-labelledby="tutoriales-tab">
                <section class="row">
                    <div v-for = "item in forTutoriales" :key= "item.id" class="col-12 col-lg-4 mt-5">
                        <div class="card m-auto shadow" style="width: 340px">
                            <img v-bind:src= "item.img" class="card-img-top" alt="Imagen articulo" >
                                <div class="card-body border-top text-start">
                                    <h6 class="card-title color-marca">{{item.clase}}</h6>                                    
                                    <h5 class="card-title text-black">{{item.titulo}}</h5>
                                    <p class="card-text text-black">
                                        {{item.descripcion}}<a :href = "item.url" class="text-danger">  Leer más...</a>
                                    </p>
                                </div>
                        </div>
                    </div>
                </section>
            </div>   
            <div class="tab-pane fade" id="noticias" role="tabpanel" aria-labelledby="noticias-tab">
                <section class="row">
                    <div v-for = "item in forNoticias" :key= "item.id" class="col-12 col-lg-4 mt-5">
                        <div class="card m-auto shadow" style="width: 340px">
                            <img v-bind:src= "item.img" class="card-img-top" alt="Imagen articulo" style="height: 200px">
                                <div class="card-body border-top text-start">
                                    <h6 class="card-title color-marca">{{item.clase}}</h6>                                    
                                    <h5 class="card-title text-black">{{item.titulo}}</h5>
                                    <p class="card-text text-black">
                                        {{item.descripcion}}<a :href = "item.url" class="text-danger">  Leer más...</a>
                                    </p>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="tab-pane fade" id="consejos" role="tabpanel" aria-labelledby="consejos-tab">
                <section class="row">
                    <div v-for = "item in forConsejos" :key= "item.id" class="col-12 col-lg-4 mt-5">
                        <div class="card m-auto shadow" style="width: 340px">
                            <img v-bind:src= "item.img" class="card-img-top" alt="Imagen articulo" style="height: 200px">
                                <div class="card-body border-top text-start">
                                    <h6 class="card-title color-marca">{{item.clase}}</h6>                                    
                                    <h5 class="card-title text-black">{{item.titulo}}</h5>
                                    <p class="card-text text-black">
                                        {{item.descripcion}}<a :href = "item.url" class="text-danger">  Leer más...</a>
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
                    url:"https://www.portafolio.co/innovacion/ferreteros-podran-vender-soat-gracias-con-tuel-553253",
                    img: require('../assets/noticiatul.jpg'),
                    clase: "Noticia",
                    titulo: "Más de 5.000 ferreteros podrán vender Soat usando app TÜL",
                    descripcion: "La plataforma llegó a un acuerdo con AXA Colpatria para que se pudiera prestar ese servicio. Cada año, los propietarios de vehículos automotores en Colombia deben renovar su Seguro Obligatorio de Accidentes de Tránsito (Soat)." 
                    +"  " + "Pensando en cómo seguir facilitando la adquisición de este seguro, la aplicación colombiana TÜL realizó una alianza con AXA Colpatria para que más de 5.000 ferreteros del país puedan vender el Soat digital. De esta manera, además de ofrecer materiales de construcción y herramientas, también incluirán un servicio nuevo e innovador que nunca se había comercializado por este canal."

                },
                {
                    url:"https://www.portafolio.co/economia/infraestructura/plantas-termicas-listas-para-respaldar-el-sistema-electrico-557188",
                    img: require('../assets/termovalle.jpg'),
                    clase: "Noticias",
                    titulo: "Plantas térmicas, listas para respaldar el sistema eléctrico",
                    descripcion: "De los proyectos a corto y mediano plazo, sobresalen las expansiones de Termovalle y Termoyopal." + " "+" Con la misión de servir como respaldo al sistema eléctrico del país y así garantizar la energía en firme, se está poniendo a tono un parque térmico con más de 40 plantas.De acuerdo al registro de la Upme, a las 34 termoeléctricas que ya operan se sumarían 11 centrales cuya entrada en operación está programada hasta finales de 2022. Si el articulo te resulta interesante tienes toda la informacion a continuación." 
                    

                },

                {
                    url: "https://www.larepublica.co/empresas/el-gran-salon-ferretero-contara-con-50-expositores-y-espera-reactivar-esta-industria-3244525",
                    img: require('../assets/ferretero-01.jpg'),
                    clase: "Noticias",
                    titulo: "El Gran Salón Ferretero contará con 50 expositores y espera reactivar esta industria",
                    descripcion: "El evento tendrá una afluencia aproximada de 2.000 personas, apenas por debajo de la cifra presentada en la feria de 2019. Durante el 8 y 9 de octubre se llevará a cabo El Gran Salón ferretero, de forma presencial. Este evento de negocios pretende facilitar un espacio de encuentro entre marcas, distribuidores y profesionales ferreteros." + "" + "Este se llevará a cabo en el centro comercial Mall Plaza NQS de Bogotá, si deseas mas informacion te invitamos a seguir leyendo... "
                    

                },
                {
                    url:"https://www.portafolio.co/economia/consejos-para-ahorrar-y-reducir-el-consumo-de-energia-en-casa-557158",
                    img: require('../assets/ahorro_energia.jpg'),
                    clase: "Consejos",
                    titulo: "Consejos para ahorrar y reducir el consumo de energía en casa",
                    descripcion: "A pesar de que muchos sectores han abierto y la nueva normalidad se abre paso, lo cierto es que el teletrabajo se consolidó durante los meses duros de pandemia. Así las cosas, algunas empresas han optado por modelos de trabajo híbridos, lo que permite a las personas estar mas tiempo en sus hogares.Por este motivo, Enel-Condensa ofrece unas recomendaciones para reducir el costo en sus facturas.Electrodomésticos. Prefiera electrodomésticos con desempeño energético eficiente.Aparatos tecnológicos. Mantenga cargando su celular, tableta o dispositivos lo estrictamente necesario y desconecte el cargador apenas termine de completarse la batería."

                },
                {
                    url:"https://ebani.com.co/wp-content/uploads/2020/10/Mesa-auxiliar-kappa-oscura-Ebani-Colombia-tienda-online-de-decoracion-y-mobiliario-Ferrum.png",
                    img: require('../assets/mesa.jpg'),
                    clase: "Tutorial",
                    titulo: "¿Cómo hacer una mesa auxiliar?",
                    descripcion: "Las mesas auxiliares son indispensables en el hogar porque resultan muy prácticas y aportan estilo. ¡Aprende a hacer una tú mismo!" + "                 "+ " Hacer una mesa auxiliar es una gran idea. Se trata de un mueble funcional y aporta estilo a la decoración. Este tipo de mesas complementan muy bien diversos espacios; permiten reposar objetos como floreros, libros o cualquier otro tipo de elemento decorativo." 
                    
                },
                {
                    url:"https://mejorconsalud.as.com/consejos-utiles-casa-alquiler/",
                    img: require('../assets/tutorial.png'),
                    clase: "Consejos",
                    titulo: "5 consejos útiles si deseas poner tu casa en alquiler",
                    descripcion: "¿Estás pensando en la posibilidad de que tu propiedad genere un beneficio económico? Entendemos que alquilar tu inmueble puede parecer una tarea un tanto compleja, por lo que queremos compartir contigo algunos consejos útiles si deseas poner tu casa en alquiler. Por otro lado, tener una vivienda vacía que solo ocasione gastos tampoco es una buena idea." + "     "+ " En este sentido, cuando alquilas tu casa estás recuperando una inversión y estás dándole a otra persona la oportunidad de acceder a una vivienda rentada."+"  " + "Si tomas todos los recaudos necesarios y te asesoras sobre tarifas, condiciones y demás aspectos legales, el alquiler de tu propiedad puede traerte grandes beneficios."

                },
            ]
        }
    },
    methods: {

    },
    computed:{
        forTutoriales: function(){
            return this.articulosArray.filter((i) => {
                return i.clase === 'Tutorial'
            })
        },
        forNoticias: function(){
            return this.articulosArray.filter((i) => {
                return i.clase === 'Noticias'
            })
        },
        forConsejos: function(){
            return this.articulosArray.filter((i) => {
                return i.clase === 'Consejos'
            })
        },
    }       
}
</script>

<style>
    #contenedor{
        margin: 5%;
    }
</style>