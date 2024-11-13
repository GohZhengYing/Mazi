import { Box, Input, VStack, HStack, Stack, Separator, Text } from '@chakra-ui/react';
import { Avatar } from "../ui/avatar"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatlist from '../chatlist'
import Conversation from '@/layouts/home/Conversation';

export default function HomePage() {

  return (
    <HStack h="100vh">
      <Chatlist></Chatlist>
      <Conversation/>
    </HStack>
  );
}

