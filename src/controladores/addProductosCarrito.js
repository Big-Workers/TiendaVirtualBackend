const carrito = require("../modelo/carrito");
const producto = require("../modelo/productos");

const addProductosCarrito = async (req, res) => {
    const {nombre, imagen, precio} = req.body;

    //revisar si tenemos producto
    const estaEnProductos = await producto.findOne({ nombre });

    //revisar si todos los campos tienen información
    const noEstaVacio = nombre !== "" && imagen !== "" && precio !== "";

    //revisar si el producto ya está en el carrito
    const estaEnElCarrito = await carrito.findOne({ nombre });

    //si no tenemos el producto
    if (!estaEnProductos) {
        res.status(400).json({
            mensaje: "Este producto no se encuentra en nuestra base de datos",
        });

        //si nos envian algo y no esta en el carrito lo agregamos
    } else if (noEstaVacio && !estaEnElCarrito) {
        const nuevoProductoEnCarrito = new carrito ({nombre, imagen, precio, cantidad: 1});

        //actualizamos la propiedad enCarrito: true en nuestros productos
        await producto.findByIdAndUpdate(
            estaEnProductos?._id,
            { enCarrito: true, nombre, imagen, precio},
            { new: true }
        ) 
        .then((producto) => {
            nuevoProductoEnCarrito.save();
            res.json({
                mensaje:"El producto fue agregado al carrito",
                producto,
            });
        })
        .catch((error) => console.error(error));

        //y si esta en el carrito avisamos
    } else if (estaEnElCarrito) {
        res.status(400).json({
            mensaje: "El producto ya esta en el carrito", 
        });
    }
};

module.exports = addProductosCarrito;