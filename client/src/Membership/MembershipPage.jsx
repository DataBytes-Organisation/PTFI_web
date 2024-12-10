import React from 'react';
import { Link } from 'react-router-dom';
import './MembershipPage.css';
import VisionSection from './VisionSection/VisionSection';
import SignUpSection from './SignUpSection/SignUpSection';
import BenefitsSection from './BenefitsSection/BenefitsSection';
import MembershipInfoSection from './MembershipInfoSection/MembershipInfoSection';

function MembershipPage() {
  return (
    <div id="membership-page">
      <div className="vision-wrapper">
        <VisionSection />
      </div>
      <div className="membership-content">
        {/*SignUp Section */}
        <div className="row">
          <SignUpSection />
        </div>

        {/*Benefits Section*/}
        <div className="row reverse">
          <BenefitsSection />
        </div>

        {/*Membership Info Section */}
        <MembershipInfoSection />
      </div>
    </div>
  );
}

export default MembershipPage;
