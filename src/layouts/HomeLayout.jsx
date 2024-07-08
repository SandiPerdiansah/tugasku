import {Button, Flex, Heading, Image, Text, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function HomeLayout() {
    return (
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
                >
                    Joki Tugas Solusi Cerdas untuk Melepas Terhalangnya Pendidikanmu
                </Heading>
                <Text fontSize={{base: '1rem', lg: 'lg'}}>
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
                >
                    <Link to='tentang-kami'>Lihat Selengkapnya</Link>
                </Button>
            </VStack>
        </Flex>
    );
}
