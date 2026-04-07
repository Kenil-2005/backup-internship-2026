import React from "react";
import ServiceCard from "./ServiceCard";
import servicesData from "./ServiceData";

const ServicesDetail = () => {
    return (
        <div className='container-fluid mb-5 py-5 services-wrapper'>
            <div className="container">
                <div className="text-center mx-auto pb-5" data-aos="fade-up" data-aos-delay="300" style={{ maxWidth: "600px" }}>
                    <h5 className="text-primary">Our Services</h5>
                    <h1>Services Built Specifically For Your Business</h1>
                </div>
                <div className="row g-5 servies-content">
                    {servicesData.map((service) => {
                        return (
                            <ServiceCard
                                key={service.id}
                                {...service}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServicesDetail;
