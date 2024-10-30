import { NextPage } from 'next';
import { useEffect } from 'react';
import PageNavigation from '../../layouts/PageNavigation';
import { ChatList } from '../../components/Main/ChatList';
import { ChatBox } from '../../components/Main/ChatBox';
import { ChakraProvider } from '@chakra-ui/react';

const MainPage = () => {

  return (
    <Provider>
    <ChakraProvider>
    <PageNavigation>
      <ChatList>

      </ChatList>
      <ChatBox>

      </ChatBox>
    </PageNavigation>
    </ChakraProvider>
    </Provider>
  );
};

export default MainPage;
