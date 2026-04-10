import React from "react";
import { Link } from "react-router-dom";

const NotfoundDetails = () => {
    return (
        <div className="container-fluid d-flex align-items-center page-header text-white not-found-wrapper animate__animated animate__fadeIn">
            <div className="container text-center ">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">
                            We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
                        </p>
                        <Link to={"/"} className="btn btn-primary rounded-pill py-3 px-5" >Go Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotfoundDetails;
