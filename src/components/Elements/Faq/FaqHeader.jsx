import {Box, Heading, Text} from "@chakra-ui/react";

export const FaqHeader = () => {
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
                aria-labelledby="faq-heading"
            >
                Apa Kata Pelanggan Kami
            </Heading>
            <Text
                color='font'
                fontSize={{base: '1rem', lg: 'lg'}}
                lineHeight={1.7}
            >
                Temukan jawaban untuk pertanyaan-pertanyaan umum yang sering diajukan oleh pelanggan kami
            </Text>
        </Box>
    )
}