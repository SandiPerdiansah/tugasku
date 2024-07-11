import {useEffect, useState} from "react";
import {API_SERVICES} from "../../../services/API_SERVICES.js";
import {
    Box, Button,
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
import {StarIcon} from "@chakra-ui/icons";

export const TestimoniForm = ({handleSubmitForm, clickedStars, setClickedStars, succes, isAlert}) => {
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
            p={{base: '1.4rem', lg: '4rem'}}
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

            <FormControl as='form' isRequired onSubmit={(e) => handleSubmitForm(e)} aria-labelledby="form-title">
                <Box>
                    <FormLabel htmlFor='fullName'>Nama Lengkap</FormLabel>
                    <Input
                        id='fullName'
                        name='fullName'
                        placeholder='John Doe'
                        aria-label='Nama Lengkap'
                        aria-required='true'
                    />
                </Box>
                <Box mt='1rem'>
                    <FormLabel htmlFor='service'>Tag order</FormLabel>
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
                        placeholder='contoh: X4ZW'
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
                        placeholder='berikan penilaian anda...'
                        size='sm'
                        aria-label='Testimoni'
                        aria-required='true'
                        borderRadius='lg'
                    />
                </Box>
                <VStack mt='1rem' border='1px solid #ddd' p='1rem' borderRadius='lg'>
                    <FormLabel htmlFor='rating' textAlign='center'>
                        Berikan bintang sebagai tingkat kepuasan order di <strong>Tugasku</strong>
                    </FormLabel>
                    <HStack spacing={4} role="radiogroup" aria-labelledby="rating">
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
                                role="radio"
                                aria-checked={clickedStars === star}
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