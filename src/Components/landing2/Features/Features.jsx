import React from 'react';
import './Features.css'; // External CSS file for styling

import { IoCubeOutline } from "react-icons/io5";
import { GrCycle } from "react-icons/gr";
import { FaCreditCard } from "react-icons/fa";


const Features = () => {
  const featuresData = [
    {
      icon: <IoCubeOutline />,
      title: 'Free Delivery Worldwide',
      description: 'Click to learn more'
    },
    {
      icon: <GrCycle />, 
      title: 'Returns',
      description: 'Return goods in 30 days'
    },
    {
      icon: <FaCreditCard />, 
      title: 'Secured Payment',
      description: 'Shop safely'
    }
  ];

  return (
    <div className="features-container">
      {featuresData.map((feature, index) => (
        <div key={index} className="feature-item">
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
