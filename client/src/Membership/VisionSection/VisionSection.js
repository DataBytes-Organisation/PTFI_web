import React from 'react';
import './VisionSection.css';
import { Link } from 'react-router-dom';

const VisionSection = () => {
    return (
        <section className="vision-section">
            <div className="vision-content">
                <h2>Join Our Community Today</h2>
                <p className="vision-description">
                    Join PTFI and gain access to exclusive member resources and tools. The registration is quick, easy, and secure!
                </p>
                <Link to="/registration" className="vision-button">
                    Create My Account
                </Link>
                <p className="vision-text">
                    Signing up is simple and secure. Start exploring our tools and resources to take advantage of the latest finance tech.
                </p>
            </div>
            <div className="vision-image"></div>
        </section>
    );
};

export default VisionSection;
