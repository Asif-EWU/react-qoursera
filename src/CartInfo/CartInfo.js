import React from 'react';
import './CartInfo.css';

const CartInfo = (props) => {
    const myCourseList = props.myCourseList;
    const totalPrice = myCourseList.reduce((total, myCourse) => total + myCourse.course.price, 0).toFixed(2);
    return (
        <div className="cartInfo-container">
            <p style={{fontSize: "30px"}}>Course enrolled: {myCourseList.length}</p>
            <p style={{fontSize: "25px"}}>Total Price: <span className="h3">${totalPrice}</span></p>
        </div>
    );
};

export default CartInfo;