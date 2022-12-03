const bcrypt = require('bcrypt');
const Usuario = require('../modelo/usuario');


const register = async (req, res) => {
    const{nombre, email, telefono, direccion, contraseña} = req.body;
    const rol = "cliente";

    Usuario.findOne({email}). then((user) =>{
        if(user){
            return res.json({mensaje: "Ya existe un usuario con ese correo"});
        } else if (!nombre || !email || !telefono || !direccion || !contraseña){
            return res.json({mensaje: "Faltan datos del usuario"});
        } else {
            bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
               if (error) res.json({error});
                else {
                    const nuevoUsuario = new Usuario({
                      nombre,
                      email,
                      telefono,
                      direccion,
                      contraseña: contraseñaHasheada,                
                      rol: rol
                    });
                    nuevoUsuario.save()
                    .then((user) => {
                        res.json({mensaje: 'Usuario creado correctamente', user});
                    })
                    .catch(error => console.error(error));
                }
            });
        }
    });
};        

module.exports = register;