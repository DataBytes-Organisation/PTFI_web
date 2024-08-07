import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import BenefitsSection from "./Benefits/BenefitsSection";
import NewsEventSection from "./News/NewsEventSection";
import ServicesSection from "./Services/ServicesSection";

function HomePage() {
    return (
        <div id="back-ground">
            <div id="home-page">
                {/* Section requires updated CSS when relevant image is included in project */}
                <div id="company-vision">
                    <div id="company-intro">
                        <h1>Company Vision</h1>
                        <div id="intro-text">
                            <p>
                                Privacy technology in the context of financial intelligence refers to various techniques
                                and tools used to protect sensitive financial data and maintain the privacy of
                                individuals and organizations involved in financial transactions and activities.
                            </p>
                            <div id="learn-more-button">
                                <Link to="/AboutUs">Learn More</Link>
                            </div>
                        </div>
                        <div id="section-image"></div>
                    </div>
                </div>
                <div id="slideshow">
                    <BenefitsSection />
                    <div id="news">
                        <NewsEventSection />
                    </div>
                    <div id="services">
                        <ServicesSection />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
