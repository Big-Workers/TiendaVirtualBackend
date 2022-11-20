const express = require("express");
const router = express.Router();
const controllerVenta = require("../controladores/getVentas")

//obtener todos los productos - funcionando
router.get("/ventas", controllerVenta.GetVentas);
router.post("/ventas", controllerVenta.PostVentas);

module.exports = router;