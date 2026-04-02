import React, { useState } from 'react'
import useCourseStore from '../App/CourseStore';

const CourseForm = () => {

    const [courseTitle, setCourseTitle] = useState("");

    const addCourse = useCourseStore((state) => state.addCourse);

    const handleCourseSubmit = () => {
        if (!courseTitle) return (alert("Please add a course title"));

        addCourse({
            id: Math.ceil(Math.random() * 1000000),
            title: courseTitle,
            completed: false,
        });
        setCourseTitle("");
    }

    return (
        <>
            <div className="input-wrap">
                <input
                    value={courseTitle}
                    placeholder='Enter Course'
                    onChange={(e) => setCourseTitle(e.target.value)}
                />
                <button
                    onClick={() => { handleCourseSubmit() }}
                    className='primary-btn'>
                    Add course
                </button>
            </div>
        </>
    )
}

export default CourseForm;