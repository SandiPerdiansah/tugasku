import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Grid,
    Heading
} from "@chakra-ui/react";
import {data} from "../../../utils/data.js";

export const FaqQuestions = () => {
    return (
        <Box w='100%' mt={6}>
            <Accordion allowToggle>
                <Grid templateColumns={{base: 'repeat(1fr)', lg: 'repeat(2, 1fr)'}} gap={4}>
                    {
                        data.faq.map((item) => (
                            <AccordionItem
                                key={item.id}
                                border='none'
                                data-aos='zoom-in'
                                data-aos-duration='1000'
                            >
                                <Heading as='h4'>
                                    <AccordionButton
                                        bg='#f7f9fa'
                                        borderRadius='sm'
                                        aria-label={`Toggle ${item.question}`}
                                    >
                                        <Box as='span' flex='1' textAlign='left'>
                                            {item.question}
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </Heading>
                                <AccordionPanel>
                                    {item.answer}
                                </AccordionPanel>
                            </AccordionItem>
                        ))
                    }
                </Grid>
            </Accordion>
        </Box>
    )
}