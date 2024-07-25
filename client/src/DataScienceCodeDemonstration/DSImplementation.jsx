import React, { useState } from 'react';
import "./DSImplementation.css";

function DSImplementaion() {
  //states for files and results
  const [suspectFile, setSuspectFile] = useState(null);
  const [customerFile, setCustomerFile] = useState(null);
  const [result, setResult] = useState('');

  //handler function for match button
  const handleMatch = async () => {
    try {
      if (!selectedValue) {
        alert('Please select a matching type');
      }
  
      if (!suspectFile || !customerFile) {
        throw new Error('Files required to perform matching');
      }
  
      let endpoint = '';
      switch (selectedValue) {
        case 'plain':
          endpoint = 'http://localhost:3003/findMatchesPlain';
          break;
        case 'hashed':
          endpoint = 'http://localhost:3003/findMatchesHashed';
          break;
        case 'homomorphic':
          endpoint = 'http://localhost:3003/findMatchesHomomorphic';
          break;
        default:
          throw new Error('Invalid matching type');
      }
      //create a FormData object and append files
      const formData = new FormData();
      formData.append('suspect_file', suspectFile);
      formData.append('customer_file', customerFile);

      //send a POST request to the endpoint dictated by switch and radio menu
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData
      });

      //parse the response as JSON
      const data = await response.json();

      //update state (result) with the returned data
      setResult(JSON.stringify(data, null, 2));
    } 
    catch (error) {
      console.error('Error:', error);
    }
  };

  //handler function for dropping file in suspect box
  const handleSuspectListDrop = (droppedFileEvent) => {
    droppedFileEvent.preventDefault();
    const file = droppedFileEvent.dataTransfer.files[0];
    setSuspectFile(file);
  };

  //handler function for dropping file in customer box
  const handleCustomerListDrop = (droppedFileEvent) => {
    droppedFileEvent.preventDefault();
    const file = droppedFileEvent.dataTransfer.files[0];
    setCustomerFile(file);
  };

  //allow drag/drop by preventing locking on hover
  const handleDragOver = (hoverEvent) => {
    hoverEvent.preventDefault();
  };


  //STATES AND HANDLERS RESPONSIBLE FOR GENERATE DATA FUNCTIONALITY
  const [numPeople, setNumPeople] = useState('');
  const [numFraud, setNumFraud] = useState('');
  const [numTransactions, setNumTransactions] = useState('');
  const [downloadLinkPeople, setDownloadLinkPeople] = useState('');
  const [downloadLinkFraud, setDownloadLinkFraud] = useState('');
  const [downloadLinkTransactions, setDownloadLinkTransactions] = useState('');

  const handleNumPeopleChange = (event) => {
    setNumPeople(event.target.value);
  };
  
  const handleNumFraudChange = (event) => {
    setNumFraud(event.target.value);
  };
  
  const handleNumTransactionsChange = (event) => {
    setNumTransactions(event.target.value);
  };

  

const handleGeneratePersonData = async () => {
  const response = await fetch('http://localhost:3003/generatePersonData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ number_input: parseInt(numPeople) })
  });

  const blob = await response.blob();
  const url = window.URL.createObjectURL(new Blob([blob]));
  setDownloadLinkPeople(url);
};

const handleGenerateFraudData = async () => {
  const response = await fetch('http://localhost:3003/generateFraudData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ number_input: parseInt(numFraud) })
  });

  const blob = await response.blob();
  const url = window.URL.createObjectURL(new Blob([blob]));
  setDownloadLinkFraud(url);
};

const handleGenerateTransactionsData = async () => {
  const response = await fetch('http://localhost:3003/generateTransactionsData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ number_input: parseInt(numTransactions) })
  });

  const blob = await response.blob();
  const url = window.URL.createObjectURL(new Blob([blob]));
  setDownloadLinkTransactions(url);
};


  const [selectedValue, setSelectedValue] = useState(null);

  const handleOnChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="AllSections">
      <div className="Matches">
        <h1>Suspect Matching List</h1>
        
        <div className="radio-menu">
          <input
          type="radio"
          id="plain"
          name="matchType"
          value="plain"
          checked={selectedValue === 'plain'}
          onChange={handleOnChange}
          />
          <label htmlFor="plain">Plain text match</label><br />
          <input
            type="radio"
            id="hashed"
            name="matchType"
            value="hashed"
            checked={selectedValue === 'hashed'}
            onChange={handleOnChange}
          />
          <label htmlFor="hashed">Hashed match</label><br />
          <input
            type="radio"
            id="homomorphic"
            name="matchType"
            value="homomorphic"
            checked={selectedValue === 'homomorphic'}
            onChange={handleOnChange}
          />
          <label htmlFor="homomorphic">Homomorphic match</label><br />
        </div>
        
        <div className="container">
          <div className="drag-drop-box" onDrop={handleSuspectListDrop} onDragOver={handleDragOver}>
            <p>Drag and drop a CSV file for Suspect List</p>
            {suspectFile && <div>{suspectFile.name}</div>}
          </div>
          <button className="match-button" onClick={handleMatch}>MATCH</button>
          <div className="drag-drop-box" onDrop={handleCustomerListDrop} onDragOver={handleDragOver}>
            <p>Drag and drop a CSV file for Customer List</p>
            {customerFile && <div>{customerFile.name}</div>}
          </div>
          <textarea className="info-textarea" defaultValue="ADD RELEVANT INFO HERE" />
        </div>
        <div className="result-box">
          <h2>Result:</h2>
          <div className="result-content">{result}</div>
        </div>
      </div>
      <div className='generator-section'>
        <h2>GNERATE CSV DATA:</h2>
        <input
          type="number"
          value={numPeople}
          onChange={handleNumPeopleChange}
          placeholder="# people generated"
        />
        <button onClick={handleGeneratePersonData}>Generate Person Data</button>
          {downloadLinkPeople && (
            <a href={downloadLinkPeople} download="people.csv">
              Download CSV
            </a>
          )}
        <br/>

        <input
          type="number"
          value={numFraud}
          onChange={handleNumFraudChange}
          placeholder="# frauds genereated"
        />
        <button onClick={handleGenerateFraudData}>Generate Fraud Data</button>
        {downloadLinkFraud && (
          <a href={downloadLinkFraud} download="fraud.csv">
            Download Fraud CSV
          </a>
        )}
        <br/>

        <input
          type="number"
          value={numTransactions}
          onChange={handleNumTransactionsChange}
          placeholder="# transactions generated"
        />
        <button onClick={handleGenerateTransactionsData}>Generate Transactions Data</button>
        {downloadLinkTransactions && (
          <a href={downloadLinkTransactions} download="transactions.csv">
            Download Transactions CSV
          </a>
        )}
      </div>
    </div>
  );
}

export default DSImplementaion;