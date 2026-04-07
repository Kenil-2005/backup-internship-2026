import React from 'react'

const ProjectCard = ({ title, description, image, delay }) => {
    return (
        <div className="col-md-6 col-lg-4 " data-aos="fade-in" data-aos-delay={delay}>
            <div className="project-item">
                <div className="project-img">
                    <img src={image} className="img-fluid w-100 rounded" alt={title} />
                    <div className="project-content">
                        <a href="#" className="text-center">
                            <h4 className="text-secondary">{title}</h4>
                            <p className="m-0 text-white">{description}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
