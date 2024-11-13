import { Box, VStack, Text, Input, Button, InputElement } from "@chakra-ui/react"
import React, { useState } from "react"
import { InputGroup } from "../ui/input-group"

const LoginForm = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const handleSubmitForm = () => {
      console.log(email,password)

    }
    return(

            <VStack>

                <Input placeholder="Enter Email" name='email' size='2xl' value={email} onChange={(event)=>setEmail(event.target.value)}/>
                <Input placeholder="Enter Password" name='password' size='2xl' value={password} onChange={(event)=>setPassword(event.target.value)}/>
                <Button onClick={handleSubmitForm} bgColor="#CDF0FF" color="black" type='submit' mt='2rem' size='2xl'>
                  Submit
                </Button>
            </VStack>
    )
}

export default LoginForm