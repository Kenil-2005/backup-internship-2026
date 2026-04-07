import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container-fluid bg-primary">
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-0">
                    <Link to="/" className="navbar-brand">
                        <h1 className="text-white fw-bold d-block">High<span className="text-secondary">Tech</span> </h1>
                    </Link>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                        <div className="navbar-nav ms-auto mx-xl-auto p-0">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) => isActive ? "nav-item nav-link active text-secondary" : "nav-item nav-link text-white"}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => isActive ? "nav-item nav-link active text-secondary" : "nav-item nav-link text-white"}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/services"
                                className={({ isActive }) => isActive ? "nav-item nav-link active text-secondary" : "nav-item nav-link text-white"}
                            >
                                Services
                            </NavLink>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => isActive ? "nav-item nav-link active text-secondary" : "nav-item nav-link text-white"}
                            >
                                Project
                            </NavLink>
                            <div className="nav-item dropdown">
                                <a href="#!" onClick={(e) => e.preventDefault()} className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded">
                                    <NavLink
                                        to="/blog"
                                        className={({ isActive }) =>
                                            isActive ? "dropdown-item active" : "dropdown-item"
                                        }
                                    >
                                        Our Blog
                                    </NavLink>

                                    <NavLink
                                        to="/team"
                                        className={({ isActive }) =>
                                            isActive ? "dropdown-item active" : "dropdown-item"
                                        }
                                    >
                                        Our Team
                                    </NavLink>

                                    <NavLink
                                        to="/testimonial"
                                        className={({ isActive }) =>
                                            isActive ? "dropdown-item active" : "dropdown-item"
                                        }
                                    >
                                        Our Testimonial
                                    </NavLink>

                                    <NavLink
                                        to="/404"
                                        className={({ isActive }) =>
                                            isActive ? "dropdown-item active" : "dropdown-item"
                                        }
                                    >
                                        404 Page
                                    </NavLink>
                                </div>
                            </div>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => isActive ? "nav-item nav-link active text-secondary" : "nav-item nav-link text-white"}
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
                            <span className="text-secondary"><a href="tel:+911234567890">Call: + 0123 456 7890</a></span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center ms-4 ">
                            <a href="#!" onClick={(e) => e.preventDefault()}><i className="bi bi-search text-white fa-2x"></i> </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
