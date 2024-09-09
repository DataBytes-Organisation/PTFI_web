import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
    return (
        <section className="benefits">
            <h2>Benefits</h2>
            <div className="benefit-container">
                <div className="benefit-card">
                    <h3>Manage Risk</h3>
                    <p className="benefit-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="benefit-card">
                    <h3>Build Resilience</h3>
                    <p className="benefit-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="benefit-card">
                    <h3>Grow with Confidence</h3>
                    <p className="benefit-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
