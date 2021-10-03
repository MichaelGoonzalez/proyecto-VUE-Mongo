<template>
  <div>
    <main class="container">
            <section class="row d-flex justify-content-evenly">
                <div class="col-lg-4 my-auto">
                    <h1 class="color-marca">Carvajal Materiales</h1>
                    <p class="lead">
                        ¡Bienvenidos! Carvajal Materiales te provee 
                        materiales de construcción para que cumplas tus 
                        proyectos de remodelación para tu hogar y productos de 
                        ferretería en general.
                        Ven a conocernos  y contruYAmos juntos!!

                    </p>                
                    <a href="productos.html" class="btn btn-primary">Ver productos</a>
                </div>
                <div class="col-4 my-auto d-none d-lg-block">
                    <img src="/img/imgIndex.png" width="100%" alt="imagen">
                </div>
            </section>
        </main>
  </div>
</template>

<!-- Comment 
/* <script>
  document.write(new Date().getFullYear());
</script>  -->

<script>
  export default {
    data() {
      return {
        año: ""
      }
    },
    methods: {
        obtenerAño(){
            return this.año = new Date().getFullYear();
        }
    },
  }
</script>

