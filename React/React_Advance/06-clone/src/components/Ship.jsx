import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Ship = () => {
    return (
        <div className='ship-wrapper relative z-0 min-h-screen'>
            <div className="ship-background absolute inset-0 bg-black/20 -z-10">
                <img src="./img-5.png" alt="" className='object-cover h-full w-full' />
            </div>
            <div className="ship-content relative z-0 container h-full flex flex-col justify-center item-center py-16">
                <div className="ship-text w-9/10 text-center mx-auto">
                    <h2 className='mb-12 text-3xl md:text-5xl lg:text-6xl'>
                        Our <span className="text-gradient">Ship</span>
                    </h2>
                    <p className="text-justify mb-12">
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,
                        or non-characteristic words etc.
                    </p>
                </div>
                <div className="ship-slider overflow-x-clip mx-auto w-full md:w-3/4 lg:w-7/10">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >

                        <SwiperSlide>
                            <img src="./img-4.png" alt="" className='w-full h-full object-cover rounded-xl' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./img-4.png" alt="" className='w-full h-full object-cover rounded-xl' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./img-4.png" alt="" className='w-full h-full object-cover rounded-xl' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./img-4.png" alt="" className='w-full h-full object-cover rounded-xl' />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="btn-wrapper text-center mt-12 pt-12 block">
                    <Link to="/" className='primary-btn '><span>Read More</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Ship
