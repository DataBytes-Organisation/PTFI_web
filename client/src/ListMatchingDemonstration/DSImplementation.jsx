import React, { useState } from "react";
import "./DSImplementation.css";

function DSImplementation() {
  const [suspectFile, setSuspectFile] = useState(null);
  const [customerFile, setCustomerFile] = useState(null);
  const [result, setResult] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [numPeople, setNumPeople] = useState("");
  const [numFraud, setNumFraud] = useState("");
  const [numTransactions, setNumTransactions] = useState("");
  const [downloadLinkPeople, setDownloadLinkPeople] = useState("");
  const [downloadLinkFraud, setDownloadLinkFraud] = useState("");
  const [downloadLinkTransactions, setDownloadLinkTransactions] = useState("");

  const handleFileDrop = (event, setFile) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleMatch = async () => {
    try {
      if (!selectedValue) {
        alert("Please select a matching type");
        return;
      }

      if (!suspectFile || !customerFile) {
        throw new Error("Files required to perform matching");
      }

      let endpoint = "";
      switch (selectedValue) {
        case "Plain Text Match":
          endpoint = "http://localhost:3003/findMatchesPlain";
          break;
        case "Hashed Match":
          endpoint = "http://localhost:3003/findMatchesHashed";
          break;
        case "Homomorphic Match":
          endpoint = "http://localhost:3003/findMatchesHomomorphic";
          break;
        default:
          throw new Error("Invalid matching type");
      }

      const formData = new FormData();
      formData.append("suspect_file", suspectFile);
      formData.append("customer_file", customerFile);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred during matching.");
    }
  };

  const handleGenerateData = async (type, number, setLink) => {
    const endpointMap = {
      person: "http://localhost:3003/generatePersonData",
      fraud: "http://localhost:3003/generateFraudData",
      transaction: "http://localhost:3003/generateTransactionsData",
    };

    try {
      const response = await fetch(endpointMap[type], {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number_input: parseInt(number) }),
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      setLink(url);
    } catch (error) {
      console.error("Error generating data:", error);
      alert("Failed to generate data. Please try again.");
    }
  };

  return (
    <div className="suspect-matching-list">
      <h1>Suspect Matching List</h1>
      <p className="description">Description of this page.</p>

      <div className="match-types">
        {["Plain Text Match", "Hashed Match", "Homomorphic Match"].map((type) => (
          <label key={type}>
            <input
              type="radio"
              name="matchType"
              value={type}
              checked={selectedValue === type}
              onChange={(e) => setSelectedValue(e.target.value)}
            />
            {type}
            <span className="tooltip">
              ⭐
              <span className="tooltiptext">
                {/* Customize each tooltip description here */}
                {type === "Plain Text Match" && "Standard matching of plain text files"}
                {type === "Hashed Match" && "Matching using hashed values for security"}
                {type === "Homomorphic Match" && "Advanced matching using homomorphic encryption"}
              </span>
            </span>
          </label>
        ))}
      </div>

      <div className="file-upload-section">
        <div className="file-upload-box">
          <DragDropBox
            label="CUSTOMER List"
            file={customerFile}
            onDrop={(e) => handleFileDrop(e, setCustomerFile)}
            onDragOver={handleDragOver}
          />
        </div>

        <div className="file-upload-box">
          <DragDropBox
            label="SUSPECT List"
            file={suspectFile}
            onDrop={(e) => handleFileDrop(e, setSuspectFile)}
            onDragOver={handleDragOver}
          />
        </div>
      </div>

      <div className="match-button-container">
        <button onClick={handleMatch} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <svg width="100" height="100" viewBox="0 0 200 200">
            <polygon className="triangle" points="100,0 0,200 200,200" transform="rotate(180 100 100)" />transform="rotate(180 100 100)"
            <text x="50%" y="80" dominantBaseline="middle" textAnchor="middle" fontSize="30" fill="black">Match</text>
          </svg>
        </button>
      </div>


      <div className="result-section">
        <h2>Result:</h2>
        <div className="result-box">{result}</div>
      </div>

      <button className="save-button">Save</button>

      <h2>Generate CSV Data
        <span className="tooltip">
          ⭐
          <span className="tooltiptext">
            Generate synthetic data for testing or demo purposes.
          </span>
        </span>
      </h2>

      <div className="generate-data-section">
        <DataGenerator
          label="People"
          value={numPeople}
          onChange={setNumPeople}
          onGenerate={() => handleGenerateData("person", numPeople, setDownloadLinkPeople)}
          downloadLink={downloadLinkPeople}
        />
        <DataGenerator
          label="Frauds"
          value={numFraud}
          onChange={setNumFraud}
          onGenerate={() => handleGenerateData("fraud", numFraud, setDownloadLinkFraud)}
          downloadLink={downloadLinkFraud}
        />
        <DataGenerator
          label="transactions"
          value={numTransactions}
          onChange={setNumTransactions}
          onGenerate={() => handleGenerateData("transaction", numTransactions, setDownloadLinkTransactions)}
          downloadLink={downloadLinkTransactions}
        />
      </div>
    </div>
  );
}

function DragDropBox({ label, file, onDrop, onDragOver }) {
  return (
    <div className="drag-drop-box" onDrop={onDrop} onDragOver={onDragOver}>
      <p>Drag and drop a csv file for the {label} Or</p>
      <button className="choose-file-btn">Choose File</button>
      {file && <div>{file.name}</div>}
    </div>
  );
}

function DataGenerator({ label, value, onChange, onGenerate, downloadLink }) {
  return (
    <div className="data-input">
      <label>Enter the amount of {label} to generate:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onGenerate}>Generate</button>
      {downloadLink && (
        <a href={downloadLink} download={`${label.toLowerCase()}.csv`}>
          Download CSV
        </a>
      )}
    </div>
  );
}

export default DSImplementation;