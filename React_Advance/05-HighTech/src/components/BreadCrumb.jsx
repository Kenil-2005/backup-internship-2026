import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ title, desc }) => {
    return (
        <>
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animate__animated animate__slideInDown">{title}</h1>
                    <nav aria-label="breadcrumb animate__animated animate__slideInDown">
                        <ol className="breadcrumb text-white justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#!">Pages</a></li>
                            <li className="breadcrumb-item" aria-current="page">{desc}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default BreadCrumb
