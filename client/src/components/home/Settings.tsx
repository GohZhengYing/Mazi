import { Box, Button, VStack, Image, Center, Spacer, HStack, Badge } from '@chakra-ui/react';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Community() {
    const [selectedSettings, SetSelectedSettings] = useState(null);
    const handleSelectSettings = (chat) => {
        SetSelectedSettings(chat);
    };

    return (
        <VStack bg="#CDF0FF" h="100vh" alignItems="center" w="20%">
            <Box h="3.7rem" fontSize="1.2rem" fontWeight="bold" textAlign="center" paddingTop="1.3rem">Settings</Box>
            
                        <Button
                            h="2rem"
                            w="90%"
                            borderRadius="3rem"
                            key="ChangeUsername"
                            onClick={() => handleSelectSettings("ChangeUsername")}
                            bg={selectedSettings === "ChangeUsername" ? '#24BDFF' : '#CDF0FF'}
                            cursor="pointer"
                            _hover={{ bg: 'gray.300' }}
                        ><HStack alignItems="center" w="full">
                            <Image   src='../settings.svg' height="5"/><Center>Change username</Center></HStack>
                        </Button>
                        <Button
                            h="2rem"
                            w="90%"
                            borderRadius="3rem"
                            key="ChangePassword"
                            onClick={() => handleSelectSettings("ChangePassword")}
                            bg={selectedSettings === "ChangePassword" ? '#24BDFF' : '#CDF0FF'}
                            cursor="pointer"
                            _hover={{ bg: 'gray.300' }}
                        ><HStack alignItems="center" w="full">
                            <Image   alignSelf="flex-start" src='../settings.svg' height="5"/><Center>Change password</Center></HStack>
                        </Button>
                        <Button
                            h="2rem"
                            w="90%"
                            borderRadius="3rem"
                            key="ChangeProfilePic"
                            onClick={() => handleSelectSettings("ChangeProfilePic")}
                            bg={selectedSettings === "ChangeProfilePic" ? '#24BDFF' : '#CDF0FF'}
                            cursor="pointer"
                            _hover={{ bg: 'gray.300' }}
                        ><HStack alignItems="center" w="full">
                            <Image   alignSelf="flex-start" src='../settings.svg' height="5"/><Center>Change profile picture</Center></HStack>
                        </Button>
                        <Spacer /> {/* This pushes the logout button to the bottom */}

                        <Button
                            pl="2rem" pr="2rem" m="2rem" color="black" borderRadius="0.5rem" key="Logout"  cursor="pointer" variant="outline" _hover={{ bg: 'gray.300' ,color: '#FF4500'}}>
                            Logout
                        </Button>
            </VStack>
    )
}
