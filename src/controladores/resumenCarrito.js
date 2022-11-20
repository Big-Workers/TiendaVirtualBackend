const carrito = require("../modelo/carrito");


const resumenCarrito = async (req, res) => {
    const { query } = req.query;

    //buscamos el producto en el carrito
    const productosEnCarrito = await carrito.find();

    //si el query es cantidad o precio
    if (query === "cantidad") {
        var totalProductos = 0;
        for (i of productosEnCarrito) {
            totalProductos = totalProductos + i.cantidad;
        }
        res.send(`La cantidad de productos del carrito son: ${totalProductos}`)

    } else if (query === "precio"){
        var precioTotal = 0;
        for (i of productosEnCarrito) {
            precioTotal = precioTotal + (parseInt(i.precio)*i.cantidad);
        }
        res.send(`El valor total de la compra es: ${precioTotal}`)
    }
};

module.exports = resumenCarrito;