const venta = require("../modelo/ventas");
const carrito = require("../modelo/carrito");
const resumenCompra = require("../modelo/resumenCompra");

const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

exports.GetVentas = (req, res) => {
  venta
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ msg: err }));

  console.log("[GET Ventas] Obteniendo todos los datos");
};

exports.PostVentas = async (req, res) => {

  //Obtiene productos del carrito
  const enCarrito = await carrito.find();

  //obtiene resumen de compra
  const resumen = await resumenCompra.find();

  //almacena la venta en la bd
  nuevaVenta = new venta({
    fecha: hoy.toLocaleDateString(),
    productos: enCarrito,
    resumen: resumen
  });
  nuevaVenta.save();
  res.json({ msg: "venta guardada" });
};
