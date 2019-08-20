const prod = require('../routes/productModel');

// Handles Index actions
exports.index = function(req, res) {
    prod.get(function(err, contact){
        if(err) {
            res.json({
                status: 'error',
                message: 'error'
            })
        }
        res.json({
            status: 'success',
            message: 'Successfully retrieved products',
            data: contact
        })
    })
}

// Handles new product creation
exports.newProduct = function (req, res) {
    var product = new product();
    product.name = req.body.name ? req.body.name : prod.name;
    product.email = req.body.email;
    product.phone = req.body.phone;
    product.products = req.body.products;

    product.save((err) => {
        if(err) {
            res.json(err)
        }
        res.json({
            status: 'Success',
            message: 'Successfully saved the products',
            data: prod
        })
    })
}

// Handles product view info
exports.view = function(req, res) {
    prod.findById(req.params.product_id, function(err, prod) {
        if(err) {
            res.json(err)
        }
        res.json({
            status: 'Success',
            data: prod
        })
    })
}