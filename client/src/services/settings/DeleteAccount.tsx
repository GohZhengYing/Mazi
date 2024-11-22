import { InputGroup } from "@/components/ui/input-group";
import { DialogRoot, DialogBackdrop, DialogTrigger, Button, HStack, Center, DialogContent, DialogHeader, DialogTitle, DialogCloseTrigger, DialogBody, useDisclosure, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Field } from "@/components/ui/field"
import api from '../API'
import { useRouter } from "next/router";



export default function DeleteAccount (props){
    const [password, setPassword] = useState("")
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()


    const handleDelete=()=>{
        setIsPasswordInvalid(false)
        if(password==''){
            setIsPasswordInvalid(true)
            return
          }
          async function deleteAcc(){
            try {
                const response = await api.post('/user/delete',{
                  password:password
                },
                
                {
                  headers:{
                      Authorization:`Bearer ${localStorage.getItem('MaziToken')} ${localStorage.getItem('MaziEmail')}`
                  }
              }
            )
                console.log(response.data)
                router.push('/login')
                localStorage.removeItem('MaziToken')
                localStorage.removeItem('MaziEmail')
              } catch (error) {
                console.log('here')
                setIsPasswordInvalid(true)
                console.log(error,'here')
              }
          }
          deleteAcc()


    }
    
    return(
        <DialogRoot size="cover" placement="center" motionPreset="slide-in-bottom" >
                        <DialogBackdrop />
      <DialogTrigger asChild>
        {props.button}
      </DialogTrigger>
      <DialogContent w='30vw' h='40vh' position='absolute' top='20vh' left='35vw'>

        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogCloseTrigger position={'absolute'} top='0' right='0' margin='1rem'>
        X
      </DialogCloseTrigger>
        </DialogHeader>
        <DialogBody>
          Enter Password to delete Account
          <Field label="Password" invalid={isPasswordInvalid} errorText="Invalid password" marginTop='1rem'>
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
                <Button onClick={handleDelete} bgColor="#CDF0FF" color="black" type='submit' mt='2rem' size='xl'>
                  Delete
                </Button>
        </DialogBody>
        

      </DialogContent>
    </DialogRoot>
    )
}