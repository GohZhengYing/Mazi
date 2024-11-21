import { useEffect, useState} from 'react';
import { Badge, Box, HStack, Icon, IconButton, Stack, VStack, Text, Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react"
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useRouter } from 'next/router';

const ProfileTopBar = (props) => {
    const router = useRouter()

    const logout = ()=>{
        localStorage.removeItem('MaziToken')
        localStorage.removeItem('MaziEmail')
        router.push('/login')
    }

    useEffect(()=>{

    },[])
    const handleOnClick = ()=>{
        
    }
    return(
        <HStack bgColor="#CDF0FF" h="2.5rem" w="100%" justifyContent="space-between" verticalAlign="middle">
            <Box margin="10px" display="flex" alignItems="center" >
                <Icon fontSize="2rem" color="pink.400">
                    <FaUserCircle />
                </Icon>
                <Text fontSize='1.5rem' margin="auto" marginLeft="0.5em">{props.receiverUsername}</Text>
            </Box>
<Box h='100%' w='fit-content'>

            <MenuRoot>
                <MenuTrigger asChild position='absolute' right='0'>
                    <IconButton h='2.5rem' bgColor="transparent" color="black" onClick={handleOnClick}>
                            <HiOutlineDotsVertical />
                    </IconButton>
                </MenuTrigger>
                <MenuContent marginTop={'2.5rem'} zIndex={'100'} position={'relative'}>
                    <MenuItem value="new-txt" onClick={logout}>Logout</MenuItem>
                </MenuContent>
            </MenuRoot>
            </Box>
        </HStack>
    )
}

export default ProfileTopBar