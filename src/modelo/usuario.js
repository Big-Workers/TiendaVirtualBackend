const mongoose =require ("mongoose");
const { Schema } = mongoose;


const usuarioSchema = new Schema ({

    idusuario:{type:Number},
    nombre: { type: String, require: true},
    email: { type: String, require: true, unique:true},
    telefono: { type: Number, require: true},
    direccion: { type: String, require: true},
    contraseña: { type: String, require: true},
    rol:{type:String}

});


module.exports =  mongoose.model("usuario", usuarioSchema);



// const { model, Schema, default: mongoose } = require ("mongoose");
// const express =require ("express");
// const router =express.Router();