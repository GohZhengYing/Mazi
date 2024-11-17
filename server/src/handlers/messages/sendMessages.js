const User = require('../../models/user')

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
            res.status(200).json({status:'success'})
        }
        else{
        console.log(`message sent unsuccessfully to mailbox of user:${receiverEmail} from user:${senderEmail} `)
        res.status(400).json({error:''})}
    } catch (error) {
        console.log(`message sent unsuccessfully to mailbox of user:${receiverEmail} from user:${senderEmail} `)
        res.status(400).json({error})
    }
    

}

module.exports = {
    sendMessages
}