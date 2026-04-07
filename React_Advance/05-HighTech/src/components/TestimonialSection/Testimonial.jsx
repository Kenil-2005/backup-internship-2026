import React from 'react'
import BreadCrumb from '../BreadCrumb'
import TestimonialDetails from './TestimonialDetails'
import FactCheck from '../FactSection/FactCheck'


const Testimonial = () => {
    return (
        <>
            <BreadCrumb title={"Testimonial"} desc={"Testimonial"} />
            <FactCheck />
            <TestimonialDetails />
        </>
    )
}

export default Testimonial
