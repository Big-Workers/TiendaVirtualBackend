const getProductosCarrito = require("./getProductosCarrito");
const addProductosCarrito = require("./addProductosCarrito");
const putProductosCarrito = require("./putProductosCarrito");
const deleteProductosCarrito = require("./deleteProductosCarrito");
const getResumenCarrito = require("./getResumenCarrito");
const putResumenCarrito = require("./putResumenCarrito");
const vaciarCarrito = require("./vaciarCarrito");

module.exports = {
    getProductosCarrito,
    addProductosCarrito,
    putProductosCarrito,
    deleteProductosCarrito,
    getResumenCarrito,
    putResumenCarrito,
    vaciarCarrito
}