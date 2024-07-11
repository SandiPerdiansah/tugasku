import {Box, Grid, Heading, Skeleton, Stack, Text} from "@chakra-ui/react";

export const ServiceList = ({services, loading}) => {

    return (
        <Box
            w='100%'
            p={{base: '2rem 1.4rem', lg: '0 4rem 4rem'}}
            mt={{lg: '-6rem'}}
            role='list'
            aria-label='List of services'
        >
            <Text
                mb='4'
                color='font'
                fontSize={{base: '1rem', lg: 'lg'}}
                lineHeight={1.7}
                textAlign='center'
                data-aos='zoom-in'
                data-aos-duration='1000'
            >
                Berikut adalah beberapa layanan Tag Tugas yang kami tawarkan.
            </Text>
            <Grid
                templateColumns={{base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}}
                gap={4}
                justifyContent='center'
            >
                {loading ? (
                    Array.from({length: 8}).map((_, index) => (
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
                                <Skeleton height='20px'/>
                                <Skeleton height='12px'/>
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
                                <Heading fontSize={{base: 'xl', lg: '2xl'}}>{service.name}</Heading>
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