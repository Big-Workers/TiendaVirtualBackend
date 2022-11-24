const mongoose = require("mongoose");

const ventasSchema = mongoose.Schema({
  fecha: String,
  productos: [],
  resumen:[]
});

module.exports = mongoose.model("ventas", ventasSchema);