import React from 'react';
import './NavBar.css';
import logo from '../Images/Logo.png';
import {HashLink as Link} from 'react-router-hash-link';


function NavBar() {
    // 使用 React 的方式处理点击事件
    function toggleMenu() {
        const menu = document.getElementById('side-menu');
        if (menu.style.width === '200px') {
            menu.style.width = '0';
        } else {
            menu.style.width = '200px';
        }
    }

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
                <Link to="/Demonstration" className="nav-link">List Matching</Link>
                <Link to="/HEDemonstration" className="nav-link">Homomorphic Encryption</Link>
                <Link to="/FLDemonstration" className="nav-link">FL Demo</Link>
            </div>
            <button id="menubtn" onClick={toggleMenu}>Menu</button>
            <div id="side-menu" className="side-nav">
                <Link to="/Join" className="nav-link">Join PTFI</Link>
                <Link to="/Registration" className="nav-link">Registration</Link>
                <Link to="/AboutUs" className="nav-link">About us</Link>
                <Link to="/Membership" className="nav-link">Membership</Link>
                <Link to="/Publication" className="nav-link">Publication</Link>
                <Link to="/Technical" className="nav-link">Technical Communities</Link>
                <button onClick={toggleMenu} id="closebtn" className="closebtn">&times; Close</button>
            </div>
        </div>
    );
}

export default NavBar;
