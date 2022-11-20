const mongoose = require("mongoose");

const ventasSchema = mongoose.Schema({
    fecha: Date,
    idVenta: Spring,
    comprador: {
        nombre: Spring,
        email: Spring,
        telefono: Number,
        direccion: Spring,
        contraseña: Spring,
        rol: Spring
    },
    productos: [
        {
            nombre: String,
            imagen: String,
            precio: String,
            cantidad: Number
        }
    ],
    cantidad: Number,
    total: Number
});

module.exports = mongoose.model("ventas", ventasSchema);