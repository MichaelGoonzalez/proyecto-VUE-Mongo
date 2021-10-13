<template>
    <div style="background-color:#f1f1f1">
        <div class="container-fluid">
            <div class="row">
                <div class="barra-lateral col-md-2 col-sm-auto">
                    <nav class="menu d-flex d-sm-block justify-content-center align-items-center flex-wrap" >
                        <router-link class="text-decoration-none" to="/dashusers" v-show="rol == 1">
                            <i class="fas fa-user-friends"></i><span>Usuarios</span>
                        </router-link>
                        <router-link class="text-decoration-none" to="/dashproducts">
                            <i  class="fas fa-store"></i><span>Productos</span>
                        </router-link>
                        <router-link class="text-decoration-none" to="/"><i class="fas fa-sign-out-alt m-1"></i>Salir</router-link>
                    </nav>
                </div>

                <main class="main col">
                    <div class="row justify-content align-content-center text-center d-flex">
                        <div class="col-md-5 mx-auto">

                            <div class="contenedor">

                                <form @submit.prevent= "editarArticulo(articuloEditar)" v-if="editar"> 
                                    <h2>Editar Producto</h2>
                                    <div class="element">
                                        <div class="label"><label for="producto" class="form-label text-dark">Nombre</label></div>
                                        <input type="text" class="form-control" id="producto" aria-describedby="productoactual" v-model="articuloEditar.nombre">
                                        <div id="emailHelp" class="form-text"></div>
                                    </div>
                                    
                                    <div class="element">
                                        <div class="label"><label for="categoria" class="form-label text-dark">Categoría</label></div>
                                        <select class="form-select" aria-label="Default select example" v-model="articuloEditar.categoria">
                                            <option selected>Hogar</option>
                                            <option >Eléctricos</option>
                                            <option >Herramientas</option>
                                            <option>Otros</option>
                                        </select>
                                        <!-- <input type="text" class="form-control" id="producto" aria-describedby="productoactual"> -->
                                    </div>
                                    <div class="element">
                                        <div class="label"><label for="codeproduct" class="form-label text-dark"> Código del producto</label></div>
                                        <input type="text" class="form-control" id="codeproduct" v-model="articuloEditar.codigo">
                                    </div>
                                    <div class="element">
                                        <div class="label"><label for="precioProducto" class="form-label text-dark">Precio</label></div>
                                        <input type="text" class="form-control" id="precioProducto" v-model="articuloEditar.precio">
                                    </div>
                                    <div class="element">
                                        <div class="label"><label for="cantidad" class="form-label text-dark">Cantidad</label></div>
                                        <input type="text" class="form-control" id="cantidad" v-model="articuloEditar.cantidad">
                                    </div>
                                    <div class="element">
                                        <div class="label"><label for="fecha" class="text-dark form-label">Fecha de registro</label></div>
                                        <input type="date" class="form-control" id="fecha" v-model="articuloEditar.fecha">
                                    </div>
                                    <div class="element">
                                            <div class="label"><label for="articulodescripcion" class="form-label text-dark">Descripción</label></div>
                                            <textarea class="form-control" id="articulodescripcion" rows="3" v-model="articuloEditar.descripcion"></textarea>
                                    </div>
                                    <br>
                                    <button type="submit" class="btn btn-primary mt-4">Editar</button>
                                    <button type="submit" class="btn btn-primary mt-4" style="margin-left: 4%" @click="editar=false">Cancelar</button> 
                                </form>

                                <form @submit.prevent= "agregarArticulo" v-if="!editar"> 
                                    <h2>Crear Producto</h2>

                                    <div class="element">
                                        <div class="label"><label for="codeproduct" class="form-label text-dark"> Código del producto</label></div>
                                        <input type="text" class="form-control" id="codeproduct" v-model="atributos.codigo">
                                    </div>

                                    <div class="element">
                                        <div class="label"><label for="producto" class="form-label text-dark">Nombre</label></div>
                                        <input type="text" class="form-control" id="producto" aria-describedby="productoactual" v-model="atributos.nombre">
                                        <div id="emailHelp" class="form-text"></div>
                                    </div>    
                                    <div class="element">
                                        <div class="label"><label for="precioProducto" class="form-label text-dark">Precio</label></div>
                                        <input type="number" class="form-control" id="precioProducto" v-model="atributos.precio">
                                    </div>
                                    <div class="element">
                                        <div class="label"><label for="cantidad" class="form-label text-dark">Cantidad</label></div>
                                        <input type="number" class="form-control" id="cantidad" v-model="atributos.cantidad">
                                    </div>
                                    <div class="element">
                                        <div class="label"><label for="categoria" class="form-label text-dark">Categoría</label></div>
                                        <select class="form-select" aria-label="Default select example" v-model="atributos.categoria">
                                            <option selected>Hogar</option>
                                            <option >Eléctricos</option>
                                            <option >Herraminetas</option>
                                            <option >Otros</option>
                                        </select>
                                        <!-- <input type="text" class="form-control" id="producto" aria-describedby="productoactual"> -->
                                    </div>
                                    <div class="element">
                                        <div class="label"><label for="fecha" class="text-dark form-label">Fecha de registro</label></div>
                                        <input type="date" class="form-control" id="fecha" v-model="atributos.fecha">
                                    </div>
                                    <div class="element">
                                            <div class="label"><label for="articulodescripcion" class="form-label text-dark">Descripción</label></div>
                                            <textarea class="form-control" id="articulodescripcion" rows="3" v-model="atributos.descripcion"></textarea>
                                    </div>
                                    <div class="elment">
                                        <br>
                                        <b class="text-danger">{{respuesta}}</b>
                                    </div>
                                    <button type="submit" class="btn btn-primary mt-4">Agregar</button>
                                    
                                </form>

                            </div>

                        </div>

                        <div class="col-md-6 mx-auto">
                    
                            <div class="contenedor">
                                <h2>Lista de productos</h2>
                                <div class="element">
                                <div class="label"><label for="codeproduct" class="form-label text-dark">Código del producto</label></div>
                                    <input type="text" class="form-control" id="codeproduct" v-model= "codigoProducto" autocomplete="off">
                                    <br>
                                </div>                
                                <div class="mb-3">
                                    <div class="table-responsive">
                                        <table class="table table-striped table-hover ">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th>Código</th>
                                                    <th>Nombre Producto</th>
                                                    <th>Stock</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for= "(item,index) in filtrarAritculos" :key= "index">
                                                    <td>{{item.codigo}}</td>
                                                    <td>{{item.nombre}}</td>
                                                    <td>{{item.cantidad}}</td>
                                                    <td>
                                                        <button type="button" class="btn btn-warning"  @click="activarEdicion(item._id)">Editar</button> 
                                                    </td>
                                                    <td>
                                                        <button type="button" class="btn btn-danger" @click="eliminarArticulo(item._id)">Eliminar</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table> 
                                        <nav aria-label="Page navigation example" class="element">
                                            <ul class="pagination">
                                                <li class="page-item"  v-on:click = "getPreviousPagina()"><a class="page-link">Previous</a></li>
                                                <li v-for= "(pagina,index) in totalPaginas()" v-on:click= "getDataPagina(pagina)" :key= "index" class="page-item" ><a class="page-link">{{pagina}}</a></li>
                                                <li class="page-item" v-on:click = "getNextPagina()"><a class="page-link">Next</a></li>
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

