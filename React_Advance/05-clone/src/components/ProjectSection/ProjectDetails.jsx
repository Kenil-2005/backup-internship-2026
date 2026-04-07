import React from 'react'
import ProjectData from './ProjectData'
import ProjectCard from './ProjectCard'

const ProjectDetails = () => {
    return (
        <div className='container-fluid mb-5 py-5 project-wrapper'>
            <div className="container">
                <div className="text-center mx-auto pb-5" data-aos="fade-up" data-aos-delay="300" style={{ maxWidth: "600px" }}>
                    <h5 className="text-primary">Our Project</h5>
                    <h1>Our Recently Completed Projects</h1>
                </div>
                <div className="row g-5">
                    {ProjectData.map((project) => {
                        return (
                            <ProjectCard
                                key={project.id}
                                {...project}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
