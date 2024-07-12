import {Box, Button, Flex, FormControl, FormLabel, HStack, Input, Textarea} from "@chakra-ui/react";

export const ContactForm = ({onSubmit}) => {
    return (
        <Flex
            flex={{base: "100%", lg: "50%"}}
            alignItems='center'
            justifyContent={{base: 'center', lg: 'end'}}
            p={{base: '1rem', lg: '4rem'}}
            borderRadius='lg'
            w={{base: '100%', lg: 'auto'}}
            data-aos='zoom-in'
            data-aos-duration='1000'
        >
            <FormControl
                as='form'
                isRequired
                onSubmit={onSubmit}
                display='flex'
                flexDirection='column'
                gap={4}
            >
                <HStack w='100%' justifyContent='space-between'>
                    <FormLabel htmlFor='name'>Nama</FormLabel>
                    <Input type='text' name='name' id='name' placeholder='John Doe' w={{base: '78%', lg: '80%'}}/>
                </HStack>
                <HStack w='100%' justifyContent='space-between'>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input type='email' name='email' id='email' placeholder='email@gmail.com'
                           w={{base: '78%', lg: '80%'}}/>
                </HStack>
                <HStack w='100%' justifyContent='space-between'>
                    <FormLabel htmlFor='telp'>Telp</FormLabel>
                    <Input type='tel' name='telp' id='telp' placeholder='+62 1234' w={{base: '78%', lg: '80%'}}/>
                </HStack>
                <Box>
                    <FormLabel htmlFor='message'>Pesan</FormLabel>
                    <Textarea name='message' id='message' placeholder='pesan anda' required/>
                </Box>
                <Button
                    type='submit'
                    variant='customBlue'
                    w='100%'
                    aria-label='Submit message'
                >
                    Send
                </Button>
            </FormControl>
        </Flex>
    )
}
