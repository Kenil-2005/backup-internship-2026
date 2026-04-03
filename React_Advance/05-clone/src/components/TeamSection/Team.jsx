import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Team = () => {
    return (
        <div className="container-fluid py-5 mb-5 team">
            <div className="container">

                <div className="text-center mx-auto pb-5" style={{ maxWidth: "600px" }}>
                    <h5 className="text-primary">Our Team</h5>
                    <h1>Meet our expert Team</h1>
                </div>
                <div className="swiper-content">

                    <Swiper
                        className="team-carousel"
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        loop={true}
                        autoplay={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >

                        <SwiperSlide>
                            <div className="rounded team-item">
                                <div className="team-content">
                                    <div className="team-img-icon">
                                        <div className="team-img rounded-circle">
                                            <img src="img/team-1.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                        </div>
                                        <div className="team-name text-center py-3">
                                            <h4>Full Name</h4>
                                            <p className="m-0">Designation</p>
                                        </div>
                                        <div className="team-icon d-flex justify-content-center pb-4">
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded team-item">
                                <div className="team-content">
                                    <div className="team-img-icon">
                                        <div className="team-img rounded-circle">
                                            <img src="img/team-2.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                        </div>
                                        <div className="team-name text-center py-3">
                                            <h4>Full Name</h4>
                                            <p className="m-0">Designation</p>
                                        </div>
                                        <div className="team-icon d-flex justify-content-center pb-4">
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded team-item">
                                <div className="team-content">
                                    <div className="team-img-icon">
                                        <div className="team-img rounded-circle">
                                            <img src="img/team-3.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                        </div>
                                        <div className="team-name text-center py-3">
                                            <h4>Full Name</h4>
                                            <p className="m-0">Designation</p>
                                        </div>
                                        <div className="team-icon d-flex justify-content-center pb-4">
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded team-item">
                                <div className="team-content">
                                    <div className="team-img-icon">
                                        <div className="team-img rounded-circle">
                                            <img src="img/team-1.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                        </div>
                                        <div className="team-name text-center py-3">
                                            <h4>Full Name</h4>
                                            <p className="m-0">Designation</p>
                                        </div>
                                        <div className="team-icon d-flex justify-content-center pb-4">
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded team-item">
                                <div className="team-content">
                                    <div className="team-img-icon">
                                        <div className="team-img rounded-circle">
                                            <img src="img/team-2.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                        </div>
                                        <div className="team-name text-center py-3">
                                            <h4>Full Name</h4>
                                            <p className="m-0">Designation</p>
                                        </div>
                                        <div className="team-icon d-flex justify-content-center pb-4">
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded team-item">
                                <div className="team-content">
                                    <div className="team-img-icon">
                                        <div className="team-img rounded-circle">
                                            <img src="img/team-3.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                        </div>
                                        <div className="team-name text-center py-3">
                                            <h4>Full Name</h4>
                                            <p className="m-0">Designation</p>
                                        </div>
                                        <div className="team-icon d-flex justify-content-center pb-4">
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square secondary-btn text-white rounded-circle m-1" href="#!"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Team;