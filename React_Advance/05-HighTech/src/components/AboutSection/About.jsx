import React from 'react'
import FactCheck from '../FactSection/FactCheck';
import AboutDetails from './AboutDetails';
import BreadCrumb from '../BreadCrumb';
import TeamDetails from '../TeamSection/TeamDetails';

const About = () => {
    return (
        <>
            <BreadCrumb title={"About Us"} desc={"About"} />
            <FactCheck />
            <AboutDetails />
            <TeamDetails />
        </>
    );
}

export default About;
