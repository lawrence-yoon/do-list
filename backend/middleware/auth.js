const jwt = require("jsonwebtoken")

const auth = async(req, res, next) => {
    let token 
    try {
        //get token from header
        token = req.headers.authorization.split(' ')[1]
        
        //verify token
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        //get user from token
        const user = await decoded
        
        //pass user down to the endpoints
        req.user = user

        //call next piece of middleware
        next()
        
    }   catch (error) {
        res.status(401).json({
            error: new Error("Invalid request!")
        })
        console.log("auth error")
    }
}

module.exports = auth