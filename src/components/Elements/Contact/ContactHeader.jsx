import {Box, Heading, Text} from "@chakra-ui/react";

export const ContactHeader = () => {
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
                Hubungi Kami
            </Heading>
            <Text
                color='font'
                fontSize={{base: '1rem', lg: 'lg'}}
                lineHeight={1.7}
            >
                Dapatkan bantuan segera dari tim kami yang siap membantu Anda.
            </Text>
        </Box>
    )
}