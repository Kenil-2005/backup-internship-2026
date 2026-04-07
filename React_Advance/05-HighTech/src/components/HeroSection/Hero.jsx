import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className="container-fluid px-0 hero-wrapper">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#carouselId" data-bs-slide-to="1"></button>
                    </div>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="img/carousel-1.jpg" className="img-fluid" />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-secondary h4 animate__animated animate__fadeInUp">Best IT Solutions</h6>
                                    <h1 className="text-white display-1 mb-4 animate__animated animate__fadeInRight">An Innovative IT Solutions Agency</h1>
                                    <p className="mb-4 text-white fs-5 animate__animated animate__fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                                    <Link to='/' className="px-4 me-2 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animate__animated animate__fadeInLeft">Read More</Link>
                                    <Link to="/contact" className="px-4 me-2 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animate__animated animate__fadeInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/carousel-2.jpg" className="img-fluid" />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-secondary h4 animate__animated animate__fadeInUp">Best IT Solutions</h6>
                                    <h1 className="text-white display-1 mb-4 animate__animated animate__fadeInLeft">Quality Digital Services You Really Need!</h1>
                                    <p className="mb-4 text-white fs-5 animate__animated animate__fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                                    <Link to='/' className="px-4 me-2 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animate__animated animate__fadeInLeft">Read More</Link>
                                    <Link to="/contact" className="px-4 me-2 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animate__animated animate__fadeInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Hero;
