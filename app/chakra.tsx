'use client';
import { ChakraProvider } from "@chakra-ui/react";
// import theme from '../theme';

export default function ChakraWrapper({ children }:any) {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    ); 
}