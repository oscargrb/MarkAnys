const jwt = require('jsonwebtoken');

const verifyJWT = async (req, res, next) =>{
    try{
        
        if (!req.cookies?.jwt) return res.sendStatus(401);
        const token = req.cookies.jwt;

        const verify = await jwt.verify(token, process.env.APIKEY)
        
        req.UserID = verify.ID
        next()
    }catch(e){
        res.status(403).json({ok: false, info: "Error on login"})
    }
}

module.exports = verifyJWT