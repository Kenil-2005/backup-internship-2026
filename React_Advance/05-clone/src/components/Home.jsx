import React from 'react'
import Hero from './HeroSection/Hero'
import FactCheck from './FactSection/FactCheck'
import ServicesDetails from './ServicesSection/ServicesDetails'
import AboutDetails from './AboutSection/AboutDetails'
import ProjectDetails from './ProjectSection/ProjectDetails'
import ContactDetails from './ContactSection/ContactDetails'
import BlogDetails from './BlogSection/BlogDetails'
import TeamDetails from './TeamSection/TeamDetails'
import TestimonialDetails from './TestimonialSection/TestimonialDetails'

const Home = () => {

    return (
        <>
            <Hero />
            <FactCheck />
            <AboutDetails />
            <ServicesDetails />
            <ProjectDetails />
            <BlogDetails />
            <TeamDetails />
            <TestimonialDetails />
            <ContactDetails />
        </>
    )
}

export default Home
