const esquemaProductos = require("../modelo/productos");

const putProductos = async (req, res) => {
    const {_id}= req.params
    const {referencia, nombre, descripcion, stock, imagen, precio}=req.body
    esquemaProductos.updateOne({_id: _id},{
        eferencia:referencia, 
        nombre:nombre, 
        descripcion:descripcion, 
        stock:stock, imagen:imagen, 
        precio:precio }, 
        function(err, esquemaProductos){
        if (err) return console.err(err);
    });
    res.send("Producto modificado")
};

module.exports = putProductos;