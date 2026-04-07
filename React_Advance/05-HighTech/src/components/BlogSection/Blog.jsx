import React from 'react'
import BreadCrumb from '../BreadCrumb'
import BlogDetails from './BlogDetails'
import FactCheck from '../FactSection/FactCheck'


const Blog = () => {
    return (
        <>
            <BreadCrumb title={"Our Blog"} desc={"Blog"} />
            <FactCheck />
            <BlogDetails isLimited={false} />
        </>
    )
}

export default Blog
