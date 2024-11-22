import { Box, Button, VStack, Image, Center, Spacer, HStack, Badge, useDisclosure,DialogRoot,DialogContent, DialogTrigger, DialogBody, DialogCloseTrigger, DialogHeader, DialogTitle, DialogBackdrop, Icon} from '@chakra-ui/react';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from 'react-icons/fa';
import DeleteAccount from '@/services/settings/deleteAccount';

export default function Community() {
    const [selectedSettings, SetSelectedSettings] = useState(null);
    const { open, onOpen, onClose } = useDisclosure()
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
                            <Image   src='../settings.svg' height="5"/><Center color='black'>Change username</Center></HStack>
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
                            <Image   alignSelf="flex-start" src='../settings.svg' height="5"/><Center color='black'>Change password</Center></HStack>
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
                            <Image   alignSelf="flex-start" src='../settings.svg' height="5"/><Center color='black'>Change profile picture</Center></HStack>
                        </Button>
                        <DeleteAccount button={
                                <Button
                                h="2rem"
                                w="90%"
                                borderRadius="3rem"
                                key="DeleteAccount"
                                onClick={onOpen}
                                bg={selectedSettings === "DeleteAccount" ? '#24BDFF' : '#CDF0FF'}
                                cursor="pointer"
                                _hover={{ bg: 'gray.300' }}
                            ><HStack alignItems="center" w="full">
                                <Image   alignSelf="flex-start" src='../settings.svg' height="5"/><Center color='black'>Delete Account</Center></HStack>
                            </Button>
                        }></DeleteAccount>
                        <Spacer /> {/* This pushes the logout button to the bottom */}

                        <Button
                            pl="2rem" pr="2rem" m="2rem" color="black" borderRadius="0.5rem" key="Logout"  cursor="pointer" variant="outline" _hover={{ bg: 'gray.300' ,color: '#FF4500'}}>
                            Logout
                        </Button>
            </VStack>
    )
}
