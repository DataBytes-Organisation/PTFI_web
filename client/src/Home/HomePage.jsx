import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';
import BenefitsSection from "./Benefits/BenefitsSection";
import NewsEventSection from "./News/NewsEventSection";
import ServicesSection from "./Services/ServicesSection";



function HomePage() {
    return (
        <div id="home-page">
            {/*section requires to be updated CSS when relevant image is included in project*/}
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
                </div>
                <div id="section-image">

                </div>
            </div>
            <BenefitsSection />
            <div id='news-services'>
                <NewsEventSection/>
                <ServicesSection/>
            </div>

        </div>
    );
import { Link } from 'react-router-dom';
import './HomePage.css';

import HorizontalBenefitsScroller from './HorizontalScrollers/HorizontalScrollers';



function HomePage() {
  return (
    <div>
      <div id="home-page">
        {/*section requires updated CSS when relevant image is included in project*/}
        <div id="section-over-image">
          <div id="company-vision">
            <h1>Company Vision</h1>
          </div>
          <div id="intro-text">
            <p>
              General intro of PTFI Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sapien neque, et rutrum ex bibendum nec. 
              Mauris gravida ullamcorper eros, vel varius magna fermentum aliquam. In ornare nibh eget libero suscipit sodales sed et ante. 
              Vivamus iaculis dignissim magna at eleifend. Curabitur vel lorem sit amet ipsum ullamcorper pretium. Proin interdum purus at odio scelerisque, 
              quis elementum dolor dignissim. Phasellus rhoncus et orci ac rhoncus. Ut tellus enim, ullamcorper sed eleifend in, molestie in nibh. Sed id feugiat odio. 
              Etiam sodales egestas lectus ac egestas. Sed pulvinar nulla eu libero iaculis, quis pulvinar erat porta.
            </p>
          </div>
          <div id="learn-more-button">
            <Link to="/AboutUs">Learn More</Link>
          </div>
        </div>
        <div id="our-services">
          <h2>Our Services</h2>
          <div id="service-boxes">
            <div className="service-box">
              <h3>Service 1</h3>
              <p>Details of service 1 Etiam tincidunt nulla at nisl mollis, a auctor justo posuere. Mauris bibendum arcu auctor fermentum lacinia.</p>
            </div>
            <div className="service-box">
              <h3>Service 2</h3>
              <p>Details of service 2 Etiam tincidunt, erat sed dictum ultricies, diam massa suscipit orci, quis volutpat dolor sem et lectus.</p>
            </div>
            <div className="service-box">
              <h3>Service 3</h3>
              <p>Details of service 3 Suspendisse maximus nibh sit amet ex finibus, at bibendum lectus vulputate</p>
            </div>
          </div>
        </div>
      </div>
      <HorizontalBenefitsScroller />
    </div>
  );
}

export default HomePage;
