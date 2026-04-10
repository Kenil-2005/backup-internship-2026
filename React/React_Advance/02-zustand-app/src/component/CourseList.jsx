import React from "react";
import useCourseStore from "../App/CourseStore";

const CourseList = () => {

    const courses = useCourseStore((state) => state.courses);
    const removeCourse = useCourseStore((state) => state.removeCourse);
    const toggleCourseState = useCourseStore((state) => state.toggleCourseState);

    return (
        <div>
            <ul>
                {courses.map((course, i) => {
                    return (
                        <li
                            key={i}
                            className={"course-item"}
                            style={{
                                backgroundColor: course.completed ? "#00ff00" : "#fff",
                            }}
                        >
                            <span>
                                <input
                                    checked={course.completed || false}
                                    type="checkbox"
                                    onChange={() => {
                                        toggleCourseState(course.id);
                                    }}
                                />
                            </span>
                            <span>{course?.title}</span>
                            <button
                                className='delete-btn'
                                onClick={() => {
                                    removeCourse(course.id);
                                }}
                            >
                                Remove
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CourseList;
