import { useEffect, useState} from 'react';
import { Card, HStack, Stack, VStack } from "@chakra-ui/react"

const Messages = (props) => {
    const [messageLoad,setMessageLoad] = useState([])

    useEffect(()=>{
        setMessageLoad(
            [
                <Card.Root w="fit-content" h="fit-content" borderRadius="10px" margin="3px" textAlign="center" placeSelf="center" bgColor="#C0E0EE" borderWidth="0px">
                <Card.Body verticalAlign="middle" padding="10px">
                    11 December
                </Card.Body >
              </Card.Root>,
                <Card.Root w="60%" h="fit-content" borderRadius="10px" float="left" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
                <Card.Body verticalAlign="middle">
                    Hi this is from Tom
                </Card.Body >
              </Card.Root>,
            <Card.Root w="60%" h="fit-content" borderRadius="10px" float="right" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
            <Card.Body verticalAlign="middle">
                Hi Tom, This is Lisa
            </Card.Body >
        </Card.Root>,
                        <Card.Root w="60%" h="fit-content" borderRadius="10px" float="left" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
                        <Card.Body verticalAlign="middle">
                            Hi this is from Tom
                        </Card.Body >
                      </Card.Root>,
                    <Card.Root w="60%" h="fit-content" borderRadius="10px" float="right" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
                    <Card.Body verticalAlign="middle">
                        Hi Tom, This is Lisa
                    </Card.Body >
                </Card.Root>,
                <Card.Root w="60%" h="fit-content" borderRadius="10px" float="left" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
                <Card.Body verticalAlign="middle">
                    Hi this is from Tom
                </Card.Body >
            </Card.Root>,
            <Card.Root w="60%" h="fit-content" borderRadius="10px" float="right" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
            <Card.Body verticalAlign="middle">
                Hi Tom, This is Lisa
            </Card.Body >
        </Card.Root>,
                        <Card.Root w="60%" h="fit-content" borderRadius="10px" float="left" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
                        <Card.Body verticalAlign="middle">
                            Hi this is from Tom
                        </Card.Body >
                    </Card.Root>,
                    <Card.Root w="60%" h="fit-content" borderRadius="10px" float="right" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
                    <Card.Body verticalAlign="middle">
                        Hi Tom, This is Lisa
                    </Card.Body >
                </Card.Root>,
                              <Card.Root w="60%" h="fit-content" borderRadius="10px" float="left" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
                              <Card.Body verticalAlign="middle">
                                  Hi this is from Tom
                              </Card.Body >
                            </Card.Root>,
                          <Card.Root w="60%" h="fit-content" borderRadius="01px" float="right" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
                          <Card.Body verticalAlign="middle">
                              Hi Tom, This is Lisa
                          </Card.Body >
                      </Card.Root>,
                                      <Card.Root w="60%" h="fit-content" borderRadius="01px" float="left" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
                                      <Card.Body verticalAlign="middle">
                                          Hi this is from Tom
                                      </Card.Body >
                                    </Card.Root>,
                                  <Card.Root w="60%" h="fit-content" borderRadius="01px" float="right" margin="10px" bgColor="#C0E0EE" borderWidth="0px">
                                  <Card.Body verticalAlign="middle">
                                      Hi Tom, This is Lisa
                                  </Card.Body >
                              </Card.Root>
            ]
        )
    },[])

    return(
        <VStack w="100%" display="block" h="76vh" alignContent="end" borderWidth="0px" overflowY="scroll" paddingTop="30%" bgColor="#CDF0FF">
            {messageLoad}
        </VStack>
    )
}

export default Messages