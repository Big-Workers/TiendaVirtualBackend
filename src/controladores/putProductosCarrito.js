const carrito = require("../modelo/carrito");

const putProductosCarrito = async (req, res) => {
    const { _id } = req.params;
    const { query } = req.query;
    const body = req.body;

    //buscamos el producto en el carrito
    const productoBuscado = await carrito.findById(_id);

    //si no hay query add o del
    if (!query) {
        res.status(404).json({mensaje: "Debes enviar una query"});

        //si esta el producto en el carrito y quiero agregar
    } else if ( productoBuscado && query === "add") {
        body.cantidad = body.cantidad + 1;

        await carrito.findByIdAndUpdate(_id, body, {
            new: true,
        }).then((producto) => {
            res.json({
                mensaje: `El producto: ${producto.nombre} fue actulizado`,
                producto,
            });
        });

        //si esta el producto en el carrito y quiero sacar
    } else if (productoBuscado && query === "del") {
        body.cantidad = body.cantidad - 1;

        await carrito.findByIdAndUpdate(_id, body, {
            new: true,
        }).then((producto) => 
            res.json({
                mensaje: `El producto: ${producto.nombre} fue actualizado`,
                producto,
            })
        );
    } else {
        res.status(400).json({mensaje: "Ocurrio un error" });
    }
};

module.exports = putProductosCarrito;