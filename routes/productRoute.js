const express = require('express');
const Product = require('../models/productModel')
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', createProduct);

// Update a Product
router.put('/:id', updateProduct);

// Delete a Product
router.delete('/:id', deleteProduct);

module.exports = router;