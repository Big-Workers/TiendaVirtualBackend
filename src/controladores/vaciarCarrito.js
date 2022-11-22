const carrito = require("../modelo/carrito");
const producto = require("../modelo/productos");

const vaciarProductosCarrito = async (req, res) => {

    //buscamos el producto en el carito
    const productoEnCarrito = await carrito.find();

    for (x of productoEnCarrito) {

        var prodGeneral = await producto.findOne({nombre:x.nombre});
        
        producto.updateOne({ nombre: x.nombre }, {
            stock: prodGeneral.stock - x.cantidad,
            enCarrito: false
        },
            function (err, producto) {
                if (err) return console.err(err);
            });
        

        await carrito.findByIdAndDelete(x._id);

    }
    res.send("Carrito vacio y stock descontado")
};

module.exports = vaciarProductosCarrito;