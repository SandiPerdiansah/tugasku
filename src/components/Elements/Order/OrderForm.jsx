import {Box, Button, FormControl, FormLabel, Input, Select, Stack, Textarea, VStack} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {API_SERVICES} from "../../../services/API_SERVICES.js";

export const OrderForm = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await API_SERVICES();
                setServices(response.services);
            } catch (e) {
                console.log('Error' + e.message);
            }
        })();
    }, []);

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const message = {
            name: e.target.fullName.value,
            telp: e.target.telp.value,
            service: e.target.service.value,
            timeStart: e.target.timeStart.value,
            timeFinish: e.target.timeFinish.value,
            description: e.target.description.value,
        };

        const formattedMessage = `Nama: ${message.name}%0A`
            + `No. Telp: ${message.telp}%0A`
            + `Layanan: ${message.service}%0A`
            + `Waktu Mulai: ${message.timeStart}%0A`
            + `Waktu Tenggat: ${message.timeFinish}%0A`
            + `Detail Tugas: ${message.description}`;

        const phoneNumber = '6281573617686';

        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${formattedMessage}`, '_blank');

        e.target.fullName.value = '';
        e.target.telp.value = '';
        e.target.service.value = '';
        e.target.timeStart.value = '';
        e.target.timeFinish.value = '';
        e.target.description.value = '';
    };

    return (
        <VStack
            mt={{lg: 6}}
            w='100%'
            data-aos='zoom-in'
            data-aos-duration='1000'
        >
            <FormControl
                w={{base: '100%', lg: '80%'}}
                as='form'
                display='flex'
                flexDirection='column'
                gap={4}
                isRequired
                p={{base: '2rem 1rem', lg: 8}}
                borderRadius='md'
                onSubmit={handleSubmitForm}
            >
                <Stack
                    direction={{base: 'column', lg: 'row'}}
                >
                    <FormLabel htmlFor='fullName'>Nama Lengkap</FormLabel>
                    <Input
                        type='text'
                        name='fullName'
                        id='fullName'
                        placeholder='John Doe'
                        w={{base: '100%', lg: '80%'}}
                        ms='auto'
                    />
                </Stack>
                <Stack
                    direction={{base: 'column', lg: 'row'}}
                >
                    <FormLabel htmlFor='telp'>No. Telp</FormLabel>
                    <Input
                        type='tel'
                        name='telp'
                        id='telp'
                        placeholder='+62 1234'
                        w={{base: '100%', lg: '80%'}}
                        ms='auto'
                    />
                </Stack>
                <Stack
                    direction={{base: 'column', lg: 'row'}}
                >
                    <FormLabel htmlFor='service'>Layanan</FormLabel>
                    <Select
                        placeholder='Pilih jasa order'
                        w={{base: '100%', lg: '80%'}}
                        ms='auto'
                        id='service'
                        name='service'
                    >
                        {
                            services.map((data, index) => (
                                <option key={index}>
                                    {data.name === 'dll' ? 'Lainya' : `Jasa ${data.name}`}
                                </option>
                            ))
                        }
                    </Select>
                </Stack>
                <Stack
                    direction={{base: 'column', lg: 'row'}}
                >
                    <FormLabel htmlFor='timeStart'>Waktu Mulai</FormLabel>
                    <Input
                        type='date'
                        name='timeStart'
                        id='timeStart'
                        w={{base: '100%', lg: '80%'}}
                        ms='auto'
                    />
                </Stack>
                <Stack
                    direction={{base: 'column', lg: 'row'}}
                >
                    <FormLabel htmlFor='timeFinish'>Waktu Tenggat</FormLabel>
                    <Input
                        type='date'
                        name='timeFinish'
                        id='timeFinish'
                        w={{base: '100%', lg: '80%'}}
                        ms='auto'
                    />
                </Stack>
                <Box>
                    <FormLabel htmlFor='description'>Detail Tugas</FormLabel>
                    <Textarea name='description' id='description' placeholder='Deskripsikan detail tugas Anda'/>
                </Box>
                <Button
                    type='submit'
                    variant='customBlue'
                    w='100%'
                    mt={4}
                    aria-label='Submit message'
                >
                    Kirim
                </Button>
            </FormControl>
        </VStack>
    )
}