const Contacts = require('../../models/contacts')
const User = require('../../models/user')

const fetchContacts = async (req,res) =>{
    const {email} = req.body
    try {
        const user = await User.findOne({email})
    } catch (error) {
        
    }
}

module.exports = {
    fetchContacts
}