import {Flex, HStack, Text} from "@chakra-ui/react";
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
            gap={8}
            w={{base: '100%', lg: 'auto'}}
            data-aos='zoom-in'
            data-aos-duration='1000'
        >
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
