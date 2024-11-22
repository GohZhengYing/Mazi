import { Box, Input, VStack, HStack, Stack, Separator, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatlist from '../chatlist'
import Conversation from '@/layouts/home/Conversation';
import Validate from '@/common/validate';

export default function HomePage() {
  const [loaded,setLoaded] = useState(false)
  
  useEffect(()=>{
    //retrieve all user information here and pass it to individual components
    setLoaded(true)
    console.log("hello")
  },[loaded])

  return (
    <Validate>
    <HStack h="100vh" w='100%' gap='0'>
      <Chatlist></Chatlist>
      <Conversation/>
    </HStack>
    </Validate>
  );
}

