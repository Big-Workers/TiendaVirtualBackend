const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
//const rutas = require("./src/rutas/productos.js");

const BD = require("./src/conexion/conexion.js");
const esquemaProductos = require("./src/modelo/productos.js");
const CORS = require("cors");

const port = 5000;
const app = express();

app.use(bodyParser.json())
app.use(CORS())

mongoose.connect(BD.mongoURI,{useNewUrlParser : true});

app.listen(port, () => {
    console.log ("ejecuto la app en el puerto "+ port);
});
/*
app.use("/", rutas)
*/

//listar todos los productos
app.get('/productos',(req, res) =>{
    esquemaProductos.find(function(err, esquemaProductos){
        if (err) return console.err(err);
        res.status(200).json(esquemaProductos); 
    });
});


//listar productos con stock
app.get('/productosStock',(req, res) =>{
    esquemaProductos.find({stock:{$gte:1}}, function(err, esquemaProductos){
        if (err) return console.err(err);
        res.send(esquemaProductos)
    });
});

//crear nuevos productos
app.post('/nuevoProducto',(req, res) => {
    nuevoProducto = new esquemaProductos(req.body)
    esquemaProductos.create(nuevoProducto)
    res.send("Producto creado")
});



//actualizar stock de los productos
app.put('/modificarStock/:_id',(req, res) => {
    const {_id}= req.params
    const {stock}=req.body
    esquemaProductos.updateOne({_id: _id},{stock: stock}, function(err, esquemaProductos){
        if (err) return console.err(err);
        console.log(esquemaProductos);
    });
    res.send("Producto modificado")
});


//modificar productos
app.put('/modificarProducto/:_id',(req, res) => {
    const {_id}= req.params
    const {referencia, nombre, descripcion, stock, imagen, precio}=req.body
    esquemaProductos.updateOne({_id: _id},{referencia:referencia, nombre:nombre, descripcion:descripcion, stock:stock, imagen:imagen, precio:precio }, function(err, esquemaProductos){
        if (err) return console.err(err);
        console.log(esquemaProductos);
    });
    res.send("Producto modificado")
});

//mostrar producto por id
app.get('/productos/:_id',(req, res) =>{
    const {_id}=req.params
    esquemaProductos.find({_id:_id}, function(err, esquemaProductos){
        if (err) return console.err(err);
        res.send(esquemaProductos)
    });
});

