
<template>
        <div class="container mx-auto mt-5 mb-5">
            <section class="tarjeta row mb-5 .bg-dark col-lg-4 col-md-6 col-sm-12">
                    <div class="wrapper mx-auto">
                        <div class="card front"><img src="https://images.squarespace-cdn.com/content/v1/53c4566ae4b047b01385cdb6/1542663621032-QSYRS85LCRJXVIGWYBVY/julio_ferreterias_mar23.jpg?format=1000w"/>
                            <div class="info">
                            <h1>¿Quiénes somos?</h1>
                            <p>Somos una empresa dedicada a la distribución de productos eléctricos y de ferretería a los diferentes municipios del Valle del Cauca</p>
                            <button class="btn-card" data-bs-toggle="modal" data-bs-target="#about">Leer más</button>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" tabIndex="-1" id="about" aria-hidden="true" aria-labelledby="about">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content text-white" v-bind:style="{ backgroundImage: 'url(' + require('../assets/6882.jpg')+')' }">
                                    <div class="modal-body">
                                        <button type="button" class="close btn-close" data-bs-dismiss="modal" aria-label="Close" style="background-color: white">
                                        </button>
                                        <p class="lead-about">
                                        Somos una empresa dedicada a la distribución de productos eléctricos y de ferretería a diferentes municipios 
                                        del Valle del Cauca, brindando un servicio innovador y eficiente. 
                                        <br/>Generamos progreso y estabilidad en nuestros 
                                        colaboradores, ya que ellos hacen posible la existencia de nuestra empresa.
                                        </p>
                                        <p class="lead-about">
                                        Nuestra compañía inicia un proceso comercial en la ciudad de Candelaria, donde se vio un gran potencial de expansión gracias los nuevos proyectos de vivienda; por consiguiente, buscamos ser los mejores aliados de los residentes y ser partícipes en hacer cumplir sus sueños, ofreciendo una gran variedad de productos para la remodelación de sus hogares.
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
                <section class="tarjeta row mb-5 .bg-dark col-lg-4 col-md-6 col-sm-12">
                    <div class="wrapper mx-auto">
                        <div class="card"><img src="https://img.freepik.com/foto-gratis/pareja-joven-haciendo-reparacion-apartamentos-juntos-ellos-mismos-hombre-mujer-casados-haciendo-remodelacion-o-renovacion-casa-concepto-relaciones-familia-amor-midiendo-pared-preparandose-diseno_155003-19797.jpg?size=626&ext=jpg"/>
                            <div class="info">
                            <h1>Misión</h1>
                            <p>Ofrecer productos de calidad a nuestros clientes, contribuyendo a la mejora de sus viviendas y cumpliendo sus sueños de remodelar su hogar.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="tarjeta row mb-5 .bg-dark col-lg-4 col-md-6 col-sm-12">
                    <div class="wrapper mx-auto">
                        <div class="card"><img src="https://img.freepik.com/foto-gratis/constructor-masculino-probandose-casco-estante-ferreteria-constructor-uniforme-mirar-productos-tienda-bricolaje_266732-20737.jpg?size=626&ext=jpg"/>
                            <div class="info">
                            <h1>Visión</h1>
                            <p>Ser reconocidos como una empresa responsable con sus clientes, que brinda buen servicio y ofrece productos de calidad a nuestros clientes. Ser el mejor aliado del ferretero al proveer materiales de construcción y productos de ferretería.</p>
                            </div>
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

