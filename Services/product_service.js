// only crud methods
const { v4 } = require('uuid');
const { Product } = require('../Models/products_model');

// find
const findByClient =  (client_ID) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await Product.findAll({
                where: {Client_ID: client_ID},
                attributes:[
                    'ID',
                    'Name'
                ]
            })
            resolve(result)
        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    findByClient
}