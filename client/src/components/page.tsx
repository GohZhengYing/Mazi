import { Box, Input, VStack, HStack, Stack, Separator, Text } from '@chakra-ui/react';
import { Avatar } from "../components/ui/avatar"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChatList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  // Example list of chats
  const chats = [
    { id: 1, name: 'Alice', chat:'hello' },
    { id: 2, name: 'Bob' , chat:'hello'},
    { id: 3, name: 'Carol' , chat:'hello'},
    { id: 4, name: 'Dave' , chat:'hello'},
  ];

  // Filter chats based on search term
  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle chat selection
  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <Box mt="4" p="4" bg="#CDF0FF" borderRadius="md">
      {/* Search Bar */}
      <Input
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb="4"
      />

      {/* Chat List */}
      <VStack>
        {filteredChats.map(chat => (
          <HStack
            key={chat.id}
            onClick={() => handleSelectChat(chat)}
            p="3"
            borderRadius="md"
            bg={selectedChat?.id === chat.id ? 'blue.500' : 'gray.200'}
            color={selectedChat?.id === chat.id ? 'white' : 'black'}
            cursor="pointer"
            _hover={{ bg: 'gray.300' }}
            gap="1"
          >
            <Avatar name={chat.name} size="lg" />
          <Stack gap="0">
            <Text fontWeight="medium">{chat.name}</Text>
            <Text color="fg.muted" textStyle="sm">
              {chat.chat}
            </Text>
          </Stack>
          
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

