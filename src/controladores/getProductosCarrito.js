const carrito = require("../modelo/carrito");

const getProductosCarrito = async (req, res) => {
    carrito.find(function(err, carrito){
        if (err) return console.err(err);
        res.status(200).json(carrito);
    });
};

module.exports = getProductosCarrito;