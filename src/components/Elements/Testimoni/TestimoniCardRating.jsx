import {Avatar, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import {Icon, StarIcon} from "@chakra-ui/icons";

export const TestimoniCardRating = ({data}) => {
    return (
        <VStack
            w={{base: '100%', lg: '18rem'}}
            minH='15rem'
            borderRadius='lg'
            bg='#f7f9fa'
            p='2rem 1rem'
            textAlign='center'
        >
            <Avatar name={data.name} size={{base: 'md', lg: 'lg'}} shadow='md'/>
            <Heading as='h4' fontSize={{base: 'lg', lg: 'xl'}} mt={1}>
                {data.name}
            </Heading>
            <Text fontSize='sm' mt='-0.2rem'>
                {data.service}
            </Text>
            <Text mt={4}>
                {data.testimoni}
            </Text>
            <HStack mt={4} aria-label={`Rating: ${data.rating} out of 5`}>
                {[...Array(5)].map((_, index) => (
                    <Icon
                        key={index}
                        as={StarIcon}
                        color={index < data.rating ? 'yellow.500' : '#ddd'}
                        aria-hidden='true'
                    />
                ))}
            </HStack>
        </VStack>
    );
};
