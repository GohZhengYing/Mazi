import { Box, VStack, Text } from "@chakra-ui/react"
import MaziTopBanner from "../MaziTopBanner"
import SignupForm from "@/components/signup/SignupForm"

const SignupPageLayout = ()=>{
return(
    <MaziTopBanner>
        <VStack>
            <Text position='relative' fontSize='3rem' margin="2rem">Create Account</Text>
            <SignupForm/>
        </VStack>
    </MaziTopBanner>
)
}

export default SignupPageLayout