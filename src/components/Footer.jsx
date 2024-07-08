import { Text, VStack } from "@chakra-ui/react";

export default function Footer() {
    return (
        <VStack w='100%' as='footer' pb='2rem' spacing={1}>
            <Text fontSize='0.9rem' textAlign="center">Copyright © 2024 | Tugasku</Text>
            <Text fontSize='0.8rem' textAlign="center">
                Tugasku, <br /> Tasikmalaya, Jawa Barat, Indonesia
            </Text>
        </VStack>
    )
}
