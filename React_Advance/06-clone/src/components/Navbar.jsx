import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="navbar-wrapper px-4 relative z-50">
                <div className='container flex items-center justify-between navbar-content py-2'>
                    <div className="logo">
                        <Link to="/">
                            <img src="./logo.png" alt="logo" className='w-[65%]' />
                        </Link>
                    </div>

                    <div className="navbar-right-wrapper">
                        <div className="navbar-right-content flex items-center gap-15">

                            <div className="profil-wrap">
                                <img src="./user-icon.png" alt="" />
                            </div>

                            <div className="search-wrap">
                                <img src="./search-icon.png" alt="search" />
                            </div>

                            <div className="menu-wrap cursor-pointer" onClick={() => setIsOpen(true)}>
                                <img src="./toggle-icon.png" alt="menu" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 right-0 h-full w-75 collapse-menu text-white duration-300 z-50
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="p-5 flex justify-between items-center">
                    <h2 className="text-2xl">Menu</h2>
                    <button onClick={() => setIsOpen(false)}>✕ </button>
                </div>

                <ul className="p-5 space-y-4">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>

                    <li>
                        <Link to={'/ship'}>Ship</Link>
                    </li>

                    <li>
                        <Link to={'/testimonial'}>Testimonial</Link>
                    </li>

                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>

                </ul>

            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}

export default Navbar;