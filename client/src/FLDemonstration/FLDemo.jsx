import React from 'react';
import './FLDemo.css';

const FLDemo = () => {
  return (
    <div className="fl-container">
      <h1>Demo of Federated Learning</h1>
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
