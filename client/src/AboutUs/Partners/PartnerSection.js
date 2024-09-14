import React from 'react';
import './PartnerSection.css';
// import image1 from '../../Images/background.jpg';
// import image2 from '../../Images/background.jpg';
// import image3 from '../../Images/background.jpg';
// import image4 from '../../Images/background.jpg';

const PartnerSection = () => {
    const partnerLogos = [
        { alt: 'Company 1' },
        { alt: 'Company 2' },
        { alt: 'Company 3' },
        { alt: 'Company 4' },
    ];

    return (
        <section className="partner-section">
            <div className="partner-content">
                <h2 className="partner-title">
                    Trusted PTFI partner to leading Australian organisations.
                </h2>
            </div>
            <div className="partner-divider">
            </div>
            <div className="partner-logos">
                <div className="logo-grid">
                    {partnerLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="logo-item"
                            style={{ backgroundColor: 'rgb(93, 93, 93)' }}
                        >
                            <span className="partner-logo-placeholder">{logo.alt}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;
