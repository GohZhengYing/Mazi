import { useEffect, useState} from 'react';
import { Box, Card, HStack, Stack, VStack, Text, Link } from "@chakra-ui/react"
import { addDateCard, addNewMessagesCard, addReceiverMessageCard, addSenderMessageCard } from '@/services/messages/MessageCards';

const Messages = (props) => {
    const [messageLoad,setMessageLoad] = useState([])



    useEffect(()=>{

        function loadMessages(){
            const senderEmail = localStorage.getItem('MaziEmail')
            let first = props.messages.user1Email.sender==senderEmail? true: false
            let messages = []

            if(first){
                if(props.messages.user1Read.length!=0){
                    messages = messages.concat(props.messages.user1Read)
                }
                if(props.messages.user1Unread.length!=0){
                    messages.push({senderEmail:'newMessages'})
                    messages = messages.concat(props.messages.user1Unread)
                }
            }
            else{
                if(props.messages.user2Read.length!=0){
                    messages = messages = messages.concat(props.messages.user2Read)
                }
                if(props.messages.user2Unread.length!=0){
                    messages.push({senderEmail:'newMessages'})
                    messages = messages.concat(props.messages.user2Unread)
                }
            }

            const processedMessageLoad = []

            for(let i=0;i<messages.length;i++){
                const date = new Date(messages[i].time)

                if(messages[i].senderEmail=='newMessages'){
                    processedMessageLoad.push(addNewMessagesCard())
                    continue
                }
                if(i===0){
                    processedMessageLoad.push(addDateCard(date.toLocaleDateString()))

                }
                else if(new Date(messages[i].time).toLocaleDateString()!=new Date(messages[i-1].time).toLocaleDateString()){
                    processedMessageLoad.push(addDateCard(date.toLocaleDateString()))

                }

                if(messages[i].sender==senderEmail){
                    processedMessageLoad.push(addSenderMessageCard(messages[i].msg,date.toLocaleString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                  })))

                }
                else{
                    processedMessageLoad.push(addReceiverMessageCard(messages[i].msg,date.toLocaleString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                  })))

                }
            }
            setMessageLoad(processedMessageLoad)

        }

        if(props.messages.user1Email!=null)
        loadMessages()

    },[props.messages])

    return(
        <VStack w="100%" display="block" h="100%" alignContent="start" borderWidth="0px" overflowY="scroll" paddingTop="30%" bgColor="#CDF0FF" scrollbarWidth='thin'>
            {messageLoad}
        </VStack>
    )
}

export default Messages