import {Box, Heading, Highlight, Text} from "@chakra-ui/react";

export const TestimoniHeader = () => {
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
                id="about-heading"
            >
                Testimoni
            </Heading>
            <Text
                color='font'
                fontSize={{base: '1rem', lg: 'lg'}}
                lineHeight={1.7}
            >
                <Highlight
                    query={['Pengalaman', 'puas', 'terbaik', 'luar biasa']}
                    styles={{px: '2', py: '1', bg: 'yellow.200', rounded: 'md'}}
                >
                    Pengalaman tak terlupakan dan puas dengan layanan kami. Ulasan pelanggan kami selalu luar biasa.
                    Bergabunglah dan buktikan kualitas terbaik yang kami tawarkan!
                </Highlight>
            </Text>
        </Box>
    )
}
