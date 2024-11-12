import { Provider } from '@/components/ui/provider';
import { theme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';


function MAZI({ Component, pageProps }: AppProps) {

  
    return (
      <Provider >
          <Component {...pageProps} />
      </Provider>
    );
  }
  
  export default MAZI;