const express = require('express');
const router = express.Router()
const multer  = require('multer');
const { addShelfEvidence, findOneEvidence, sendSomeEvidence } = require('../Controllers/shelf_evidence_controller');
const verifyJWT = require('../Middleware/autentication');
const storage = multer.memoryStorage()
const upload = multer({storage: storage})


router.post('/new_evidence/', verifyJWT, upload.array('photos', 3), addShelfEvidence)
router.get('/get_evidence/:EvidenceID', verifyJWT, findOneEvidence)
router.get('/client_evidence/:ClientID', verifyJWT, sendSomeEvidence)

module.exports = router