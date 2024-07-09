import { Box, Flex, Heading, Image, Stack, Text, VStack, Grid } from "@chakra-ui/react";
import { data } from "../services/data.js";

export default function ServiceLayout() {
    return (
        <VStack
            as='section'
            w='100%'
            alignItems='center'
            role='region'
            aria-labelledby='service-layout-heading'
        >
            <Flex
                w='100%'
                h={{ base: 'auto', lg: '100vh' }}
                p={{ base: '2rem 1.4rem', lg: '2rem 4rem' }}
                alignItems='center'
                justifyContent='center'
                flexDirection={{ base: 'column', lg: 'row' }}
            >
                <Heading
                    as='h1'
                    id='service-layout-heading'
                    fontWeight='bold'
                    fontSize={{ base: '2xl', lg: '4xl' }}
                    color='primary'
                    lineHeight={1.7}
                    textAlign={{ base: 'center', lg: 'start' }}
                    order={{ base: 2, lg: 1 }}
                    data-aos='zoom-in'
                    data-aos-duration='1000'
                >
                    Kami melayani berbagai jenis tugas mata kuliah dengan profesionalisme dan kualitas terbaik.
                </Heading>
                <Image
                    boxSize={{ base: '15rem', lg: '24rem' }}
                    src='/assets/images/services.svg'
                    alt='Services Animation'
                    aria-hidden='true'
                    order={{ base: 1, lg: 2 }}
                    data-aos='zoom-in'
                    data-aos-duration='1000'
                />
            </Flex>

            <ServiceList />
        </VStack>
    )
}

const ServiceList = () => {
    return (
        <Box
            w='100%'
            p={{ base: '2rem 1.4rem', lg: '0 4rem 4rem' }}
            mt={{ lg: '-6rem' }}
            role='list'
            aria-label='List of services'
        >
            <Text
                mb='4'
                color='font'
                fontSize={{ base: '1rem', lg: 'lg' }}
                lineHeight={1.7}
                textAlign='center'
                data-aos='zoom-in'
                data-aos-duration='1000'
            >
                Berikut adalah beberapa layanan Tag Tugas yang kami tawarkan.
            </Text>
            <Grid
                templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap={4}
                justifyContent='center'
            >
                {
                    data.services.map((item) => (
                        <Box
                            key={item.id}
                            p='4'
                            borderWidth='1px'
                            borderRadius='lg'
                            textAlign='center'
                            whiteSpace='nowrap'
                            overflow='hidden'
                            textOverflow='ellipsis'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            role='listitem'
                            aria-label={`Service ${item.name}, Price Rp ${item.price}`}
                        >
                            <Stack spacing='3'>
                                <Heading fontSize={{ base: 'xl', lg: '2xl' }}>{item.name}</Heading>
                                <Text fontSize='xs' mt='-0.5rem'>
                                    Rp {item.price}
                                </Text>
                            </Stack>
                        </Box>
                    ))
                }
            </Grid>
        </Box>
    );
}
