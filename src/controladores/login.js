const bcrypt = require('bcrypt');
const Usuario = require('../modelo/usuario');

const login = async (req, res) => {
    const{email, contraseña} = req.body;
    
    Usuario.findOne({email}).then((usuario) => {
        if(!usuario){
        return res.json({mensaje: "Usuario no encontrado"})
        }
        
        bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta)=> {
            if (esCorrecta){
                const {id, nombre, rol} = usuario;

                res.json({mensaje: 'Usuario logueado correctamente',
                usuario: {
                    id,
                    nombre,
                    rol
                },
            });
        } else {
            return res.json({mensaje: 'Contraseña incorrecta'});
            }            
        });
    });
};

module.exports = login