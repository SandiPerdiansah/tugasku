import {data} from "../../../utils/data.js";
import {Stack} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

export const NavbarLink = ({onClick}) => {
    return (
        <Stack
            className='navbar_link'
            fontSize='1rem'
            me={{lg: '1rem'}}
            spacing={{base: '0.8rem', lg: '1.5rem'}}
            direction={{base: 'column', lg: 'row'}}
        >
            {
                data.navbar.map((item) => (
                    <NavLink to={item.path} aria-label={item.teks} onClick={onClick} key={item.id}>
                        {item.teks}
                    </NavLink>
                ))
            }
        </Stack>
    );
}