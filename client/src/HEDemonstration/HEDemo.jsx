import React, { useState } from 'react';
import './HEDemo.css';

const HEDemo = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [EncryptedValue1, setEncryptedValue1] = useState(null);
  const [EncryptedValue2, setEncryptedValue2] = useState(null);
  const [sumEncrypted, setSumEncrypted] = useState(null);
  const [decrypted, setDecrypted] = useState(false);
  const [decryptedSum, setDecryptedSum] = useState(null);

  const handleEncrypt = async () => {
    const response1 = await fetch('http://localhost:3003/encrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: num1 }),
    });
    const data1 = await response1.json();

    const response2 = await fetch('http://localhost:3003/encrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: num2 }),
    });
    const data2 = await response2.json();

    setEncryptedValue1(data1.encrypted_value);
    setEncryptedValue2(data2.encrypted_value);
    setSumEncrypted(null);
    setDecryptedSum(null);
  };

  const handleAdd = () => {
    if (EncryptedValue1 !== null && EncryptedValue2 !== null) {
      const sum = EncryptedValue1 + EncryptedValue2;
      setSumEncrypted(sum);
      setDecryptedSum(null); 
    }
  };

  const handleDecrypt = async () => {
    if (sumEncrypted !== null) {
      const response = await fetch('http://localhost:3003/decrypt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ encrypted_value: sumEncrypted }),
      });
      const data = await response.json();
      setDecryptedSum(data.decrypted_value);
    }
  };

  return (
    <div className="he-container">
        <h1>Introduction to Homomorphic Encryption</h1>
        <p>
            Homomorphic encryption is an exciting privacy technology that allows computations to be performed on encrypted data without needing to decrypt it first. 
            This is useful when sensitive data (like financial transactions, or personal information) needs to be processed securely by third-party services. 
            For instance, imagine you want a cloud service to perform calculations on your data but without giving them access to the raw information—homomorphic encryption enables that.
            This is particularly useful in our use case, as financial information can be collated, operated on, and the results interpreted without ever compromising the privacy of the 
            users whose data was processed.
        </p>
        <p>
            With homomorphic encryption, even if someone intercepts your encrypted data, they can't understand it. Yet, authorized parties can perform operations on this 
            encrypted data, and when decrypted, the result will match what would have been obtained if the operation had been done on the original data.
        </p>
        <h1>Demonstrating the concept:</h1>
        <p>
            While true homorphic encryption is a complicated mathematical process, it uses a polynomial function (think back to high school algebra when learning quadratics) in order
            to encrypt the data. Consider the following demonstration, which uses a simplified polynomial in order to demonstrate the concept. You can input any two numbers,
            encrypt them, then add them and decrypt the sum. You can see that performing this operation, we can determine the sum of these two input variables without ever having to 
            deal with their non-encrypted counterparts, thus demonstrating how we can perform operations on encrypted data to obtain meaningful results, all the while retaining
            the privacy of the data holders.
        </p>

      <div className="input-container">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Enter second number"
        />
      </div>
      <button onClick={handleEncrypt} className="action-button">Encrypt</button>
      
      <div className="encrypted-values">
        Encrypted Value 1: {EncryptedValue1 !== null ? EncryptedValue1 : 'N/A'}<br />
        Encrypted Value 2: {EncryptedValue2 !== null ? EncryptedValue2 : 'N/A'}
      </div>

      <button onClick={handleAdd} className="action-button">Add</button>
      
      <div className="sum-container">
        Sum (Encrypted): {sumEncrypted !== null ? sumEncrypted : 'N/A'}<br />
        Sum (Decrypted): {decrypted && decryptedSum !== null ? decryptedSum : 'N/A'}
      </div>
      
      <button
        onClick={() => {
          setDecrypted(!decrypted);
          if (!decrypted) handleDecrypt(); 
        }}
        className="action-button"
      >
        {decrypted ? 'Hide decrypted Result' : 'Decrypt'}
      </button>
    </div>
  );
}

export default HEDemo;
