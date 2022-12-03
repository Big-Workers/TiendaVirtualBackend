const bcrypt = require('bcrypt');
const Usuario = require('../modelo/usuario');

const login = async (req, res) => {
    const{correo, contraseña} = req.body;
    
    Usuario.findOne({correo}).then((usuario) => {
        if(!usuario){
        return res.json({mensaje: "Usuario no encontrado"})
        }
        
        bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta)=> {
            if (esCorrecta){
                const {id, nombre} = usuario;

                res.json({nensaje: 'Usuario logueado correctamente',
                usuario: {
                    id,
                    nombre,
                },
            });
        } else {
            return res.json({mensaje: 'Contraseña incorrecta'});
            }            
        });
    });
};

module.exports = login