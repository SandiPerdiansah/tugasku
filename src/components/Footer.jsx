import {Flex} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Flex
            as='footer'
            width='100%'
            bg='black'
            flexDirection={{base: 'column', lg: 'row'}}
            alignItems={{base: 'start', lg: 'center'}}
            justifyContent={{base: 'start', lg: 'center'}}
        >

        </Flex>
    );
}