import {Button, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export const HomeFooter = () => {
    return(
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
                lineHeight={1.7}
                className='animate__animated animate__fadeInDown animate__delay-1s'
            >
                Joki Tugas Solusi Cerdas untuk Melepas Terhalangnya Pendidikanmu
            </Heading>
            <Text
                fontSize={{base: '1rem', lg: 'lg'}}
                color='font'
                lineHeight={1.7}
                className='animate__animated animate__fadeInDown animate__delay-1s'
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
                    role='button'
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
                    role='button'
                    w={{base: '100%', lg: 'auto'}}
                >
                    Order Sekarang
                </Button>
            </HStack>
        </VStack>
    )
}