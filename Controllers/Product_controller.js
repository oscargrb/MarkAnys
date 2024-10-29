const { findByClient } = require("../Services/product_service")
const { getClientByID } = require("../Services/user_service")

const getProductsByClient = async (req, res)=>{
    try{
        const user = await getClientByID(req.UserID)
        const result = await findByClient(user.dataValues.Client_ID)
        
        res.json({ok: true, results: result})
    }catch(e){
        res.json({ok: false, info: e})
    }
}

module.exports = {
    getProductsByClient
}