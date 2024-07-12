import {VStack} from "@chakra-ui/react";
import {ContactHeader} from "../Elements/Contact/ContactHeader.jsx";
import {ContactSocials} from "../Elements/Contact/ContactSocials.jsx";

export const ContactLayout = () => {
    return (
        <VStack
            as='section'
            w='100%'
            minH={{lg: '100vh'}}
            p={{base: '6rem 1.4rem 2rem', lg: '6rem 4rem'}}
        >
            <ContactHeader/>
            <ContactSocials/>
        </VStack>
    )
}