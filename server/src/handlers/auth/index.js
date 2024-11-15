const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function authHandler(req,res){
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
                res.status(200).json({status:true})
                return
            }
            }
        }
        res.status(400).json({status:false})
    } catch (error) {
        console.log(error)
        res.status(400).json({status:false,error})
    }
}

module.exports = authHandler