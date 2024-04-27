import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './FooterPanel.css';
import image_twitter from '../Images/Twitter.jpg'
import image_FaceBook from '../Images/FaceBook.png'
import image_Instagram from '../Images/Ins.png'
import logo from '../Images/Logo.png';

function FooterPanel() {
    return (
        <div className="footer-panel">
            <div className="footer-logo">
                 {/*logo should be imported added to a  resource folder and referenced appropriately*/}
            <div id="logo-container">
                {/* Wrap the image with a Link component */}
                <Link to="/#company-vision">
                    <img id="logo" src={logo} className="logo" alt="Logo"/>
                </Link>       </div>
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <ul>
                        <li><Link to="/AboutUs">About us</Link></li>
                        <li><Link to="/Membership">Membership</Link></li>
                        <li><Link to="/Publication">Publication</Link></li>
                        <li><Link to="/Technical">Technical communities</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li><Link to="/Join">Join PTFI</Link></li>
                        <li><Link to="/Terms&Conditions">Terms&Conditions</Link></li>
                        <li><Link to="/PrivacyPolicy">PrivacyPolicy</Link></li>
                    </ul>
                </div>
                <div className="footer-column-special">
                    <div className="contact-button">
                        <Link to="/Contact">
                        <button className="contact-us-button">Contact US</button>
                        </Link>
                    </div>
                    <a href="https://www.facebook.com/" title="Facebook">
                        <img alt='Facebook' src={image_FaceBook}/>
                    </a>
                    <a href="https://twitter.com/" title="Twitter">
                        <img alt='Twitter' src={image_twitter}/>
                    </a>
                    <a href="https://www.instagram.com/" title="Instagram">
                        <img alt='Instagram' src={image_Instagram}/>
                    </a>
                </div>
            </div>


            <div className="rights">
                <div id="line"></div>
                <p id='statement'>Copyright @PTFI consulting 2024 ALL rights reserved</p>
            </div>
        </div>
    );
}

export default FooterPanel;
