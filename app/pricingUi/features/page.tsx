'use client'

import { Box, Text, Button, Flex, HStack, StackProps, Icon, Stack } from "@chakra-ui/react";
import CheckIcon from "./icons/icon";

const ListItem = (props: StackProps) => {
    const {children, ...rest} = props;
    return (
        <HStack as='li' spacing='25px' {...rest}>
            <Icon as={CheckIcon} w='22px' h='22px'></Icon>
            <Text>{children}</Text>
        </HStack>
    );
}

export default function Features() {
    return (
        <Box
        maxW='994px'
        h='280px'
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);'
        ml='auto'
        mr='auto'
        mt='-130px'        
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
                bg='white'
                w='644px'
                h='280px'
                fontSize='18px'
                fontWeight='400'
                lineHeight='28px'
                pl='50px'
                pt='25px'
                >
                    <Text>
                        Access these features when you get this pricing package for<br/> your business.
                    </Text>
                    <Stack as='ul' spacing='16px' pt='15px'>
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages via Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
}