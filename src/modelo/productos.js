const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    referencia: String,
    nombre: String,
    descripcion: String,
    stock: String,
    imagen: String,
    precio: String,
    estado: Boolean,
    enCarrito: Boolean
});

module.exports=mongoose.model("productos", productoSchema);