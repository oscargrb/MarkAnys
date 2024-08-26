const { newShelfEvidence, findByIDAndGetMedia, findShelfEvidenceByClient } = require("../Services/shelf_evidence_service")

const addShelfEvidence = async (req, res) =>{
    try{
        await newShelfEvidence({
            client_id: req.body.client_id,
            point_sale_id: req.body.point_sale_id,
            user_id: req.params.UserID,
            geolocation: req.body.geolocation,
            Photos: req.files
        })

        res.json({ok:true, info: "Evidence saved!"})

    }catch(e){
        res.json({ok: false, info: "Cant save Evidence"})
    }
}

const findOneEvidence = async (req, res) =>{
    try{
        console.log(req.params.EvidenceID)
        const evidence = await findByIDAndGetMedia(req.params.EvidenceID)
        res.json({ok: true, evidence})
    }catch(e){
        res.json({ok: false, info: "Cant find evidence"})
    }
}

const sendSomeEvidence = async (req, res) =>{
    try{
        
        const evidence = await findShelfEvidenceByClient(/* 'd3075db5-dafb-4627-8a6d-633b002f2e4a' */ req.params.ClientID)
        res.json({ok: true, evidence})
    }catch(e){
        res.json({ok: false, info: "Cant find evidence"})
    }
}

module.exports = {
    addShelfEvidence,
    findOneEvidence,
    sendSomeEvidence
}