const getProductos = require("./getProductos");
const getProductosDisponibles = require("./getProductosDisponibles");
const getProductosId = require("./getProductosId");
const postProductos = require("./postProductos");
const putProductosStock = require("./putProductosStock");
const putProductos = require("./putProductos");
const deleteProductos = require("./deleteProductos");

module.exports = {
    getProductos,
    getProductosDisponibles,
    postProductos,
    putProductosStock,
    putProductos,
    getProductosId,
    deleteProductos
}