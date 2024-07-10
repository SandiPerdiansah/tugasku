import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Icon,
    Input,
    Select,
    Text,
    Textarea,
    VStack
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {API_SERVICES} from "../services/API_SERVICES.js";
import {StarIcon} from "@chakra-ui/icons";
import {API_TESTIMONIALS} from "../services/API_TESTIMONIALS.js";

export default function TestimoniLayout() {
    const request = API_TESTIMONIALS;

    const [clickedStars, setClickedStars] = useState(0);
    const [succesSubmit, setSuccesSubmit] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const [testimonials, setTestimonials] = useState([]);

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
                alert('Berhasil mengirim penilaian');
                await request.postTestimonial(newTestimoni);
            } else {
                console.log('Token salah');
            }
        } catch (e) {
            console.log(`Error: ${e.message}`);
        } finally {
            e.target.fullName.value = '';
            e.target.service.value = '';
            e.target.testimoni.value = '';
            e.target.token.value = '';

            setClickedStars(0);
            setIsAlert(false);
            setSuccesSubmit(false);
        }
    };

    return (
        <VStack
            as='section'
            w='100%'
            minH='100vh'
            p={{base: '8rem 1.4rem 4rem', lg: '8rem 4rem'}}
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
                <VStack
                    flexBasis='50%'
                >
                </VStack>
            </Flex>
        </VStack>
    );
}

const TestimoniForm = ({handleSubmitForm, clickedStars, setClickedStars, succes, isAlert}) => {
    const [selectService, setSelectService] = useState([]);
    const [hoveredStars, setHoveredStars] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const response = await API_SERVICES();
                const options = response.services.map(data => data.name);
                setSelectService(options);
            } catch (e) {
                console.log(`Error: ${e.message}`);
            }
        })();
    }, []);

    return (
        <VStack
            flexBasis='50%'
            p={{base:'1.4rem', lg: '4rem'}}
            shadow='md'
            borderRadius='lg'
        >
            <Heading
                as='h1'
                fontWeight='bold'
                fontSize={{base: '2xl', lg: '4xl'}}
                color='primary'
            >
                Formulir Testimoni
            </Heading>
            <Text
                mb='1rem'
                color='font'
                fontSize={{base: '1rem', lg: 'lg'}}
                lineHeight={1.7}
                textAlign='center'
                id="tokenDescription"
            >
                Token didapatkan setelah anda selesai melakukan order Jasa di <strong>Tugasku</strong>
            </Text>

            <FormControl as='form' isRequired onSubmit={(e) => handleSubmitForm(e)}>
                <Box>
                    <FormLabel htmlFor='fullName'>Nama Lengkap</FormLabel>
                    <Input
                        id='fullName'
                        name='fullName'
                        placeholder='Nama Lengkap'
                        aria-label='Nama Lengkap'
                        aria-required='true'
                    />
                </Box>
                <Box mt='1rem'>
                    <FormLabel htmlFor='service'>Tag Layanan</FormLabel>
                    <Select
                        id='service'
                        name='service'
                        placeholder='Pilih jasa order'
                        aria-label='Pilih Jasa Order'
                        aria-required='true'
                    >
                        {selectService.map((name, index) => (
                            <option
                                key={index}
                                value={name}
                            >
                                {name !== 'dll' ? `Jasa ${name}` : 'Lainnya'}
                            </option>
                        ))}
                    </Select>
                </Box>
                <Box mt='1rem'>
                    <FormLabel htmlFor='token'>Token</FormLabel>
                    <Input
                        id='token'
                        name='token'
                        placeholder='Kode Token'
                        aria-label='Kode Token'
                        aria-required='true'
                        maxLength={4}
                        aria-describedby="tokenDescription"
                    />
                </Box>
                <Box mt='1rem'>
                    <FormLabel htmlFor='testimoni'>Testimoni</FormLabel>
                    <Textarea
                        id='testimoni'
                        name='testimoni'
                        placeholder='Penilaian anda terhadap jasa order di Tugasku'
                        size='sm'
                        aria-label='Testimoni'
                        aria-required='true'
                        borderRadius='lg'
                    />
                </Box>
                <VStack mt='1rem' border='1px solid #ddd' p='1rem' borderRadius='lg'>
                    <FormLabel htmlFor='rating' textAlign='center'>
                        Berikan bintang sebagai tingkat kepuasan order di <strong>Jasaku</strong>
                    </FormLabel>
                    <HStack spacing={4}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Icon
                                key={star}
                                as={StarIcon}
                                color={star <= (hoveredStars || clickedStars) ? 'yellow.500' : '#eee'}
                                boxSize={6}
                                onMouseEnter={() => setHoveredStars(star)}
                                onMouseLeave={() => setHoveredStars(0)}
                                onClick={() => setClickedStars(star)}
                                _hover={{cursor: 'pointer'}}
                                role="button"
                                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                            />
                        ))}
                    </HStack>
                </VStack>
                <Text
                    mt={1}
                    color='red'
                    fontSize='xs'
                    lineHeight={1.7}
                    textAlign='start'
                    display={!isAlert ? 'none' : 'block'}
                    role="alert"
                >
                    Bintang harus di isi!
                </Text>

                {
                    !succes ? (
                        <Button
                            type='submit'
                            variant='customBlue'
                            w='100%'
                            mt='1rem'
                            aria-label='Kirim'
                        >
                            Kirim
                        </Button>
                    ) : (
                        <Button
                            type='button'
                            variant='customBlue'
                            w='100%'
                            mt='1rem'
                            aria-label='Kirim'
                            isLoading
                            loadingText='Loading'
                            _hover={{bg: 'primary'}}
                            aria-live="polite"
                        >
                            loading..
                        </Button>
                    )
                }
            </FormControl>
        </VStack>
    );
}