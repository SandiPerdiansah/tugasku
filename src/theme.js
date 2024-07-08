import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        body: 'Poppins, sans-serif',
        heading: 'Poppins, sans-serif',
    },
    colors: {
        font: '#4f4e4d',
        primary: '#3182ce',
        customBlue: {
            50: '#e3f2ff',
            100: '#b3daff',
            200: '#80bfff',
            300: '#4da5ff',
            400: '#1a8aff',
            500: '#3182ce', // Primary color
            600: '#2769a3',
            700: '#1e5079',
            800: '#13364f',
            900: '#091c26',
        },
    },
    components: {
        Button: {
            variants: {
                customBlue: {
                    bg: 'customBlue.500',
                    color: 'white',
                    _hover: {
                        bg: 'customBlue.600',
                    },
                    _active: {
                        bg: 'customBlue.700',
                    },
                },
            },
        },
    },
});

export default theme;
