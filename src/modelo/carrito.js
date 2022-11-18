const mongoose = require("mongoose");

const carritoSchema = mongoose.Schema({
    nombre: String,
    imagen: String,
    precio: String,
    cantidad: Number
});

module.exports = mongoose.model("carrito", carritoSchema);