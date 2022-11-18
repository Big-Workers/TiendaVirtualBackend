const carrito = require("../modelo/carrito");

const getProductosCarrito = async (req, res) => {
    const productosCarrito = await carrito.find();

    if (productosCarrito) {
        res.json({productosCarrito});
    } else {
        res.json({mensaje: "No hay productos en el carrito"});
    }
};

module.exports = getProductosCarrito;