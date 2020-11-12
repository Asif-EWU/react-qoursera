import React from 'react';
import IndividualCourse from '../IndividualCourse/IndividualCourse';
import courseData from '../fakedata.js';
import './CourseSection.css';

const CourseSection = (props) => {
    const {myCourseList, addCourseHandler} = props;
    return (
        <div className="courseSection-container">
            {
                courseData.map(course => 
                    <IndividualCourse 
                        key = {course.id.toString()}
                        myCourseList = {myCourseList}
                        addCourseHandler = {addCourseHandler}
                        singleCourse = {course}
                    ></IndividualCourse>
                )
            }
        </div>
    );
};

export default CourseSection;