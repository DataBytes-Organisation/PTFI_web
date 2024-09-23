import React from 'react';
import './SMPCOverview.css'; 
import smpcProcessFlowDiagram from '../Images/SMPC_Process_Flow.jpg'; 
import smpcProcessDiagram from '../Images/SMPC_Process.jpg'; 
import smpcBenefitsInfographic from '../Images/SMPC_Benefits_Infographic.jpg'; 
import smpcMarketTrendsGraph from '../Images/SMPC_Market_Trends.jpg'; 
import smpcUseCases from '../Images/SMPC_Use_Cases.jpg'; 
import smpcBrandsDiagram from '../Images/SMPC_Brands.jpg';

function SMPCOverview() {
  return (
    <div className="container">
        <h2 className="heading">Introduction to Secure Multi-Party Computation</h2>
        <p className="text">
            This page explains what Secure Multi-Party Computation (SMPC) is, how it protects sensitive information, and why it’s important for financial services. 
            You’ll learn about its key benefits, real-world applications, and how leading companies are using it to ensure privacy while enabling secure collaboration.
        </p>

        <h2 className="heading">What is Secure Multi-Party Computation (SMPC)?</h2>
        <p className="text">
        Definition: Secure Multi-Party Computation (SMPC) is a cryptographic technique that allows multiple parties to compute a function over their inputs while keeping those inputs private. This means that the parties involved in the computation can get the result without revealing their individual data to each other.
        In financial services, SMPC allows institutions to collaborate on data analysis without sharing sensitive information.
        </p>

        <h3 className="subheading">SMPC Process Flow</h3>
        <img src={smpcProcessFlowDiagram} alt="SMPC Process Flow Diagram" className="image" />

        <h3 className="subheading">How Secure Multi-Party Computation Works</h3>
        <p className="text">
            SMPC allows different parties to jointly compute a function while keeping their inputs private. Here’s how it works:
        </p>
        <ul className="list">
            <li>Step 1: Each party inputs its private data into the computation.</li>
            <li>Step 2: The computation is split into smaller steps, with each party only computing its own part.</li>
            <li>Step 3: The intermediate results are exchanged in an encrypted form.</li>
            <li>Step 4: The result is obtained without any party ever seeing the other parties' private data.</li>
        </ul>
        <p className="text">
            This ensures that each party can contribute to the computation without compromising the privacy of their data, making SMPC a valuable tool in finance. 
        </p>
        <h3 className="subheading">SMPC Process Diagram</h3>
        <img src={smpcProcessDiagram} alt="SMPC Process Diagram" className="image" />
        <h2 className="heading">Benefits of Secure Multi-Party Computation in Financial Services</h2>
        <p className="text">
            SMPC offers several key advantages for financial institutions:
        </p>
        <ul className="list">
            <li>Data Privacy: Ensures that sensitive financial data remains private throughout the computation process.</li>
            <li>Collaboration Without Data Sharing: Institutions can collaborate securely on tasks like fraud detection.</li>
            <li>Regulatory Compliance: SMPC helps meet privacy regulations like GDPR and CCPA.</li>
            <li>Improved Security: Reduces the risk of data breaches since the data remains encrypted and private during computations.</li>
            <li>Increased Trust: Facilitates secure collaboration between different organizations, increasing trust while preserving confidentiality.</li>
        </ul>
        <h3 className="subheading">SMPC Benefits and Downsides Infographic</h3>
        <img src={smpcBenefitsInfographic} alt="SMPC Benefits Infographic" className="image" />

        <h2 className="heading">Market Trends and Adoption of Secure Multi-Party Computation</h2>
        <p className="text">
            As data privacy regulations grow stricter, financial institutions are adopting SMPC to ensure compliance while collaborating securely. 
            SMPC is gaining traction in industries where multiple entities need to compute data without revealing sensitive information.
        </p>
        <p className="text">
            Rising Demand: More financial institutions are exploring SMPC for secure collaborations.
        </p>
        <p className="text">
            Regulatory Compliance: Institutions are driven by the need to comply with privacy regulations like GDPR and CCPA.
        </p>
        <h3 className="subheading">SMPC Market Size Trends</h3>
        <img src={smpcMarketTrendsGraph} alt="SMPC Market Trends Graph" className="image" />

        <h2 className="heading">How to Implement Secure Multi-Party Computation</h2>
        <p className="text">
            Implementing SMPC in financial services involves the following steps:
        </p>
        <ul className="list">
            <li>Define the Data and Function: Identify the sensitive data to be computed and the function to be performed.</li>
            <li>Distribute the Computation: Split the task so each party only sees its own data.</li>
            <li>Encrypt Intermediate Results: Ensure that intermediate results are encrypted and shared securely between parties.</li>
            <li>Finalize the Computation: Compute the result without exposing individual data inputs.</li>
        </ul>

        <h2 className="heading">Real-World Applications of Secure Multi-Party Computation in Finance</h2>
        <p className="text">
            SMPC is particularly useful in financial services for scenarios where multiple institutions need to work together without exposing sensitive data. Some key applications include:
        </p>
        <ul className="list">
            <li>Fraud Detection: Enables banks to jointly detect fraud patterns without sharing customer data.</li>
            <li>Joint Risk Analysis: Allows financial institutions to assess risks across different datasets without revealing proprietary data.</li>
            <li>Collaborative Credit Scoring: Multiple banks can jointly compute credit scores while keeping individual data private.</li>
            <li>Anti-Money Laundering (AML): Institutions can collaborate on detecting suspicious transactions without sharing raw data.</li>
        </ul>
        <h3 className="subheading">SMPC Use Cases</h3>
        <img src={smpcUseCases} alt="SMPC Use Cases" className="image" />

        <h2 className="heading">Consumer Trust and Data Privacy</h2>
        <p className="text">
        SMPC helps financial institutions maintain consumer trust by ensuring that their data remains private, even when collaborating with other organizations. 

        This is critical in today’s landscape, where consumers expect their data to be handled with the highest level of security.

        </p>

        <h2 className="heading">Companies Adopting Secure Multi-Party Computation</h2>
        <p className="text">
        Several leading financial institutions and technology companies are adopting SMPC to enhance data privacy while enabling secure collaboration. 

        Companies such as JP Morgan, IBM, and Visa are using SMPC to protect sensitive data while performing joint computations with other institutions.

        </p>
        <h3 className="subheading">Brands who use SMPC</h3>
        <img src={smpcBrandsDiagram} alt="Brands using SMPC" className="image" />

        <h2 className="heading">Summary</h2>
        <p className="text">
            Secure Multi-Party Computation (SMPC) provides a robust solution for financial institutions that need to collaborate on data-driven tasks without compromising privacy. As data privacy regulations become more stringent, SMPC allows organizations to comply with regulations while preserving data security, making it an essential technology in the financial sector.
        </p>
    </div>
  );
}

export default SMPCOverview;
