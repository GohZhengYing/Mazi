import { Box, Input, VStack, HStack, Stack, Separator, Text, Badge } from '@chakra-ui/react';
import { Avatar } from "@/components/ui/avatar"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contacts() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedChat, setSelectedChat] = useState(null);

    // Example list of chats
    const chats = [
        { id: 1, name: 'Alice', chat: 'hello' },
        { id: 2, name: 'Bob', chat: 'hello' },
        { id: 3, name: 'Carol', chat: 'hello' },
        { id: 4, name: 'Dave', chat: 'hello' },
        { id: 5, name: 'Carol', chat: 'hello' },
        { id: 6, name: 'Dave', chat: 'hello' },
        { id: 7, name: 'Carol', chat: 'hello' },
        { id: 8, name: 'Dave', chat: 'hello' },
        { id: 9, name: 'Carol', chat: 'hello' },
        { id: 10, name: 'Dave', chat: 'hello' },
        { id: 11, name: 'Carol', chat: 'hello' },
        { id: 12, name: 'Dave', chat: 'hello' },
    ];

    // Filter chats based on search term
    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle chat selection
    const handleSelectChat = (chat) => {
        setSelectedChat(chat);
    };

    const [isFocused, setIsFocused] = useState(false);

    return (
        <Stack bg="#CDF0FF" h="100vh" alignItems="center" w="20%" gap="0">
            {/* Search Bar */}
            <Box h="3.7rem" fontSize="1.2rem" fontWeight="bold" textAlign="center" paddingTop="1.3rem">Contacts</Box>
            <Input
                placeholder="Search"
                bg="#FFFFFF"
                value={searchTerm}
                textAlign={isFocused ? "left" : "center"}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setSearchTerm(e.target.value)}
                borderWidth="0"
                borderRadius="0.4rem"
                m="3"
                w="93%"
            />
<Separator borderColor="white" size="sm" />
            {/* Chat List */}
            <VStack bg="white" w="100%" gap="0" overflow="scroll">
                {filteredChats.map(chat => (
                    <React.Fragment>
                        <HStack
                            h="4rem"
                            w="100%"
                            key={chat.id}
                            onClick={() => handleSelectChat(chat)}
                            bg={selectedChat?.id === chat.id ? '#24BDFF' : '#CDF0FF'}
                            cursor="pointer"
                            _hover={{ bg: 'gray.300' }}
                        >
                            <Avatar m="2"  alignSelf="flex-start" name={chat.name} size="lg" />
                                <Text textStyle="lg" fontWeight="medium" m="3" ml="0" >{chat.name}</Text>
                        </HStack>
                        <Separator borderColor="white" size="sm" />
                    </React.Fragment>
                ))}
            </VStack>
        </Stack>
    );
}

