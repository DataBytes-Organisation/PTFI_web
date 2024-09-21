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

function FLOverview() {
  return (
    <div className="container">
      <h2 className="heading">Introduction to the Federated Learning Overview Page</h2>
      <p className="text">
      This page provides an easy-to-understand overview of Federated Learning (FL) and its growing importance in financial services. We'll explore how FL works, its benefits, and why companies are increasingly adopting it to protect data privacy while improving model accuracy. You'll also find examples of how FL is used in areas like fraud detection, personalized services, and more.
      </p>

      <h2 className="heading">What is Federated Learning (FL)?</h2>
      <p className="text">
      Federated Learning (FL) is a machine learning approach where decentralized devices train a shared model. This means that devices keep their data private and secure, without sharing it directly. Instead, they send only updates to improve the model’s performance. This is especially useful in financial services, where data privacy is a top priority.
      </p>
      <p className="text">This is especially helpful in areas like financial services, where protecting sensitive data is important.</p>

      <h3 className="subheading">FL Architecture Diagram</h3>
      <img src={architectureDiagram} alt="Federated Learning Architecture Diagram" className="image" />

      <h3 className="subheading">Explanation of the FL Architecture Diagram</h3>
      <ul className="list">
        <li>
          Each Local FL Model (shown below the global model) represents models that are trained on 
          decentralized devices or servers, like phones or local servers.
        </li>
        <li>
          These local models train using data that stays on the device, and only the model updates 
          (not the data itself) are sent back to the Aggregation point.
        </li>
        <li>
          The Aggregation process combines these updates from all local models to improve the Global 
          Model, without ever exposing the actual data.
        </li>
      </ul>
      <p className="text">
        This approach helps protect sensitive data, as only model updates are shared—not the raw 
        data itself.
      </p>

      <h2 className="heading">How Federated Learning Works</h2>
      <p className="text">
        In Federated Learning (FL), models are trained locally on devices, and only updates are sent to a central server for aggregation. This process protects data by ensuring it remains on each device. This contrasts with Centralized Learning, where all data is collected in one place, posing privacy risks
      </p>

      <h3 className="subheading">Centralized Learning vs Federated Learning</h3>
      <p className="text">
        In contrast to Federated Learning, Centralized Learning relies on collecting all data into one central location, where the model is trained. While this traditional method works, it poses privacy risks and depends on transferring large amounts of data to a central server. 
      </p>

      <h3 className="subheading">FL vs Centralized Table</h3>
      <img src={comparisonTable} alt="Comparison table" className="image" />

      <h2 className="heading">Benefits of Federated Learning in Financial Services</h2>
      <p className="text">Federated Learning offers several key benefits in financial services, including:</p>
      <ul className="list">
        <li>Enhanced User Data Privacy: Sensitive data stays on devices, reducing breach risks.</li>
        <li>Regulatory Compliance: Helps meet data privacy laws.</li>
        <li>Improved Model Accuracy: Combines diverse datasets for better models.</li>
        <li>Bandwidth Efficiency: Only model updates are shared, not data.</li>
        <li>Scalability: Easily scales across many devices and institutions.</li>
      </ul>
      <h3 className="subheading">5 Main Benefits of Federated Learning</h3>
      <img src={benefitsDiagram} alt="Federated Learning benefits" className="image" />

      <h2 className="heading">Market Trends and Adoption of Federated Learning</h2>
      <p className="text">
        FL is becoming more popular in many industries, especially in finance. The global FL market is growing as more companies focus on data privacy and meeting legal requirements.
      </p>
      <h3 className="subheading">Global Federated Learning Market Graph</h3>
      <img src={marketGraph} alt="Market graph" className="image" />

      <h2 className="heading">Real-World Applications of Federated Learning in Finance</h2>
      <p className="text">
        Federated Learning (FL) is especially important in finance. It allows institutions to work together on sensitive data, like fraud detection and credit risk, without exposing that data. FL also improves model accuracy by leveraging data across different institutions.
      </p>
      <h3 className="subheading">15 best Applications of Federated Learning Infographic</h3>
      <img src={applicationDiagram} alt="Federated Learning Application Diagram" className="image" />

      <h3 className="subheading">Some of the most relevant applications of FL in the financial sector include:</h3>
      <ul className="list">
        <li>
          Fraud prevention: Collaboratively detecting fraud across institutions without sharing raw 
          data.
        </li>
        <li>
          Customized financial services: Tailoring user experiences in banking apps by leveraging 
          decentralized data.
        </li>
        <li>
          Data-driven insights: Gaining better insights for risk assessment and financial planning.
        </li>
      </ul>

      <h2 className="heading">Consumer Trust and Data Privacy</h2>
      <p className="text">
      Data privacy remains a significant concern for consumers, as shown in a recent study where 41% of respondents reported being "somewhat concerned" and 27% were "very concerned" about data privacy. Only a small percentage felt unconcerned about their privacy. This demonstrates a clear need for technologies that protect consumer data while maintaining trust in digital services.
      </p>
      <h3 className="subheading">Percentage of People Who Care About Data Privacy Pie Graph</h3>
      <img src={pieChart} alt="Federated Learning Pie Chart" className="image" />
      <p className="text">
        Federated Learning (FL) directly addresses these concerns by ensuring that sensitive data stays on local devices and is not shared, fostering a higher level of trust among users and financial institutions alike. This makes FL a powerful tool for enhancing consumer confidence in the digital economy.
      </p>

      <h2 className="heading">Companies Adopting Federated Learning</h2>
      <p className="text">
        Leading companies such as Google, IBM, and Apple have already integrated Federated Learning (FL) into their operations. These industry giants leverage FL to enhance privacy, security, and operational efficiency while maintaining personalized user experiences.
      </p>
      <h3 className="subheading">Brands Who Use Federated Learning</h3>
      <img src={brandsDiagram} alt="Federated Learning brands" className="image" />

      <p className="text">
        By adopting FL, these companies can build and improve machine learning models without compromising user data.
      </p>

      <h2 className="heading">Summary</h2>
      <p className="text">
        Federated Learning represents a significant advancement in privacy-preserving machine learning, particularly in the financial sector.
      </p>
      <p className="text">
      By allowing institutions to collaboratively train models without sharing raw data, FL enhances privacy, security, and compliance, making it an ideal solution for modern financial challenges.
      </p>

      <h2 className="heading">See a demonstration of Federated learning:</h2>
      <Link to="/FLDemonstration" className="nav-link-demo">FL Demo</Link>
    </div>
  );
};

export default FLOverview;
