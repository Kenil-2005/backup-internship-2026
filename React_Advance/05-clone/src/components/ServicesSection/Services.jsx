import React from 'react'
import ServicesDetails from './ServicesDetails'; import FactCheck from '../FactSection/FactCheck';

import BreadCrumb from '../BreadCrumb';


const Services = () => {
    return (
        <>
            <BreadCrumb title={"Service"} desc={"Services"} />
            <FactCheck />
            <ServicesDetails />

        </>
    )
}

export default Services;
