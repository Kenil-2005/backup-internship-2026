import React, { useEffect, useRef, useState } from "react";
import BlogData from "./BlogData";
import BlogCard from "./BlogCard";

const BlogDetails = ({ isLimited }) => {

    const [visibleCount, setVisibleCount] = useState(9);
    const loaderRef = useRef(null);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    useEffect(() => {
        if (isLimited) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        }, { threshold: 1 });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
    }, [isLimited]);

    const limitedData = BlogData.slice(0, 3);
    const visibleData = BlogData.slice(0, visibleCount);

    return (
        <div className='container-fluid mb-5 py-5 blog-wrapper'>
            <div className="container">
                <div className="text-center mx-auto pb-5" data-aos="fade-up" data-aos-delay="300" style={{ maxWidth: "600px" }}>
                    <h5 className="text-primary">Our Bolg</h5>
                    <h1>Latest Blog & News</h1>
                </div>
                <div className="row g-5">
                    {isLimited
                        ? limitedData.map((item) => (
                            <BlogCard key={item.id} {...item} />
                        ))
                        : visibleData.map((item) => (
                            <BlogCard key={item.id} {...item} />
                        ))
                    }
                </div>

                {!isLimited && visibleCount < BlogData.length && (
                    <div ref={loaderRef} style={{ height: "50px", paddingTop: "100px", }}>
                        <p className="text-center">Loading more...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogDetails;
