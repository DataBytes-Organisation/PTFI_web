import React, { useState } from 'react';
import './StoriesSection.css';
import image1 from '../../Images/background.jpg';
import image2 from '../../Images/background.jpg';
import image3 from '../../Images/background.jpg';

const StoriesSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const stories = [
        {
            image: image1,
            description: 'Success1 Description',
        },
        {
            image: image2,
            description: 'Success2 Description',
        },
        {
            image: image3,
            description: 'Success3 Description',
        },
    ];

    const ImageClick = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="stories">
            <h2>Customer Success Stories</h2>
            <p className="section-description">
                See how PTFI has helped organisations, both big and small, meet their security and business transformation requirements.
            </p>
            <button className="view-button">View all success stories</button>
            <div className="stories-container">
                {stories.map((event, index) => (
                    <div key={index} className="stories-item">
                        <div
                            className={`stories-card ${activeIndex === index ? 'pop-out' : ''}`}
                            style={{ backgroundColor: 'rgb(93, 93, 93)'  }}
                            // style={{ backgroundImage: `url(${event.image})` }}
                            onClick={() => ImageClick(index)}
                        >
                        </div>
                        <p className="image-description">{event.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StoriesSection;
