const mongoose = require("mongoose");

const resumenCompraSchema = mongoose.Schema({
    cantidad: Number,
    total: Number,
});

module.exports = mongoose.model("resumenCompra", resumenCompraSchema);