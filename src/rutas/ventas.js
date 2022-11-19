const express = require("express");
const ventaSchema = require("../modelo/ventas");
const router = express.Router();

//CRUD
//obtener todos funcionando
router.get("/ventas", (req, res) => {
  ventaSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ msg: err }));

  console.log("[GET Ventas] Obteniendo todos los datos");
});

module.exports = router;
