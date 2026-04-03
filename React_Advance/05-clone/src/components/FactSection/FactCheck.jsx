import React from 'react'

const FactCheck = () => {
    return (
        <div className='container-fluid bg-secondary py-5 fact-check-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 " data-aos="fade-up" data-aos-delay="100">
                        <div className="d-flex conter-wrap">
                            <h1 className="me-3 text-primary counter-value">99</h1>
                            <h5 className="text-white mt-1">Success in getting happy customer</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 " data-aos="fade-up" data-aos-delay="100">
                        <div className="d-flex conter-wrap">
                            <h1 className="me-3 text-primary counter-value">25</h1>
                            <h5 className="text-white mt-1">Thousands of successful business</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 " data-aos="fade-up" data-aos-delay="100">
                        <div className="d-flex conter-wrap">
                            <h1 className="me-3 text-primary counter-value">125</h1>
                            <h5 className="text-white mt-1">Total clients who love HighTech</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 " data-aos="fade-up" data-aos-delay="100">
                        <div className="d-flex conter-wrap">
                            <h1 className="me-3 text-primary counter-value">5</h1>
                            <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FactCheck
