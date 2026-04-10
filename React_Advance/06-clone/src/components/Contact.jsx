import React, { useState } from 'react'

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [project, setProject] = useState("");

    let [nameError, setNameError] = useState("");
    let [emailError, setEmailError] = useState("");
    let [emailError2, setEmailError2] = useState("");
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
        else if (!/\S+@\S+\.\S+/.test(email)) {
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

    const emailValidate2 = () => {
        if (!email2) {
            setEmailError2("Email is Required");
            return false;
        }
        else if (!/\S+@\S+\.\S+/.test(email2)) {
            setEmailError2("Enter valid Email");
            return false;
        } else {
            setEmailError2("");
            return true;
        }
    };
    const handleSubscribe = () => {
        const isEmailValid = emailValidate2();

        if (isEmailValid) {
            setEmail2("");
        }
    };

    return (
        <div className='contact-wrapper min-h-screen relative overflow-hidden'>
            <div className="contact-bg absolute inset-0 -z-10">
                <img src="./contact-bg.png" alt="" />
            </div>
            <div className="contact-contant py-16 container relative z-0">
                <h2 className='mb-7 text-3xl md:text-5xl lg:text-6xl'>
                    Requst A <span className="text-gradient">call for You</span>
                </h2>
                <div className="form-wrap flex rounded-2xl">
                    <div className="form-content-left grow rounded-l-2xl px-8 py-12 w-full h-full">
                        <div className="mb-4">
                            <input type="text"
                                className="border p-3 bg-white w-full outline-0"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <p className='error'>{nameError ? nameError : ""}</p>
                        </div>
                        <div className="mb-4">
                            <input type="email"
                                className="border p-3 bg-white w-full outline-0"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className='error'>{emailError ? emailError : ""}</p>
                        </div>
                        <div className="mb-4">
                            <input type="text"
                                className="border p-3 bg-white w-full outline-0"
                                placeholder="Project"
                                value={project}
                                onChange={(e) => setProject(e.target.value)}
                            />
                            <p className='error'>{projectError ? projectError : ""}</p>
                        </div>
                        <div className="mb-4">
                            <textarea className="border p-3 bg-white w-full outline-0" rows="6" cols="10" maxLength={"250"} placeholder="Message" style={{ resize: "none", }}></textarea>
                        </div>
                        <div className="text-center">
                            <button className="secondary-btn" onClick={() => handleSubmit()} type="button"><span>Send Message</span></button>
                        </div>
                    </div>
                    <div className="form-content-right px-8 py-12 w-full h-strech flex flex-col justify-between grow rounded-r-2xl">
                        <div className='dotted-border-wrap p-8 text-white text-2xl flex justify-between flex-col'>
                            <div className="address-wrap my-4">
                                <span className="pe-4"><i class="fa-solid fa-location-dot"></i></span>
                                <span className='pe-2'>Address:</span>
                                <a href="mailto:123@gmail.com">123@gmail.com</a>
                            </div>
                            <div className="call-wrap my-4">
                                <span className="pe-4"><i class="fa-solid fa-phone"></i></span>
                                <span className='pe-2'>Call:</span>
                                <a href="tel:+911234567890">+91 1234567890</a>
                            </div>
                            <div className="mail-wrap my-4">
                                <span className="pe-4"><i class="fa-solid fa-envelope"></i></span>
                                <span className='pe-2'>Email:</span>
                                <a href="mailto:123@gmail.com">123@gmail.com</a>
                            </div>
                        </div>
                        <div className="subscription-wrap">

                            <div className="mb-4">
                                <input type="email"
                                    className="border p-3 bg-white w-full outline-0"
                                    placeholder="Your Email"
                                    value={email2}
                                    onChange={(e) => setEmail2(e.target.value)}
                                />
                                <p className='error'>{emailError2 ? emailError2 : ""}</p>
                            </div>
                            <div className="text-center">
                                <button className="secondary-btn" onClick={() => handleSubscribe()} type="button"><span>Subscribe</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
