import React, { useState } from 'react';
import './FLDemo.css';

const FLDemo = () => {
  const [numRecords, setNumRecords] = useState("");
  const [fraudPercentage, setFraudPercentage] = useState("");
  const [numClients, setNumClients] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
      e.preventDefault();

      const data = {
          num_records: parseInt(numRecords),
          fraud_percentage: parseFloat(fraudPercentage) / 100,
          num_clients: parseInt(numClients),
      };

      const response = await fetch("http://localhost:3003/run_fl", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });

      const resultData = await response.json();
      setResult(resultData);
  };

  return (
      <div id="container">
          <div className="fl-container">
              <h1>Demo of Federated Learning</h1>
              <p>
                  The following visualization may help you understand better how this compares to a traditional machine learning model, in which data must be shared, along with
                  the accompanying demonstration, which will allow you to compare the effectivness of FL compared to a standard model
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
          </div>
          <br></br>
          <form onSubmit={handleSubmit}>
              <div>
                  <label>Number of Records:</label>
                  <input
                      type="number"
                      value={numRecords}
                      onChange={(e) => setNumRecords(e.target.value)}
                  />
              </div>
              <div>
                  <label>Fraud Percentage:</label>
                  <input
                      max={0.1}
                      type="number"
                      step="0.01"
                      value={fraudPercentage}
                      onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          if (value <= 0.1) {
                              setFraudPercentage(e.target.value);
                          }
                      }}
                  />
              </div>
              <div>
                  <label>Number of Clients:</label>
                  <input
                      type="number"
                      value={numClients}
                      onChange={(e) => setNumClients(e.target.value)}
                      min="3"
                      max="10"
                  />
              </div>
              <button type="submit">Run Federated Learning</button>
          </form>

          {result && (
              <div>
                  <h3>Federated Learning Results:</h3>
                  <p>Federated Model Accuracy: {result.federated_accuracy}</p>
                  <p>Centralized Model Accuracy: {result.centralized_accuracy}</p>
              </div>
          )}
      </div>
  );
};

export default FLDemo;
