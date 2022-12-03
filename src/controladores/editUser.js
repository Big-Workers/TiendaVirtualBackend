const bcrypt = require('bcrypt');
const usuario = require("../modelo/usuario");

const editUser = async (req, res) => {
    const { _id } = req.params
    const { nombre, email, telefono, direccion, contraseña } = req.body;

    const userToEdit = await usuario.findOne({ email })

    console.log({ userToEdit });

    usuario.findById({ _id }).then((user) => {

        console.log("usuarioPorId" + user._id, "usuarioPorEmail" + userToEdit._id)

        if (!user) {
            return res.json({ mensaje: "El usuario no existe" });
        } else if (!nombre || !email || !telefono || !direccion || !contraseña) {
            return res.json({ mensaje: "Faltan datos del usuario" });
        } else if (user._id === userToEdit._id) {
            bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
                if (error) res.json({ error });
                else {
                    const usuarioEditado = new usuario({
                        nombre,
                        email,
                        telefono,
                        direccion,
                        contraseña: contraseñaHasheada
                    });
                    usuario.updateOne({ _id: _id }, { usuarioEditado })
                        .then((user) => {
                            res.json({ mensaje: 'Usuario modificado correctamente', user });
                        })
                        .catch(error => console.error(error));
                }

            });
        } else {
            return res.json({ mensaje: "El email ingresado corresponde a otro usuario" })
        }
    });
    /*
    bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {
            usuario.updateOne({ _id: _id }, {
                nombre: nombre,
                email: email,
                telefono: telefono,
                direccion: direccion,
                contraseña: contraseñaHasheada
            },
                console.log({ usuario }),
                function (err, usuario) {
                    if (err) return console.err(err);
                    else {
                        res.json({ mensaje: 'Usuario modificado correctamente', usuario });
                    }
                })
        }
    })*/
};

module.exports = editUser;