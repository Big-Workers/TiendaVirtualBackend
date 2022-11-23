const express = require ("express");
const usuario = require("../modelo/usuario");
const router = express.Router();

//definimos modelo para hacer consulta en la base de datos
const Usuario =require ("../modelo/usuario");


// listar usuarios (login) hacer para un usaurio idividual

router.get ("/", async (req, res)  =>{
    const usuarios =await Usuario.find()
    .then((data)=>res.json(data))
    .catch ((error)=>res.json(error))
});

router.get ("/:id", async (req, res)  =>{
    const usuario = await Usuario.findById ( req.params.id);
    res.json(usuario);

});

//Crear nuevos usuarios ( registro)
router.post ("/", async (req, res)=>{
    const {id, nombre, email, telefono, direccion, contraseña} = req.body
    const usuario= new Usuario ({id, nombre, email, telefono, direccion, contraseña, rol:"cliente"});
    console.log (usuario);
    await usuario.save ();
    res.json(req.body);

});

//Actualizar Usuarios (perfil)
router.put("/:id", async (req, res)  =>{
    const {id, nombre, email, telefono, direccion, contraseña, rol} = req.body
    const newUsuario = ({id, nombre, email, telefono, direccion, contraseña, rol});
    await Usuario.findByIdAndUpdate(req. params. id, newUsuario);
    res.json(req.body);
});

// Eliminar usuario
router.delete ("/:id", async (req, res)=>{
    await Usuario.findByIdAndRemove(req. params. id);
    res.json(req.body);

});

module. exports = router;