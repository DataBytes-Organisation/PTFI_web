import React from 'react';
import { Link } from 'react-router-dom';
import './FooterPanel.css';

function FooterPanel() {
  return (
    <div className="footer-panel">
      <div className="footer-logo">
        <img src="PLACEHOLDER-LOGO-NAME" alt="Logo" />
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <ul>
            <li><Link to="/AboutUs">About us</Link></li>
            <li><Link to="/Membership">Membership</Link></li>
            <li><Link to="/Publication">Publication</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li><Link to="/Technical">Technical communities</Link></li>
            <li><Link to="/Join">Join PTFI</Link></li>
          </ul>
        </div>
      </div>
      <div className="contact-button">
        <Link to="/Contact">
          <button>Contact PTFI</button>
        </Link>
      </div>
    </div>
  );
}

export default FooterPanel;
