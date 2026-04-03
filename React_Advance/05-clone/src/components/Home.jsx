import React from 'react'
import About from './AboutSection/About'
import Hero from './HeroSection/Hero'
import FactCheck from './FactSection/FactCheck'
import Services from './ServicesSection/Services'
import Project from './ProjectSection/Project'
import Blog from './BlogSection/Blog'
import Team from './TeamSection/Team'
import Testimonial from './TestimonialSection/Testimonial'

const Home = () => {
    return (
        <>
            <Hero />
            <FactCheck />
            <About />
            <Services />
            <Project />
            <Blog />
            <Team />
            <Testimonial />
            <Contact />
        </>
    )
}

export default Home
