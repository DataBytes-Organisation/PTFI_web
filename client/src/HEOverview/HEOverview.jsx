import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './HEOverview.css'; // Use the same CSS file as FLOverview
import encryptionDiagram from '../Images/Encryption_diagram.jpg';
import heAdvantagesDiagram from '../Images/HE_Advantages_diagram.jpg';
import marketGraph from '../Images/HE_Market_Graph.jpg';
import applicationsRoadmap from '../Images/HE_Applications_Roadmap.jpg';
import privacyInfographic from '../Images/Privacy_Infographic.jpg';
import companiesDiagram from '../Images/Companies_diagram.jpg';
import attentionGraph from '../Images/HE_FL_Attention_graph.jpg';

function HEOverview() {
  return (
    <div className="container">
      <h2 className="heading">Introduction to Homomorphic Encryption</h2>
      <p className="text">
        Welcome to the Homomorphic Encryption Overview Page. Here, you’ll learn what Homomorphic Encryption (HE) is, how it works, and why it’s essential for the financial sector. Discover how HE protects sensitive data while enabling secure analysis and see why leading companies are adopting this technology to enhance privacy and compliance.
      </p>

      <h2 className="heading">What is Homomorphic Encryption (HE)?</h2>
      <p className="text">
        Homomorphic Encryption (HE) allows computations to be performed on encrypted data without the need to decrypt it first. The results are the same as if the operations were performed on raw data. HE is essential in finance, where privacy and data security are critical, as it enables institutions to securely analyse sensitive data without exposing it.
      </p>

      <h3 className="subheading">How Encryption Works Diagram</h3>
      <img src={encryptionDiagram} alt="How Encryption Works Diagram" className="image" />
      <p className="text">This visual explains how encrypted data flows through the system, remaining secure throughout the process.</p>
      <h2 className="heading">How Homomorphic Encryption Works</h2>
      <p className="text">
        Homomorphic Encryption ensures data remains encrypted throughout the entire process. Here's how it works:
      </p>
      <ul className="list">
        <li>Step 1: Data is encrypted locally (on a device or server).</li>
        <li>Step 2: The encrypted data is sent to a server or cloud for processing.</li>
        <li>Step 3: Operations are performed directly on the encrypted data, without ever decrypting it.</li>
        <li>Step 4: The encrypted result is sent back and decrypted to reveal the outcome.</li>
      </ul>
      <p className="text">
        This workflow guarantees that sensitive data stays private throughout the entire process, making it ideal for finance, where security is paramount.
      </p>

      <h2 className="heading">Benefits of Homomorphic Encryption in Financial Services</h2>
      <p className="text">HE offers several key advantages for financial institutions:</p>
      <ul className="list">
        <li>Enhanced Data Privacy: Sensitive data remains encrypted, minimizing the risk of breaches.</li>
        <li>Regulatory Compliance: Helps meet strict data privacy laws by ensuring data stays protected.</li>
        <li>Secure Outsourcing: Enables financial institutions to securely outsource data processing without sharing raw data.</li>
        <li>Fraud Detection & Risk Management: HE allows secure analysis of financial data to detect fraud and manage risks effectively.</li>
      </ul>
      <h3 className="subheading">HE Advantages Infographic</h3>
      <img src={heAdvantagesDiagram} alt="HE Advantages Infographic" className="image" />
      <p  className="text">This visual highlight key benefits of Homomorphic Encryption, such as improved privacy, compliance with regulations, and enhanced cloud security.</p>

      <h2 className="heading">Market Trends and Adoption of Homomorphic Encryption</h2>
      <p className="text">
        As privacy concerns grow, financial institutions are increasingly adopting HE to ensure secure data processing. The market for HE is rapidly expanding, driven by advancements in encryption technology and the need for compliance with data privacy laws.
      </p>
      <h3 className="subheading">Homomorphic Encryption Market Size Bar Graph</h3>
      <img src={marketGraph} alt="Homomorphic Encryption Market Size Bar Graph" className="image" />
      <p  className="text">This visual shows the projected growth of HE in the financial sector, reflecting its rising significance.</p>
      <h2 className="heading">Real-World Applications of Homomorphic Encryption in Finance</h2>
      <p className="text">
        HE is making a significant impact in the financial sector by enabling secure operations on sensitive data. Here are some key applications:
      </p>
      <ul className="list">
        <li>Credit Card Fraud Detection: Allows financial institutions to analyse transactions for fraud without exposing personal data.</li>
        <li>Secure Data Sharing: HE enables encrypted data to be shared between institutions, ensuring privacy.</li>
        <li>Risk Management: Institutions can securely assess financial risks using encrypted datasets.</li>
      </ul>
      <h3 className="subheading">Applications of HE in Finance Sector Roadmap</h3>
      <img src={applicationsRoadmap} alt="Applications of HE in Finance Sector Roadmap" className="image" />
      <p className="text">This roadmap provides insights into HE’s role in fighting financial crimes and how financial institutions are adopting it.</p>
      <h2 className="heading">Consumer Trust and Data Privacy</h2>
      <p className="text">
        Data privacy is a growing concern among consumers, with most people expecting companies to safeguard their information. HE meets this expectation by processing encrypted data, helping businesses maintain trust while complying with privacy regulations.
      </p>
      <h3 className="subheading">Consumer Concerns About Data Privacy Infographic</h3>
      <img src={privacyInfographic} alt="Consumer Concerns About Data Privacy Infographic" className="image" />
      <p className="text">This graphic highlights the growing importance of data privacy for consumers, reinforcing the need for privacy-preserving technologies like HE.</p>
      <h2 className="heading">Companies Adopting Homomorphic Encryption</h2>
      <p className="text">
        Leading companies such as Microsoft, Google, IBM, and major banks are adopting HE to enhance data security. These organizations use HE to secure sensitive information while complying with regulatory requirements.
      </p>
      <h3 className="subheading">Companies That Use Homomorphic Encryption</h3>
      <img src={companiesDiagram} alt="Companies That Use Homomorphic Encryption" className="image" />
      <p className="text">This visual shows major companies in finance and tech that have implemented HE to protect their data.</p>
      <h2 className="heading">Industry Attention on HE and FL</h2>
      <p className="text">
        The finance sector leads in adopting privacy-preserving technologies like Homomorphic Encryption (HE) and Federated Learning (FL). The attention on these technologies in finance is due to their ability to secure sensitive financial data while ensuring compliance with privacy laws.
      </p>
      <h3 className="subheading">HE and FL Attention Based on Industry</h3>
      <img src={attentionGraph} alt="HE and FL Attention Based on Industry" className="image" />
      <p className="text">This visual demonstrates how finance is leading the adoption of HE and FL compared to other industries.</p>
      <h2 className="heading">Summary</h2>
      <p className="text">
        Homomorphic Encryption (HE) provides financial institutions with a powerful tool to secure data while performing meaningful analysis. As privacy concerns grow and regulatory frameworks become more demanding, HE offers a solution that ensures compliance, privacy, and trust in financial services.
      </p>

      <h2 className="heading">See a demonstration of Homomorphic Encryption:</h2>
      <Link to="/HEDemonstration" className="nav-link-demo">HE Demo</Link>
    </div>
  );
};

export default HEOverview;
