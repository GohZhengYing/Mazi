import { Box, Input, VStack, HStack, Stack, Separator, Text } from '@chakra-ui/react';
import { Avatar } from "./ui/avatar"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatlist from './chatlist'

export default function HomePage() {

  return (
    <Box h="100vh" w="25vw">
      <Chatlist></Chatlist>
      
    </Box>
  );
}
