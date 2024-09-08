const express = require('express');


const { getPointSalesByClient, createPointSale } = require('../Controllers/Point_sale_controller');
const verifyJWT = require('../Middleware/autentication');
const router = express.Router();


router.get('/find/:ClientID', verifyJWT, getPointSalesByClient)
router.post('/new/:ClientID', verifyJWT, createPointSale)

module.exports = router