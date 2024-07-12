import {Flex} from "@chakra-ui/react";
import {HomeHeader} from "../Elements/Home/HomeHeader.jsx";
import {HomeFooter} from "../Elements/Home/HomeFooter.jsx";
import {AboutLayout} from "./AboutLayout.jsx";
import {ServiceLayout} from "./ServiceLayout.jsx";
import {TestimoniLayout} from "./TestimoniLayout.jsx";
import {HowToOrderLayout} from "./HowToOrderLayout.jsx";
import {Footer} from "../Elements/Footer/index.jsx";
import {FaqLayout} from "./FaqLayout.jsx";
import {ContactLayout} from "./ContactLayout.jsx";

export const HomeLayout = () => {
    return (
        <>
            <Flex
                as='section'
                w='100%'
                h='100vh'
                alignItems='center'
                justifyContent='center'
                flexDirection={{base: 'column', lg: 'row'}}
                gap={8}
                p={{base: '0 1.4rem', lg: '0 4rem'}}
            >
                <HomeHeader/>
                <HomeFooter/>
            </Flex>

            <AboutLayout/>
            <ServiceLayout/>
            <TestimoniLayout/>
            <FaqLayout/>
            <ContactLayout/>
            <HowToOrderLayout/>
            <Footer/>
        </>
    );
}
