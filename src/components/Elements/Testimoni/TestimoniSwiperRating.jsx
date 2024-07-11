import {
    Avatar,
    Box,
    Grid,
    Heading,
    HStack,
    Icon,
    Skeleton,
    SkeletonText,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack
} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";

export const TestimoniSwiperRating = ({testimonials}) => {
    const renderTestimonialCards = (rating) => (
        testimonials.length === 0
            ? [1, 2, 3, 4].map((_, i) => (
                <TestimoniCardSkeleton key={i}/>
            ))
            : testimonials.filter((data) => data.rating === rating)
                .map((data) => (
                    <TestimoniCard
                        key={data.id}
                        name={data.name}
                        service={data.service}
                        testimonial={data.testimoni}
                        rating={data.rating}
                    />
                ))
    );

    return (
        <VStack
            mt={{base: '1rem', lg: 0}}
            flexBasis={{base: '100%', lg: "60%"}}
            p={{lg: "1.4rem"}}
            overflow="hidden"
            maxH={{lg: '60rem'}}
        >
            <Heading
                as="h1"
                fontWeight="bold"
                fontSize={{base: "2xl", lg: "4xl"}}
                color="primary"
                textAlign={{base: "center", lg: "start"}}
                mt={{base: 4, lg: 0}}
                data-aos='zoom-in'
                data-aos-duration='1000'
            >
                Testimoni
            </Heading>
            <Text
                color="font"
                fontSize={{base: "1rem", lg: "lg"}}
                lineHeight={1.7}
                textAlign="center"
                data-aos='zoom-in'
                data-aos-duration='1000'
            >
                Ulasan dari pelanggan kami adalah bukti kualitas layanan kami
            </Text>
            <Box w='100%'>
                <Tabs variant='enclosed' w='100%'>
                    <TabList>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <Tab key={rating}>
                                {[...Array(rating)].map((_, i) => (
                                    <Icon
                                        key={i}
                                        as={StarIcon}
                                        color='yellow.500'
                                        boxSize={2}
                                    />
                                ))}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels
                        w='100%'
                        minW='100%'
                        maxH={{base: '78rem', lg: '43rem'}}
                        minH='43rem'
                        overflowY="auto"
                        shadow='md'
                        borderRadius='lg'
                        css={{
                            "&::-webkit-scrollbar": {
                                width: "0px",
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "transparent",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "transparent",
                            },
                        }}
                    >
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <TabPanel key={rating}>
                                <Grid
                                    templateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}
                                    gap={4}
                                    justifyContent="center"
                                    mt={4}
                                    w='100%'
                                >
                                    {renderTestimonialCards(rating)}
                                </Grid>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </Box>
        </VStack>
    );
};

const TestimoniCard = ({name, service, testimonial, rating}) => (
    <VStack
        borderRadius="xl"
        p="2rem 1rem"
        w="100%"
        aria-labelledby={`testimonial-${name}`}
        bg='#f7f9fa'
        data-aos='zoom-in'
        data-aos-duration='1000'
    >
        <VStack>
            <Avatar name={name} size='lg' aria-hidden="true"/>
            <Heading
                as="h4"
                fontSize={{base: "lg", lg: "xl"}}
                id={`testimonial-${name}`}
                mt={{base: '0.5rem', lg: '0'}}
            >
                {name}
            </Heading>
            <Text color="font" fontSize="sm">
                {service === 'Jasa dll' ? 'Lainya' : service}
            </Text>
        </VStack>
        <Text
            color="font"
            fontSize={{base: "sm", lg: "md"}}
            textAlign="center"
            mt='0.5rem'
        >
            {testimonial}
        </Text>
        <HStack mt={4} role="img" aria-label={`Rating: ${rating} out of 5`}>
            {[...Array(5)].map((_, i) => (
                <Icon
                    key={i}
                    as={StarIcon}
                    color={i < rating ? "yellow.500" : "gray.300"}
                />
            ))}
        </HStack>
    </VStack>
);

const TestimoniCardSkeleton = () => (
    <VStack
        borderRadius="xl"
        p="2rem 1rem"
        w="100%"
        aria-busy="true"
        data-aos='zoom-in'
        data-aos-duration='1000'
    >
        <VStack>
            <Skeleton circle size={{base: "md", lg: "lg"}} aria-hidden="true"/>
            <Skeleton height="20px" width="60%" aria-hidden="true"/>
            <Skeleton height="10px" width="40%" mt="-0.5rem" aria-hidden="true"/>
        </VStack>
        <SkeletonText mt="4" noOfLines={4} spacing="4"/>
        <HStack mt={4}>
            {[...Array(5)].map((_, i) => (
                <Skeleton key={i} height="20px" width="20px"/>
            ))}
        </HStack>
    </VStack>
);