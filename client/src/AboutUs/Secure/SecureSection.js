import React from 'react';
import './SecureSection.css';

const SecureSection = () => {
    return (
        <section className="secure-section">
            <div className="secure-content">
                <h2>Securing Our Communities</h2>
                <p className="secure-description">Eg. We partner with enterprise and government organisations to defend against cyber threats and embrace the opportunities of cloud.</p>
                <p className="secure-text">Be empowered to manage cyber risk, build resilience and grow with confidence in an increasingly complex and challenging threat environment.</p>
                <button className="secure-button">
                    Talk to an Expert
                </button>
            </div>
            <div >
                {/*COMMENTED OUT BECAUSE NO SUCH RESOURCE EXISTS IN IMAGE FOLDER*/}
                {/*<img className='Overview_icon_image1' src={require('../../Images/Overview_icon1.png')} alt="Cyber security illustration" />*/}
            </div>
        </section>
    );
};

export default SecureSection;
