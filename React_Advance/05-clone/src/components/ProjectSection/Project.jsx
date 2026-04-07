import React from 'react'
import BreadCrumb from '../BreadCrumb'
import ProjectDetails from './ProjectDetails';
import FactCheck from '../FactSection/FactCheck';



const Project = () => {
    return (
        <>
            <BreadCrumb title={"Projects"} desc={"Projects"} />
            <FactCheck />
            <ProjectDetails />

        </>
    )
}

export default Project
