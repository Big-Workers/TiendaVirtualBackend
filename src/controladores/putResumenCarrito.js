const carrito = require("../modelo/carrito");
const resumenCompra = require("../modelo/resumenCompra");


const resumenCarrito = async (req, res) => {
    const { query } = req.query;

    //obtengo los productos del carrito
    const productosEnCarrito = await carrito.find();

    //si el query es cantidad o precio
    if (query === "cantidad") {

        //creo una variable para almacenar la cantidad de productos
        var totalProductos = 0;

        //recorro el los productos del carrito y sumo cantidades
        for (i of productosEnCarrito) {
            totalProductos = totalProductos + i.cantidad;
        }
        //actualizo la cantidad del total de productos en la tabla de resumencompras
        resumenCompra.updateMany({ cantidad: totalProductos },
            function (err, resumenCompra) {
                if (err) return console.err(err);
            });
        res.send(`La cantidad de productos del carrito son: ${totalProductos}`)

    } else if (query === "precio") {

        //creo una variable para almacenar los precios de los productos
        var precioTotal = 0;

        //recorro los productos del carrito, multiplico los precios por las cantidades
        for (i of productosEnCarrito) {
            precioTotal = precioTotal + (parseInt(i.precio) * i.cantidad);
        }

        //actualizo el precio total de la tabla de resumencompras
        resumenCompra.updateMany({ total: precioTotal },
            function (err, resumenCompra) {
                if (err) return console.err(err);
            });
        res.send(`El valor total de la compra es: ${precioTotal}`)
    }
};

module.exports = resumenCarrito;