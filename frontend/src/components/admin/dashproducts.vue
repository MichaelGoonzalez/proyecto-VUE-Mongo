<template>
    <div style="background-color:#f1f1f1">
        <div class="container-fluid">
            <div class="row">
                <div class="barra-lateral col-md-2 col-sm-auto">
                    <nav class="menu d-flex d-sm-block justify-content-center align-items-center flex-wrap" >
                        <router-link class="text-decoration-none" to="/dashusers">
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
                            <h2>Crear Producto</h2>
                            <form @submit.prevent="agregarArticulo"> 
                                <div class="element">
                                    <div class="label"><label for="producto" class="form-label text-dark">Nombre</label></div>
                                    <input type="text" class="form-control" id="producto" aria-describedby="productoactual" v-model="atributos.nombre">
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                
                                <div class="element">
                                    <div class="label"><label for="categoria" class="form-label text-dark">Categoría</label></div>
                                    <select class="form-select" aria-label="Default select example" required v-model="atributos.categoria">
                                        <option selected>Maderas</option>
                                        <option >Eléctricos</option>
                                        <option >Three</option>
                                    </select>
                                    <!-- <input type="text" class="form-control" id="producto" aria-describedby="productoactual"> -->
                                </div>
                                <div class="element">
                                    <div class="label"><label for="codeproduct" class="form-label text-dark"> Código del producto</label></div>
                                    <input type="text" class="form-control" id="codeproduct" v-model="atributos.codigo">
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
                                    <div class="label"><label for="fecha" class="text-dark form-label">Fecha de registro</label></div>
                                    <input type="date" class="form-control" id="fecha" v-model="atributos.fecha">
                                </div>
                                <div class="element">
                                        <div class="label"><label for="articulodescripcion" class="form-label text-dark">Descripción</label></div>
                                        <textarea class="form-control" id="articulodescripcion" rows="3" v-model="atributos.descripcion"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary mt-4">Agregar</button>
                            </form>
                            <b class="text-danger">{{respuesta}}</b>
                        </div>
                    </div>
                        <div class="col-md-5 mx-auto">
                            <div class="contenedor">
                            <h2>Lista de productos</h2>
                            <form>
                                <div class="element">
                                <div class="label"><label for="producto" class="form-label text-dark" >Nombre del producto</label></div>
                                <input type="text" class="form-control" id="producto" aria-describedby="productoactual">
                                <div id="emailHelp" class="form-text"></div>
                                </div>
                                <div class="element">
                                <div class="label"><label for="codeproduct" class="form-label text-dark">Código del producto</label></div>
                                <input type="text" class="form-control" id="codeproduct">
                                </div>
                                <br>
                                    <button type="submit" class="btn btn-primary">Buscar Producto</button>
                                </form>
                                <br> 
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
                                                <tr v-for= "(item,index) in articulosTabla" :key= "index">
                                                    <td>{{item.codigo}}</td>
                                                    <td>{{item.nombre}}</td>
                                                    <td>{{item.cantidad}}</td>
                                                    <td>
                                                        <button type="button" class="btn btn-warning">Editar</button> 
                                                    </td>
                                                    <td>
                                                        <button type="button" class="btn btn-danger" @click="eliminarArticulo(item._id)">Eliminar</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>    
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
        var autenticacion = window.localStorage.getItem("autenticacion");
        if(autenticacion !== "ok"){
            this.$router.push({path: "/login"})
        }
    },
    data(){
        return{
            articulosTabla: [],
            atributos: {
                codigo: "",
                nombre: "",
                precio: "",
                cantidad: "",
                fecha: "",
                descripcion: ""
            },
            respuesta: ""
        }
    },
    created() {
        this.listarArticulos();
    },
    methods:{
        listarArticulos(){
            this.axios.get('/listar-articulos')
                .then((response)=>{
                    this.articulosTabla = response.data;
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
                res.data
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
            })
            .catch(e=>{
                console.log(e.response)
            })
        }
    }
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