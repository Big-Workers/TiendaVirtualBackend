const getUsuarios = require("./getUsuarios");
const register = require('./register')
const login = require('./getUserById')
const getUserById = require('./getUserById')
//const getUsuariosId = require("./getUsuariosId");
//const postUsuarios = require("./postUsuarios");
const editUser = require("./editUser");
//const delUsuarios = require("./delUsuarios");

module.exports = {
  getUsuarios,
  register,
  login,
  getUserById,
  //  getUsuariosId,
  //  postUsuarios,
  editUser,
  //  delUsuarios
}