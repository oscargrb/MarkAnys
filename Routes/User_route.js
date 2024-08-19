const express = require('express');
const { addUser, login } = require('../Controllers/User_controller');
const { verify } = require('jsonwebtoken');
const router = express.Router();


router.post('/new', addUser)
router.post('/login', login)

module.exports = router