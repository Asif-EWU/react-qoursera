import React from 'react';
import CartInfo from '../CartInfo/CartInfo';
import CourseList from '../CourseList/CourseList';
import './CartSection.css';

const CartSection = (props) => {
    const {myCourseList, deleteCourseHandler} = props;
    
    return (
        <div className="cartSection-container">
            <CartInfo myCourseList={myCourseList}></CartInfo>
            <ol>
                {
                    myCourseList.map(course => 
                        <CourseList
                            key = {course.id.toString()}
                            course = {course}
                            deleteCourseHandler = {deleteCourseHandler}
                        ></CourseList>
                    )
                }
            </ol>
        </div>
    );
};

export default CartSection;