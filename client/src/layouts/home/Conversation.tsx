import { useState} from 'react';
import { HStack, Stack, VStack } from "@chakra-ui/react"
import ProfileTopBar from '@/components/home/ProfileTopBar';
import Messages from '@/components/home/Messages';
import MessagesInputBox from '@/components/home/MessagesInputBar';

const Conversation = () => {
    return(
        <VStack w="80%" margin="auto" h='100%'>
            <ProfileTopBar></ProfileTopBar>
            <Messages></Messages>
            <MessagesInputBox></MessagesInputBox>
        </VStack>
    )
}

export default Conversation