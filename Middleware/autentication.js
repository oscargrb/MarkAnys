const jwt = require('jsonwebtoken');

const verifyJWT = async (req, res, next) =>{
    try{
        const authHeader = req.headers.authorization || req.headers.Authorization;
        if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
        const token = authHeader.split(' ')[1];

        const verify = await jwt.verify(token, process.env.APIKEY)
        next()
    }catch(e){
        res.status(403).json({ok: false, info: "Error on login"})
    }
}

module.exports = verifyJWT