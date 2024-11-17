const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function authMiddleware(req,res,next){

    try {
        const header = req.headers.authorization
        if(header!==null&&header.startsWith('Bearer ')){
            const MaziToken = header.split(' ')[1]
            const MaziEmail = header.split(' ')[2]
            user = await User.findOne({email:MaziEmail})

            if(user!== null){
            const decoded = jwt.verify(MaziToken,process.env.JWT_SECRET)
            async function comparePassword(enteredPassword,password){
                const isMatch = await bcrypt.compare(enteredPassword,password)
                return isMatch
            }
            const correctPW = comparePassword(decoded.password,user.password)
            
            if(correctPW){
                req.user = user
                next()
                return
            }
            }
        }
        res.status(400).json({errorMessage:"invalid token"})
    
    } catch (error) {
        res.status(400).json({error})
    }
}

module.exports = authMiddleware
