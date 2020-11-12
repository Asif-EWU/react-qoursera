import React, { useState } from 'react';
import CourseSection from '../CourseSection/CourseSection';
import CartSection from '../CartSection/CartSection';
import './CourseContainer.css';

const CourseContainer = () => {
    const [myCourseList, setMyCourseList] = useState([]);
    
    const addCourseHandler = course => {
        if(!myCourseList.find(myCourse => myCourse === course)) {
            const newCourseList = [...myCourseList, course];
            setMyCourseList(newCourseList);
        }
    }

    const deleteCourseHandler = course => {
        const newCourseList = myCourseList.filter(myCourse => myCourse !== course);
        setMyCourseList(newCourseList);
    }

    return (
        <div className="courseContainer-container">
            <CourseSection myCourseList={myCourseList} addCourseHandler={addCourseHandler}></CourseSection>
            <CartSection myCourseList={myCourseList} deleteCourseHandler={deleteCourseHandler}></CartSection>
        </div>
    );
};

export default CourseContainer;