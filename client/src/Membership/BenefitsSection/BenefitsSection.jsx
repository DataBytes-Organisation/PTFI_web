import React from 'react';
import './BenefitsSection.css';
import { Link } from 'react-router-dom';

const BenefitsSection = () => {
    return (
        <section className="benefits-section">
            <div className="benefits-content">
                <h2>Why Join Us?</h2>
                <p className="benefits-description">
                Partner with industry leaders and unlock access to tailored solutions, expert insights, and exclusive resources to secure your digital future.
                </p>
                <Link to="/AboutUs" className="benefits-button">
                    Learn More
                </Link>
            </div>
            <div className="benefits-image"></div>
        </section>
    );
};

export default BenefitsSection;
