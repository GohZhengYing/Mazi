const mongoose = require('mongoose')

const contactsSchema = mongoose.Schema({
    userID:{
        type:String,
        required:[true,"please provide userID"]
    },
    contacts:{
        type:Array,
        required:[true,"please provide contacts"]
    },
}, { collection: 'contacts' })

module.exports = mongoose.model("Contacts",contactsSchema)