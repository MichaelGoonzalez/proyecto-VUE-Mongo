<template>
  <div>
    <div class="bg-black bg-opacity-50 bg-cover bg-filter"></div>  
    <div class="bg-cover" v-bind:style="{ backgroundImage: 'url(' + require('../assets/bg3.jpg')+')' }"></div>
    <div class="container mx-auto">
              <section class="row d-flex justify-content-evenly ">
                  <div class="col-lg-4 my-auto">
                      <h1 class="color-marca">Carvajal Materiales</h1>
                      <p class="lead">
                          ¡Bienvenidos! Carvajal Materiales te provee 
                          materiales de construcción para que cumplas tus 
                          proyectos de remodelación para tu hogar y productos de 
                          ferretería en general.
                          ¡¡Ven a conocernos y contruyamos juntos!!

                      </p>           
                      <router-link to="/productos" class="btn btn-primary">Ver productos</router-link>     
                  </div>
              </section>
    </div>
  </div>  
</template>

<script>  
export default {  
  name: "App",  
  mounted() {  
    document.title = "Carvajal Materiales - Inicio";  
  }  
};  
</script>