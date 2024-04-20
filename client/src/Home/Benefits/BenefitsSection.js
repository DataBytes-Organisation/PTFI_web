// HorizontalScrollers/BenefitsSection.js
import React, { useState } from 'react';
import './BenefitsSection.css'

const BenefitsSection = () => {
    const [currentBenefit, setCurrentBenefit] = useState(0);
    const benefits = ['Benefit1', 'Benefit2', 'Benefit3'];

    const handlePrevBenefit = () => {
        setCurrentBenefit((currentBenefit - 1 + benefits.length) % benefits.length);
    };

    const handleNextBenefit = () => {
        setCurrentBenefit((currentBenefit + 1) % benefits.length);
    };

    return (
        <section className="benefits">
            <h2>Benefits for Choosing Us</h2>
            <div className="benefit-container">
                <button onClick={handlePrevBenefit}>&#8249;</button>
                <div className="benefit-text">{benefits[currentBenefit]}</div>
                <button onClick={handleNextBenefit}>&#8250;</button>
            </div>
        </section>
    );
};

export default BenefitsSection;