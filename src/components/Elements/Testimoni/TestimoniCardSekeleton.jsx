import {HStack, Skeleton, SkeletonText, VStack} from "@chakra-ui/react";

export const TestimoniCardSekeleton = () => {
    return (
        <VStack
            borderRadius="xl"
            p="2rem 1rem"
            w="100%"
            aria-busy="true"
            data-aos='zoom-in'
            data-aos-duration='1000'
        >
            <VStack>
                <Skeleton size={{base: "md", lg: "lg"}} aria-label="Avatar loading"/>
                <Skeleton height="20px" width="60%" aria-label="Loading testimonial service"/>
                <Skeleton height="10px" width="40%" mt="-0.5rem" aria-label="Loading testimonial service type"/>
            </VStack>
            <SkeletonText mt="4" noOfLines={4} spacing="4" aria-label="Loading testimonial content"/>
            <HStack mt={4} aria-label="Loading star ratings">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} height="20px" width="20px"/>
                ))}
            </HStack>
        </VStack>
    )
}