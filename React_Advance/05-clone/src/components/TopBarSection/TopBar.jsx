import React from 'react'

const TopBar = () => {
    return (
        <div className="topbar-wrapper">
            <div className="topbar-content container py-2 d-flex">
                <div className='d-flex'>
                    <p className='topbar-link'>
                        <a href="#" className="me-3 py-2">
                            <i className="fas fa-map-marker-alt me-2 text-secondary "></i>
                            <span>23 Ranking Street, New York</span>
                        </a>
                    </p>
                    <p className='topbar-link'>
                        <a href="mailto:Email@Example.com" className="me-3 py-2">
                            <i className="fas fa-envelope me-2 text-secondary"></i>
                            <span>Email@Example.com</span>
                        </a>
                    </p>
                    <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your Business</small></div>
                </div>
                <div className="icon-wrap">
                    <a href="!#" onClick={(e) => e.preventDefault()} className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></a>
                    <a href="!#" onClick={(e) => e.preventDefault()} className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></a>
                    <a href="!#" onClick={(e) => e.preventDefault()} className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
                    <a href="!#" onClick={(e) => e.preventDefault()} className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                </div>
            </div>
        </div>
    )
}

export default TopBar
