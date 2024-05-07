import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png'; // 确保路径正确，并且logo已经正确导入

function NavBar() {
    return (
        <div id="navbar">
            <div id="logo-container">
                {/* 使用文字作为logo */}
                PTFI
            </div>

            {/* 使用Link组件包裹图片 */}
            <Link to="/#company-vision">
                <img id="logo" src={logo} className="logo" alt="Logo"/>
            </Link>

            <div id="nav-links">
                <Link to="/AboutUs" className="nav-link">About us</Link>
                <Link to="/Membership" className="nav-link">Membership</Link>
                <Link to="/Publication" className="nav-link">Publication</Link>
                <Link to="/Technical" className="nav-link">Technical Communities</Link>
            </div>
            <Link to="/Join" id="join-button">Join PTFI</Link>
            <Link to="/Registration" id="registration-button">Registration</Link>
        </div>
    );
}


export default NavBar;
