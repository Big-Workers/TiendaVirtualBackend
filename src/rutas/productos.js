const express = require("express");
const router = express.Router();
const esquemaProductos = require("../modelo/productos.js");

const todosLosProductos = (
    router.get("/productos",(req, res)=>{
        esquemaProductos
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({msg:err}));
        console.log("[GET Producto] Obteniendo todos los datos");
    })
);
module.export = todosLosProductos