import {Box, Heading, Highlight, Img, Text, VStack} from "@chakra-ui/react";

export const HowToOrderExample = () => {
    return (
        <VStack
            w='100%'
            mt={4}
        >
            <Heading
                as='h2'
                fontWeight='bold'
                fontSize={{base: '2xl', lg: '4xl'}}
                color='primary'
                data-aos='zoom-in'
                data-aos-duration='1000'
            >
                Contoh Order
            </Heading>
            <Text
                mt='-0.2rem'
                color='font'
                fontSize={{base: '1rem', lg: 'lg'}}
                lineHeight={1.7}
                data-aos='zoom-in'
                data-aos-duration='1000'
            >
                <Highlight
                    query={['tugasku']}
                    styles={{px: '2', py: '1', bg: 'yellow.200', rounded: 'md'}}
                >
                    Contoh pengisian formulir order Tugasku
                </Highlight>
            </Text>
            <Box
                w={{base: '100%', lg: '80%'}}
                as='figure'
                bg='white'
                p='2rem'
                borderRadius='xl'
                mt={2}
                data-aos='zoom-in'
                data-aos-duration='1000'
            >
                <Img
                    me='1rem'
                    w='100%'
                    src='/assets/images/example-order.png'
                    objectFit='cover'
                    alt='example Order'
                />
                <Text
                    as='figcaption'
                    fontSize='sm'
                    fontWeight='bold'
                    textAlign='center'
                    mt={{lg: '-2rem'}}
                >
                    -- Contoh Order --
                </Text>
            </Box>
        </VStack>
    )
}