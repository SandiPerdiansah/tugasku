import {Button, Flex, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import AboutLayout from "./AboutLayout.jsx";
import ServiveLayout from "./ServiveLayout.jsx";
import OrdersLayout from "./OrdersLayout.jsx";
import TestimoniLayout from "./TestimoniLayout.jsx";
import Footer from "../components/Footer.jsx";

export default function HomeLayout() {
    return (
        <>
            <Flex
                as='section'
                w='100%'
                h='100vh'
                alignItems='center'
                justifyContent='center'
                flexDirection={{base: 'column', lg: 'row'}}
                gap={8}
                p={{base: '0 1.4rem', lg: '0 4rem'}}
            >
                <Image
                    boxSize={{base: '15rem', lg: '20rem'}}
                    src='/assets/images/learning.svg'
                    alt='Learning animation'
                    className='animate__animated animate__fadeInDown animate__delay-1s'
                />

                <VStack
                    align={{base: 'center', lg: 'flex-start'}}
                    spacing={6}
                    textAlign={{base: 'center', lg: 'left'}}
                >
                    <Heading
                        as='h1'
                        fontWeight='bold'
                        fontSize={{base: '2xl', lg: '4xl'}}
                        color='primary'
                        lineHeight={1.5}
                        className='animate__animated animate__fadeInRight animate__delay-1s'
                    >
                        Joki Tugas Solusi Cerdas untuk Melepas Terhalangnya Pendidikanmu
                    </Heading>
                    <Text
                        fontSize={{base: '1rem', lg: 'lg'}}
                        className='animate__animated animate__fadeInRight animate__delay-1s'
                    >
                        <strong>Tugasku</strong> adalah mitra terpercaya untuk menyelesaikan berbagai tugas kuliah
                        dengan cepat dan efisien.
                    </Text>
                    <HStack
                        role='group'
                        className='animate__animated animate__fadeInUp animate__delay-2s'
                    >
                        <Button
                            as={Link}
                            to='tentang-kami'
                            variant='outline'
                            colorScheme='blue'
                            borderRadius='20px'
                            aria-label='Selengkapnya tentang kami'
                            w={{base: '100%', lg: 'auto'}}
                        >
                            Selengkapnya
                        </Button>
                        <Button
                            as={Link}
                            to='order'
                            target='_blank'
                            variant='customBlue'
                            borderRadius='20px'
                            aria-label='Order Sekarang'
                            w={{base: '100%', lg: 'auto'}}
                        >
                            Order Sekarang
                        </Button>
                    </HStack>
                </VStack>
            </Flex>

            <AboutLayout/>
            <ServiveLayout/>
            <TestimoniLayout/>
            <OrdersLayout/>
            <Footer/>
        </>
    );
}
