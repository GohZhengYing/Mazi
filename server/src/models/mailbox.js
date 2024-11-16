const mongoose = require('mongoose')

const mailboxSchema = mongoose.Schema({
    username:{
        type:Array,
        required:[true,"please provide username"]
    },
}, { collection: 'mailbox' })

module.exports = mongoose.model("User",mailboxSchema)