import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Hero = () => {
    return (
        <div className='hero-wrapper -mt-[71px]'>
            <div className="hero-content h-screen relative flex flex-col items-start justify-evenly ps-5 text-white">
                <img
                    src="./banner-bg.png"
                    alt="hero"
                    className='w-full h-full object-cover absolute inset-0 -z-10' />
                <div
                    className='absolute z-0 inset-0 bg-black/40'
                >
                </div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className='h-full w-full'
                >
                    <SwiperSlide className='mt-18'>
                        <div className="flex flex-col h-full justify-evenly">
                            <div
                                className="hero-text-wrap relative z-10 w-full md:w-1/2">
                                <h1
                                    className='mb-7 text-4xl md:text-6xl lg:text-7xl'>
                                    OurBest <span className="text-gradient"> Logistic</span> Company
                                </h1>
                                <p
                                    className='max-w-full md:max-w-[80%]'>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has rootsContrary to popular belief, Lorem Ipsum is not simply random sContrary to popular belief, Lorem Ipsum is not simply random text. It has rootsContrary to popular belief, Lorem Ipsum is not simply random
                                </p>
                            </div>

                            <div className="icon-wrap relative z-10 flex gap-3 mb-8">
                                <a href="https://www.facebook.com/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.twitter.com/" className="social-icon"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/" className="social-icon"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkdin.com/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-18'>
                        <div className="flex flex-col h-full justify-evenly">
                            <div
                                className="hero-text-wrap relative z-10 w-full md:w-1/2">
                                <h1
                                    className='mb-7 text-4xl md:text-6xl lg:text-7xl'>
                                    OurBest <span className="text-gradient"> Logistic</span> Company
                                </h1>
                                <p
                                    className='max-w-full md:max-w-[80%]'>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has rootsContrary to popular belief, Lorem Ipsum is not simply random sContrary to popular belief, Lorem Ipsum is not simply random text. It has rootsContrary to popular belief, Lorem Ipsum is not simply random
                                </p>
                            </div>

                            <div className="icon-wrap relative z-10 flex gap-3 mb-8">
                                <a href="https://www.facebook.com/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.twitter.com/" className="social-icon"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/" className="social-icon"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkdin.com/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-18'>
                        <div className="flex flex-col h-full justify-evenly">
                            <div
                                className="hero-text-wrap relative z-10 w-full md:w-1/2">
                                <h1
                                    className='mb-7 text-4xl md:text-6xl lg:text-7xl'>
                                    OurBest <span className="text-gradient"> Logistic</span> Company
                                </h1>
                                <p
                                    className='max-w-full md:max-w-[80%]'>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has rootsContrary to popular belief, Lorem Ipsum is not simply random sContrary to popular belief, Lorem Ipsum is not simply random text. It has rootsContrary to popular belief, Lorem Ipsum is not simply random
                                </p>
                            </div>

                            <div className="icon-wrap relative z-10 flex gap-3 mb-8">
                                <a href="https://www.facebook.com/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.twitter.com/" className="social-icon"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/" className="social-icon"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkdin.com/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default Hero
