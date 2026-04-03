import React from 'react'
import BlogData from './BlogData'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <div className='container-fluid mb-5 py-5 blog-wrapper'>
            <div className="container">
                <div className="text-center mx-auto pb-5" data-aos="fade-up" data-aos-delay="300" style={{ maxWidth: "600px" }}>
                    <h5 className="text-primary">Our Bolg</h5>
                    <h1>Latest Blog & News</h1>
                </div>
                <div className="row g-5 ">
                    {BlogData.map((item) => {
                        return (
                            <BlogCard
                                key={item.id}
                                {...item}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blog
