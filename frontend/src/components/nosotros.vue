
<template>
        <div class="container mx-auto mt-5 mb-5">
            <section class="row mb-5 .bg-dark">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">

                            <video width="1000" height="250" autoplay muted loop id="myVideo">
                                <source src="../assets/video.mp4" type="video/mp4">
                                <p>Su navegador no soporta video HTML5. Aquí hay un <a href="rabbit320.mp4">enlace al video</a>.</p>
                            </video>
                        </div>
                    </div>
                </div>
            </section>

                <section class="row d-flex justify-content-evenly text-black ">   
                        <div class="col-10 col-md-5 my-auto card text-start" >
                            <div class="card-body">
                                <h1 class="color-marca card-title">¿Quiénes somos?</h1>
                                <p class="lead card-text">
                                    Somos una empresa dedicada a la distribución de productos eléctricos y de ferretería a los diferentes municipios 
                                    del Valle del Cauca, mediante el innovador y eficiente servicio; generando progreso y estabilidad a nuestros 
                                    colaboradores, ya que ellos hacen posible la existencia de nuestra empresa y  siendo así un aliado estratégico de 
                                    nuestros clientes a la hora de remodelar sus hogares.
                                </p>
                                <p class="lead ">
                                    Nuestra compañía inicia un proceso comercial en la ciudad de candelaria, donde se vio  un gran potencial  por su 
                                    expansión gracias los nuevos proyectos de vivienda, actualmente buscamos  ser los mejores aliados de los propietarios 
                                    de las viviendas y ser partícipes en hacer cumplir los sueños de los clientes ofreciendo una gran variedad de productos 
                                    para la remodelación de sus hogares.
                                </p>
                            </div>
                        </div>
                        <div class="col-10 col-md-5 my-auto text-start card">
                            <div class="card-body">
                                <h2 class="color-marca card-title">Misión</h2>
                                <p class="lead">
                                    Ofrecer productos de calidad a nuestros clientes, contribuyendo a la mejora de sus viviendas y cumpliendo sus 
                                    sueños de remodelar su hogar.
                                </p>
                                <h2 class="color-marca card-title">Visión</h2>
                                <p class="lead">
                                    Ser reconocidos como una empresa responsable con sus clientes, que brinda buen servicio y ofrece productos de 
                                    calidad a nuestros clientes. Ser el mejor aliado del ferretero al proveer materiales de construcción y 
                                    productos de ferretería.
                                </p>
                            </div>
                        </div>
                </section>

        </div>
</template>

<script>  
    

    export default {  
        name: "App",  
        components:{
            
        },
        mounted() {  
            document.title = "Nosotros";  
        }  
    };  
</script>

<style>
    #myVideo{
        color: #000;
        background-color: #000;
        
    }
</style>

