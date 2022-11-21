const esquemaProductos = require("../modelo/productos");

const getProductosDisponibles = async (req, res) => {
    esquemaProductos.find({stock:{$gte:1}, estado: true}, function(err, esquemaProductos){
        if (err) return console.err(err);
        res.send(esquemaProductos)
    });
};

module.exports = getProductosDisponibles;