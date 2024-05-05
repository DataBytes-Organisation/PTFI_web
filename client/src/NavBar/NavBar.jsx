import React, { useState } from 'react';
import './NavBar.css';
import logo from '../Images/Logo.png';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    // Function to toggle navigation visibility
    const toggleNav = () => {
        if (window.innerWidth <= 768) {
            setIsNavVisible(!isNavVisible);
        }
    };

    return (
        <div id="navbar">
            <div id="logo-container">
                <Link to="/#company-vision">
                    <img id="logo" src={logo} className="logo" alt="Logo"/>
                </Link>
            </div>
            <div className="hamburger-menu" onClick={toggleNav}>
                ☰
            </div>
            <div id="nav-links" className={isNavVisible ? "display-flex" : ""}>
                <Link to="/AboutUs" className="nav-link">About us</Link>
                <Link to="/Membership" className="nav-link">Membership</Link>
                <Link to="/Publication" className="nav-link">Publication</Link>
                <Link to="/Technical" className="nav-link">Technical Communities</Link>
                <Link to="/Join" className="nav-link" id="join-button">Join PTFI</Link>
                <Link to="/Registration" className="nav-link" id="registration-button">Registration</Link>
            </div>
        </div>
    );
}

export default NavBar;
