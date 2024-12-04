import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './FooterPanel.css';
import image_twitter from '../Images/Twitter.jpg'
import image_FaceBook from '../Images/FaceBook.png'
import image_Instagram from '../Images/Ins.png'
import logo from '../Images/Logo.png';

function FooterPanel() {
    const year = new Date().getFullYear();

    return (
        <div className="footer-panel">
            <div className="footer-container">
                <div className="footer-logo">
                    <div id="logo-container">
                        <img id="logo" src={logo} alt="Logo"/>
                        <div className='social-logos'>
                        <Link to="https://www.facebook.com/">
                            <img className='social-logo' alt='Facebook' src={image_FaceBook}/>
                        </Link>
                        <Link to="https://twitter.com/">
                            <img className='social-logo' alt='Twitter' src={image_twitter}/>
                        </Link>
                        <Link to="https://www.instagram.com/">
                            <img className='social-logo' alt='Instagram' src={image_Instagram}/>
                        </Link>
                        </div>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/AboutUs">About us</Link></li>
                        <li><Link to="/Membership">Membership</Link></li>
                        <li><Link to="/Publication">Publication</Link></li>
                        <li><Link to="/Contact">Contact Us</Link></li>
                        <li><Link to="/Join">Join PTFI</Link></li>
                    </ul>
                </div>
                
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        {/* <li><Link to="/Technical">Technical</Link></li> */}
                        <li><Link to="/Demonstration">List Matching</Link></li>
                        <li><Link to="/HEOverview">Homomorphic Encryption</Link></li>
                        <li><Link to="/FLOverview">Federated Learning</Link></li>
                        <li><Link to="/DPOverview">Differential Privacy</Link></li>
                        <li><Link to='/SMPCOverview'>Secure Multi-Party Computation</Link></li>
                    </ul>
                </div>
                
                <div className="footer-column">
                    <h3>Legal</h3>
                    <ul>
                        <li><Link to="/Terms&Conditions">Terms & Conditions</Link></li>
                        <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div className="rights">
                    <p>DataBytes &copy; { year }</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </div>
    );
}

export default FooterPanel;
