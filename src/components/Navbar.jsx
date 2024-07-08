import {useEffect, useRef} from "react";
import {Link, NavLink} from "react-router-dom";
import {HamburgerIcon} from "@chakra-ui/icons";
import {
    Box,
    Button,
    Collapse,
    HStack,
    IconButton,
    Image,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
    useDisclosure
} from "@chakra-ui/react";
import {data} from "../services/data.js";

export default function Navbar() {
    const {isOpen, onToggle} = useDisclosure();
    const isMobile = useBreakpointValue({base: true, lg: false});
    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
                onToggle();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onToggle]);

    return (
        <Box
            as='header'
            w='100%'
            boxShadow='sm'
            pos='fixed'
            top='0'
            left='0'
            right='0'
            zIndex='999'
            color='font'
        >
            <HStack
                as='nav'
                p={{base: '0.6rem 1.4rem', lg: '1rem 4rem'}}
                bg='white'
                aria-label='Main Navigation'
                role='navigation'
                ref={navRef}
            >
                <NavbarBand/>
                <Spacer/>

                {isMobile ? (
                    <Collapse in={isOpen} animateOpacity>
                        <Stack
                            direction={{base: 'column', lg: 'row'}}
                            alignItems='center'
                            justifyContent='center'
                            position={{base: 'absolute', lg: 'static'}}
                            top={{base: '3.8rem', lg: '0'}}
                            left='0'
                            right='0'
                            w={{base: '100%', lg: 'auto'}}
                            p={{base: '1rem', lg: '0'}}
                            bg='white'
                            shadow='sm'
                            textAlign='center'
                        >
                            <NavbarLink onClick={isMobile ? onToggle : undefined}/>
                            <NavbarButton/>
                        </Stack>
                    </Collapse>
                ) : (
                    <Stack
                        direction={{base: 'column', lg: 'row'}}
                        alignItems='center'
                        justifyContent='center'
                        position='static'
                        top='auto'
                        left='auto'
                        right='auto'
                        p='0'
                        bg='white'
                        textAlign='center'
                    >
                        <NavbarLink/>
                        <NavbarButton/>
                    </Stack>
                )}

                <IconButton
                    aria-label='toggle menu'
                    role='button'
                    icon={<HamburgerIcon/>}
                    fontSize='xl'
                    variant='ghost'
                    _hover={{bg: 'transparent'}}
                    display={{lg: 'none'}}
                    onClick={onToggle}
                />
            </HStack>
        </Box>
    );
}

const NavbarBand = () => {
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

const NavbarLink = ({onClick}) => {
    return (
        <Stack
            className='navbar_link'
            fontSize='1rem'
            me={{lg: '1rem'}}
            spacing={{base: '0.8rem', lg: '1.5rem'}}
            direction={{base: 'column', lg: 'row'}}
        >
            {
                data.navbar.map((item) => (
                    <NavLink to={item.path} aria-label={item.teks} onClick={onClick} key={item.id}>
                        {item.teks}
                    </NavLink>
                ))
            }
        </Stack>
    );
};

const NavbarButton = () => {
    const phoneNumber = '6281573617686';
    const message = 'Halo, saya ingin memesan jasa joki!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Button
            as='a'
            href={whatsappUrl}
            colorScheme='blue'
            size='sm'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Order via WhatsApp'
            borderRadius='20px'
            p='1.2rem 1rem'
            mt={{base: '1rem', lg: '0'}}
        >
            Order Sekarang
        </Button>
    );
};
