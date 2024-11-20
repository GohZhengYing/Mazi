import { Box, VStack, Button, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"

export const WelcomePage = ()=>{
    const router = useRouter()
    const handleLogin = ()=>{
    router.push('/login')
    }
    return(
        <Box bgColor='#24BDFF' w='100vw' h='100vh' display='flex' justifyContent='center' alignItems='center'>
        <VStack h='fit-content'>
          <Text textStyle='7xl'  fontFamily='sans-serif'>Welcome to Mazi</Text>
          <Button onClick={handleLogin} bgColor="#CDF0FF" color="black" mt='2rem' size='2xl'>
                Login
          </Button>
        </VStack>
      </Box>
    )
}