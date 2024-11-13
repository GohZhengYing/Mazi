import { Box, Input, VStack, HStack, Stack, Separator, Text, Badge } from '@chakra-ui/react';
import { Avatar } from "../components/ui/avatar"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChatList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedChat, setSelectedChat] = useState(null);

    // Example list of chats
    const chats = [
        { id: 1, name: 'Alice', chat: 'hello' },
        { id: 2, name: 'Bob', chat: 'hello' },
        { id: 3, name: 'Carol', chat: 'hello' },
        { id: 4, name: 'Dave', chat: 'hello' },
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
        <Stack bg="#CDF0FF" h="100vh" alignItems="center">
            {/* Search Bar */}
            <Box h="4.5rem" fontSize="1.2rem" fontWeight="bold" textAlign="center" paddingTop="0.5rem">Chats</Box>
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
                mt="0"
                w="93%"
            />
<Separator borderColor="white" size="s" />
            {/* Chat List */}
            <VStack bg="white" w="100%" gap="0">
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
                            <VStack alignSelf="flex-start" gap="0">
                                <Text textStyle="lg" fontWeight="medium" mb="0" mt="2" >{chat.name}</Text>
                                <Text color="#6F6A6A" mt="0" mb="1.5" textStyle="sm">
                                    {chat.chat}
                                </Text>
                            </VStack>
                            <VStack ml="auto" gap="0" mr="3">
                                <Text textStyle="sm" color="#6F6A6A" mb="0" mt="2">Fri</Text>
                                {selectedChat?.id === chat.id ? '':
                                <Badge mt="1" mb="1.5" bg="#24BDFF" borderRadius="4rem">205</Badge>}
                            </VStack>
                        </HStack>
                        <Separator borderColor="white" size="s" />
                    </React.Fragment>
                ))}
            </VStack>
        </Stack>
    );
}

