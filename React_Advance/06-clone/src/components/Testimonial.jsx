import React from 'react'
import { Link } from 'react-router-dom'

const Testimonial = () => {
    return (
        <div className='testimonial-wrapper min-h-screen overflow-hidden'>
            <h2 className='my-12 text-center text-3xl md:text-5xl lg:text-6xl'>
                <span className="text-gradient">Testimonial</span>
            </h2>
            <div className="flex max-h-screen">
                <div className="testimonial-content container py-16 ">
                    <div className="testimonial-heading ms-16 flex items-center gap-8">
                        <div className="testimonial-heading-image">
                            <img src="./img-7.png" alt="" />
                        </div>
                        <div className="testimonial-heading-text">
                            <p className='text-3xl font-semibold'>Luda Johnson </p>
                            <p className="text-white text-3xl font-semibold">(ceo)</p>
                        </div>
                    </div>
                    <div className="testimonial-text">
                        <p className="text-justify py-4 text-white ms-16">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                    <div className="btn-wrapper text-center mt-8 block">
                        <Link to="/" className='primary-btn '><span>Read More</span></Link>
                    </div>
                </div>
                <div className="testimonial-image w-full object-cover">
                    <img src="./img-3.png" alt="" className='h-full w-full object-cover' />
                </div>
            </div>
        </div >
    )
}

export default Testimonial
