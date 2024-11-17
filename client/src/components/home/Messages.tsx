import { useEffect, useState} from 'react';
import { Box, Card, HStack, Stack, VStack, Text, Link } from "@chakra-ui/react"
import { addDateCard, addReceiverMessageCard, addSenderMessageCard } from '@/services/messages/MessageCards';

const Messages = (props) => {
    const [messageLoad,setMessageLoad] = useState([])



    useEffect(()=>{
        async function retrieveMessages(){
            const messages = props.messages
            const processedMessageLoad = []
            for(let i=0;i<messages.length;i++){
                if(i===0){
                    processedMessageLoad.push(addDateCard(messages[i].date))

                }
                else if(messages[i].date!=messages[i-1].date){
                    processedMessageLoad.push(addDateCard(messages[i].date))

                }

                if(messages[i].self){
                    processedMessageLoad.push(addSenderMessageCard(messages[i].msg,messages[i].time))

                }
                else{
                    processedMessageLoad.push(addReceiverMessageCard(messages[i].msg,messages[i].time))

                }
            }
            setMessageLoad(processedMessageLoad)

        }

        retrieveMessages()

        const scrollToBottom = () => {
            console.log('here')
            window.scrollTo({
              top: 200,
              behavior: 'smooth',
            });
          };
          scrollToBottom()
    },[])

    return(
        <VStack w="100%" display="block" h="90%" alignContent="start" borderWidth="0px" overflowY="scroll" paddingTop="30%" bgColor="#CDF0FF" scrollbarWidth='thin'>
            {messageLoad}
        </VStack>
    )
}

export default Messages