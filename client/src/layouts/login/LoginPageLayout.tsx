import LoginForm from "@/components/login/LoginForm"
import { Box, VStack,Text, Link } from "@chakra-ui/react"

const LoginPageLayout = ()=>{
    return(
        <Box w='100vw' h='100vh' display="flex" alignItems="center" justifyContent="center" bgColor="#24BDFF">
            <VStack>
                <Text position='relative' fontSize='4rem' fontFamily='sans-serif' marginBottom="5rem">Mazi</Text>
                <LoginForm/>
                <Link href="./signup">Create Account</Link>
                <Link href="./password-reset">Forgotten Password</Link>
            </VStack>
        </Box>
    )
}

export default LoginPageLayout