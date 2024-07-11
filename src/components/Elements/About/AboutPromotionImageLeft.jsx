import {Flex, Heading, Image} from "@chakra-ui/react";

export const AboutPromotionImageLeft = ({src, alt, heading}) => {
    return(
        <Flex
            alignItems='center'
            justifyContent='center'
            gap={{base: '4', lg: '14'}}
            flexDirection={{base: 'column', lg: 'row'}}
            textAlign={{base: 'center', lg: 'start'}}
        >
            <Image
                boxSize={{base: '15rem', lg: '24rem'}}
                src={src}
                alt={alt}
                aria-label={`${alt} image`}
                data-aos='zoom-in'
                data-aos-duration='1000'
            />
            <Heading
                as='h1'
                fontWeight='bold'
                fontSize={{base: '2xl', lg: '4xl'}}
                color='primary'
                lineHeight={1.7}
                aria-label={heading}
                data-aos='zoom-in'
                data-aos-duration='1000'
            >
                {heading}
            </Heading>
        </Flex>
    )
}