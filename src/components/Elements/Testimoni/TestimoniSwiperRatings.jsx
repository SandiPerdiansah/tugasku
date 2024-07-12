import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {HStack} from "@chakra-ui/react";
import {TestimoniCardRating} from "./TestimoniCardRating.jsx";
import {API_TESTIMONIALS} from "../../../services/API_TESTIMONIALS.js";
import {useEffect, useState} from "react";
import {TestimoniCardRatingSkeleton} from "./TestimoniCardRatingSkeleton.jsx";

export const TestimoniSwiperRatings = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await API_TESTIMONIALS.getTestimonials();
                setTestimonials(response.testimonials)
            } catch (e) {
                console.log(`Error : ${e.message}`);
            }
        })();
    }, []);

    return (
        <HStack
            w="100%"
            mt={8}
            p={{lg: "0 4rem 2rem"}}
            data-aos='zoom-in'
            data-aos-duration='1000'
        >
            <Swiper
                className='swiper'
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                pagination={{clickable: true}}
                modules={[Pagination, Autoplay, Navigation]}
                navigation={true}
                autoplay={{delay: 2000, disableOnInteraction: false}}
            >
                {
                    testimonials.length > 0 ? (
                        testimonials.map((data, index) => (
                            <SwiperSlide key={index + 1}>
                                <TestimoniCardRating data={data}/>
                            </SwiperSlide>
                        ))
                    ) : (
                        [...Array(3)].map((_, i) => (
                            <SwiperSlide key={i}>
                                <TestimoniCardRatingSkeleton/>
                            </SwiperSlide>
                        ))
                    )
                }
            </Swiper>
        </HStack>
    );
};
