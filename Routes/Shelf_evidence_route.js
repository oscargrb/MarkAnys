const express = require('express');
const router = express.Router()
const multer  = require('multer');
const { addShelfEvidence, findOneEvidence, sendSomeEvidence, sendEvidenceByUser } = require('../Controllers/shelf_evidence_controller');
const verifyJWT = require('../Middleware/autentication');
const storage = multer.memoryStorage()
const upload = multer({storage: storage})


router.post('/new_evidence/', verifyJWT, upload.array('photos'), addShelfEvidence)
router.get('/get_evidence/:EvidenceID', verifyJWT, findOneEvidence)
router.get('/client_evidence/:ClientID', verifyJWT, sendSomeEvidence)
router.get('/user_evidences/', verifyJWT, sendEvidenceByUser)

module.exports = router