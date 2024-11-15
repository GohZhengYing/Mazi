const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"please provide username"]
    },
    password:{
        type:String,
        required:[true,"please provide password"]
    },
    email:{
        type:String,
        required:[true,"please provide email"]
    },
    mailbox:{
        type:Array,
        required:[true,"please provide mailbox"]
    },
}, { collection: 'user' })

module.exports = mongoose.model("User",userSchema)