import { Router } from "express-serve-static-core";

const router: Router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: "Success",
        message: "Welcome to the typescript-express API"
    });
});

var productController = require('./Controllers/queries');

router.route('/products-name')
    .get(productController.getUsers)
    .post(productController.postUsers)
// router.route('/products-name/:product_id')
//     .get(productController.view)
//     .post(productController.update)
//     .delete(productController.delete)
module.exports = router;