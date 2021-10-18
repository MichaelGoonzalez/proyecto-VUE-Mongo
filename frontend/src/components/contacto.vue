<template>
    <div class="container mx-auto">
            <section class="row d-flex">
                <div class="col-10 col-lg-5 mx-auto">
                    <form action="server" method="POST">
                        <div class="contacto">
                            <h2 class="mt-3">Contáctanos</h2>
                            <div class="element mb-3">
                                <div class="label"><label for="asunto">Asunto</label></div>
                                <input type="text" id="asunto" name="asunto" placeholder="Escribe el asunto..." required="true"/>
                            </div>
                            <div class="element mb-3">
                                <div class="label"><label for="email">Correo</label></div>
                                <input type="email" id="email" name="email" placeholder="Escribe tu correo..." required="true"/>
                            </div>
                            <div class="element mb-3">        
                                <div class="label"><label for="comment">Mensaje</label></div>
                                <textarea id="comment" name="comment" rows="2" placeholder="Escribe tu mensaje aquí..." required="true"></textarea>
                            </div>
                
                            <input class="btn btn-primary" type="submit" value="Enviar"/>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-lg-6 mx-auto">
                    <aside id="info">
                        <article class="mt-3">
                            <h2>Visítanos</h2>
                            <p>CL 14D #43A-34 Manzanares I<br/>Poblado campestre, Candelaria<Br/>Cali, Colombia</p>
                        </article>
                        <br/>
                        <article class="mb-2">
                            <h2>Síguenos</h2>
                            <div class="mx-auto">
                                <a href="https://www.facebook.com/Carvajalmateriales"><i class="fab fa-facebook" style="color:blue"></i></a><p class="d-inline" style="color:black"> Facebook</p><br/>
                                <a href="https://www.instagram.com/carvajalmateriales/"><i class="fab fa-instagram" style="color:red"></i></a><p class="d-inline" style="color:black"> Instagram</p><br/>
                                <a href="https://api.whatsapp.com/send?phone=%2B573003659340&fbclid=IwAR1Fs2TmR-vYJG0c8c1zhm4XzCFEJjWr2zbsaMjivUyG2SCrSoFVYx49qwA"><i class="fab fa-whatsapp" style="color: rgb(102, 233, 102)"></i></a><p class="d-inline" style="color:black"> Whatsapp</p><br/>
                            </div>
                        </article>
                    </aside>
                </div>
            </section>
    </div>
</template>

<script>  
export default {  
  name: "App",  
  mounted() {  
    document.title = "Contacto";  
  }  
};  
</script>