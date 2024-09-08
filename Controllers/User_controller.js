const { createUser, LoginUser, findUserByUsername } = require("../Services/user_service")
const jwt = require('jsonwebtoken');

const addUser = async (req, res)=>{
    try{
        await createUser(req.body)
        
        res.json({ok: true, info: "User Created Sucessfull"})
    }catch(e){
        res.json({ok: false, info: e})
    }
}

const login = async (req, res)=>{
    try{
        await LoginUser(req.body)

        const user = await findUserByUsername(req.body.username)
        const jsowtkn = jwt.sign({ID: user.ID}, process.env.APIKEY, { expiresIn: '1d' })
        
        res.cookie('jwt', jsowtkn, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
        
        res.json({ok: true, info: "Login Sucessfull"})
    }catch(e){
        res.json({ok: false, info: e})
    }
}

const verifyUser = (req, res) =>{
    res.json({ok: true})
}

const logoutSesion = (req, res) =>{
    res.clearCookie("jwt")
    res.json({ok:true})
}

module.exports = {
    addUser,
    login,
    verifyUser,
    logoutSesion
}