import {Box, Flex, Grid, Heading, Image, Stack, Text, VStack, Skeleton} from "@chakra-ui/react";
import {API_SERVICES} from "../services/API_SERVICES.js";
import {useEffect, useState} from "react";

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
                h={{base: 'auto', lg: '100vh'}}
                p={{base: '2rem 1.4rem', lg: '2rem 4rem'}}
                alignItems='center'
                justifyContent='center'
                flexDirection={{base: 'column', lg: 'row'}}
            >
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
                    Kami melayani berbagai jenis tugas mata kuliah dengan profesionalisme dan kualitas terbaik.
                </Heading>
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
            <ServiceList/>
            <Box
                p={{base: '2rem 1.4rem', lg: '2rem 4rem'}}
                mt={{base: '-2rem', lg: '-4rem'}}
            >
                <Text
                    color='font'
                    fontSize={{base: '1rem', lg: 'lg'}}
                    lineHeight={1.7}
                    textAlign='center'
                    data-aos='zoom-in'
                    data-aos-duration='1000'
                >
                    Tag di atas adalah beberapa tugas yang kami layani. Dari makalah, esai, hingga proyek besar, tim
                    ahli kami siap membantu Anda. Jelajahi tag untuk menemukan layanan yang tepat dan dapatkan solusi
                    terbaik untuk kebutuhan akademis Anda. Kami berkomitmen pada kualitas dan ketepatan waktu untuk
                    memastikan hasil terbaik dalam setiap tugas.
                </Text>
            </Box>
        </VStack>
    )
}

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await API_SERVICES();
                setServices(response.services);
                setLoading(false);
            } catch (error) {
                console.error(`Error: ${error.message}`);
                setLoading(false);
            }
        })();
    }, []);

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
                {loading ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <Box
                            key={index}
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
                            aria-label='Loading service'
                        >
                            <Stack spacing='3'>
                                <Skeleton height='20px' />
                                <Skeleton height='12px' />
                            </Stack>
                        </Box>
                    ))
                ) : (
                    services.map((service) => (
                        <Box
                            key={service.token}
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
                            aria-label={`Service ${service.name}, Price Rp ${service.price}`}
                        >
                            <Stack spacing='3'>
                                <Heading fontSize={{ base: 'xl', lg: '2xl' }}>{service.name}</Heading>
                                <Text fontSize='xs' mt='-0.5rem'>
                                    Rp {service.price}
                                </Text>
                            </Stack>
                        </Box>
                    ))
                )}
            </Grid>
        </Box>
    );
}
