'use client';

import { HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { MoneyBackIcon, HassleFreeIcon, PayOnceIcon } from "./icons/icon";

interface FeatureProps extends StackProps {
    icon: ElementType;
}

export function Features(props: FeatureProps) {
    const {icon, children, ...rest} = props;
    return(
        <HStack {...rest} spacing='6'>
            <Icon as={icon} boxSize='48px'></Icon>
            <Text fontSize='lg' fontWeight='bold' color='gray.900' textAlign='left'>{children}</Text>
        </HStack>
    );
}

export default function Bottom() {
    return (
        <HStack maxWidth={["350px","994px"]} ml='auto' mr='auto' pt='16' spacing='5' flexDirection={["column","column","row"]}>
            <Features icon={MoneyBackIcon}>30 days money back Guarantee</Features>
            <Features icon={HassleFreeIcon}>No setup fees 100% hassle-free</Features>
            <Features icon={PayOnceIcon}>No monthly subscription Pay once and for all</Features>
        </HStack>
    );    
}