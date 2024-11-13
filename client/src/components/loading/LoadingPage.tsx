import { Box, Container, Drawer, Spinner, Text} from "@chakra-ui/react";

import React from "react";


const LoadingPage = () => {
  return (
    <Box w='100vw' h='100vh' display="flex" alignItems="center" justifyContent="center" bgColor="#24BDFF">
      <Container w='25rem' h='25rem' position="absolute" display="flex" alignItems="center" justifyContent="center" borderRadius="50%">
      <Container w='21rem' h='21rem' position="absolute" bgColor="#CDF0FF" display="flex" alignItems="center" justifyContent="center" borderRadius="50%">
      </Container>
      <Spinner h='25rem' w='25rem' position="absolute" left="0" top="0" color="#CDF0FF">
      </Spinner>
      <Text position='relative' fontSize='6rem' fontFamily='sans-serif'>MAZI</Text>
      </Container>
    </Box>
  );
};

export default LoadingPage