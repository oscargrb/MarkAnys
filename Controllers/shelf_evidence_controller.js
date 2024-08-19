const { newShelfEvidence } = require("../Services/shelf_evidence_service")

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
        res.json({ok: false, info: e})
    }
}

module.exports = {
    addShelfEvidence
}