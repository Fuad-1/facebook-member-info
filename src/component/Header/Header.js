import React from 'react';
import logo from "../../image/fb-logo.png"
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />

            <nav>
                <a href="/home">Home</a>
                <a href="/profile">Profile List</a>
                <a href="/request">Request Send</a>
                <input type="text" placeholder="Search profile"/>
            </nav>
        </div>
    );
};

export default Header;