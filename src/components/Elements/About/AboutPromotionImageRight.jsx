import {Flex, Heading, Image} from "@chakra-ui/react";

export const AboutPromotionImageRight = ({src, alt, heading}) => {
    return (
        <Flex
            alignItems='center'
            justifyContent='center'
            gap={{base: '4', lg: '14'}}
            flexDirection={{base: 'column', lg: 'row'}}
            textAlign={{base: 'center', lg: 'start'}}
            my={{base: '2rem', lg: '0'}}
        >
            <Heading
                as='h1'
                fontWeight='bold'
                fontSize={{base: '2xl', lg: '4xl'}}
                color='primary'
                lineHeight={1.7}
                order={{base: 2, lg: 1}}
                aria-label={heading}
                data-aos='zoom-in'
                data-aos-duration='1000'
            >
                {heading}
            </Heading>
            <Image
                src={src}
                alt={alt}
                aria-label={`${alt} image`}
                order={{base: 1, lg: 2}}
                boxSize={{base: '15rem', lg: '24rem'}}
                data-aos='zoom-in'
                data-aos-duration='1000'
            />
        </Flex>
    )
}