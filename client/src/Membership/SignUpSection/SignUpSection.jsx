import React from 'react';
import './SignUpSection.css';
import { Link } from 'react-router-dom';

const SignUpSection = () => {
    return (
        <section className="signUp-section">
            <div className="signUp-title">Membership Program</div>
            <div className="signUp-content-container">
                <div className="signUp-image"></div>
                <div className="signUp-content">
                    <h2>Strengthening Connections, Empowering Growth</h2>
                    <p className="signUp-description">
                        Join forces with us to enhance your digital resilience and unlock the potential of secure, cutting-edge technologies.
                    </p>
                    <Link to="/Registration" className="signUp-button">
                        Sign Up Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SignUpSection;
