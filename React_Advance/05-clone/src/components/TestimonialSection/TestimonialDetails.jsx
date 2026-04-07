import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

const TestimonialDetails = () => {
    return (
        <div className="container-fluid py-5 mb-5 testimonial-wrapper">
            <div className="container testimonial-content">

                <div className="text-center mx-auto pb-5" data-aos="fade-up" data-aos-delay="300" style={{ maxWidth: "600px" }}>
                    <h5 className="text-primary">Our Testimonial</h5>
                    <h1>Our Client Saying!</h1>
                </div>
                <div className="testimonial-section" data-aos="fade-up" data-aos-delay="300">
                    <Swiper
                        className="testimonial-carousel"
                        modules={[Autoplay, Pagination]}
                        spaceBetween={0}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >

                        <SwiperSlide>
                            <div className="testimonial-item border border-end-0 p-4">
                                <div className="d-flex align-items-center">
                                    <img src="img/testimonial-1.jpg" alt="" />
                                    <div className="ms-4">
                                        <h4 className="text-secondary">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-3">
                                    <p className="mb-0 gray-text">
                                        Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-item border border-end-0 p-4">
                                <div className="d-flex align-items-center">
                                    <img src="img/testimonial-2.jpg" alt="" />
                                    <div className="ms-4">
                                        <h4 className="text-secondary">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-3">
                                    <p className="mb-0 gray-text">
                                        Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-item border border-end-0 p-4">
                                <div className="d-flex align-items-center">
                                    <img src="img/testimonial-3.jpg" alt="" />
                                    <div className="ms-4">
                                        <h4 className="text-secondary">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-3">
                                    <p className="mb-0 gray-text">
                                        Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-item border border-end-0 p-4">
                                <div className="d-flex align-items-center">
                                    <img src="img/testimonial-4.jpg" alt="" />
                                    <div className="ms-4">
                                        <h4 className="text-secondary">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-3">
                                    <p className="mb-0 gray-text">
                                        Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default TestimonialDetails;
