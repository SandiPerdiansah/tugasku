import {Box, Flex, Heading, Image, Text} from "@chakra-ui/react";

export const ServiceHeader = () => {
    return(
        <Flex
            w='100%'
            h={{base: 'auto', lg: '100vh'}}
            p={{base: '2rem 1.4rem', lg: '2rem 4rem'}}
            alignItems='center'
            justifyContent='center'
            flexDirection={{base: 'column', lg: 'row'}}
            gap={{lg:'2rem'}}
            mt='2rem'
        >
           <Box>
               <Heading
                   as='h1'
                   id='service-layout-heading'
                   fontWeight='bold'
                   fontSize={{base: '2xl', lg: '4xl'}}
                   color='primary'
                   lineHeight={1.7}
                   textAlign={{base: 'center', lg: 'start'}}
                   order={{base: 2, lg: 1}}
                   data-aos='zoom-in'
                   data-aos-duration='1000'
               >
                   Kami melayani berbagai tugas kuliah dengan profesional dan berkualitas.
               </Heading>
               <Text
                   mb='4'
                   color='font'
                   fontSize={{base: '1rem', lg: 'lg'}}
                   lineHeight={1.7}
                   textAlign={{base:'center', lg:'start'}}
                   data-aos='zoom-in'
                   data-aos-duration='1000'
               >
                   Dengan pengerjaan Tim membuat pengerjaan tugas anda menjadi lebih cepat dan efisien
               </Text>
           </Box>
            <Image
                boxSize={{base: '15rem', lg: '24rem'}}
                src='/assets/images/services.svg'
                alt='Services Animation'
                aria-hidden='true'
                order={{base: 1, lg: 2}}
                data-aos='zoom-in'
                data-aos-duration='1000'
            />
        </Flex>
    )
}