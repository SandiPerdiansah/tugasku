import {Box, Heading, Text} from "@chakra-ui/react";

export const OrderHeader = () => {
    return(
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
                Order Jasa Tugasku
            </Heading>
            <Text
                color='font'
                fontSize={{base: '1rem', lg: 'lg'}}
                lineHeight={1.7}
            >
                Silahkan isi formulir di bawah dan nanti akan di arahkan ke whatsapp
            </Text>
        </Box>
    )
}