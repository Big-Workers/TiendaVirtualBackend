const express = require("express");
const fetch = require("node-fetch");
const ventaSchema = require("../modelo/ventas");
const Carrito = require("../modelo/carrito");
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


let productosCarrito = fetch("http://localhost:5000/getProductosCarrito")
  .then((data)=> data.json())
  .then((data) => {console.log(data)
    return data;
  })
  .catch((err)=> console.log("ocurrio un error", err))


router.get("/ventass", (req,res)=>{
  console.log(productosCarrito)
})



module.exports = router;
