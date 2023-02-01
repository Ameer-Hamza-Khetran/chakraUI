'use client'

import { Box, Text, Button, Flex } from "@chakra-ui/react";

export default function Features() {
    return (
        <Box
        maxW='994px'
        h='280px'
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);'
        m='auto'
        >
            <Flex>
                <Box as='section' 
                w='350px'
                h='280px'
                bg='#F0EAFB'
                textAlign='center'
                >
                    <Text as='h2'
                    fontSize='24px'
                    fontWeight='extrabold'
                    color='#171923'
                    pt='30px'
                    >
                        Premium Pro
                    </Text>
                    <Text as='h3'
                    fontSize='60px'
                    fontWeight='extrabold'
                    color='#171923'
                    letterSpacing='tight'
                    mt='-1'
                    >
                        $329
                    </Text>
                    <Text
                    fontSize='18px'
                    fontWeight='500'
                    color='#171923'
                    >
                        billed just once
                    </Text>
                    <Button
                    mt='20px'
                    w='280px' 
                    borderRadius='8px'
                    colorScheme='purple'
                    size='lg'
                    fontSize='16px'
                    fontWeight='700'
                    fontStyle='normal'
                    >
                        Get Started
                    </Button>
                </Box>
                <Box 
                bg='gray'
                w='644px'
                h='280px'
                >
                    <Text>
                        Access these features when you get this pricing
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}