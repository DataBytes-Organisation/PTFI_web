import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './HEOverview.css';
import encryptionDiagram from '../Images/Encryption_diagram.jpg';
import heAdvantagesDiagram from '../Images/HE_Advantages_diagram.jpg';
import marketGraph from '../Images/HE_Market_Graph.jpg';
import applicationsRoadmap from '../Images/HE_Applications_Roadmap.jpg';
import privacyInfographic from '../Images/Privacy_Infographic.jpg';
import companiesDiagram from '../Images/Companies_diagram.jpg';
import attentionGraph from '../Images/HE_FL_Attention_graph.jpg';

const HEOverview = () => {
  return (
    <div className="he-overview">
      {/* Page Title Section */}
      <header className="he-header">
        <h1 className="he-title">Homomorphic Encryption</h1>
        <p className="he-summary">
        Welcome to the Homomorphic Encryption Overview Page. Here, you’ll learn what Homomorphic Encryption (HE)
is, how it works, and why it’s essential for the financial sector. Discover how HE protects sensitive data while
enabling secure analysis and see why leading companies are adopting this technology to enhance privacy and
compliance.
        </p>
      </header>

      {/* Subtopic Sections */}
      {[
        {
          title: "What is Homomorphic Encryption?",
          content: "Homomorphic Encryption (HE) allows computations to be performed on encrypted data without the need to decrypt it first. The results are the same as if the operations were performed on raw data. HE is essential in finance, where privacy and data security are critical.",
          image: encryptionDiagram,
          alt: "How Encryption Works Diagram",
        },
        {
          title: "How Homomorphic Encryption Works",
          content: (
            <>
              <p>
                Homomorphic Encryption ensures data remains encrypted throughout the entire process. Here's how it works:
              </p>
              <ul>
                <li>Step 1: Data is encrypted locally (on a device or server).</li>
                <li>Step 2: The encrypted data is sent to a server or cloud for processing.</li>
                <li>Step 3: Operations are performed directly on the encrypted data, without ever decrypting it.</li>
                <li>Step 4: The encrypted result is sent back and decrypted to reveal the outcome.</li>
              </ul>
              <p>
                This workflow guarantees that sensitive data stays private throughout the entire process, making it ideal for finance, where security is paramount.
              </p>
            </>
          ),
          image: null, // No image for this section
        },
        {
          title: "Benefits of Homomorphic Encryption",
          content: (
            <ul>
              <li>Enhanced Data Privacy: Sensitive data remains encrypted, minimizing the risk of breaches.</li>
              <li>Regulatory Compliance: Helps meet strict data privacy laws by ensuring data stays protected.</li>
              <li>Secure Outsourcing: Enables financial institutions to securely outsource data processing without sharing raw data.</li>
              <li>Fraud Detection & Risk Management: HE allows secure analysis of financial data to detect fraud and manage risks effectively.</li>
            </ul>
          ),
          image: heAdvantagesDiagram,
          alt: "HE Advantages Infographic",
        },
        {
          title: "Market Trends and Adoption",
          content: "As privacy concerns grow, financial institutions are increasingly adopting HE to ensure secure data processing. The market for HE is rapidly expanding, driven by advancements in encryption technology and compliance needs.",
          image: marketGraph,
          alt: "Homomorphic Encryption Market Size"
        },
        {
          title: "Applications of Homomorphic Encryption",
          content: (
            <ul>
              <li>Credit Card Fraud Detection: Allows financial institutions to analyse transactions for fraud without exposing personal data.</li>
              <li>Secure Data Sharing: HE enables encrypted data to be shared between institutions, ensuring privacy.</li>
              <li>Risk Management: Institutions can securely assess financial risks using encrypted datasets.</li>
            </ul>
          ),
          image: applicationsRoadmap,
          alt: "Applications of HE in Finance"
        },
        {
          title: "Consumer Trust and Data Privacy",
          content: "Data privacy is a growing concern among consumers, with most people expecting companies to safeguard their information. HE meets this expectation by processing encrypted data, helping businesses maintain trust while complying with privacy regulations.",
          image: privacyInfographic,
          alt: "Consumer Concerns About Data Privacy Infographic"
        },
        {
          title: "Companies Adopting Homomorphic Encryption",
          content: "Leading companies such as Microsoft, Google, IBM, and major banks are adopting HE to enhance data security. These organizations use HE to secure sensitive information while complying with regulatory requirements.",
          image: companiesDiagram,
          alt: "Companies That Use Homomorphic Encryption"
        },
        {
          title: "Industry Attention on HE and FL",
          content: "The finance sector leads in adopting privacy-preserving technologies like Homomorphic Encryption (HE) and Federated Learning (FL). The attention on these technologies in finance is due to their ability to secure sensitive financial data while ensuring compliance with privacy laws.",
          image: attentionGraph,
          alt: "HE and FL Attention Based on Industry"
        }
      ].map((section, index) => (
        <section className="he-subtopic" key={index}>
          {section.image ? (
            <div className="subtopic-container">
              <div className="subtopic-left-wrapper">
                <div className="subtopic-left">
                  <h2>{section.title}</h2>
                  {typeof section.content === "string" ? (
                    <p>{section.content}</p>
                  ) : (
                    section.content
                  )}
                </div>
              </div>
              <div className="subtopic-right">
                <img src={section.image} alt={section.alt} className="subtopic-image" />
              </div>
            </div>
          ) : (
            <div className="subtopic-full-width">
              <div className="subtopic-left-wrapper">
                <div className="subtopic-left">
                  <h2>{section.title}</h2>
                  {typeof section.content === "string" ? (
                    <p>{section.content}</p>
                  ) : (
                    section.content
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* Final Section */}
      <footer className="he-footer">
        <h2>Summary</h2>
        <p>
          Homomorphic Encryption (HE) provides financial institutions with a powerful tool to secure data while performing meaningful analysis. As privacy concerns grow and regulatory frameworks become more demanding, HE offers a solution that ensures compliance, privacy, and trust in financial services.
        </p>
        <h2>See a demonstration of Homomorphic Encryption:</h2>
        <Link to="/HEDemonstration" className="nav-link-demo">HE Demo</Link>
      </footer>
    </div>
  );
};

export default HEOverview;