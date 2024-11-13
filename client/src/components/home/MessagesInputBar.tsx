import { useState} from 'react';
import { HStack, IconButton, Input, Stack, VStack } from "@chakra-ui/react"
import { LuPlus } from "react-icons/lu";

const MessagesInputBox = () => {
    const [messageInput,setMessageInput] = useState([])
    const handleOnClick = ()=>{
        
    }
    return(
        <HStack bgColor="#CDF0FF" h="5%" w="100%">
            <IconButton  bgColor="transparent" color="black" onClick={handleOnClick}>
                <LuPlus />
            </IconButton>
            <Input  placeholder="..." bgColor="white" margin="0.5rem"></Input >
        </HStack>
    )
}

export default MessagesInputBox