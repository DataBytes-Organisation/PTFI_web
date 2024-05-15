import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png'; // 确保路径正确，并且logo已经正确导入

function NavBar() {
    // 使用 React 的方式处理点击事件
    function toggleMenu() {
        const menu = document.getElementById('side-menu');
        if (menu.style.width === '250px') {
            menu.style.width = '0';
        } else {
            menu.style.width = '250px';
        }
    }

    return (
        <div id="navbar">
            <Link to="/#company-vision">
                <img id="logo" src={logo} className="logo" alt="Logo"/>
            </Link>

            <div id="nav-links">
                <Link to="/AboutUs" className="nav-link">About us</Link>
                <Link to="/Membership" className="nav-link">Membership</Link>
                <Link to="/Publication" className="nav-link">Publication</Link>
                <Link to="/Technical" className="nav-link">Technical Communities</Link>
                <Link to="/Demonstration" className="nav-link">Demonstration</Link>
            </div>
            <button id="menubtn" onClick={toggleMenu}>Menu</button>
            <div id="side-menu" className="side-nav">
                <Link to="/Join" className="nav-link">Join PTFI</Link>
                <Link to="/Registration" className="nav-link">Registration</Link>
                <Link to="/AboutUs" className="nav-link">About us</Link>
                <Link to="/Membership" className="nav-link">Membership</Link>
                <Link to="/Publication" className="nav-link">Publication</Link>
                <Link to="/Technical" className="nav-link">Technical Communities</Link>
                <button onClick={toggleMenu} className="closebtn">&times; Close</button>
            </div>
        </div>
    );
}

export default NavBar;
