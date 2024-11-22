const User = require('../../models/user')
const Contacts = require('../../models/contacts')
const bcrypt = require('bcryptjs')



const deleteAccount = async (req,res) =>{
    const {password} = req.body
    const {email,_id} = req.user
    try {
        console.log(`user ${email} attempting to delete Account`)
        const user = await User.findOne({email})
        async function comparePassword(password,enteredPassword){
            const isMatch = await bcrypt.compare(password,enteredPassword)
            return isMatch
        }

        if(user!== null){
            const isMatch = await comparePassword(password,user.password)
            if(isMatch){
                const user = await User.findOneAndDelete({email})
                const contacts = await Contacts.findOneAndDelete({userID:_id})
                console.log(`delete Account successful for user with email: ${email}`)
                res.status(200).json({status:'success'})
            }
            else{
            console.log(`delete Account unsuccessful for user with email: ${email}, invalid password`)
            res.status(400).json({status:'unsuccess',error:'invalid password'})}
        }
        else{
            console.log(`delete Account unsuccessful for user with email:${email}, user does not exist`)
            res.status(400).json({status:'unsuccess',error:'User does not exist'})
        }
    } catch (error) {
        console.log(`An error occured while deleting Account for user with email:${email}, ${error}`)
        res.status(400).json(error)
    }


}

module.exports = {
    deleteAccount
}