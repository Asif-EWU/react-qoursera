import React from 'react';
import './CourseList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CourseList = (props) => {
    const {course, deleteCourseHandler} = props;
    
    return (
        <div className = "courseList-container">
            <div className="course-name">
                {course.course.name}
            </div>
            <div className="delete-button">
                <button onClick={() => deleteCourseHandler(course)}><FontAwesomeIcon icon={faTrashAlt}/></button>
            </div>
        </div>
    );
};

export default CourseList;