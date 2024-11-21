const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const login = async (req,res) =>{
    const {password,email} = req.body
    try {
        console.log(`user ${email} attempting to login`)
        const user = await User.findOne({email})
        async function comparePassword(password,enteredPassword){
            const isMatch = await bcrypt.compare(password,enteredPassword)
            return isMatch
        }

        if(user!== null){
            const isMatch = await comparePassword(password,user.password)
            if(isMatch){
                const id = new Date().getDate()
                const token = jwt.sign({id,password},process.env.JWT_SECRET,{expiresIn:'1d'})
                await User.findOneAndUpdate({_id:user._id},{webhookEndpoint:req.headers.origin},{new:true})
                console.log(`Login successful for user with email: ${email}`)
                res.status(200).json({status:'success',token})
            }
            else{
            console.log(`Login unsuccessful for user with email: ${email}, invalid password`)
            res.status(400).json({status:'unsuccess',error:'invalid password'})}
        }
        else{
            console.log(`Login unsuccessful for user with email:${email}, user does not exist`)
            res.status(400).json({status:'unsuccess',error:'User does not exist'})
        }
    } catch (error) {
        console.log(`An error occured while logging in for user with email:${email}, ${error}`)
        res.status(400).json(error)
    }


}

module.exports = {
    login
}