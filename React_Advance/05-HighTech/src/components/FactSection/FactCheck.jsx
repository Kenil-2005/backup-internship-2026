import React, { useEffect, useRef, useState } from "react";

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!start) return;

        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const value = Math.min((progress / duration) * end, end);

            setCount(Math.ceil(value));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [start, end, duration]);

    return <span ref={ref}>{count}</span>;
};

const FactCheck = () => {
    return (
        <div className='container-fluid bg-secondary py-5 fact-check-wrapper'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 animate__animated animate__fadeIn">
                        <div className="d-flex conter-wrap">
                            <h1 className="me-3 text-primary">
                                <Counter end={99} />
                            </h1>
                            <h5 className="text-white mt-1">Happy customers</h5>
                        </div>
                    </div>

                    <div className="col-lg-3  animate__animated animate__fadeIn">
                        <div className="d-flex conter-wrap">
                            <h1 className="me-3 text-primary">
                                <Counter end={25} />
                            </h1>
                            <h5 className="text-white mt-1">Successful businesses</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 animate__animated animate__fadeIn">
                        <div className="d-flex conter-wrap">
                            <h1 className="me-3 text-primary">
                                <Counter end={125} />
                            </h1>
                            <h5 className="text-white mt-1">Total clients</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 animate__animated animate__fadeIn">
                        <div className="d-flex conter-wrap">
                            <h1 className="me-3 text-primary">
                                <Counter end={5} />
                            </h1>
                            <h5 className="text-white mt-1">Star reviews</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FactCheck;