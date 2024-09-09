import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUsPage.css';
import BenefitsSection from "./Benefits/BenefitsSection";
import SecureSection from "./Secure/SecureSection";
import InsightsSection from "./Insights/InsightsSection";
import PartnerSection from "./Partners/PartnerSection";
import SubscribeSection from "./Subscribe/SubscribeSection";
import StoriesSection from "./Stories/StoriesSection"

function AboutUsPage() {
    return (
        <div id="aboutus-background">
            <section className="hero">
                <h1>Company Vision</h1>
                <p>general mission (gpm)</p>
                <button>
                    <Link to="/Demonstration">Learn More</Link>
                </button>
            </section>

            <div id="aboutus-slideshow">
                <SecureSection />
                <div id="aboutus-benefits">
                    <BenefitsSection />
                </div>
                <div id="aboutus-insights">
                    <InsightsSection />
                </div>
                <div id="aboutus-partners">
                    <PartnerSection />
                </div>
                <div id="aboutus-subscribe">
                    <SubscribeSection />
                </div>
                <div id="stories">
                    <StoriesSection />
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;
