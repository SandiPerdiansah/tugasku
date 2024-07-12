import {Box, Flex, Image, Heading, VStack, Button} from "@chakra-ui/react";
import {HowToOrderHeader} from "../Elements/HowToOrder/HowToOrderHeader.jsx";
import {HowToOrderDetail} from "../Elements/HowToOrder/HowToOrderDetail.jsx";
import {HowToOrderExample} from "../Elements/HowToOrder/HowToOrderExample.jsx";
import {Link} from "react-router-dom";

export const HowToOrderLayout = () => {
    return (
        <VStack
            as='section'
            w='100%'
            minH='100vh'
            p={{base: '6rem 1.4rem 2rem', lg: '6rem 4rem'}}
            bg='#f7f9fa'
            position='relative'
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
            <HowToOrderHeader/>
            <HowToOrderDetail/>
            <HowToOrderExample/>

            <Box mt={4}>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    gap={{base: '4', lg: '14'}}
                    flexDirection={{base: 'column', lg: 'row'}}
                    textAlign={{base: 'center', lg: 'start'}}
                >
                    <Image
                        boxSize={{base: '15rem', lg: '24rem'}}
                        src='/assets/images/electricity.svg'
                        alt='electricity animation'
                        aria-label='electricity animation image'
                        data-aos='zoom-in'
                        data-aos-duration='1000'
                    />
                    <Heading
                        as='h1'
                        fontWeight='bold'
                        fontSize={{base: '2xl', lg: '4xl'}}
                        color='primary'
                        lineHeight={1.7}
                        aria-label='electricity animation'
                        data-aos='zoom-in'
                        data-aos-duration='1000'
                    >
                       Sudah paham ?
                    </Heading>
                </Flex>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    gap={{base: '4', lg: '14'}}
                    flexDirection={{base: 'column', lg: 'row'}}
                    textAlign={{base: 'center', lg: 'start'}}
                    mt={4}
                >
                    <Box order={{base:2, lg:1}}>
                        <Heading
                            as='h1'
                            fontWeight='bold'
                            fontSize={{base: '2xl', lg: '4xl'}}
                            color='primary'
                            lineHeight={1.7}
                            aria-label='sudah paham ?'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                        >
                            Langsung klik
                        </Heading>
                        <Button
                            mt={2}
                            as={Link}
                            to='order'
                            target='_blank'
                            variant='customBlue'
                            borderRadius='20px'
                            aria-label='Order Sekarang'
                            role='button'
                            w={{base: '100%', lg: 'auto'}}
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                        >
                            Order Sekarang
                        </Button>
                    </Box>
                    <Image
                        boxSize={{base: '15rem', lg: '24rem'}}
                        src='/assets/images/status.svg'
                        alt='electricity animation'
                        aria-label='electricity animation image'
                        data-aos='zoom-in'
                        data-aos-duration='1000'
                        order={{base:1, lg:2}}
                    />
                </Flex>
            </Box>
        </VStack>
    )
}