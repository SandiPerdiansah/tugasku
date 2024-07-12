import {Flex, Heading, HStack, Text} from "@chakra-ui/react";
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";
import {AiOutlineInstagram} from 'react-icons/ai';

export const ContactInformation = () => {
    return (
        <Flex
            flex={{base: "100%", lg: "50%"}}
            alignItems='start'
            justifyContent='start'
            flexDirection='column'
            p={{base: '1rem', lg: '4rem'}}
            borderRadius='lg'
            gap={4}
            w={{base: '100%', lg: 'auto'}}
            data-aos='zoom-in'
            data-aos-duration='1000'
        >
            <Heading
                as='h1'
                fontWeight='bold'
                fontSize={{ base: '2xl', lg: '4xl' }}
                color='primary'
            >
                Atau
            </Heading>
            <Text
                color='font'
                fontSize={{ base: '1rem', lg: 'lg' }}
                lineHeight={1.7}
            >
                Hubungi kami melalui kontak sosial di bawah ini :
            </Text>
            <HStack w='100%' borderRadius='lg'>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    bg='#f7f9fa'
                    borderRadius='50%'
                    p='1rem'
                    aria-label='Email Icon'
                >
                    <EmailIcon boxSize={6}/>
                </Flex>
                <Text ms={2}>
                    Email: tugasku@gmail.com
                </Text>
            </HStack>
            <HStack w='100%' borderRadius='lg'>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    bg='#f7f9fa'
                    borderRadius='50%'
                    p='1rem'
                    aria-label='Phone Icon'
                >
                    <PhoneIcon boxSize={6}/>
                </Flex>
                <Text ms={2}>
                    Phone: +62 815 7603 1788
                </Text>
            </HStack>
            <HStack w='100%' borderRadius='lg'>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    bg='#f7f9fa'
                    borderRadius='50%'
                    p='1rem'
                    aria-label='Instagram Icon'
                >
                    <AiOutlineInstagram size={26}/>
                </Flex>
                <Text ms={2}>
                    Instagram: @tugasku_official
                </Text>
            </HStack>
        </Flex>
    )
}
