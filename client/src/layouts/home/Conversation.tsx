import { useEffect, useState} from 'react';
import { HStack, Stack, VStack, Separator } from "@chakra-ui/react"
import ProfileTopBar from '@/components/home/ProfileTopBar';
import Messages from '@/components/home/Messages';
import MessagesInputBox from '@/components/home/MessagesInputBar';
import dummyMessages from '@/components/home/dummyMessages';

const Conversation = (props) => {
    const [messages, setMessages] = useState(dummyMessages)
    const [receiverUsername, setReceiverUsername] = useState("jy")
    const [receiverEmail, setReceiverEmail] = useState('jy@gmail.com')
    const [senderEmail, setSenderEmail] = useState('gohzy89@gmail.com')
    useEffect(()=>{
        //retrieve all user information here and pass it to individual components

      },[])

    return(
        <VStack w="80%" h='100%' gap='0'>
            <ProfileTopBar receiverUsername={receiverUsername}/>
            <Separator borderColor="white" size="sm"/>
            <Messages messages={messages}/>
            <Separator borderColor="white" size="sm"/>
            <MessagesInputBox senderEmail={senderEmail} receiverEmail={receiverEmail}/>
        </VStack>
    )
}

export default Conversation