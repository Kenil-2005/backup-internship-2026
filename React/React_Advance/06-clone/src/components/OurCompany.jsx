import React from 'react'

const OurCompany = () => {
    return (
        <div className='ourCompany-wrapper relative z-0 h-screen'>
            <div className="OurCompany-background absolute inset-0 bg-black/20 -z-10">
                <img src="./img-2.png" alt="" className='object-cover h-full w-full' />
            </div>
            <div className="ourCompany-content relative z-0 container h-full flex flex-col justify-center">
                <h2 className='mb-12 text-3xl md:text-5xl lg:text-6xl text-white'>
                    Our <span className="text-gradient">Company</span>
                </h2>
                <p className="p-8 border-2 border-white text-white rounded-2xl text-justify">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                    by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                    generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate
                    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,
                    or non-characteristic words etc.
                </p>
            </div>
        </div>
    )
}

export default OurCompany
