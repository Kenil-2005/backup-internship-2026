import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='about-wrapper h-screen'>
            <div className="about-content container flex lg:flex-nowrap md:flex-nowrap sm:flex-wrap justigy-between items-center h-full">
                <div className="about-text-wrap">
                    <h2 className='mb-7 text-3xl md:text-5xl lg:text-6xl'>
                        About <span className="text-gradient"> Us</span>
                    </h2>
                    <p className='m-5 ms-0 text-justify'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                    </p>
                    <Link to={"/"} className="primary-btn ">
                        <span> Read More</span>
                    </Link>
                </div>
                <div className="about-image-wrap">
                    <img src="./img-1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
