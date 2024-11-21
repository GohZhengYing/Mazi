const User = require('../../models/user')
const Contacts = require('../../models/contacts')
const Chat = require('../../models/chat')
const Axios = require('axios')



const sendMessages = async (req,res) =>{
    const {receiverEmail,senderEmail,message,time} = req.body

    try {
        console.log(`user:${senderEmail} attempting to send a message`)
        const user  = await User.findOne({email:receiverEmail})
        if(user!==null){
            const response = await User.findOneAndUpdate({_id:user._id},{mailbox:[...user.mailbox,
                {sender:senderEmail,
                    msg:message,
                    time:time
                }
                ]},{new:true})
                console.log(`message sent successfully to mailbox of user:${receiverEmail} from user:${senderEmail} `)

                const updateSender = await Axios.post(`${req.headers.origin}/api/webhook`,
                    {sender:senderEmail,
                        msg:message,
                        time:time
                    }
                )
                const updateReceiver = await Axios.post(`${user.webhookEndpoint}/api/webhook`,
                    {sender:senderEmail,
                        msg:message,
                        time:time
                    }
                )

                const c = await Contacts.findOne({userID:user._id})
                c.contacts.map(async (contact)=>{
                    if(contact.contactEmail==senderEmail){
                        const chat = await Chat.findOne({_id:contact.chatID})
                        chat.user1Unread.push(
                            {sender:senderEmail,
                            msg:message,
                            time:time
                        })
                        chat.user2Unread.push(
                            {sender:senderEmail,
                            msg:message,
                            time:time
                        })
                        const chatUpdate = await Chat.findOneAndUpdate({_id:contact.chatID},{user1Unread:chat.user1Unread,user2Unread:chat.user2Unread},{new:true})
                    }
                })
            res.status(200).json({status:'success'})
        }
        else{
        console.log(`message sent unsuccessfully to mailbox of user:${receiverEmail} from user:${senderEmail} `)
        res.status(400).json({error:''})}
    } catch (error) {
        console.log(`message sent unsuccessfully to mailbox of user:${receiverEmail} from user:${senderEmail} `)
        console.log(error)
        res.status(400).json({error})
    }
    

}

module.exports = {
    sendMessages
}