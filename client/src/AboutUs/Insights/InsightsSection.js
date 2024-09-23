import React from 'react';
import './InsightsSection.css';
// import image1 from '../../Images/background.jpg';
// import image2 from '../../Images/background.jpg';
// import image3 from '../../Images/background.jpg';

const InsightsSection = () => {
    const insights = [
        {
            // image: image1, //commented out image
            description: 'Digital Forensics and Incident Response',
            link: 'Go to Forensics',
        },
        {
            // image: image2, //commented out image
            description: 'Insights about Global Financial Institutions',
            link: 'Go to Institution',
        },
        {
            // image: image3, //commented out image
            description: 'Ransomware and Cyber Extortion',
            link: 'Go to CyberSec',
        },
    ];

    return (
        <section className="insights-section">
            <h2>Latest Insights</h2>
            <div className="insights-container">
                {insights.map((insight, index) => (
                    <div
                        key={index}
                        className="insights-card"
                        // style={{ backgroundImage: `url(${insight.image})` }} // Commented out background image
                        style={{ backgroundColor: 'rgb(93, 93, 93)' }} // Set background color to gray
                    >
                        <div className="content-box1">
                            <p className="description">{insight.description}</p>
                            {/*commented out invalid anchor tag*/}
                            {/*<a href="#" className="link">{insight.link}</a>*/}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InsightsSection;
