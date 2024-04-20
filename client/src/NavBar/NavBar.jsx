import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div id="navbar">
            {/*logo should be imported added to a  resource folder and referenced appropriately*/}
            <div id="logo-container">
                <img id="logo" src={require("../Images/Logo.png")} className="logo" alt="Logo"/>
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
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div id="navbar">
      {/*logo should be imported added to a  resource folder and referenced appropriately*/}
      <div id="logo-container">
        <img src="PLACEHOLDER-LOGO-NAME" className="logo" alt="Logo" />
      </div>
      
      <div id="nav-links">
        <Link to="/AboutUs" className="nav-link">About us</Link>
        <Link to="/Membership" className="nav-link">Membership</Link>
        <Link to="/Publication" className="nav-link">Publication</Link>
        <Link to="/Technical" className="nav-link">Technical Communities</Link>
      </div>
      <Link to="/Join" id="join-button">Join PTFI</Link>
    </div>
  );
}

export default NavBar;
