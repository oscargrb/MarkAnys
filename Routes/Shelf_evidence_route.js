const express = require('express');
const router = express.Router()
const multer  = require('multer');
const { addShelfEvidence, findOneEvidence } = require('../Controllers/shelf_evidence_controller');
const verifyJWT = require('../Middleware/autentication');
const storage = multer.memoryStorage()
const upload = multer({storage: storage})


router.post('/new_evidence/:UserID', verifyJWT, upload.array('photos', 3), addShelfEvidence)
router.get('/get_evidence/:EvidenceID', verifyJWT, findOneEvidence)

module.exports = router