const esquemaProductos = require("../modelo/productos");

const putProductosStock = async (req, res) => {
    const {_id}= req.params
    const {stock}=req.body
    esquemaProductos.updateOne({_id: _id},{stock: stock}, function(err, esquemaProductos){
        if (err) return console.err(err);
    });
    res.send("Producto modificado")
};

module.exports = putProductosStock;