import {VStack} from "@chakra-ui/react";
import {AboutHeader} from "../Elements/About/AboutHeader.jsx";
import {AboutPromotions} from "../Elements/About/AboutPromotions.jsx";

export const AboutLayout = () => {
    return (
        <VStack
            as='section'
            w='100%'
            minH='100vh'
            aria-label="About Section"
        >
            <AboutHeader/>
            <AboutPromotions/>
        </VStack>
    );
}
