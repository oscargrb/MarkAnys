const express = require('express');

const { verify } = require('jsonwebtoken');
const { getPointSalesByClient, createPointSale } = require('../Controllers/Point_sale_controller');
const router = express.Router();


router.get('/find/:ClientID', verify, getPointSalesByClient)
router.post('/new/:ClientID', verify, createPointSale)

module.exports = router