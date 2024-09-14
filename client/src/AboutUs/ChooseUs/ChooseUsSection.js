import React from 'react';
import './ChooseUsSection.css';

const ChooseUsSection = () => {
    return (
        <section className="chooseUs">
            <h2>Why Choose Us</h2>
            <div className="chooseUs-container">
                <div className="chooseUs-card">
                    <h3>Manage Risk</h3>
                    <p className="chooseUs-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="chooseUs-card">
                    <h3>Build Resilience</h3>
                    <p className="chooseUs-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="chooseUs-card">
                    <h3>Grow with Confidence</h3>
                    <p className="chooseUs-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            </div>
        </section>
    );
};

export default ChooseUsSection;
