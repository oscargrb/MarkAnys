const { findByClient, CreateWithClient } = require("../Services/point_sale_service")
const { getClientByID } = require("../Services/user_service")

const getPointSalesByClient = async (req, res)=>{
    try{
        const user = await getClientByID(req.UserID)
        const result = await findByClient(user.dataValues.Client_ID)
        
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