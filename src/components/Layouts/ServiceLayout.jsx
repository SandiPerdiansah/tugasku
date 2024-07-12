import { Box, Text, VStack, Highlight } from "@chakra-ui/react";
import { ServiceHeader } from "../Elements/Service/ServiceHeader.jsx";
import { ServiceList } from "../Elements/Service/ServiceList.jsx";
import { useEffect, useState } from "react";
import { API_SERVICES } from "../../services/API_SERVICES.js";

export const ServiceLayout = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await API_SERVICES();
                setServices(response.services);
                setLoading(false);
            } catch (error) {
                console.error(`Error: ${error.message}`);
                setLoading(false);
            }
        })();
    }, []);

    return (
        <VStack
            as='section'
            w='100%'
            alignItems='center'
            role='region'
            aria-labelledby='service-layout-heading'
        >
            <ServiceHeader />
            <ServiceList
                services={services}
                loading={loading}
            />
            <Box
                p={{ base: '2rem 1.4rem', lg: '2rem 4rem' }}
                mt={{ base: '-3rem', lg: '-4rem' }}
            >
                <Text
                    color='font'
                    fontSize={{ base: '1rem', lg: 'lg' }}
                    lineHeight={1.7}
                    textAlign='center'
                    data-aos='zoom-in'
                    data-aos-duration='1000'
                >
                    <Highlight
                        query={['kualitas', 'ketepatan waktu']}
                        styles={{ px: '2', py: '1', bg: 'yellow.200', rounded: 'md' }}
                    >
                        Tag di atas adalah tugas yang kami layani. Jelajahi tag untuk menemukan layanan yang tepat. Kami berkomitmen pada kualitas dan ketepatan waktu.
                    </Highlight>
                </Text>
            </Box>
        </VStack>
    )
}
