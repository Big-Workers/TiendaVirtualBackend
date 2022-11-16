const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    id: String,
    referencia: String,
    nombre: String,
    descripcion: String,
    stock: String,
    imagen: String,
    precio: String,
    enCarrito: Boolean
});

module.exports=mongoose.model("productos", productoSchema);