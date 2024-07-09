import {Box, Flex, Heading, Image, Stack, Text, VStack} from "@chakra-ui/react";


export default function AboutLayout() {
    return (
        <VStack
            as='section'
            w='100%'
            minH='100vh'
            aria-label="About Section"
        >
            <Stack
                w='100%'
                h='100vh'
                alignItems='center'
                justifyContent='center'
                direction={{base: 'column', lg: 'row'}}
                spacing={{base: 2, lg: 14}}
                p={{base: '2rem 1.4rem', lg: '2rem 4rem'}}
                aria-labelledby="about-heading"
            >
                <Image
                    boxSize={{base: '15rem', lg: '24rem'}}
                    src='/assets/images/team.svg'
                    alt='Team animation'
                    aria-hidden='true'
                    data-aos='fade-up'
                />
                <Box
                    textAlign={{base: 'center', lg: 'start'}}
                    data-aos='fade-left'
                >
                    <Heading
                        as='h1'
                        fontWeight='bold'
                        fontSize={{base: '2xl', lg: '4xl'}}
                        color='primary'
                        lineHeight={1.7}
                        id="about-heading"
                    >
                        Tentang Tugasku
                    </Heading>
                    <Text
                        mt='4'
                        color='font'
                        fontSize={{base: '1rem', lg: 'lg'}}
                        lineHeight={1.7}
                    >
                        <strong>Tugasku</strong> adalah layanan profesional yang berdedikasi untuk membantu
                        menyelesaikan berbagai tugas kuliah dengan cepat dan efisien. Didirikan pada tahun 2024, kami
                        terus berkembang dalam menyediakan jasa joki tugas dengan kualitas terbaik.<br/>
                        Dengan <strong>Tugasku</strong>, Anda dapat merasa tenang dan fokus pada hal-hal penting
                        lainnya, sementara tugas Anda ditangani oleh para ahli kami yang berpengalaman.
                    </Text>
                </Box>
            </Stack>

            <Stack
                w='100%'
                bg='#f7f9fa'
                alignItems='center'
                justifyContent='center'
                direction={{base: 'column', lg: 'row'}}
                spacing={{base: 2, lg: 14}}
                p={{base: '2rem 1.4rem', lg: '2rem 4rem'}}
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
                    <Flex
                        alignItems='center'
                        justifyContent='center'
                        gap={{base: '4', lg: '14'}}
                        flexDirection={{base: 'column', lg: 'row'}}
                        textAlign={{base: 'center', lg: 'start'}}
                    >
                        <Image
                            boxSize={{base: '15rem', lg: '24rem'}}
                            src='/assets/images/notebook.svg'
                            alt='Notebook animation'
                            aria-label='Notebook Image Animation'
                            data-aos='fade-up'
                        />
                        <Heading
                            as='h1'
                            fontWeight='bold'
                            fontSize={{base: '2xl', lg: '4xl'}}
                            color='primary'
                            lineHeight={1.7}
                            aria-label='Bingun Dengan Tugas Tapi Tidak Punya Banyak Waktu ?'
                            data-aos='fade-left'
                        >
                            Bingun Dengan Tugas Tapi Tidak Punya Banyak Waktu ?
                        </Heading>
                    </Flex>
                    <Flex
                        alignItems='center'
                        justifyContent='center'
                        gap={{base: '4', lg: '14'}}
                        flexDirection={{base: 'column', lg: 'row'}}
                        textAlign={{base: 'center', lg: 'start'}}
                        my={{base: '2rem', lg: '0'}}
                    >
                        <Heading
                            as='h1'
                            fontWeight='bold'
                            fontSize={{base: '2xl', lg: '4xl'}}
                            color='primary'
                            lineHeight={1.7}
                            order={{base: 2, lg: 1}}
                            aria-labelledby="tugas-heading"
                            data-aos='fade-left'
                        >
                            Gereget Di Kejar-kejar Deadline ?
                        </Heading>
                        <Image
                            boxSize={{base: '15rem', lg: '24rem'}}
                            src='/assets/images/deadline.svg'
                            alt='Deadline animation'
                            order={{base: 1, lg: 2}}
                            aria-label='Deadline Image Animation'
                            data-aos='fade-up'
                        />
                    </Flex>
                    <Flex
                        alignItems='center'
                        justifyContent='center'
                        gap={{base: '4', lg: '14'}}
                        flexDirection={{base: 'column', lg: 'row'}}
                        textAlign={{base: 'center', lg: 'start'}}
                    >
                        <Image
                            boxSize={{base: '8rem', lg: '12rem'}}
                            src='/assets/images/cofee.svg'
                            alt='Coffee animation'
                            aria-label='Coffee Image Animation'
                            data-aos='fade-up'
                        />
                        <Box data-aos='fade-left'>
                            <Heading
                                as='h1'
                                fontWeight='bold'
                                fontSize={{base: '2xl', lg: '4xl'}}
                                color='primary'
                                lineHeight={1.7}
                            >
                                Tenang...
                            </Heading>
                            <Heading
                                as='h1'
                                fontWeight='bold'
                                fontSize={{base: '2xl', lg: '4xl'}}
                                color='primary'
                                lineHeight={1.7}
                            >
                                Kamu Ngopi Aja di Rumah
                            </Heading>
                        </Box>
                    </Flex>
                    <Flex
                        alignItems='center'
                        justifyContent='center'
                        gap={{base: '4', lg: '14'}}
                        flexDirection={{base: 'column', lg: 'row'}}
                        textAlign={{base: 'center', lg: 'start'}}
                        my='2rem'
                    >
                        <Box order={{base: 2, lg: 1}} data-aos='fade-left'>
                            <Heading
                                as='h1'
                                fontWeight='bold'
                                fontSize={{base: '2xl', lg: '4xl'}}
                                color='primary'
                                lineHeight={1.7}
                                aria-label='Order Jasa Tugasku'
                            >
                                Order Jasa Tugasku
                            </Heading>
                            <Heading
                                as='h1'
                                fontWeight='bold'
                                fontSize={{base: 'xl', lg: '3xl'}}
                                color='primary'
                                lineHeight={1.7}
                                aria-label='Semuanya dijamin beres....'
                            >
                                Semuanya dijamin beres....
                            </Heading>
                        </Box>
                        <Image
                            boxSize={{base: '8rem', lg: '12rem'}}
                            src='/assets/images/status.svg'
                            alt='Status animation'
                            order={{base: 1, lg: 2}}
                            aria-label='Status Image Animation'
                            data-aos='fade-up'
                        />
                    </Flex>
                </Box>
                <Box
                    position='absolute'
                    bottom={{base: '-4rem', lg: '-16rem'}}
                    left={0}
                    right={0}
                    zIndex='-99'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#f7f9fa" fillOpacity="1"
                              d="M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,128C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                </Box>
            </Stack>
        </VStack>
    );
}