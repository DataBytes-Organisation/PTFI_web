import React, { useState, useEffect } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
    const [currentService, setCurrentService] = useState(0);

    const services = [
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
            handleNextService();
        }, 3000); // Change slides every 3000 milliseconds (3 seconds)
        return () => clearTimeout(timer); // Clean up the timer
    }, ); // Dependencies for useEffect

    const handlePrevService = () => {
        setCurrentService(
            (currentService - 1 + services.length) % services.length
        );
    };

    const handleNextService = () => {
        setCurrentService((currentService + 1) % services.length);
    };

    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <button onClick={handlePrevService}>&#8249;</button>
                <div className="service-card">
                    <div className="content-box">
                        <h3>{services[currentService].title}</h3>
                        <p>{services[currentService].description}</p>
                    </div>
                </div>
                <button onClick={handleNextService}>&#8250;</button>
            </div>
        </section>
    );
};

export default ServicesSection;
