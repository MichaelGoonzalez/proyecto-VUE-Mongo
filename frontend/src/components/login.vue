<template>
    <div class= "container">
        <section class="col-9 col-lg-4 mx-auto">
            <form @submit.prevent= "comprobarUsuario" method="POST">
                <div class="contenedor">
                    <h2>Acceso a Dashboard</h2>
                    <div class="element">
                        <div class="label"><label for="email">Usuario</label></div>
                        <input id="usuario" type="text" name="usuario" placeholder="Escriba su usuario" v-model= "usuario"><br/>
                    </div>
                    <div class="element">
                        <div class="label"><label for="password">Contraseña</label></div>
                        <input id="password" type="password" name="password" placeholder="Escriba su contraseña" v-model= "contraseña"><br/>
                    </div>
                    <div class="element">
                        <p class="text-dark">{{mensaje}}</p>
                    </div>
                    <input id="boton" class="btn btn-primary" type="submit" value="Iniciar sesión">
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
                    window.localStorage.setItem('autenticacion','ok');
                    window.localStorage.setItem('rol',value.role)
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
