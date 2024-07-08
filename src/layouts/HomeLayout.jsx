import {Button, Flex, Heading, Image, Text, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import AboutLayout from "./AboutLayout.jsx";
import ServiveLayout from "./ServiveLayout.jsx";
import OrderLayout from "./OrderLayout.jsx";
import TestimoniLayout from "./TestimoniLayout.jsx";

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
                        color='blue.600'
                        lineHeight={1.5}
                        className='animate__animated animate__fadeInRight animate__delay-1s'
                    >
                        Joki Tugas Solusi Cerdas untuk Melepas Terhalangnya Pendidikanmu
                    </Heading>
                    <Text
                        fontSize={{base: '1rem', lg: 'lg'}}
                        className='animate__animated animate__fadeInRight animate__delay-1s'
                    >
                        <strong>Tugasku</strong> adalah mitra terpercaya untuk menyelesaikan berbagai tugas kuliah dengan cepat dan efisien.
                    </Text>
                    <Button
                        colorScheme='blue'
                        size='md'
                        rel='noopener noreferrer'
                        aria-label='Lihat lebih lanjut tentang Joki Tugas'
                        borderRadius='20px'
                        px='4'
                        py='3'
                        className='animate__animated animate__fadeInUp animate__delay-2s'
                    >
                        <Link to='tentang-kami'>Lihat Selengkapnya</Link>
                    </Button>
                </VStack>
            </Flex>

            <AboutLayout/>
            <ServiveLayout/>
            <TestimoniLayout/>
            <OrderLayout/>
        </>
    );
}
