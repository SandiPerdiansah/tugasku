import {useEffect, useState} from "react";
import {API_SERVICES} from "../../services/API_SERVICES.js";
import {API_TESTIMONIALS} from "../../services/API_TESTIMONIALS.js";
import {TestimoniForm} from "../Elements/Testimoni/TestimoniForm.jsx";
import {TestimoniModal} from "../Elements/Testimoni/TestimoniModal.jsx";
import {TestimoniSwiperRating} from "../Elements/Testimoni/TestimoniSwiperRating.jsx";
import {Flex, useDisclosure, VStack} from "@chakra-ui/react";

export const TestimoniLayout = () => {
    const request = API_TESTIMONIALS;

    const [clickedStars, setClickedStars] = useState(0);
    const [succesSubmit, setSuccesSubmit] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const [testimonials, setTestimonials] = useState([]);
    const [textModal, setTextModal] = useState('');

    const {isOpen, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        (async () => {
            try {
                const response = await request.getTestimonials();
                response.testimonials.reverse();
                setTestimonials(response.testimonials);
            } catch (e) {
                console.log(`Error: ${e.message}`);
            }
        })();

    }, []);

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const capitalizeWords = (str) => {
            return str.replace(/\b\w/g, char => char.toUpperCase());
        };

        if (clickedStars === 0) {
            setIsAlert(true);
            return;
        }

        setSuccesSubmit(true);

        try {
            const response = await API_SERVICES();
            const token = response.services.map((data) => data.token);

            const newTestimoni = {
                id: +new Date(),
                name: capitalizeWords(e.target.fullName.value),
                service: `Jasa ${e.target.service.value}`,
                testimoni: e.target.testimoni.value,
                token: token.find((data) => data === e.target.token.value),
                rating: clickedStars,
            };

            if (newTestimoni.token) {
                setTestimonials([newTestimoni, ...testimonials]);
                setTextModal('Terimakasih atas penilaian yang di berikan 😊');
                await request.postTestimonial(newTestimoni);
            } else {
                setTextModal(`Token salah!!!, pastikan sudah order di Tugasku 😊`);
            }
        } catch (e) {
            console.log(`Error : ${e.message}`);
        } finally {
            e.target.fullName.value = '';
            e.target.service.value = '';
            e.target.testimoni.value = '';
            e.target.token.value = '';

            setClickedStars(0);
            setIsAlert(false);
            setSuccesSubmit(false);

            onOpen();
        }
    };

    return (
        <VStack
            as='section'
            w='100%'
            minH='100vh'
            p={{base: '4.6rem 1.4rem 4rem', lg: '8rem 4rem'}}
            data-aos='zoom-in'
            data-aos-duration='1000'
        >
            <Flex
                w='100%'
                alignItems='center'
                justifyContent='center'
                flexDirection={{base: 'column', lg: 'row'}}
            >
                <TestimoniForm
                    handleSubmitForm={handleSubmitForm}
                    clickedStars={clickedStars}
                    setClickedStars={setClickedStars}
                    succes={succesSubmit}
                    isAlert={isAlert}
                />

                <TestimoniModal
                    isOpen={isOpen}
                    onClose={onClose}
                    textModal={textModal}
                />

                <TestimoniSwiperRating
                    testimonials={testimonials}
                />
            </Flex>
        </VStack>
    );
}
