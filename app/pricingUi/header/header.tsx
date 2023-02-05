'use client';

import { Box, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box w='full' h='sm' bg='purple.600' color='gray.50' as='section'>
            <Text as='h1' 
            fontWeight="extrabold" 
            fontSize={["3xl","3xl","5xl"]} 
            fontFamily='sans-serif' 
            fontStyle='normal' 
            align={["left","center"]}
            letterSpacing='tight'
            pt='20'
            > 
                Simple pricing for your business
            </Text>
            <Text 
            fontWeight='medium' 
            fontSize={["lg","lg","2xl"]} 
            fontFamily='sans-serif' 
            fontStyle='normal' 
            align={["left","center"]}
            pt='5'
            opacity='0.84'
            >
                Plans that are carefully crafted to suit your business
            </Text> 
        </Box>
    )
}