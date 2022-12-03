const usuarios = require("../modelo/usuario");

const getUsuarios = async (req, res) => {
    usuarios.find(function(err, usuarios){
        if (err) return console.err(err);
        res.status(200).json(usuarios);
    });
};

module.exports = getUsuarios;