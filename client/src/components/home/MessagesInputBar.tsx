import { useState} from 'react';
import { Button, HStack, IconButton, Input, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, PopoverCloseTrigger, Box, Image, VStack, Text, Icon} from "@chakra-ui/react"
import { LuPlus } from "react-icons/lu";
import api from '../../services/API'
import { InputGroup } from "@/components/ui/input-group"
import { MdSend } from "react-icons/md";
import { PopoverRoot } from '../ui/popover';
import Resizer from 'react-image-file-resizer'
import { RxCross2 } from "react-icons/rx";

const MessagesInputBox = (props) => {
    const [messageInput,setMessageInput] = useState('')
    const [imageInput,setImageInput] = useState({file:'',uri:''})
    const [isText,setIsText] = useState(true)
    const handleOnClick = ()=>{

    }
    function handleImageSubmit(e){
        e.preventDefault()
        if(e.target.files[0]==null){
            setImageInput({file:'',uri:''})
            return
        }
        if (e.target.files[0].size > 2 * 1000 * 1024) {
         return   
        }
        try {
            Resizer.imageFileResizer(
                e.target.files[0],
                1000,
                1000,
                "PNG",
                100,
                0,
                (uri) => {
                    setImageInput({file:e.target.value,uri:String(uri)})
                },
                "base64"
              );
        } catch (error) {
            console.log(error)
        }
    }


    const handleOnSubmit = ()=>{
        async function sendMessage(){
            try {
                const response = await api.post('/messages',{
                    senderEmail:props.senderEmail,
                    receiverEmail:props.receiverEmail,
                    message:messageInput,
                    time:new Date()
                  },
                  {
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('MaziToken')} ${localStorage.getItem('MaziEmail')}`
                    }
                }
                )
                setMessageInput('')
            } catch (error) {
                console.log(error)
            }
        }

        async function sendImage(){
            try {
                const response = await api.post('/messages',{
                    senderEmail:props.senderEmail,
                    receiverEmail:props.receiverEmail,
                    uri:imageInput.uri,
                    time:new Date()
                  },
                  {
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('MaziToken')} ${localStorage.getItem('MaziEmail')}`
                    }
                }
                )
                setMessageInput('')
                setImageInput({file:'',uri:''})
                setIsText(true)
            } catch (error) {
                console.log(error)
            }
        }
        if(!isText){
            sendImage()
        }
        else if(messageInput!==''){
            sendMessage()
        }

        }
        

    return(
        <HStack bgColor="#CDF0FF" h="2.5rem" w="100%">
            <PopoverRoot>
  <PopoverTrigger>
  <Icon  bgColor="transparent" color="black" onClick={handleOnClick} marginLeft={'1rem'} marginRight={'1rem'}>
                <LuPlus />
            </Icon>
  </PopoverTrigger>
  <PopoverContent position='absolute' bottom='2.5rem'>
    <VStack h="fit-content" maxH='50%' w='100%' bgColor='#e4ebea' borderRadius='2%' padding={'1rem'} >
        <Image src={imageInput.uri}/>
        {imageInput.uri==''? <></>:<Button w='100%' bgColor='#C0E0EE' color={'black'} borderColor='black' onClick={()=>setIsText(false)}>Confirm</Button>}
        <Input type='file' accept='image/png, image/jpeg' onChange={handleImageSubmit}></Input>
    </VStack>
  </PopoverContent>
</PopoverRoot>


            {isText?<InputGroup w='100%'
            marginRight='0.5rem'
            endElement={
                <IconButton  bgColor="transparent" color="black" onClick={handleOnSubmit}>
                <MdSend />
            </IconButton>
            }
            >
            <Input
                value={messageInput}
                onChange={(event)=>{setMessageInput(event.target.value)}}
                placeholder="Enter Message"
                name="messageInput"
                bgColor="#CDF0FF" 
                variant="subtle" 
                onSubmit={handleOnSubmit}
            />
            </InputGroup>:
            <HStack>
            <Text h='100%' margin={'0'} alignContent={'center'}>
                {imageInput.file}
                <Button bgColor={'transparent'} color={'black'} onClick={()=>{setIsText(true)}}>
                    <RxCross2 />
                    </Button>
            </Text>
            <IconButton  bgColor="transparent" color="black" onClick={handleOnSubmit} position='absolute' right='1rem'>
                <MdSend />
            </IconButton>
            </HStack>
            }
        </HStack>
    )
}

export default MessagesInputBox