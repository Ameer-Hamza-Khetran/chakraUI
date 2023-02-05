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
            <Flex direction={["column","column","row"]} alignItems={["center"]} pt={["20px", "0px"]}>
                <Box as='section' 
                w='350px'
                h='280px'
                bg='#F0EAFB'
                textAlign='center'
                >
                    <Text as='h2'
                    fontSize='24px'
                    fontWeight='extrabold'
                    color='gray.900'
                    pt='6'
                    >
                        Premium Pro
                    </Text>
                    <Text as='h3'
                    fontSize='6xl'
                    fontWeight='extrabold'
                    color='gray.900'
                    letterSpacing='tight'
                    mt='-1'
                    >
                        $329
                    </Text>
                    <Text
                    fontSize='1g'
                    fontWeight='500'
                    color='gray.900'
                    >
                        billed just once
                    </Text>
                    <Button
                    mt='5'
                    w='280px' 
                    borderRadius='lg'
                    colorScheme='purple'
                    size='lg'
                    fontSize='md'
                    fontWeight='bold'
                    fontStyle='normal'
                    >
                        Get Started
                    </Button>
                </Box>
                <Box 
                bg='white'
                w={["350px","350px","644px"]}
                h={["auto","280px"]}
                textAlign={["center","initial"]}
                fontSize='lg'
                fontWeight='normal'
                lineHeight='7'
                pl={["auto","50px"]}
                pt='6'
                >
                    <Text>
                        Access these features when you get this pricing package for<br/> your business.
                    </Text>
                    <Stack as='ul' spacing='4' pt='3.5'>
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