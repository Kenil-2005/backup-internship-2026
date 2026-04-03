import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Style
import './App.css';
import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Components
import TopBar from './components/TopBarSection/TopBar'
import NavBar from './components/NavBarSection/NavBar'
import Home from './components/Home';
import About from './components/AboutSection/About';
import Services from './components/ServicesSection/Services';
import Project from './components/ProjectSection/Project';
import Contact from './components/ContactSection/Contact';
import Blog from './components/BlogSection/Blog';
import Team from './components/TeamSection/Team';
import Testimonial from './components/TestimonialSection/Testimonial';
import NotFoundPage from './components/404Section/NotFoundPage';
import Footer from './components/FooterSection/Footer';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <TopBar />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/testimonial" element={<Testimonial />} />
                    <Route path="/404" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;