/* import moment from 'moment'; */

export default {
    beforeCreate(){
        var autenticacion = window.localStorage.getItem("autenticacion");
        if(autenticacion !== "ok"){
            this.$router.push({path: "/login"})
        }
    },
    data(){
        return{
            rol: window.localStorage.getItem("rol"),
            //Listar productos
            articulosTabla: [],

            //Guardado de productos
            atributos: {
                codigo: "",
                nombre: "",
                precio: "",
                cantidad: "",
                fecha: "",
                descripcion: ""
            },
            respuesta: "",

            //Editor de productos
            editar:false,
            articuloEditar: {},

            //Buscador 

            codigoProducto: "",

            //Paginacion 

            datosPaginados: [],
            paginaActual: 1,
            elementosPagina: 9
        }
    },
    methods:{

        //Paginacion

        totalPaginas(){
            return Math.ceil(this.articulosTabla.length/this.elementosPagina)
        },
        getDataPagina(noPagina){
            this.paginaActual = noPagina
            this.datosPaginados = []
            let ini = (noPagina* this.elementosPagina) - this.elementosPagina;
            let fin = (noPagina* this.elementosPagina)

            this.datosPaginados =  this.articulosTabla.slice(ini,fin)
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
            this.axios.get('/listar-articulos')
                .then((response)=>{
                    
                    this.articulosTabla = response.data;
                    this.getDataPagina(1)
                })
                .catch(e=>{
                console.log(e.response);
            })
        }, 
        agregarArticulo(){
            this.axios.post('/nuevo-articulo',this.atributos)
            .then(res=>{
                this.articulosTabla.push(res.data);
                this.respuesta = "Se agrego con exito";
                this.atributos.nombre = "";
                this.atributos.categoria = "";
                this.atributos.codigo = "";
                this.atributos.precio = "";
                this.atributos.cantidad = "";
                this.descripcion = "";
                this.getDataPagina(this.paginaActual);
                res.data
            })
            .catch(e=>{
                console.log(e.response);
            })
        },
        activarEdicion(id){

            this.editar=true;
            this.axios.get(`/buscar-articulo/${id}`)
            .then(res=>{
                this.articuloEditar=res.data;
                
                /* var fecha = moment(this.articuloEditar.fecha,"MM/DD/YY")
                var fe = moment(fecha).format("YYYY-MM-DD")
                this.articuloEditar.fecha = fe */

            })
            .catch(e=>{

                console.log(e.response);
            })


        },
        editarArticulo(item){
            
            this.axios.put(`/editar-articulo/${item._id}`, item)
            .then(res=>{
                const index= this.articulosTabla.findIndex(n=> n._id===res.data._id);
                this.articulosTabla[index].codigo = res.data.codigo;
                this.articulosTabla[index].nombre=res.data.nombre;
                this.articulosTabla[index].precio = res.data.precio;
                this.articulosTabla[index].cantidad = res.data.cantidad;
                this.articulosTabla[index].categoria = res.data.categoria
                this.articulosTabla[index].fecha = res.data.fecha
                this.articulosTabla[index].descripcion=res.data.descripcion;
                this.getDataPagina(this.paginaActual);
                this.editar=false;
            })
            .catch(e=>{
                console.log(e.response);
            })
        },
        eliminarArticulo(id){
            
            this.axios.delete(`/borrar-articulo/${id}`)
            .then(res=>{
                const index = this.articulosTabla.findIndex(item=> item._id ===res.data._id);
                this.articulosTabla.splice(index,1);
                this.getDataPagina(this.paginaActual);
            })
            .catch(e=>{
                console.log(e.response)
            })
        }
    },
    computed:{
        filtrarArticulos: function(){
            if (this.codigoProducto.length == 0) {
                var array = this.datosPaginados
            }
            else{
                array = this.articulosTabla
            }
            return array.filter((item)=>{
                return item.codigo.match(this.codigoProducto);
            })

        }
    },
    created() {
        this.listarArticulos();
    },
}
</script>

<style>    
    #nav a.router-link-exact-active {
        color: #f6821f;
    }
    #eliminar{
        background: #dc3545;
    }
</style>