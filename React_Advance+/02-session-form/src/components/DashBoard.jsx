import React, { useEffect } from 'react'
import useSession from "../Context/useSession";
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useSession();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return <p>Redirecting to Log In page...</p>;
    }

    return (
        <>
            <div className='dashboard-wrapper min-h-screen flex justify-center items-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'>

                <div className="dashboard-content backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-12 rounded-3xl w-100 flex flex-col items-center">

                    <div className='circle-wrapper relative my-6 z-0'>
                        <div className='circle-1 relative z-0'>✓</div>
                        <div className='circle-2 absolute inset-0 -z-10'></div>
                    </div>

                    <h2 className='text-white text-2xl font-bold mb-2'>
                        Login Successful
                    </h2>

                    <p className='text-white/80 text-center mb-6'>
                        Welcome back! You have successfully logged in.
                    </p>

                    <button
                        onClick={logout}
                        className='px-6 py-3 rounded-full bg-white text-purple-600 font-semibold shadow-md hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer'
                    >
                        Log Out
                    </button>

                </div>
            </div>
        </>
    )
}

export default DashBoard