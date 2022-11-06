const express = require('express');
const mongoose = require('mongoose');

//settings

const app = express(); //inicializar express
const port = 5000; // asignacion de puerto

//middlewares

app.use(express.json()); //para que json pueda ser leido
//app.use('/api', userRoute);

//routes

app.get('/', (req,res)=>{
    res.send("Conexion exitosa")
})

//server listenig

app.listen(port, ()=> console.log("Servidor listo y escuchando"))