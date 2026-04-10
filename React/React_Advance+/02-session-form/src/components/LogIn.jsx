import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSession from "../Context/useSession";

const LogIn = () => {
    const { isLoggedIn, login } = useSession();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Invalid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Login Data:", formData);

            try {
                const res = await fetch(
                    "https://raw.githubusercontent.com/yashnextsavy/few-data-in-json/master/user-data/user-data.json"
                );

                const data = await res.json();
                const users = data.users;

                const foundUser = users.find(
                    (user) =>
                        user.email === formData.email &&
                        user.password === formData.password
                );

                if (foundUser) {
                    localStorage.setItem("user", JSON.stringify(foundUser));
                    login();
                } else {
                    setLoginError("Invalid email or password ");
                }
            } catch (error) {
                console.log(error);
                setLoginError("Something went wrong");
            }
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/dashboard");
        }
    }, [isLoggedIn, navigate]);

    if (isLoggedIn) {
        return <p>Redirecting to dashboard...</p>;
    }

    return (
        <>
            <div className='dashboard-wrapper min-h-screen flex justify-center items-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'>

                <div className="dashboard-content backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-12 rounded-3xl w-2/5 flex flex-col items-center">
                    <form onSubmit={handleSubmit} className="login-form w-full">
                        <h2 className='text-3xl text-center mb-8 font-bold text-white'>Login</h2>

                        <div className="mb-3 w-full">
                            <label className='font-bold block mb-2.5 text-white tracking-wider'>Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border rounded-lg p-2 outline-0 w-full border-white/80 text-white shadow-xl"
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div className="mb-3">
                            <label className='font-bold block mb-2.5 text-white tracking-wider'>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="border rounded-lg p-2 outline-0 w-full border-white/80 text-white shadow-xl"
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>

                        {loginError && <p className="error">{loginError}</p>}

                        <button
                            type="submit"
                            className='px-6 py-3 rounded-full bg-white text-purple-600 font-semibold shadow-md hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer'
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogIn;