import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

function NavigationBar() {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            padding="1rem"
            bg="blue.500"
            color="white"
            height="50px"
        >
            <Link to="/">
                <Flex align="center">
                    <Box>
                        <Text fontSize="xl" fontWeight="bold">
                            GigihShop
                        </Text>
                    </Box>
                    <Box>
                        <img src="/logo512.png" alt="Logo" height="100%" width="50px" />
                    </Box>
                </Flex>
            </Link>
            <Flex align="center">
                <Box>
                    <Button colorScheme="whiteAlpha" variant="ghost" marginRight="1rem">
                        <Link to="/products">Shop</Link>
                    </Button>
                    <Button colorScheme="whiteAlpha" variant="ghost" marginRight="1rem">
                        <Link to="/profile/:profileId">Profile</Link>
                    </Button>
                </Box>
            </Flex>
        </Flex>
    );
}


export default NavigationBar;
