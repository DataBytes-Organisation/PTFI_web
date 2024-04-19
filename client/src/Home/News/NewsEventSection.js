import React, {useState} from 'react';
import './NewsEventSection.css'
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
            <h2>News &amp; Event</h2>
            <div className="news-event-container">
                <button onClick={handlePrevNewsEvent}>&#8249;</button>
                <div className="news-event-card">
                    <div className="content-box">
                        <img
                            src={newsEvents[currentNewsEvent].image}
                            alt="News/Event"

                        />
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