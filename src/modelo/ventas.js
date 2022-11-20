const mongoose = require("mongoose");

const ventasSchema = mongoose.Schema({
  fecha: String,
  productos: [],
  cantidad: Number,
  total: Number,
});

module.exports = mongoose.model("ventas", ventasSchema);