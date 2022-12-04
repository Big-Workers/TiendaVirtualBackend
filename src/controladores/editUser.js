const bcrypt = require('bcrypt');
const usuario = require("../modelo/usuario");

const editUser = async (req, res) => {
    const { _id } = req.params
    const { nombre, email, telefono, direccion, contraseña } = req.body;

    const userForEmail = await usuario.findOne({ email })

    function modificarUser (user) {
        bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
            if (error) res.json({ error });
            else {
                usuario.updateOne({ _id: _id }, {
                    nombre: nombre,
                    email: email,
                    telefono: telefono,
                    direccion: direccion,
                    contraseña: contraseñaHasheada
                })
                    .then((user) => {
                        res.json({ mensaje: 'Usuario modificado correctamente', usuario });
                    })
                    .catch(error => console.error(error));
            }
        });
    }

    usuario.findById({ _id }).then((user) => {
        if (!user) {
            return res.json({ mensaje: "El usuario no existe" });

        } else if (!nombre || !email || !telefono || !direccion || !contraseña) {
            return res.json({ mensaje: "Faltan datos del usuario" });

        } else if (!userForEmail) {
            modificarUser(user)

        } else if (_id == userForEmail._id){
            modificarUser(user)

        } else {    
            return res.json({ mensaje: "El email ingresado ya existe" })
        }
    });
};

module.exports = editUser;