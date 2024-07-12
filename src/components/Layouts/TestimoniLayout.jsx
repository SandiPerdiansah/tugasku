import {Text, VStack} from "@chakra-ui/react";
import {TestimoniHeader} from "../Elements/Testimoni/TestimoniHeader.jsx";
import {TestimoniSwiperRatings} from "../Elements/Testimoni/TestimoniSwiperRatings.jsx";

export const TestimoniLayout = () => (
    <VStack
        as='section'
        w='100%'
        minH={{lg:'100vh'}}
        p={{base: '6rem 1.4rem 2rem', lg: '6rem 4rem'}}
    >
        <TestimoniHeader/>
        <TestimoniSwiperRatings/>

        <Text
            mt={2}
            color='font'
            fontSize={{base: '1rem', lg: 'lg'}}
            lineHeight={1.7}
            textAlign={{base:'center', lg:'start'}}
            data-aos='zoom-in'
            data-aos-duration='1000'
        >
            Di atas merupakan testimoni berdasarkan pengalaman pengguna yang sudah order jasa di Tugasku
        </Text>
    </VStack>
)