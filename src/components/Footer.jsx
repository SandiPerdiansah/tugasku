import { Button, Flex, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Flex
            as='footer'
            width='100%'
            height={{ lg: '20rem' }}
            bg='gray.800'
            p={{ base: '2rem 1.4rem', lg: '2rem 4rem' }}
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'start', lg: 'center' }}
            justifyContent={{ base: 'start', lg: 'space-between' }}
            color='white'
            aria-label="Footer"
        >
            <HStack
                alignItems='center'
                mb={{ lg: 'auto' }}
                aria-label="Logo and Brand"
            >
                <Image
                    src='/assets/images/logo.png'
                    borderRadius='full'
                    boxSize={{ base: '40px', lg: '60px' }}
                    objectFit='cover'
                    alt='Logo'
                    aria-label="Company Logo"
                />
                <Text
                    fontSize={{ base: 'xl', lg: '3xl' }} // Ukuran font judul lebih besar di desktop
                    fontWeight='bold'
                >
                    Tugasku
                </Text>
            </HStack>

            <Stack
                mt={{ base: '2rem', lg: '0' }}
                spacing={{ base: '1rem', lg: '6rem' }}
                mb={{ lg: 'auto' }}
                direction={{ base: 'column', lg: 'row' }}
                ms={{ lg: 'auto' }}
                me={{ lg: '2rem' }}
            >
                <VStack alignItems='start' spacing='0.5rem' mb={{ lg: 'auto' }}>
                    <Heading as='h2' fontSize={{ base: 'lg', lg: 'xl' }} mb={{ lg: '1rem' }}>Navigasi</Heading>
                    <Link
                        to='/'
                        fontSize='md'
                        fontWeight='medium'
                        aria-label="Link to Homepage"
                        color='white'
                        _hover={{ color: 'gray.300' }}
                    >
                        Beranda
                    </Link>
                    <Link
                        to='/tentang-kami'
                        fontSize='md'
                        fontWeight='medium'
                        aria-label="Link to About Us Page"
                        color='white'
                        _hover={{ color: 'gray.300' }}
                    >
                        Tentang Kami
                    </Link>
                    <Link
                        to='/layanan-kami'
                        fontSize='md'
                        fontWeight='medium'
                        aria-label="Link to Our Services Page"
                        color='white'
                        _hover={{ color: 'gray.300' }}
                    >
                        Layanan Kami
                    </Link>
                    <Link
                        to='/testimoni'
                        fontSize='md'
                        fontWeight='medium'
                        aria-label="Link to Testimonials Page"
                        color='white'
                        _hover={{ color: 'gray.300' }}
                    >
                        Testimoni
                    </Link>
                    <Link
                        to='/cara-order'
                        fontSize='md'
                        fontWeight='medium'
                        aria-label="Link to Order Process Page"
                        color='white'
                        _hover={{ color: 'gray.300' }}
                    >
                        Cara Order
                    </Link>
                </VStack>

                <VStack alignItems='start' spacing='0.5rem' mb={{ lg: 'auto' }}>
                    <Heading as='h2' fontSize={{ base: 'lg', lg: 'xl' }} mb={{ lg: '1rem' }}>Hubungi Kami</Heading>
                    <Button
                        as='a'
                        href='tel:+6281573617686'
                        fontSize='md'
                        fontWeight='medium'
                        aria-label="Phone Number"
                        variant='ghost'
                        color='white'
                        _hover={{ bg: 'none' }}
                        p={0}
                    >
                        62 815 7361 7686
                    </Button>
                </VStack>
            </Stack>

            <Text mb={{ lg: 'auto' }} fontSize='sm' mt={{ base: '2rem', lg: 0 }}>
                &copy; {new Date().getFullYear()} Tugasku. All rights reserved.
            </Text>
        </Flex>
    );
}
