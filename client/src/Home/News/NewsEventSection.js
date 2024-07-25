import React, { useState, useEffect } from 'react';
import './NewsEventSection.css';
import image1 from '../../Images/Logo.png';
import image2 from '../../Images/Logo.png';
import image3 from '../../Images/Logo.png';

const NewsEventsSection = () => {
    const [currentNewsEvent, setCurrentNewsEvent] = useState(0);

    const newsEvents = [
        {
            image: image1,
            description: 'Description1',
            date: 'Date1',
        },
        {
            image: image2,
            description: 'Description2',
            date: 'Date2',
        },
        {
            image: image3,
            description: 'Description3',
            date: 'Date3',
        },
    ];

    // Handle automatic sliding
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextNewsEvent();
        }, 3000); // Change slides every 3000 milliseconds (3 seconds)
        return () => clearTimeout(timer); // Clean up the timer
    }, ); // Dependencies for useEffect

    const handlePrevNewsEvent = () => {
        setCurrentNewsEvent(
            (currentNewsEvent - 1 + newsEvents.length) % newsEvents.length
        );
    };

    const handleNextNewsEvent = () => {
        setCurrentNewsEvent((currentNewsEvent + 1) % newsEvents.length);
    };

    return (
        <section className="news-events">
            <h2>News & Event</h2>
            <div className="news-event-container">
                <button onClick={handlePrevNewsEvent}>&#8249;</button>
                <div className="news-event-card">
                    <div className="content-box">
                        <img src={newsEvents[currentNewsEvent].image} alt="News/Event" />
                        <p id="description">{newsEvents[currentNewsEvent].description}</p>
                        <p id="date">{newsEvents[currentNewsEvent].date}</p>
                    </div>
                </div>
                <button onClick={handleNextNewsEvent}>&#8250;</button>
            </div>
        </section>
    );
};

export default NewsEventsSection;
