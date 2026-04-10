import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from './components/Home';
import About from './components/About';
import Ship from './components/Ship';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/ship' element={<Ship />} />
                    <Route path='/testimonial' element={<Testimonial />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App