import {Box, Stack} from "@chakra-ui/react";
import {AboutPromotionImageLeft} from "./AboutPromotionImageLeft.jsx";
import {AboutPromotionImageRight} from "./AboutPromotionImageRight.jsx";
import {useLocation} from "react-router-dom";

export const AboutPromotions = () => {
    const location = useLocation();

    return(
        <Stack
            w='100%'
            bg='#f7f9fa'
            alignItems='center'
            justifyContent='center'
            direction={{base: 'column', lg: 'row'}}
            spacing={{base: 2, lg: 14}}
            p={{base: '2rem 1.4rem', lg: '2rem 4rem 0'}}
            position='relative'
            aria-labelledby="tugas-heading"
        >
            <Box
                position='absolute'
                top={{base: '-4rem', lg: '-12rem'}}
                left={0}
                right={0}
                zIndex='-99'
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden='true'>
                    <path fill="#f7f9fa" fillOpacity="1"
                          d="M0,96L60,112C120,128,240,160,360,176C480,192,600,192,720,170.7C840,149,960,107,1080,96C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </Box>
            <Box w={{base: '100%', lg: '84%'}}>
               <AboutPromotionImageLeft
                   src='/assets/images/notebook.svg'
                   alt='notebook animation'
                   heading='Bingung banyak tugas tapi tidak punya banyak waktu ?'
               />

                <AboutPromotionImageRight
                    src='/assets/images/deadline.svg'
                    alt='deadline animation'
                    heading='Gereget di kejar dealine ?'
                />

                <AboutPromotionImageLeft
                    src='/assets/images/cofee.svg'
                    alt='human cofee animation'
                    heading='Tenang...'
                />

                <AboutPromotionImageRight
                    src='/assets/images/status.svg'
                    alt='status animation'
                    heading='Order jasa di Tugasku aja. Harga terjangaku tugas selesai. '
                />
            </Box>
            <Box
                position='absolute'
                bottom={{base: '-4rem', lg: '-16rem'}}
                left={0}
                right={0}
                zIndex='-99'
                display={location.pathname === '/tentang-kami' && 'none'}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f7f9fa" fillOpacity="1"
                          d="M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,128C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </Box>
        </Stack>
    )
}