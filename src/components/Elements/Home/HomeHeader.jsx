import {Image} from "@chakra-ui/react";

export const HomeHeader = () => {
    return (
        <Image
            boxSize={{base: '15rem', lg: '24rem'}}
            src='/assets/images/learning.svg'
            alt='Learning animation'
            aria-describedby='learning-desc'
            className='animate__animated animate__fadeInDown animate__delay-1s'
        />
    )
}