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
                <Skeleton size={{base: "md", lg: "lg"}} aria-hidden="true"/>
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
    )
}