import { Box, Card, HStack, Text } from "@chakra-ui/react"

export const addSenderMessageCard = (message,time)=>{
    return(
        <Box w='100%' flexDirection='row' display='flex' justifyContent='right'>
            
            <Card.Root w="70%" minH="3rem" borderRadius="10px" margin="0.3rem" bgColor="#6BEA97" borderWidth="0px">
            <HStack w='100%' h='100%' gap='0'>
                <Card.Body verticalAlign="middle" w='90%' margin='0px'>
                    {message}
                </Card.Body >
                <Box h='100%' w='10%' justifyContent="end" display='flex'flexDirection='column' alignItems="flex-end">
                    <Text padding='0px' margin='0.4rem'>
                        {time}
                    </Text>
                </Box>
            </HStack>
            </Card.Root>
        </Box>
    )
}
export const addReceiverMessageCard = (message,time)=>{
    return(
        <Box w='100%' flexDirection='row' display='flex' justifyContent='left'>
        <Card.Root w="70%" minH="3rem" borderRadius="10px" margin="0.3rem" bgColor="#C0E0EE" borderWidth="0px">
        <HStack w='100%' h='100%' gap='0'>
            <Card.Body verticalAlign="middle" w='90%' margin='0px'>
                {message}
            </Card.Body >
            <Box h='100%' w='10%' justifyContent="end" display='flex'flexDirection='column' alignItems="flex-end">
                <Text padding='0px' margin='0.4rem'>
                    {time}
                </Text>
            </Box>
        </HStack>
        </Card.Root>
        </Box>

    )
}
export const addDateCard = (date)=>{
    return(
        <Card.Root w="fit-content" h="fit-content" borderRadius="10px" margin="3px" textAlign="center" placeSelf="center" bgColor="#C0E0EE" borderWidth="0px">
        <Card.Body verticalAlign="middle" padding="10px" color='gray'>
            {date}
        </Card.Body >
      </Card.Root>
    )
}

export const addNewMessagesCard = ()=>{
    return(
        <Card.Root w="100%" h="fit-content" borderRadius="0px" marginTop ="1rem" marginBottom ="1rem" textAlign="center" placeSelf="center" bgColor="#d6d6d6" borderWidth="0px">
        <Card.Body verticalAlign="middle" padding="10px" color='black'>
            New Messages
        </Card.Body >
      </Card.Root>
    )
}