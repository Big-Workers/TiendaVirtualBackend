const esquemaProductos = require("../modelo/productos");

const getProductos = async (req, res) => {
    esquemaProductos.find({estado: true}, function(err, esquemaProductos){
        if (err) return console.err(err);
        res.status(200).json(esquemaProductos);
    });
};

module.exports = getProductos;