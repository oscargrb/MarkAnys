const express = require('express');
const { addUser, login, verifyUser, logoutSesion } = require('../Controllers/User_controller');
const { verify } = require('jsonwebtoken');
const verifyJWT = require('../Middleware/autentication');
const router = express.Router();


router.post('/new', addUser)
router.post('/login', login)
router.get('/verify', verifyJWT, verifyUser)
router.get('/logout', verifyJWT, logoutSesion)

module.exports = router