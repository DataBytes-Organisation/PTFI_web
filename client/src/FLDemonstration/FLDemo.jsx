import React from 'react';
import './FLDemo.css';

const FLDemo = () => {
  return (
    <div className="fl-container">
        <h1>Introduction to Federated Learning</h1>
        <p>
            Federated learning is an innovative privacy technology that enables training machine learning models across decentralized devices or servers without the need to share the
            actual data. Instead of sending data to a central server, federated learning allows multiple parties to collaboratively train a model while keeping their data locally. 
            For example, imagine several hospitals want to train a model to detect diseases from patient records. With federated learning, each hospital can train the model on its 
            local data, and only the model updates (not the data itself) are shared with a central server. This approach ensures that sensitive patient data remains private and 
            secure, while still allowing the model to learn from a diverse dataset.
        </p>
        <p>
            Federated learning protects privacy by ensuring that raw data never leaves its original location. Even if someone intercepts the model updates being sent, they cannot 
            access the actual data from which those updates were derived. As a result, federated learning enables powerful machine learning models to be developed while maintaining
            strong data privacy.
        </p>
        <p> 
            This would then allow financial institutions to train a model across their entire data catalogues in order to detect fraudulent transactions without ever having to
            transmit or disclose any sensitive client information.
        </p>
        <p> 
            The following visualization may help you understand better how this compares to a traditional machine learning model, in which data must be shared:
        </p>
        <div className="video-container">
            <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/811GTSkbPTA?autoplay=1&loop=1&playlist=811GTSkbPTA&mute=1"
            title="Federated Learning Video"
            allow="autoplay; picture-in-picture"
            ></iframe>
        </div>

        <div className='fl-demonstration-container'>
            <p>PLACEHOLDER: STILL REFINING INTERACTIVE DEMONSTRATION</p>
        </div>
    </div>
  );
};

export default FLDemo;
