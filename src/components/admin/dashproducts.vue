<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="barra-lateral col-md-2 col-sm-auto">
                    <nav class="menu d-flex d-sm-block justify-content-center align-items-center flex-wrap" >
                        <router-link style="text-decoration:none" to="/dashusers">
                            <i class="fas fa-user-friends"></i><span>Usuarios</span>
                        </router-link>
                        <router-link style="text-decoration:none" to="/dashproducts">
                            <i  class="fas fa-store"></i><span>Productos</span>
                        </router-link>
                    </nav>
                </div>

                <main class="main col">
                    <div class="row justify-content-center align-content-center text-center d-flex">
                        <div class="col-md-6" >
                            <h2> <font size= "15"><b>Crear Producto</b> </font></h2>
                            <form @submit.prevent="agregarArticulo"> 
                                <div class="mb-3">
                                    <label for="producto" class="form-label text-dark"> <b> Nombre de producto </b></label>
                                    <input type="text" class="form-control" id="producto" aria-describedby="productoactual" v-model="atributos.nombre">
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="producto" class="form-label text-dark"> <b> Categoria </b></label>
                                    <select class="form-select" aria-label="Default select example" required v-model="atributos.categoria">
                                        <option selected>One</option>
                                        <option >Two</option>
                                        <option >Three</option>
                                    </select>
                                    <!-- <input type="text" class="form-control" id="producto" aria-describedby="productoactual"> -->
                                </div>
                                <div class="mb-3">
                                    <label for="codeproduct" class="form-label text-dark"> <b>Codigo Producto</b></label>
                                    <input type="text" class="form-control" id="codeproduct" v-model="atributos.codigo">
                                </div>
                                <div class="mb-3">
                                    <label for="precioProducto" class="form-label text-dark"> <b>Precio</b></label>
                                    <input type="number" class="form-control" id="precioProducto" v-model="atributos.precio">
                                </div>
                                <div class="mb-3">
                                    <label for="precioProducto" class="form-label text-dark"> <b>Cantidad a registrar</b></label>
                                    <input type="number" class="form-control" id="precioProducto" v-model="atributos.cantidad">
                                </div>
                                <div class="mb-3">
                                    <label for="precioProducto" class="text-dark form-label"> <b>Fecha de registro</b></label>
                                    <input type="date" class="form-control" id="precioProducto" v-model="atributos.fecha">
                                </div>
                                <div class="mb-3">
                                        <label for="articulodescripcion" class="form-label text-dark"> <b>Descripcion Articulo</b></label>
                                        <textarea class="form-control" id="articulodescripcion" rows="3" v-model="atributos.descripcion"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Crear Producto</button>
                            </form>
                            <b class="text-danger">{{respuesta}}</b>
                        </div>

                        <div class="col-md-6">
                            <h2><font size= "15"><b>Lista de Productos</b> </font></h2>
                            <form>
                                <div class="mb-3">
                                <label for="producto" class="form-label text-dark" > <b>Nombre de producto</b></label>
                                <input type="text" class="form-control" id="producto" aria-describedby="productoactual">
                                <div id="emailHelp" class="form-text"></div>
                                </div>
                                <div class="mb-3">
                                <label for="codeproduct" class="form-label text-dark"> <b>Codigo Producto </b></label>
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
                                                    <th>Codigo</th>
                                                    <th>Nombre Producto</th>
                                                    <th>Stock</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for= "(item,index) in articulosTabla" :key= "index">
                                                    <td>{{item.codigo}}</td>
                                                    <td>{{item.nombre}}</td>
                                                    <td>{{item.cantidad}}</td>
                                                </tr>
                                            </tbody>
                                        </table>    
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
    }
}
</script>

<style>    
    #nav a.router-link-exact-active {
        color: #f6821f;
    }
</style>