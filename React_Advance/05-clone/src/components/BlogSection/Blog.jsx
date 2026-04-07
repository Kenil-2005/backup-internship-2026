import React from 'react'
import BreadCrumb from '../BreadCrumb'
import BlogDetails from './BlogDetails'


const Blog = () => {
    return (
        <>
            <BreadCrumb title={"Our Blog"} desc={"Blog"} />
            <BlogDetails />
        </>
    )
}

export default Blog
