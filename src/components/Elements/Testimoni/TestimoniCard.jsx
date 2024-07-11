import { Avatar, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const TestimoniCard = ({ name, service, testimonial, rating }) => (
    <VStack
        borderRadius="xl"
        p="2rem 1rem"
        w="100%"
        aria-labelledby={`testimonial-${name}`}
        bg='#f7f9fa'
    >
        <VStack>
            <Avatar name={name} size='lg' aria-label={`Avatar of ${name}`} />
            <Heading
                as="h4"
                fontSize={{ base: "lg", lg: "xl" }}
                id={`testimonial-${name}`}
                mt={{ base: '0.5rem', lg: '0' }}
            >
                {name}
            </Heading>
            <Text color="font" fontSize="sm">
                {service === 'Jasa dll' ? 'Lainya' : service}
            </Text>
        </VStack>
        <Text
            color="font"
            fontSize={{ base: "sm", lg: "md" }}
            textAlign="center"
            mt='0.5rem'
        >
            {testimonial}
        </Text>
        <HStack mt={4} role="group" aria-label={`Rating: ${rating} out of 5`}>
            {[...Array(5)].map((_, i) => (
                <Icon
                    key={i}
                    as={StarIcon}
                    color={i < rating ? "yellow.500" : "gray.300"}
                    aria-hidden="true"
                />
            ))}
        </HStack>
    </VStack>
);