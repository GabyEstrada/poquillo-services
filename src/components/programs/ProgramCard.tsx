
import React from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  features: string[];
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, features }) => {
  return (
    <div className="bg-white border border-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">
        {description}
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a 
        href="https://calendly.com/poquillo/30-min" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-3 px-6 transition duration-300 inline-block"
      >
        Schedule a Call
      </a>
    </div>
  );
};

export default ProgramCard;
