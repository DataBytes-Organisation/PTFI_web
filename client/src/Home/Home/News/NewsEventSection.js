import React from 'react';
import './NewsEventSection.css';
import image1 from '../../Images/background.jpg';
import image2 from '../../Images/background.jpg';
import image3 from '../../Images/background.jpg';

const NewsEventsSection = () => {
    const newsEvents = [
        {
            image: image1,
            description: 'Digital Forensics and Incident Response',
            link: 'Go to Forensics',
        },
        {
            image: image2,
            description: 'Insights about Global Financial Institutions',
            link: 'Go to Insitution',
        },
        {
            image: image3,
            description: 'Ransomware and Cyber Extortion',
            link: 'Go to CyberSec',
        },
    ];

    return (
        <section className="news-events">
            <h2>News & Event</h2>
            <div className="news-event-container">
                {newsEvents.map((event, index) => (
                    <div key={index} className="news-event-card" style={{ backgroundImage: `url(${event.image})` }}>
                        <div className="content-box">
                            <p className="description">{event.description}</p>
                            <a href="#" className="link">{event.link}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewsEventsSection;
