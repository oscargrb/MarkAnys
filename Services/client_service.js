// only crud methods
const { v4 } = require('uuid');
const { Client } = require('../Models/client_model');


// find
const findClientByName = (name) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await Client.findOne({where: {Name: name}})
            resolve(result)
        }catch(e){
            reject(e)
        }
    })
}
// create
const newClient = ({
    name,
    enable = true
}) => {
    return new Promise(async (resolve, reject)=>{
        try{
            const letsNewClient = await Client.create({
                ID: v4(),
                Name: name,
                Enable: enable
            })

            resolve({ok: true, client: letsNewClient})
        }catch(e){
            reject(e)
        }
    })
}
// edit
/* const updateByID = (ID) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await User.findOne({where: {Username: username}})
            resolve(result)
        }catch(e){
            reject(e)
        }
    })
} */
// delete

//Util


module.exports = {
    findClientByName,
    newClient
}