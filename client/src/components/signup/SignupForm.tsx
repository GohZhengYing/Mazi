import { Box, VStack, Text, Input, Button} from "@chakra-ui/react"
import React, { useState } from "react"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"
import api from '../../services/API'
import { useRouter } from 'next/router';

const SignupForm = ()=>{
    const router = useRouter();
    const [username, setUsername] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isUsernameInvalid, setIsUsernameInvalid] = useState(false)
    const [isConfirmPasswordInvalid, setIsConfirmPasswordInvalid] = useState(false)
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    async function sendData(){
      try {
        const response = await api.post('/user/signup',{
          username:username,
          email:email,
          password:password
        })
        console.log(response.data)
        router.push('/home')
      } catch (error) {
        console.log(error)
      }

  }

    const handleSubmitForm = () => {
      validateInputs()

      if(validateInputs()){
        console.log("sent")
      sendData()
      }
    }

    const validateInputs = () => {
      let isValid = true
      setIsEmailInvalid(false)
      setIsUsernameInvalid(false)
      setIsPasswordInvalid(false)
      setIsConfirmPasswordInvalid(false)

      if(email==''){
        setIsEmailInvalid(true)
        isValid = false
      }

      if(username==''){
        setIsUsernameInvalid(true)
        isValid = false
      }

      if(password==''){
        setIsPasswordInvalid(true)
        isValid = false
      }

      if(password !== confirmPassword){
        setIsConfirmPasswordInvalid(true)
        isValid = false
      }

      return isValid
    }

    return(

    <VStack w='20%'>
      <Field label="Username" invalid={isUsernameInvalid} errorText="This field cannot be empty">
        <Input placeholder="Enter Username" name='username' size='2xl' value={username} onChange={(event)=>setUsername(event.target.value)}/>
      </Field>

      <Field label="Email" invalid={isEmailInvalid} errorText="This field cannot be empty">
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

      <Field label="Confirm Password" invalid={isConfirmPasswordInvalid} errorText="Password does not match">
        <InputGroup 
          w='100%'
          endElement={
            <Button h='60%' size='sm' bgColor="#CDF0FF" color="black" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? 'Hide' : 'Show'}
        </Button>
        }
        >
        <Input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password" name='confirmPassword' size='2xl' value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)}/>
        </InputGroup>
      </Field>

      <Button onClick={handleSubmitForm} bgColor="#CDF0FF" color="black" type='submit' mt='2rem' size='2xl'>
        Submit
      </Button>
    </VStack>
    )
}

export default SignupForm