import { useEffect, useState} from 'react';
import { Badge, Box, HStack, Icon, IconButton, Stack, VStack, Text } from "@chakra-ui/react"
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ProfileTopBar = () => {
    const [username,setUsername] = useState("")

    useEffect(()=>{
        setUsername("Laura Callaway")
    },[username])
    const handleOnClick = ()=>{
        
    }
    return(
        <HStack bgColor="#CDF0FF" h="5%" w="100%" justifyContent="space-between" verticalAlign="middle">
            <Box margin="10px" display="flex" alignItems="center" >
                <Icon fontSize="2rem" color="pink.400">
                    <FaUserCircle />
                </Icon>
                <Text fontSize='1.5rem' margin="auto" marginLeft="0.5em">{username}</Text>
            </Box>
            <IconButton  bgColor="transparent" color="black" onClick={handleOnClick}>
                <HiOutlineDotsVertical />
            </IconButton>
        </HStack>
    )
}

export default ProfileTopBar