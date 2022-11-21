const resumenCompra = require("../modelo/resumenCompra");

const getResumenCarrito = async (req, res) => {
    resumenCompra.find(function(err, resumenCompra){
        if (err) return console.err(err);
        res.status(200).json(resumenCompra);
    });
};

module.exports = getResumenCarrito;