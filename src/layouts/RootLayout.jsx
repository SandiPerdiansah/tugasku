import Navbar from "../components/Navbar.jsx";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function RootLayout() {
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