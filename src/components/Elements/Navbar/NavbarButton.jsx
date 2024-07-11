import {Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export const NavbarButton = () => {
    return (
        <Button
            as={Link}
            to='order'
            target='_blank'
            colorScheme='blue'
            size='sm'
            rel='noopener noreferrer'
            aria-label='Order via WhatsApp'
            role='button'
            borderRadius='20px'
            p='1.2rem 1rem'
            mt={{base: '1rem', lg: '0'}}
        >
            Order Sekarang
        </Button>
    );
};