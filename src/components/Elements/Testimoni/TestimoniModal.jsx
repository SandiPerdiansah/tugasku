import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text
} from "@chakra-ui/react";

export const TestimoniModal = ({isOpen, onClose, textModal}) => {
    return (
        <Box>
            <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                motionPreset='slideInBottom'
                size={{base: 'xs', lg: 'md'}}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader id="modal-title">Tugasku</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody id="modal-description">
                        <Text fontWeight='bold' mb='1rem'>
                            {textModal}
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='customBlue' onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}