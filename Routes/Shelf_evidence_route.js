const express = require('express');
const router = express.Router()
const multer  = require('multer');
const { addShelfEvidence } = require('../Controllers/shelf_evidence_controller');
const verifyJWT = require('../Middleware/autentication');
const storage = multer.memoryStorage()
const upload = multer({storage: storage})


router.post('/new_evidence/:UserID', verifyJWT, upload.array('photos', 3), addShelfEvidence)


module.exports = router