import {HStack, Skeleton, VStack} from "@chakra-ui/react";

export const TestimoniCardRatingSkeleton = () => {
    return (
        <VStack
            w={{base: '100%', lg: '18rem'}}
            minH='15rem'
            borderRadius='lg'
            bg='#f7f9fa'
            p='2rem 1rem'
            textAlign='center'
        >
            <Skeleton
                w={{base: '60px', lg: '100px'}}
                h={{base: '60px', lg: '100px'}}
                borderRadius="full"
            />
            <Skeleton w="80%" h="20px"/>
            <Skeleton w="60%" h="15px"/>
            <Skeleton w="90%" h="50px"/>
            <HStack mt={4} aria-label="Rating: Loading">
                {[...Array(5)].map((_, index) => (
                    <Skeleton
                        key={index}
                        w="20px"
                        h="20px"
                        borderRadius="full"
                        startColor="gray.200"
                        endColor="gray.400"
                    />
                ))}
            </HStack>
        </VStack>
    );
};
