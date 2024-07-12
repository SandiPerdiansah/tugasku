import {Flex} from "@chakra-ui/react";
import {ContactInformation} from "./ContactInformation.jsx";
import {ContactForm} from "./ContactForm.jsx";

export const ContactSocials = () => {
    const handleSubmitForm = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent('Pertanyaan');
        const body = encodeURIComponent(e.target.message.value);

        window.location.href = `mailto:sandiperdiansah95@gmail.com?subject=${subject}&body=${body}`;

        e.target.name.value = '';
        e.target.email.value = '';
        e.target.telp.value = '';
        e.target.message.value = '';
    }

    return (
        <Flex
            width='100%'
            flexDirection={{base: 'column', lg: 'row'}}
            alignItems='center'
            justifyContent='center'
            gap={4}
        >
            <ContactForm onSubmit={handleSubmitForm}/>
            <ContactInformation/>
        </Flex>
    )
}
