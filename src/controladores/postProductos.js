const esquemaProductos = require("../modelo/productos");

const postProductos = async (req, res) => {
    nuevoProducto = new esquemaProductos(req.body)
    esquemaProductos.create(nuevoProducto)
    res.send("Producto creado")
};

module.exports = postProductos;