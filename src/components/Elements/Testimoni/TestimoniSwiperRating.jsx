import {Avatar, Box, Grid, Heading, HStack, Icon, Skeleton, SkeletonText, Text, VStack} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";

export const TestimoniSwiperRating = ({testimonials}) => {
    return (
        <VStack
            flexBasis="50%"
            p="1.4rem"
            mb={{lg: "auto"}}
            maxH={{lg: "55rem"}}
            overflow="hidden"
        >
            <Heading
                as="h1"
                fontWeight="bold"
                fontSize={{base: "2xl", lg: "4xl"}}
                color="primary"
                textAlign={{base: "center", lg: "start"}}
                mt={{base: 4, lg: 0}}
            >
                Testimoni
            </Heading>
            <Text
                color="font"
                fontSize={{base: "1rem", lg: "lg"}}
                lineHeight={1.7} textAlign="center"
            >
                Ulasan dari pelanggan kami adalah bukti kualitas layanan kami. Kami bangga bisa membantu Anda mencapai
                kesuksesan!
            </Text>
            <Box
                maxH={{lg: "45rem"}}
                overflowY="auto"
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
                <Grid
                    templateColumns={{base: "repeat(1fr)", lg: "repeat(2, 1fr)"}}
                    gap={4} justifyContent="center"
                    mt={4} ms={{lg: '2rem'}}
                >
                    {
                        testimonials.length === 0
                            ? [1, 2, 3, 4].map((_, i) => (
                                <TestimoniCardSkeleton key={i}/>
                            ))
                            : testimonials.map((data) => (
                                <TestimoniCard
                                    key={data.id}
                                    name={data.name}
                                    service={data.service}
                                    testimonial={data.testimoni}
                                    rating={data.rating}
                                />
                            ))
                    }
                </Grid>
            </Box>
        </VStack>
    );
};

const TestimoniCard = ({name, service, testimonial, rating}) => (
    <VStack borderRadius="xl" p="2rem 1rem" w="18rem" aria-labelledby={`testimonial-${name}`}>
        <VStack>
            <Avatar name={name} size={{base: "md", lg: "lg"}} aria-hidden="true"/>
            <Heading as="h4" fontSize={{base: "md", lg: "xl"}} id={`testimonial-${name}`}>
                {name}
            </Heading>
            <Text mt="-0.5rem" color="font" fontSize="xs">
                {service}
            </Text>
        </VStack>
        <Text color="font" fontSize={{base: "xs", lg: "md"}} textAlign="center">
            {testimonial}
        </Text>
        <HStack mt={4} role="img" aria-label={`Rating: ${rating} out of 5`}>
            {
                [...Array(5)].map((_, i) => (
                    <Icon
                        key={i}
                        as={StarIcon}
                        color={i < rating ? "yellow.500" : "gray.300"}
                    />
                ))
            }
        </HStack>
    </VStack>
);

const TestimoniCardSkeleton = () => (
    <VStack borderRadius="xl" p="2rem 1rem" w="18rem" aria-busy="true">
        <VStack>
            <Skeleton circle size={{base: "md", lg: "lg"}} aria-hidden="true"/>
            <Skeleton height="20px" width="60%" aria-hidden="true"/>
            <Skeleton height="10px" width="40%" mt="-0.5rem" aria-hidden="true"/>
        </VStack>
        <SkeletonText mt="4" noOfLines={4} spacing="4"/>
        <HStack mt={4}>
            {
                [...Array(5)].map((_, i) => (
                    <Skeleton key={i} height="20px" width="20px"/>
                ))
            }
        </HStack>
    </VStack>
);