import {Box, Grid, Heading, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import {TestimoniCardSekeleton} from "./TestimoniCardSekeleton.jsx";
import {TestimoniCard} from "./TestimoniCard.jsx";

export const TestimoniSwiperRating = ({testimonials}) => {
    const renderTestimonialCards = (rating) => (
        testimonials.length === 0
            ? [1, 2, 3, 4].map((_, i) => (
                <TestimoniCardSekeleton key={i}/>
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
            aria-labelledby="testimonial-heading"
            mt={{base: '1rem', lg: 0}}
            flexBasis={{base: '100%', lg: "60%"}}
            p={{lg: "1.4rem"}}
            overflow="hidden"
            maxH={{lg: '60rem'}}
            data-aos='zoom-in'
            data-aos-duration='1000'
        >
            <Heading
                id="testimonial-heading"
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
                <Tabs variant='enclosed' w='100%' aria-labelledby="testimonial-tabs">
                    <TabList aria-label="Testimonial rating tabs">
                        <Tab>Semua</Tab>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <Tab key={rating} aria-label={`${rating} star testimonials`}>
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
                        <TabPanel>
                            <Grid
                                templateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}
                                gap={4}
                                justifyContent="center"
                                mt={4}
                                w='100%'
                                role="list"
                            >
                                {
                                    testimonials.length === 0 ? (
                                        [1, 2, 3, 4].map((_, i) => (
                                            <TestimoniCardSekeleton key={i}/>
                                        ))
                                    ) : (
                                        testimonials.map((data) => (
                                                <TestimoniCard
                                                    key={data.id}
                                                    name={data.name}
                                                    service={data.service}
                                                    testimonial={data.testimoni}
                                                    rating={data.rating}
                                                />
                                            )
                                        ))}
                            </Grid>
                        </TabPanel>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <TabPanel key={rating}>
                                <Grid
                                    templateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}
                                    gap={4}
                                    justifyContent="center"
                                    mt={4}
                                    w='100%'
                                    role="list"
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