// only crud methods
const { v4 } = require('uuid');
const { User } = require("../Models/user_model")
const bcrypt = require('bcrypt');

// find
const findUserByUsername = (username) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await User.findOne({where: {Username: username}})
            resolve(result)
        }catch(e){
            reject(e)
        }
    })
}
// create
const newUser = ({
    username,
    pwd,
    client_id,
    enable = true
}) => {
    return new Promise(async (resolve, reject)=>{

        try{
            const genPass = await bcrypt.hash(
                pwd, Number(process.env.SALT_ROUNDS)
            )

            console.log(genPass)

            const letsNewUser = await User.create({
                Username: username,
                ID: v4(),
                Pwd: genPass,
                Client_ID: client_id,
                Enable: true
            })

            resolve({ok: true, user: letsNewUser})
        }catch(e){
            reject(e)
        }
    })
}
// edit
const updateByID = (ID) =>{
    /* return new Promise(async (resolve, reject)=>{
        try{
            const result = await User.findOne({where: {Username: username}})
            resolve(result)
        }catch(e){
            reject(e)
        }
    }) */
}
// delete

//Util
const createUser = (user) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const findUser = await findUserByUsername(user.username)
            
            if (!findUser){
                await newUser(user)
                resolve({ok: true})
            }else{
                reject("the user already exists")
            }
        }catch(e){
            reject(e)
        }
    })
}

const LoginUser = ({username, pwd}) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const findUser = await findUserByUsername(username)
            if (findUser){
                const comparePwd = await bcrypt.compare(pwd, findUser.Pwd)
                if(comparePwd){
                    resolve({ok: true})
                }else{
                    reject("Pwd is incorrect")
                }
            }else{
                reject("the user doesnt exists")
            }
        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    findUserByUsername,
    createUser,
    LoginUser
}