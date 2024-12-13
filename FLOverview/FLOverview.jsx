import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './FLOverview.css';
import architectureDiagram from "../Images/Architecture_diagram.jpg";
import applicationDiagram from '../Images/Application_diagram.jpg';
import brandsDiagram from '../Images/Brands_diagram.jpg';
import comparisonTable from '../Images/Comparison_table.jpg';
import pieChart from '../Images/Pie_chart.jpg';
import benefitsDiagram from '../Images/Benefits_diagram.jpg';
import marketGraph from '../Images/Market_graph.jpg';

const FLOverview = () => {
  return (
    <div className="he-overview">
      {/* Page Title Section */}
      <header className="he-header">
        <h1 className="he-title">Federated Learning</h1>
        <p className="he-summary">
          Federated Learning (FL) represents a transformative approach to machine learning, allowing decentralized devices to collaboratively train models without sharing raw data. This page explores what FL is, how it works, and its applications in the financial sector. Discover how FL balances privacy, security, and performance to address modern challenges in data-driven industries.
        </p>
      </header>

      {/* Subtopic Sections */}
      {[
        {
          title: "What is Federated Learning (FL)?",
          content: (
            <>
              <p>
                Federated Learning (FL) is a machine learning approach where decentralized devices train a shared model. This ensures data privacy and security by keeping data on individual devices and sharing only model updates.
              </p>
              <p>
                This approach is especially critical in industries like financial services, where protecting sensitive data is a top priority.
              </p>
            </>
          ),
          image: architectureDiagram,
          alt: "Federated Learning Architecture Diagram",
        },
        {
          title: "How Federated Learning Works",
          content: (
            <>
              <p>
                In Federated Learning, models are trained locally on devices, and only updates are sent to a central server for aggregation. This ensures data remains secure and avoids centralized collection risks.
              </p>
              <h3>Centralized Learning vs Federated Learning</h3>
              <p>
                Centralized Learning aggregates data in a single location for model training, posing privacy risks. Federated Learning overcomes this by keeping data on devices and sharing only updates.
              </p>
            </>
          ),
          image: null,
        },
        {
          title: "Benefits of Federated Learning in Financial Services",
          content: (
            <ul>
              <li>Enhanced Data Privacy: Sensitive data stays on devices, reducing breach risks.</li>
              <li>Regulatory Compliance: Helps meet data privacy laws.</li>
              <li>Improved Model Accuracy: Combines diverse datasets for better performance.</li>
              <li>Bandwidth Efficiency: Only model updates are shared, not the raw data.</li>
              <li>Scalability: Easily scales across devices and institutions.</li>
            </ul>
          ),
          image: benefitsDiagram,
          alt: "Federated Learning Benefits Diagram",
        },
        {
          title: "Market Trends and Adoption of Federated Learning",
          content: (
            <>
              <p>
                Federated Learning is gaining traction across industries, particularly in finance. Companies prioritize FL to address data privacy concerns while achieving compliance with evolving regulations.
              </p>
            </>
          ),
          image: marketGraph,
          alt: "Federated Learning Market Trends Graph",
        },
        {
          title: "Consumer Trust and Data Privacy",
          content: (
            <>
              <p>
                Data privacy is a major concern among consumers. Federated Learning addresses these concerns by ensuring data stays on devices, fostering trust between users and institutions.
              </p>
            </>
          ),
          image: pieChart,
          alt: "Percentage of People Who Care About Data Privacy Pie Graph",
        },
        {
          title: "Companies Adopting Federated Learning",
          content: (
            <>
              <p>
                Leading companies like Google, IBM, and Apple have adopted Federated Learning to enhance privacy and operational efficiency while maintaining personalized user experiences.
              </p>
            </>
          ),
          image: brandsDiagram,
          alt: "Companies Using Federated Learning",
        },
      ].map((section, index) => (
        <section className="he-subtopic" key={index}>
          {section.image ? (
            <div className="subtopic-container">
              <div className="subtopic-left-wrapper">
                <div className="subtopic-left">
                  <h2>{section.title}</h2>
                  {section.content}
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
                  {section.content}
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
          Federated Learning enables secure, decentralized data processing and collaborative model training, addressing privacy concerns in industries like finance. It ensures compliance, enhances trust, and fosters innovation.
        </p>
        <h2>See a demonstration of Federated Learning:</h2>
        <Link to="/FLDemonstration" className="nav-link-demo">
          FL Demo
        </Link>
      </footer>
    </div>
  );
};

export default FLOverview;
