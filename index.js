const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const morgan = require ("morgan");
const path = require ("path");




const BD = require("./src/conexion/conexion.js");
const esquemaProductos = require("./src/modelo/productos.js");//importación esquema de productos
const esquemaCarrito = require("./src/modelo/carrito.js");//importación esquema de carrito

const CORS = require("cors");

const port = proccess.env.PORT || 5001;
const app = express();

app.use(morgan ("dev"));
app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
app.use(CORS())

mongoose.connect(BD.mongoURI,{useNewUrlParser : true}, console.log("[MONGO] Conectado a: Artesanias"));


app.listen(port, () => {
    console.log ("[SERVIDOR] Conectado en el puerto: "+ port);
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
app.get("/getProductosCarrito", controllers.getProductosCarrito);

//post
app.post("/postProductosCarrito", controllers.addProductosCarrito);

//put
app.put("/putProductosCarrito/:_id", controllers.putProductosCarrito);

//delete
app.delete("/delProductosCarrito/:_id", controllers.deleteProductosCarrito);

//resumen de compra en carrito
app.get("/getResumenCarrito", controllers.getResumenCarrito);

//actualizar resumen carrito
app.get("/putResumenCarrito", controllers.putResumenCarrito);

//actualizar resumen carrito
app.get("/vaciarCarrito", controllers.vaciarCarrito);

//Rutas Usuario


app.use( "/api/usuario", require("./src/rutas/usuario.routes"));

// rutas o Url que tendrá el servidor
//__________________________VENTAS___________________________________________
const ventas = require ("./src/rutas/ventas")

app.use(ventas);