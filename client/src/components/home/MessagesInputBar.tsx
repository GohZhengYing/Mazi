import { useState} from 'react';
import { Button, HStack, IconButton, Input, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, PopoverCloseTrigger, } from "@chakra-ui/react"
import { LuPlus } from "react-icons/lu";
import api from '../../services/API'
import { InputGroup } from "@/components/ui/input-group"
import { MdSend } from "react-icons/md";
import { PopoverRoot } from '../ui/popover';

const MessagesInputBox = (props) => {
    const [messageInput,setMessageInput] = useState('')
    const handleOnClick = ()=>{

    }
    const handleOnSubmit = ()=>{
        async function sendMessage(){
            try {
                const response = await api.post('/messages',{
                    senderEmail:props.senderEmail,
                    receiverEmail:props.receiverEmail,
                    message:messageInput,
                    time:new Date()
                  },
                  {
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('MaziToken')} ${localStorage.getItem('MaziEmail')}`
                    }
                }
                )
                setMessageInput('')
            } catch (error) {
                console.log(error)
            }
        }
        if(messageInput!==''){
            sendMessage()
        }

        }
        

    return(
        <HStack bgColor="#CDF0FF" h="5%" w="100%">
            <PopoverRoot>
  <PopoverTrigger>
  <IconButton  bgColor="transparent" color="black" onClick={handleOnClick}>
                <LuPlus />
            </IconButton>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseTrigger />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</PopoverRoot>


            <InputGroup w='100%'
            marginRight='0.5rem'
            endElement={
                <IconButton  bgColor="transparent" color="black" onClick={handleOnSubmit}>
                <MdSend />
            </IconButton>
            }
            >
            <Input
                value={messageInput}
                onChange={(event)=>{setMessageInput(event.target.value)}}
                placeholder="Enter Message"
                name="messageInput"
                bgColor="white" 
                onSubmit={handleOnSubmit}
            />
            </InputGroup>
        </HStack>
    )
}

export default MessagesInputBox