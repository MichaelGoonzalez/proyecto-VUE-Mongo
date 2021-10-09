import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const articuloSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    codigo: String,
    precio: String,
    cantidad: String,
    fecha: String,
    descripcion: String,
});

//COnvertir a modelo
const Articulos = mongoose.model('Articulos',articuloSchema)
export default Articulos;