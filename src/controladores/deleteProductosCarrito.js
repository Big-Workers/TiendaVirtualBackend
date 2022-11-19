const carrito = require("../modelo/carrito");
const producto = require("../modelo/productos");

const deleteProductosCarrito = async (req, res) => {
    const { _id } = req.params;

    //buscamos el producto en el carito
    const productoEnCarrito = await carrito.findById(_id);

    //buscamos el producto en la DB por el nombre que esta en el carrito
    const { nombre, imagen, precio } = await producto.findOne({
        nombre: productoEnCarrito.nombre,
    });

    //buscamos y eliminamos el producto con la id
    await carrito.findByIdAndDelete(_id);

    await producto.findOneAndUpdate(
        {nombre, imagen, precio},
        { enCarrito: false, nombre, imagen, precio },
        { new: true }
    ) 
    .then((producto) => {
        res.json({
            mensaje: `El producto ${producto.nombre} fue eliminado del carrito`,
        });
    })
    .catch((error) => res.json({ mensaje: "Hubo un error"}));
};

module.exports = deleteProductosCarrito;