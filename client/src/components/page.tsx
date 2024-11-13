import { Box, Input, VStack, HStack, Stack, Separator, Text } from '@chakra-ui/react';
import { Avatar } from "../components/ui/avatar"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatlist from './chatlist'

export default function Page() {

  return (
    <Box h="100vh" w="25vw">
      <Chatlist></Chatlist>
    </Box>
  );
}

