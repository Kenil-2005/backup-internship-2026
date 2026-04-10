import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, desc, delay }) => {
    return (
        <div className="col-md-6 col-lg-4" data-aos="fade-in" data-aos-delay={delay}>
            <div className="services-item bg-light py-4">
                <div className="p-4 text-center services-content">
                    <div className="services-content-icon">
                        <i className={`${icon} fa-7x mb-4 text-primary`}></i>
                        <h4 className="mb-4">{title}</h4>
                        <p className="mb-4">{desc}</p>
                        <Link to="/service" className="btn secondary-btn text-white px-5 py-3 rounded-pill">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;