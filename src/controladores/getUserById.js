const Usuario = require("../modelo/usuario");

const getUserById = async (req, res) => {
    const {_id}= req.params

    if(_id.length === 24){
        Usuario.findById(_id).then((user)=>{
            if(!user){
                return res.json({mensaje: "No se encontró ningún usuario con esa ID"});
            } else {
                const{ _id, contraseña, __v, ...resto } = user
                res.json(user);
            }
        });
    } else {
        res.json ({ mensaje: " ID de usuario incorrecto"});        
    }
};

module.exports = getUserById;