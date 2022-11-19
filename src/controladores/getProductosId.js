const esquemaProductos = require("../modelo/productos");

const getProductosId = async (req, res) => {
    const {_id}=req.params
    esquemaProductos.find({_id:_id}, function(err, esquemaProductos){
        if (err) return console.err(err);
        res.send(esquemaProductos)
    });
};

module.exports = getProductosId;