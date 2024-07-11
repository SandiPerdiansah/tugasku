import * as React from 'react';
import './index.css'
import 'animate.css'
import {ChakraProvider} from '@chakra-ui/react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

// Aos
import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init();

// theme
import theme from "./utils/theme.js";

// layouts and pages
import {RootLayout} from "./components/Layouts/RootLayout.jsx";
import {HomePage} from "./pages/home.jsx";
import {AboutPage} from "./pages/about.jsx";
import {ServicePage} from "./pages/service.jsx";
import {HowToOrderPage} from "./pages/HowToOrder.jsx";
import {TestimoniPage} from "./pages/testimoni.jsx";
import {OrderPage} from "./pages/order.jsx";
import {FaqPage} from "./pages/faq.jsx";
import {ContactsPage} from "./pages/contacts.jsx";

// Create router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='tentang-kami' element={<AboutPage/>}/>
            <Route path='layanan-kami' element={<ServicePage/>}/>
            <Route path='testimoni' element={<TestimoniPage/>}/>
            <Route path='faq' element={<FaqPage/>}/>
            <Route path='kontak' element={<ContactsPage/>}/>
            <Route path='cara-order' element={<HowToOrderPage/>}/>
            <Route path='order' element={<OrderPage/>}/>
        </Route>
    )
);

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <RouterProvider router={router}/>
        </ChakraProvider>
    </React.StrictMode>
);
