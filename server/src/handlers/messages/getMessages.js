const User = require('../../models/user')
const Contacts = require('../../models/contacts')
const Chat = require('../../models/chat')

const getMessages = async (req,res) =>{
    const {receiverEmail,senderEmail} = req.body
    try {
        const user  = await User.findOne({email:senderEmail})
        if(user!==null){
            const c = await Contacts.findOne({userID:user._id})
            c.contacts.map(async(contact)=>{
                if(contact.contactEmail==receiverEmail){
                const chat = await Chat.findOne({_id:contact.chatID})
                if(chat.user1Email==senderEmail){
                    const updateChat = await Chat.findOneAndUpdate({_id:contact.chatID},{
                        user1Read:[
                            ...chat.user1Read,...chat.user1Unread
                        ],
                        user1Unread:[]
                    })
                }
                else{
                        const updateChat = await Chat.findOneAndUpdate({_id:contact.chatID},{
                            user2Read:[
                                ...chat.user2Read,...chat.user2Unread
                            ],
                            user2Unread:[]
                        })
                }
                res.status(200).json({chat})}
            })
        }
        else{
            res.status(400).json({error:"something went wrong"})
        }
    } catch (error) {
        res.status(400).json({error})
    }
}

module.exports = {
    getMessages
}