<template>
    <div class= "container">
        <section class="col-9 col-lg-4 mx-auto">
            <form @submit.prevent= "comprobarUsuario" method="POST">
                <div class="contenedor">
                    <h1>Iniciar sesión</h1>
                    <div class="element">
                        <div class="label"><label for="email">Correo</label></div>
                        <input id="email" type="text" name="email" placeholder="Escribe tu correo" v-model= "usuario"><br/>
                    </div>
                    <div class="element">
                        <div class="label"><label for="password">Contraseña</label></div>
                        <input id="password" type="password" name="password" placeholder="Escribe tu Contraseña" v-model= "contraseña"><br/>
                    </div>
                    <div class="element">
                        <p class="text-dark">{{mensaje}}</p>
                    </div>
                    <!-- <router-link to="/dashusers"> -->
                    <input id="boton" class="btn btn-primary" type="submit" value="Iniciar sesión">
                    <!-- </router-link> -->
                </div>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            usuario: "",
            contraseña: "",
            mensaje:" ",
            usuariosTabla: []
        }
    },
    created(){
        this.listarUsuarios();
    },
    methods:{
        listarUsuarios(){
            this.axios.get('/listar-usuarios')
                .then((response)=>{
                    this.usuariosTabla = response.data;
                })
                .catch(e=>{
                console.log(e.response);
            })
        },
        comprobarUsuario(){
            this.usuariosTabla.forEach((value)=>{
                if(this.usuario == value.user & this.contraseña == value.pass){
                    this.$router.push({path: "/dashproducts"})
                }
                else if(this.usuario == value.user & this.contraseña != value.pass){
                    this.mensaje = "La contraseña que ingresaste es incorrecta"
                }
                else{
                    this.mensaje= "El usuario no existe"
                }
            });
        }
    }
}
</script>