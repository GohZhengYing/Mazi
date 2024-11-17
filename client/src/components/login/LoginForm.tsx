import { Box, VStack, Text, Input, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"
import loginHandler from "@/services/login/loginHandler"

const LoginForm = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
    const [showPassword, setShowPassword] = useState(false)


    const handleSubmitForm = () => {
      if(validate()){
        loginHandler(email,password)
      }

    }
    const validate = () => {
      let isValid = true
      setIsEmailInvalid(false)
      setIsPasswordInvalid(false)

      if(email==''){
        setIsEmailInvalid(true)
        isValid = false
      }

      if(password==''){
        setIsPasswordInvalid(true)
        isValid = false
      }

      return isValid
    }
    return(

            <VStack>
              <Field label="Email" invalid={isEmailInvalid} errorText="Invalid email">
                <Input placeholder="Enter Email" name='email' size='2xl' value={email} onChange={(event)=>setEmail(event.target.value)}/>
              </Field>
              <Field label="Password" invalid={isPasswordInvalid} errorText="Invalid password">
        <InputGroup 
          w='100%'
          endElement={
            <Button h='60%' size='sm' bgColor="#CDF0FF" color="black" onClick={()=>setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
        </Button>
        }
        >
                <Input type={showPassword ? 'text' : 'password'} placeholder="Enter Password" name='password' size='2xl' value={password} onChange={(event)=>setPassword(event.target.value)}/>
                </InputGroup>
                </Field>
                <Button onClick={handleSubmitForm} bgColor="#CDF0FF" color="black" type='submit' mt='2rem' size='2xl'>
                  Login
                </Button>
            </VStack>
    )
}

export default LoginForm