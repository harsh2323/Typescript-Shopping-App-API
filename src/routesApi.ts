import { Router } from "express-serve-static-core";

const router: Router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: "Success",
        message: "Welcome to the typescript-express API"
    });
});

var productController = require('./Controllers/products.controller');

router.route('/products-name')
    .get(productController.index)
    .post(productController.newProduct)
router.route('/products-name/:product_id')
    .get(productController.view)
module.exports = router;