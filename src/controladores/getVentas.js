const venta = require("../modelo/ventas");
const Carrito = require("../modelo/carrito");
const carrito = require("../modelo/carrito");

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
    
  const enCarrito = await carrito.find();

  nuevaVenta = new venta({
    fecha: hoy.toLocaleDateString(),
    productos: enCarrito, //falta obtener array de carrito
    cantidad: 0, //falta sumar cantidad
    total: 1, //falta obtener el total
  });
  nuevaVenta.save();

  console.log("Nueva venta = ", nuevaVenta);
  res.json({ msg: "venta guardada" });
};
