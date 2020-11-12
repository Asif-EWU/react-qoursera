import React from 'react';
import './Header.css';
import image from './icon.png';

const Header = () => {
    return (
        <div className="header-container px-5 py-1">
            <img src={image}  alt="Q"/>
            <h1 className="header-title">oursera</h1>
        </div>
    );
};

export default Header;