import {Box, Text} from "@chakra-ui/react";
import {FaqHeader} from "../Elements/Faq/FaqHeader.jsx";
import {FaqQuestions} from "../Elements/Faq/FaqQuestions.jsx";

export const FaqLayout = () => {
    return (
        <Box
            as='section'
            w='100%'
            minH={{lg: '100vh'}}
            p={{base: '6rem 1.4rem 2rem', lg: '6rem 4rem'}}
        >
            <FaqHeader/>
            <FaqQuestions/>

            <Text
                mt={6}
                color='font'
                fontSize={{base: '1rem', lg: 'lg'}}
                lineHeight={1.7}
                textAlign='center'
                data-aos='zoom-in'
                data-aos-duration='1000'
            >
                Di atas merupakan beberapa pertanyaan yang sering di tanyakan oleh pelanggan kami
            </Text>
        </Box>
    )
}