const { findByClient, CreateWithClient } = require("../Services/point_sale_service")

const getPointSalesByClient = async (req, res)=>{
    try{
        const result = await findByClient(req.params.ClientID)
        
        res.json({ok: true, results: result})
    }catch(e){
        res.json({ok: false, info: e})
    }
}
const createPointSale = async (req, res)=>{
    try{
        await CreateWithClient({client_ID: req.params.ClientID, name:req.body.name})
        
        res.json({ok: true, info: "Point Sale Created Sucessfull!!"})
    }catch(e){
        res.json({ok: false, info: e})
    }
}

module.exports = {
    getPointSalesByClient,
    createPointSale
}