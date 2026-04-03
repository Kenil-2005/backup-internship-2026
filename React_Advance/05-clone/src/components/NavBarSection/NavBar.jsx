import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="container-fluid bg-primary">
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-0">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="text-white fw-bold d-block">High<span className="text-secondary">Tech</span> </h1>
                    </a>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                        <div className="navbar-nav ms-auto mx-xl-auto p-0">
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "nav-item nav-link active text-secondary" : "nav-item nav-link text-secondary"}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => isActive ? "nav-item nav-link active text-secondary" : "nav-item nav-link text-secondary"}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/services"
                                className={({ isActive }) => isActive ? "nav-item nav-link active text-secondary" : "nav-item nav-link text-secondary"}
                            >
                                Services
                            </NavLink>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => isActive ? "nav-item nav-link active text-secondary" : "nav-item nav-link text-secondary"}
                            >
                                Project
                            </NavLink>
                            <div className="nav-item dropdown">
                                <a href="#!" onClick={(e) => e.preventDefault()} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded">
                                    <Link to="/blog" className="dropdown-item">
                                        Our Blog
                                    </Link>


                                    <Link to="/team" className="dropdown-item">
                                        Our Team
                                    </Link>

                                    <Link to="/testimonial" className="dropdown-item">
                                        Testimonial
                                    </Link>

                                    <Link to="/404" className="dropdown-item">
                                        404 Page
                                    </Link>
                                </div>
                            </div>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shirink-0">
                        <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                            <a href="#!" onClick={(e) => e.preventDefault()} className="position-relative animate__animated animate__tada animate__infinite">
                                <i className="fa fa-phone-alt text-white fa-2x phone-icon"></i>
                                <div className="position-absolute" style={{ top: "-7px", left: "20px", }}>
                                    <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                </div>
                            </a>
                        </div>
                        <div className="d-flex flex-column pe-4 border-end">
                            <span className="text-white-50">Have any questions?</span>
                            <span className="text-secondary">Call: + 0123 456 7890</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center ms-4 ">
                            <a href="#!" onClick={(e) => e.preventDefault()}><i className="bi bi-search text-white fa-2x"></i> </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
