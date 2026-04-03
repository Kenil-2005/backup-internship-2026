import React from 'react'

const BlogCard = ({ category, image, author, date, description, shareCount, comments, delay }) => {
    return (
        <div className="col-lg-6 col-xl-4 wow" data-aos="fade-in" data-aos-delay={delay}>
            <div className="blog-item position-relative bg-light rounded">
                <img src={image} className="img-fluid w-100 rounded-top" alt="" />
                <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{ top: "-28px", right: "20px" }}>{category}</span>
                <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{ marginTop: "-75px" }}>
                    <div className="blog-icon btn secondary-btn px-3 rounded-pill my-auto">
                        <a href="" className="btn text-white">Read More</a>
                    </div>
                    <div className="blog-btn-icon btn secondary-btn px-4 py-3 rounded-pill ">
                        <div className="blog-icon-1">
                            <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
                        </div>
                        <div className="blog-icon-2">
                            <a href="#!" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></a>
                            <a href="#!" className="btn me-1"><i className="fab fa-twitter text-white"></i></a>
                            <a href="#!" className="btn me-1"><i className="fab fa-instagram text-white"></i></a>
                        </div>
                    </div>
                </div>
                <div className="blog-content text-center position-relative px-3" style={{ marginTop: "-25px" }}>
                    <img src="img/admin.jpg" className="img-fluid rounded-circle border-4 border-white mb-3" alt="" />
                    <h5 className="">By {author}</h5>
                    <span className="text-secondary">{date}</span>
                    <p className="py-2">{description}</p>
                </div>
                <div className="blog-comment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                    <a href="#!" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>{shareCount} Share</small></a>
                    <a href="#!" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>{comments} Comments</small></a>
                </div>
            </div>
        </div >
    )
}

export default BlogCard
