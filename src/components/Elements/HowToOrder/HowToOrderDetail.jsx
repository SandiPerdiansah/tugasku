import {Box, Flex, Heading, Highlight, HStack, Img, ListItem, OrderedList, Text, UnorderedList} from "@chakra-ui/react";
import {ArrowForwardIcon, Icon} from "@chakra-ui/icons";

export const HowToOrderDetail = () => {
    return (
        <Flex
            mt={4}
            w='100%'
            alignItems='center'
            justifyContent='center'
            flexDirection={{base: 'column', lg: 'row'}}
        >
            <Box
                as='figure'
                flexBasis={{base: '100%', lg: '50%'}}
                bg='white'
                p='2rem'
                borderRadius='xl'
            >
                <Img
                    me='1rem'
                    w='100%'
                    src='/assets/images/order.png'
                    objectFit='cover'
                    alt='Formulir Order'
                    data-aos='zoom-in'
                    data-aos-duration='1000'
                />
                <Text as='figcaption' fontSize='sm' fontWeight='bold' textAlign='center'>
                    -- Formulir Order --
                </Text>
            </Box>
            <Box
                flexBasis={{base: '100%', lg: '50%'}}
                p={{lg: '2rem'}}
                mt={{base: 3, lg: 0}}
            >
                <Heading
                    as='h2'
                    fontWeight='bold'
                    fontSize={{base: '2xl', lg: '4xl'}}
                    color='primary'
                    id="about-heading"
                    data-aos='zoom-in'
                    data-aos-duration='1000'
                >
                    Keterangan
                </Heading>

                <UnorderedList
                    mt={4}
                    spacing={4}
                    data-aos='zoom-in'
                    data-aos-duration='1000'
                >
                    <ListItem>
                        <HStack>
                            <Text>
                                <Highlight
                                    query='nama lengkap'
                                    styles={{px: '2', py: '1', bg: 'yellow.200', rounded: 'md'}}
                                >
                                    Nama Lengkap
                                </Highlight>
                            </Text>
                            <Icon as={ArrowForwardIcon} aria-label='Arrow Icon'/>
                            <Text as='span' fontSize='xs'>
                                nama dari Klien
                            </Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack>
                            <Text>
                                <Highlight
                                    query='no. telp'
                                    styles={{px: '2', py: '1', bg: 'yellow.200', rounded: 'md'}}
                                >
                                    No. Telp
                                </Highlight>
                            </Text>
                            <Icon as={ArrowForwardIcon} aria-label='Arrow Icon'/>
                            <Text as='span' fontSize='xs'>
                                no hp klien
                            </Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack>
                            <Text>
                                <Highlight
                                    query='layanan'
                                    styles={{px: '2', py: '1', bg: 'yellow.200', rounded: 'md'}}
                                >
                                    Layanan
                                </Highlight>
                            </Text>
                            <Icon as={ArrowForwardIcon} aria-label='Arrow Icon'/>
                            <Text as='span' fontSize='xs'>
                                jasa yang dibutuhkan klien
                            </Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack>
                            <Text>
                                <Highlight
                                    query='waktu mulai'
                                    styles={{px: '2', py: '1', bg: 'yellow.200', rounded: 'md'}}
                                >
                                    Waktu Mulai
                                </Highlight>
                            </Text>
                            <Icon as={ArrowForwardIcon} aria-label='Arrow Icon'/>
                            <Text as='span' fontSize='xs'>
                                mulai pengerjaan tugas klien
                            </Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack>
                            <Text>
                                <Highlight
                                    query='waktu tenggat'
                                    styles={{px: '2', py: '1', bg: 'yellow.200', rounded: 'md'}}
                                >
                                    Waktu Tenggat
                                </Highlight>
                            </Text>
                            <Icon as={ArrowForwardIcon} aria-label='Arrow Icon'/>
                            <Text as='span' fontSize='xs'>
                                tenggat pengerjaan tugas klien
                            </Text>
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack>
                            <Text>
                                <Highlight
                                    query='detail tugas'
                                    styles={{px: '2', py: '1', bg: 'yellow.200', rounded: 'md'}}
                                >
                                    Detail Tugas
                                </Highlight>
                            </Text>
                            <Icon as={ArrowForwardIcon} aria-label='Arrow Icon'/>
                            <Text as='span' fontSize='xs'>
                                penjelasan detail tugas
                            </Text>
                        </HStack>
                    </ListItem>
                </UnorderedList>

                <Box
                    border='1px solid #000'
                    p={4}
                    borderRadius='md'
                    mt={4}
                    data-aos='zoom-in'
                    data-aos-duration='1000'
                >
                    <Text fontStyle='italic' mb={2} fontSize='sm'>Catatan :</Text>
                    <OrderedList>
                        <ListItem fontSize='xs' fontStyle='italic'>
                            <Text>
                                Jika jasa order yang dibutuhkan tidak ada di daftar list, pilih lainnya
                            </Text>
                        </ListItem>
                        <ListItem mt={2} fontSize='xs' fontStyle='italic'>
                            <Text>
                                No Telp harus no aktif dan bisa di hubungi, digunakan untuk komunikasi jikalau ada
                                pengerjaan yang kurang dimengerti penjelsannya
                            </Text>
                        </ListItem>
                        <ListItem mt={2} fontSize='xs' fontStyle='italic'>
                            <Text>
                                Jelaskan tugas sejelas mungkin , dan jangan khawatir karena klien masih bisa
                                berkomunikasi lebih di whatsapp
                            </Text>
                        </ListItem>
                    </OrderedList>
                </Box>
            </Box>
        </Flex>
    )
}
