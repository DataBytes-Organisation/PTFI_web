import React from 'react';
import './NavBar.css';
import logo from '../Images/Logo.png';
import {HashLink as Link} from 'react-router-hash-link';


function NavBar() {
    return (
        <div id="navbar">
            {/*logo should be imported added to a  resource folder and referenced appropriately*/}
            <div id="logo-container">
                {/* Wrap the image with a Link component */}
                <Link to="/#company-vision">
                    <img id="logo" src={logo} className="logo" alt="Logo"/>
                </Link>
            </div>

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
