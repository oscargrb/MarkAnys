const express = require('express');

const verifyJWT = require('../Middleware/autentication');
const { getProductsByClient } = require('../Controllers/Product_controller');
const router = express.Router();


router.get('/find', verifyJWT, getProductsByClient)

module.exports = router