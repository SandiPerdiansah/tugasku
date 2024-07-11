import {Link} from "react-router-dom";
import {HStack, Image, Text} from "@chakra-ui/react";

export const NavbarBand = () => {
    return (
        <Link to='/' aria-label='Home'>
            <HStack as='figure' spacing='1px'>
                <Image
                    boxSize={{base: '30px', lg: '40px'}}
                    borderRadius='full'
                    src='/assets/images/logo.png'
                    alt='Tugasku Logo'
                    objectFit='cover'
                />
                <Text
                    as='figcaption'
                    fontSize={{sm: 'xs', lg: 'xl'}}
                    fontWeight='bold'
                    color='#3182ce'
                >
                    Tugasku
                </Text>
            </HStack>
        </Link>
    );
};