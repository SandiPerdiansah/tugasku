import {useEffect, useRef, useState} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {Box, Collapse, HStack, IconButton, Spacer, Stack, useBreakpointValue, useDisclosure} from "@chakra-ui/react";
import {NavbarBand} from "./NavbarBrand.jsx";
import {NavbarLink} from "./NavbarLink.jsx";
import {NavbarButton} from "./NavbarButton.jsx"

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navRef = useRef();

    const {isOpen, onToggle} = useDisclosure();
    const isMobile = useBreakpointValue({base: true, lg: false});


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

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen, onToggle, lastScrollY]);

    return (
        <Box
            as='header'
            w='100%'
            boxShadow='sm'
            pos='fixed'
            top={showNavbar ? '0' : '-6rem'}
            left='0'
            right='0'
            zIndex='999'
            color='font'
            transition='all 0.3s'
            className='animate__animated animate__fadeInDown'
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
                            top={{base: '3.6rem', lg: '0'}}
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