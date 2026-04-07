import React, { useState } from "react";

const ContactDetails = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [project, setProject] = useState("");

    let [nameError, setNameError] = useState("");
    let [emailError, setEmailError] = useState("");
    const [projectError, setProjectError] = useState("");
    const nameValidate = () => {
        if (!name) {
            setNameError("Name is Required");
            return false;
        }
        else if (name.length < 3) {
            setNameError("Enter valid Full Name");
            return false;
        } else {
            setNameError("");
            return true;
        }
    };
    const emailValidate = () => {
        if (!email) {
            setEmailError("Email is Required");
            return false;
        }
        else if (/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Enter valid Email");
            return false;
        } else {
            setEmailError("");
            return true;
        }
    };
    const projectValidate = () => {
        if (!project) {
            setProjectError("Project is Required");
            return false;
        }
        else {
            setProjectError("");
            return true;
        }
    };

    const handleSubmit = () => {
        const isNameValid = nameValidate();
        const isEmailValid = emailValidate();
        const isProjectValid = projectValidate();

        if (isNameValid && isEmailValid && isProjectValid) {
            setName("");
            setEmail("");
            setProject("");
        }
    };


    return (
        <div className='container-fluid mb-5 py-5 contact-wrapper'>
            <div className="container">
                <div className="text-center mx-auto pb-5" data-aos="fade-up" data-aos-delay="300" style={{ maxWidth: "600px" }}>
                    <h5 className="text-primary">Get In Touch</h5>
                    <h1>Contact for any query</h1>
                    <p className='gray-text'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="#!" className="text-primary">Download Now</a>.</p>
                </div>
                <div className="contact-detail position-relative p-5">
                    <div className="row mb-5 g-5 justify-content-center">
                        <div className="col-xl-4 col-lg-6" data-aos="fade-in" data-aos-delay="300">
                            <div className="d-flex bg-light p-3 rounded">
                                <div className="shrink-0 btn-square bg-secondary rounded-circle" style={{ width: "64px", height: "64px" }}>
                                    <i className="fas fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h4 className="text-primary">Address</h4>
                                    <a href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6" target="_blank" className="h5" rel="noreferrer">23 rank Str, NY</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6" data-aos="fade-in" data-aos-delay="300">
                            <div className="d-flex bg-light p-3 rounded">
                                <div className="shrink-0 btn-square bg-secondary rounded-circle" style={{ width: "64px", height: "64px" }}>
                                    <i className="fa fa-phone text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h4 className="text-primary">Call Us</h4>
                                    <a href="tel:+01234567890" target="_blank" className="h5" rel="noreferrer">+012 3456 7890</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6" data-aos="fade-in" data-aos-delay="300">
                            <div className="d-flex bg-light p-3 rounded">
                                <div className="shrink-0 btn-square bg-secondary rounded-circle" style={{ width: "64px", height: "64px" }}>
                                    <i className="fa fa-envelope text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h4 className="text-primary">Email Us</h4>
                                    <a href="mailto:info@example.com" target="_blank" className="h5" rel="noreferrer">info@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6" data-aos="fade-in" data-aos-delay="300">
                            <div className="p-5 h-100 rounded contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5163012097723!2d72.5497183740014!3d23.041525715623052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f6b20e71a1%3A0x5c59c02712437a1c!2sNextsavy%20Technologies!5e0!3m2!1sen!2sin!4v1775460558134!5m2!1sen!2sin" style={{ border: 0 }} loading="lazy" ></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-in" data-aos-delay="300">
                            <div className="p-5 h-100 rounded contact-form">
                                <div className="mb-4">
                                    <input type="text"
                                        className="form-control border-0 py-3"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <p className='error'>{nameError ? nameError : ""}</p>
                                </div>
                                <div className="mb-4">
                                    <input type="email"
                                        className="form-control border-0 py-3"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <p className='error'>{emailError ? emailError : ""}</p>
                                </div>
                                <div className="mb-4">
                                    <input type="text"
                                        className="form-control border-0 py-3"
                                        placeholder="Project"
                                        value={project}
                                        onChange={(e) => setProject(e.target.value)}
                                    />
                                    <p className='error'>{projectError ? projectError : ""}</p>
                                </div>
                                <div className="mb-4">
                                    <textarea className="w-100 form-control border-0 py-3" rows="6" cols="10" maxLength={"250"} placeholder="Message" style={{ resize: "none", }}></textarea>
                                </div>
                                <div className="text-center">
                                    <button className="btn bg-primary text-white py-3 px-5" onClick={() => handleSubmit()} type="button">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
