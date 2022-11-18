const esquemaProductos = require("../modelo/productos");

const deleteProductos = async (req, res) => {
    const {_id}= req.params
    const estado = false
    esquemaProductos.updateOne({_id: _id},{estado: estado}, function(err, esquemaProductos){
        if (err) return console.err(err);
    });
    res.send("Producto eliminado")
};

module.exports = deleteProductos;