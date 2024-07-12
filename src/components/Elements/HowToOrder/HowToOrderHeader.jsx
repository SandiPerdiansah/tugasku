import {Box, Heading, Highlight, Text} from "@chakra-ui/react";

export const HowToOrderHeader = () => {
    return (
        <Box
            textAlign='center'
            data-aos='zoom-in'
            data-aos-duration='1000'
        >
            <Heading
                as='h1'
                fontWeight='bold'
                fontSize={{base: '2xl', lg: '4xl'}}
                color='primary'
                lineHeight={1.7}
            >
                Cara Order
            </Heading>
            <Text
                color='font'
                fontSize={{base: '1rem', lg: 'lg'}}
                lineHeight={1.7}
            >
                <Highlight
                    query={['tugasku']}
                    styles={{px: '2', py: '1', bg: 'yellow.200', rounded: 'md'}}
                >
                    Merupakan tata cara order jasa Tugasku melalui website official resmi
                </Highlight>
            </Text>
        </Box>
    )
}