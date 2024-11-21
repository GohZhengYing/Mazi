const User = require('../../models/user')
const Contacts = require('../../models/contacts')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


const signup = async (req,res) =>{
    const {username,password,email} = req.body
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    try {
        console.log(`Creating account for username:${username}`)
        const user = await User.findOne({email})

        if(user === null){
            const response1 = await User.create({
                username,
                email,
                password:encryptedPassword,
                mailbox:[],
                webhookEndpoint:req.headers.origin
            })

            const response2 = await Contacts.create({
                userID:response1._id,
                contacts:[]
            })
            const id = new Date().getDate()
            const token = jwt.sign({id,password},process.env.JWT_SECRET,{expiresIn:'1d'})
            res.status(200).json({...response1,token})
            console.log(`Account successfully created for username:${username}`)
        }
        else{
            console.log(`Unsuccessful in creating account for username:${username}`)
            res.status(400).json({error:'User already exists'})
        }

    } catch (error) {
        console.log(`An error occured while signing up in for user with email:${email}, ${error}`)
        res.status(400).json(error)
    }

}

module.exports = {
    signup
}