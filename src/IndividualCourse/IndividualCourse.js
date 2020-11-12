import React from 'react';
import './IndividualCourse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCheck, faUsers } from '@fortawesome/free-solid-svg-icons'

const IndividualCourse = (props) => {
    const {myCourseList, addCourseHandler, singleCourse} = props;
    const {course} = singleCourse;

    let enrollButton;
    if(myCourseList.find(myCourse => myCourse === singleCourse)) {
        enrollButton = <button className="btn btn-block btn-success mt-4"><FontAwesomeIcon icon={faCheck}/> Course Enrolled</button>
    } 
    else {
        enrollButton = <button className="btn btn-block btn-primary mt-4" onClick={() => addCourseHandler(singleCourse)}>Enroll Now</button>
    }

    return (
        <div className="individualCourse-container">
            <img src={course.image} alt=""/>
            <div className="info">
                <div className="course-info">
                    <h2 className="course-name">{course.name}</h2>
                    <p className="enrolled pt-3"><FontAwesomeIcon className="icon" icon={faUsers}/>Enrolled: {course.enrolled.toLocaleString()}</p>
                    <p className="start-date pb-3"><FontAwesomeIcon className="icon" icon={faCalendarAlt}/>Starts From: {course.date}</p>
                    <h3 className="price">${course.price}</h3>
                    {enrollButton}
                </div>
                <div className="instructor-info">

                </div>
            </div>
        </div>
    );
};

export default IndividualCourse;