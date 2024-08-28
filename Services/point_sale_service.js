const { v4 } = require('uuid');
const { Point_Sale } = require('../Models/point_sale_model');

// find
const findByClient =  (client_ID) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await Point_Sale.findAll({
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
const findByID =  (Id) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await Point_Sale.findOne({
                where: {ID: Id},
                attributes:[
                    'ID',
                    'Name',
                    'Client_ID'
                ]
            })
            resolve(result)
        }catch(e){
            reject(e)
        }
    })
}
// create
const CreateWithClient =  ({client_ID, name}) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await Point_Sale.create({
                ID: v4(),
                Client_ID: client_ID,
                Name: name,
                Enable: true
            })
            resolve(result)
        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    findByClient,
    CreateWithClient,
    findByID
}