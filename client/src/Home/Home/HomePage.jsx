import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import BenefitsSection from "./Benefits/BenefitsSection";
import SecureSection from "./Secure/SecureSection";
import NewsEventSection from "./News/NewsEventSection";
// import ServicesSection from "./Services/ServicesSection";
import PartnerSection from "./Partners/PartnerSection";
import SubscribeSection from "./Subscribe/SubscribeSection";
import StoriesSection from "./Stories/StoriesSection"

function HomePage() {
    return (
        <div id="back-ground">
            {/* <div id="home-page"> */}
                {/* Updated section structure */}
                <section className="hero">
                    <h1>Company Vision</h1>
                    <p>general mission (gpm)</p>
                    <button>
                        <Link to="/Demonstration">Learn More</Link>
                    </button>
                </section>

                <div id="slideshow">
                <SecureSection />
                <div id="benefits">
                    <BenefitsSection />
                    </div>
                    <div id="news">
                        <NewsEventSection />
                    </div>
                    <div id="partners">
                        <PartnerSection />
                    </div>
                    <div id="subscribe">
                        <SubscribeSection />
                    </div>
                    <div id="stories">
                        <StoriesSection />
                    </div>
                    
                    {/* <div id="services">
                        <ServicesSection />
                    </div> */}
                </div>
            </div>
        // </div>
    );
}

export default HomePage;
