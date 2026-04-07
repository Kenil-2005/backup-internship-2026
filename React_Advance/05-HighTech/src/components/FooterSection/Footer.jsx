import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-dark footer-wrapper' data-aos="fade-in" data-aos-delay="300">
            <div className="footer-content container pt-5 pb-4">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <Link to="/" >
                            <h1 className="text-white fw-bold d-block">High<span className="text-secondary">Tech</span> </h1>
                        </Link>
                        <p className="mt-4 text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.
                        </p>
                        <div className=" mt-4 icon-wrap hightech-link justify-content-start">
                            <a href="!#" onClick={(e) => e.preventDefault()} className="bg-light nav-fill btn btn-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></a>
                            <a href="!#" onClick={(e) => e.preventDefault()} className="bg-light nav-fill btn btn-square rounded-circle"><i className="fab fa-twitter text-primary"></i></a>
                            <a href="!#" onClick={(e) => e.preventDefault()} className="bg-light nav-fill btn btn-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
                            <a href="!#" onClick={(e) => e.preventDefault()} className="bg-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-secondary">Short Link</h3>
                        <div className="mt-4 d-flex flex-column short-link">
                            <a href="#!" className="pb-1 mb-1 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>
                                About us
                            </a>
                            <a href="#!" className="pb-1 mb-1 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>
                                Contact us
                            </a>
                            <a href="#!" className="pb-1 mb-1 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>
                                Our Services
                            </a>
                            <a href="#!" className="pb-1 mb-1 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>
                                Our Projects
                            </a>
                            <a href="#!" className="pb-1 mb-1 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>
                                Latest Blog
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-secondary">Help Link</h3>
                        <div className="mt-4 d-flex flex-column help-link">
                            <a href="#!" className="pb-1 mb-1 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>
                                Terms Of use
                            </a>
                            <a href="#!" className="pb-1 mb-1 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>
                                Privacy Policy
                            </a>
                            <a href="#!" className="pb-1 mb-1 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>
                                Helps
                            </a>
                            <a href="#!" className="pb-1 mb-1 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>
                                FQAs
                            </a>
                            <a href="#!" className="pb-1 mb-1 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-secondary">Contact Us</h3>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                            <a href="#!" className="pb-3 text-light border-bottom border-primary">
                                <i className="fas fa-map-marker-alt text-secondary me-2"></i>
                                123 Street, New York, USA
                            </a>
                            <a href="tel:+1234567890" className="py-3 text-light border-bottom border-primary">
                                <i className="fas fa-phone-alt text-secondary me-2"></i>
                                +123 456 7890
                            </a>
                            <a href="mailto:info@exmple.con" className="py-3 text-light border-bottom border-primary">
                                <i className="fas fa-envelope text-secondary me-2"></i>
                                info@exmple.con
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="text-light mt-5 mb-4" />
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <span className="text-light">
                            <a href="#!" className="text-secondary">
                                <i className="fas fa-copyright text-secondary me-2"></i>
                                HighTech
                            </a>
                            , All right reserved.
                        </span>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <span className="text-light">
                            Develope By <a href="#!" className="text-secondary">
                                Pansara Kenil
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
