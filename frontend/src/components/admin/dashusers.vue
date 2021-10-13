<template>
  <div style="background-color:#f1f1f1">
        <div class="container-fluid">
            <div class="row">
                <div class="barra-lateral col-md-2 col-sm-auto">
                    <nav class="menu d-flex d-sm-block justify-content-center align-items-center flex-wrap" >
                        <router-link class="text-decoration-none" to="/dashusers">
                            <i class="fas fa-user-friends"></i><span>Usuarios</span>
                        </router-link>
                        <router-link  class="text-decoration-none" to="/"><i class="fas fa-sign-out-alt m-1"></i>Salir</router-link>
                    </nav>
                </div>
            <main class="main col">
                <div class="container">
                    <div class="col-12 col-lg-8 mx-auto">
                        <form @submit.prevent= "agregarUsuario" v-if="!editar">
                            <div class="contenedor">
                                <h2>Crear un nuevo usuario</h2>
                                <div class="element mb-3">
                                    <div class="label"><label for="usuario">Usuario</label></div>
                                    <input id="usuario" type="text" placeholder="Escriba el nombre de usuario" v-model="atributos.user" required><br/>
                                </div>
                                <div class="element mb-3">
                                    <div class="label"><label for="password">Contraseña</label></div>
                                    <input id="password" type="text" placeholder="Escriba la contraseña" v-model="atributos.pass" required><br/>
                                </div>
                                <div class="element mb-3">
                                    <div class="label"><label for="role">Rol</label></div>
                                    <select id="role" class="form-select" aria-label="Default select example" v-model="atributos.role" required>
                                        <option disabled>Root</option>
                                        <option value="0">Administrador</option> 
                                    </select>
                                </div>
                                <input class="btn btn-primary" type="submit" value="Agregar"/>
                            </div>
                        </form>
                        <form @submit.prevent= "editarUsuario(usuarioEditar)" v-if="editar">
                            <div class="contenedor">
                                <h2>Crear un nuevo usuario</h2>
                                <div class="element mb-3">
                                    <div class="label"><label for="user">Usuario</label></div>
                                    <input id="user" type="text" placeholder="Escriba el nombre de usuario" v-model="usuariosEditar.user"><br/>
                                </div>
                                <div class="element mb-3">
                                    <div class="label"><label for="password">Contraseña</label></div>
                                    <input id="password" type="text" placeholder="Escriba la contraseña" v-model="usuariosEditar.pass"><br/>
                                </div>
                                <div class="element mb-3">
                                    <div class="label"><label for="role">Rol</label></div>
                                    <select id="role" class="form-select" aria-label="Default select example" v-model="usuariosEditar.role" disabled>
                                        <option value="1">Root</option>
                                        <option value="0">Administrador</option>
                                    </select>
                                </div>
                                <input class="btn btn-primary" type="submit" value="Agregar"/>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div class="contenedor">
                                <h2>Usuarios registrados</h2>
                                <div class="element">
                                <div class="label"><label for="usuario" class="form-label text-dark">Usuario</label></div>
                                    <input type="text" class="form-control" id="usuario" v-model= "user" autocomplete="off">
                                    <br>
                                </div>                
                                <div class="mb-3">
                                    <div class="table-responsive">
                                        <table class="table table-striped table-hover ">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th>Rol</th>
                                                    <th>Usuario</th>
                                                    <th>Contraseña</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for= "(item,index) in filtrarAritculos" :key= "index">
                                                    <td>{{item.role}}</td>
                                                    <td>{{item.user}}</td>
                                                    <td>{{item.pass}}</td>
                                                    <td>
                                                        <button type="button" class="btn btn-warning"  @click="activarEdicion(item._id)">Editar</button> 
                                                    </td>
                                                    <td>
                                                        <button type="button" class="btn btn-danger" @click="eliminarUsuario(item._id)">Eliminar</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table> 
                                        <nav aria-label="Page navigation example" class="element">
                                            <ul class="pagination">
                                                <li class="page-item"  @click = "getPreviousPagina()"><a class="page-link">Previous</a></li>
                                                <li v-for= "(pagina,index) in totalPaginas()" @click= "getDataPagina(pagina)" :key= "index" class="page-item" ><a class="page-link">{{pagina}}</a></li>
                                                <li class="page-item" @click = "getNextPagina()"><a class="page-link">Next</a></li>
                                            </ul>
                                        </nav>   
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

            </main>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    beforeCreate(){
        var autenticacion = window.localStorage.getItem("rol");
        if(autenticacion != 0){
            this.$router.push({path: "/dashusers"})
        }
    },
    data(){
        return{
            rol: window.localStorage.getItem("rol"),
            //Listar productos
            usuariosTabla: [],

            //Guardado de productos
            atributos: {
                user: "",
                pass: "",
                role: ""
            },
            respuesta: "",

            //Editor de productos
            editar:false,
            usuarioEditar: {},

            //Buscador 

            user: "",

            //Paginacion 

            datosPaginados: [],
            paginaActual: 1,
            elementosPagina: 9
        }
    },
    methods:{

        //Paginacion

        totalPaginas(){
            return Math.ceil(this.usuariosTabla.length/this.elementosPagina)
        },
        getDataPagina(noPagina){
            this.paginaActual = noPagina
            this.datosPaginados = []
            let ini = (noPagina* this.elementosPagina) - this.elementosPagina;
            let fin = (noPagina* this.elementosPagina)

            this.datosPaginados =  this.usuariosTabla.slice(ini,fin)
        },
        getPreviousPagina(){
            if(this.paginaActual > 1 ){
                this.paginaActual --;
            }
            this.getDataPagina(this.paginaActual)
        },
        getNextPagina(){
            if(this.paginaActual < this.totalPaginas()){
                this.paginaActual ++;
            }
            this.getDataPagina(this.paginaActual)
        },
        //---------------------------//

        listarArticulos(){
            this.axios.get('/listar-usuarios')
                .then((response)=>{
                    
                    this.articulosTabla = response.data;
                    this.getDataPagina(1)
                })
                .catch(e=>{
                console.log(e.response);
            })
        }, 
        agregarUsuario(){
            this.axios.post('/nuevo-usuario',this.atributos)
            .then(res=>{
                this.usuariosTabla.push(res.data);
                this.respuesta = "Se agregó con éxito";
                this.atributos.user = "";
                this.atributos.pass = "";
                this.atributos.role = "";
                this.getDataPagina(this.paginaActual);
                res.data
            })
            .catch(e=>{
                console.log(e.response);
            })
        },
        activarEdicion(id){

            this.editar=true;
            this.axios.get(`/buscar-usuario/${id}`)
            .then(res=>{
                this.usuarioEditar=res.data;

            })
            .catch(e=>{

                console.log(e.response);
            })


        },
        editarUsuario(item){
            
            this.axios.put(`/editar-usuario/${item._id}`, item)
            .then(res=>{
                const index= this.usuariosTabla.findIndex(n=> n._id===res.data._id);
                this.usuariosTabla[index].user = res.data.user;
                this.usuariosTabla[index].pass=res.data.pass;
                this.usuariosTabla[index].role = res.data.role;
                this.getDataPagina(this.paginaActual);
                this.editar=false;
            })
            .catch(e=>{
                console.log(e.response);
            })
        },
        eliminarUsuario(id){
            
            this.axios.delete(`/borrar-usuario/${id}`)
            .then(res=>{
                const index = this.usuariosTabla.findIndex(item=> item._id ===res.data._id);
                this.usuariosTabla.splice(index,1);
                this.getDataPagina(this.paginaActual);
            })
            .catch(e=>{
                console.log(e.response)
            })
        }
    },
    computed:{
        filtrarUsuarios: function(){
            if (this.user.length == 0) {
                var array = this.datosPaginados
            }
            else{
                array = this.usuariosTabla
            }
            return array.filter((item)=>{
                return item.user.match(this.user);
            })

        }
    },
    created() {
        this.listarUsuarios();
    },
}
</script>