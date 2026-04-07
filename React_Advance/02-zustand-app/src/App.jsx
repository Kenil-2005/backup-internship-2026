import React from "react";
import "./App.css";
import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";

const App = () => {
    return (
        <>
            <div className='Container'>
                <h1 style={{
                    fontSize: "2.5rem",
                    marginBottom: "2rem",
                }}>
                    My Course List
                </h1>
                <CourseForm />
                <CourseList />
            </div>
        </>
    );
};

export default App;
