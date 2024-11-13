import { useState} from 'react';
import { Badge, Box, HStack, Icon, IconButton, Stack, VStack } from "@chakra-ui/react"
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ProfileTopBar = () => {
    const handleOnClick = ()=>{
        
    }
    return(
        <HStack bgColor="#CDF0FF" h="5vh" w="100%" justifyContent="space-between" verticalAlign="middle">
            <Box margin="10px">
            <Icon fontSize="2xl" color="pink.400">
            <FaUserCircle />
                </Icon>
                <Badge bgColor="transparent"> 
                    Laura Callaway
                </Badge>
            </Box>
            <IconButton  bgColor="transparent" color="black" onClick={handleOnClick}>
            <HiOutlineDotsVertical />
            </IconButton>
        </HStack>
    )
}

export default ProfileTopBar