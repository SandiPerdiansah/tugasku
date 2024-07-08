import * as React from 'react';
import './index.css'
import 'animate.css'
import {ChakraProvider} from '@chakra-ui/react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

// theme
import theme from "./theme.js";

// layouts and pages
import RootLayout from "./layouts/RootLayout.jsx";
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import ServicePage from "./pages/service.jsx";
import OrdersPage from "./pages/orders.jsx";
import TestimoniPage from "./pages/testimoni.jsx";

// Create router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='layanan-kami' element={<AboutPage/>}/>
            <Route path='tentang-kami' element={<ServicePage/>}/>
            <Route path='testimoni' element={<TestimoniPage/>}/>
            <Route path='cara-order' element={<OrdersPage/>}/>
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
