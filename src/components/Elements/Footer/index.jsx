import {Text, VStack} from "@chakra-ui/react";

export const Footer = () => {
    return(
        <VStack
            as='footer'
            width='100%'
            bg='gray.800'
            py='2rem'
        >
            <Text mb={{ lg: 'auto' }} fontSize='sm' color='white'>
                &copy; {new Date().getFullYear()} Tugasku. All rights reserved.
            </Text>
        </VStack>
    )
}