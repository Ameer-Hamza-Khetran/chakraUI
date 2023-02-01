'use client';

import { Box, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box w='100%' h='400px' bg='#6B46C1' color='#F7FAFC' as='section'>
            <Text as='h1' 
            fontWeight="extrabold" 
            fontSize='48px' 
            fontFamily='sans-serif' 
            fontStyle='normal' 
            align='center'
            letterSpacing='tight'
            pt='88px'
            > 
                Simple pricing for your business
            </Text>
            <Text 
            fontWeight='500px' 
            fontSize='24px' 
            fontFamily='sans-serif' 
            fontStyle='normal' 
            align='center'
            pt='20px'
            opacity='0.84'
            >
                Plans that are carefully crafted to suit your business
            </Text> 
        </Box>
    )
}