import { Box, Container, VStack, Text, IconButton, Link } from "@chakra-ui/react"
import { IoArrowBack } from "react-icons/io5";

const MaziTopBanner = ({children})=>{
    return(
        <Box w='100vw' h='100vh' display="flex" alignItems="center" justifyContent="center" bgColor="#24BDFF">
            <VStack w='100vw' h='100vh'>
                <Box w='100%' h='fit-content' display="flex" alignItems="center" justifyContent="center" bgColor="#CDF0FF">
                    <IconButton bgColor='transparent' color='black' size='2xl' position='absolute' left='0'>
                    <Link href="./login">
                        <IoArrowBack />
                    </Link>
                    </IconButton>
                    <Text fontSize='4xl' fontFamily='sans-serif'>
                        Mazi
                    </Text>
                </Box>
                <Box w='100vw' h='100%'>
                    {children}
                </Box>
            </VStack>
        </Box>
    )
}

export default MaziTopBanner