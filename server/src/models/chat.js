const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    user1Email:{
        type:String,
        required:[true,"please provide username"]
    },
    user2Email:{
        type:String,
        required:[true,"please provide username"]
    },
    user1Read:{
        type:Array,
        required:[true,"please provide username"]
    },
    user1Unread:{
        type:Array,
        required:[true,"please provide username"]
    },
    user2Read:{
        type:Array,
        required:[true,"please provide username"]
    },
    user2Unread:{
        type:Array,
        required:[true,"please provide username"]
    },
}, { collection: 'chat' })

module.exports = mongoose.model("Chat",chatSchema)