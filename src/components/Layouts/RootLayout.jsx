import {Outlet, useLocation} from "react-router-dom";
import {Navbar} from "../Elements/Navbar/index.jsx";
import {Footer} from "../Elements/Footer/index.jsx";

export const RootLayout = () => {
    const location = useLocation();

    return (
        < >
            <Navbar/>

            <main>
                <Outlet/>
            </main>

            {
                location.pathname !== '/' && (
                    <Footer/>
                )
            }
        </>
    )
}