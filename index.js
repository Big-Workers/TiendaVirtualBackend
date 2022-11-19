const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");

const BD = require("./src/conexion/conexion.js");
const esquemaProductos = require("./src/modelo/productos.js");//importación esquema de productos
const esquemaCarrito = require("./src/modelo/carrito.js");//importación esquema de carrito
const CORS = require("cors");

const port = 5000;
const app = express();

app.use(bodyParser.json())
app.use(CORS())

mongoose.connect(BD.mongoURI,{useNewUrlParser : true});

app.listen(port, () => {
    console.log ("ejecuto la app en el puerto "+ port);
});

//----------------------PRODUCTOS---------------------------------------------
const controllersProd = require("./src/controladores/productos");

//listar todos los productos con estado true
app.get("/productos", controllersProd.getProductos);

//listar productos con stock y estado true
app.get("/productosStock", controllersProd.getProductosDisponibles);

//crear nuevos productos
app.post("/nuevoProducto", controllersProd.postProductos);

//actualizar stock de un producto enviando el id
app.put("/modificarStock/:_id", controllersProd.putProductosStock);

//modificar producto enviando el id
app.put("/modificarProducto/:_id", controllersProd.putProductos);

//mostrar producto filtrando por id
app.get("/productos/:_id", controllersProd.getProductosId);

//eliminar productos actualizando el estado a false
app.put("/eliminarProducto/:_id", controllersProd.deleteProductos);


//----------------------CARRITO---------------------------------------------
const controllers = require("./src/controladores/carrito");

//get
app.get("/productosCarrito", controllers.getProductosCarrito);

//post
app.post("/productosCarrito", controllers.addProductosCarrito);

//put
app.put("/productosCarrito/:_id", controllers.putProductosCarrito);

//delete
app.delete("/productosCarrito/:_id", controllers.deleteProductosCarrito);

const rutaVentas = require ("./src/rutas/ventas")

app.use("/api", rutaVentas);