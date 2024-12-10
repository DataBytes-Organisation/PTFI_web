import React from 'react';
import './MembershipInfoSection.css';

const MembershipInfoSection = () => {
  return (
    <section className="membership-info-section">
      <div className="membership-info-box">
        <div className="membership-info-row">
          <div className="membership-info-placeholder"></div>
          <p className="body-text">Priority Access</p>
        </div>
        <p className="membership-info-text">
          Gain early access to exclusive tools, events, and resources to stay ahead in your industry.
        </p>
      </div>

      <div className="membership-info-box">
        <div className="membership-info-row">
          <div className="membership-info-placeholder"></div>
          <p className="body-text">Expert Support</p>
        </div>
        <p className="membership-info-text">
          Receive personalized assistance from our team of professionals, ready to help you succeed.
        </p>
      </div>

      <div className="membership-info-box">
        <div className="membership-info-row">
          <div className="membership-info-placeholder"></div>
          <p className="body-text">Member-Only Benefits</p>
        </div>
        <p className="membership-info-text">
          Enjoy special discounts, insights, and opportunities reserved for our valued members.
        </p>
      </div>
    </section>
  );
};

export default MembershipInfoSection;
