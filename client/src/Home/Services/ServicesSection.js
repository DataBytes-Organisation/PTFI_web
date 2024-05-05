// HorizontalScrollers/ServicesSection.js
import React, {useState, useEffect} from 'react';
import './ServicesSection.css'

const ServicesSection = () => {
    const [currentService, setCurrentService] = useState(0);

    const Services = [
        {
            title: 'Service1',
            description: 'Description1',
        },
        {
            title: 'Service2',
            description: 'Description2',
        },
        {
            title: 'Service3',
            description: 'Description3',
        },
    ];

    // Handle automatic sliding
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextNewsEvent();
        }, 3000); // Change slides every 3000 milliseconds (3 seconds)
        return () => clearTimeout(timer); // Clean up the timer
    }, [currentService]); // Dependencies for useEffect

    const handlePrevService = () => {
        setCurrentService(
            (currentService - 1 + Services.length) % Services.length
        );
    };

    const handleNextNewsEvent = () => {
        setCurrentService((currentService + 1) % Services.length);
    };

    return (
        <section className="services">
            <h2>Services</h2>
            <div className="services-container">
                <button onClick={handlePrevService}>&#8249;</button>
                <div className="service-card">
                    <div className="content-box">
                        <h3 id="title">{Services[currentService].title}</h3>
                        <p id="description">{Services[currentService].description}</p>
                    </div>
                </div>
                <button onClick={handleNextNewsEvent}>&#8250;</button>
            </div>
        </section>
    );
};

export default ServicesSection;