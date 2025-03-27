
import React from 'react';

interface ProgramCardProps {
  title: string;
  price?: string;
  sessionDetails?: string;
  description: string;
  features: string[];
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, price, sessionDetails, description, features }) => {
  // Split description by newline to handle the first line separately
  const descriptionLines = description.split('\n');
  const firstLine = descriptionLines[0];
  const restOfDescription = descriptionLines.slice(1).join('\n');
  
  return (
    <div className="bg-white border border-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      {price && (
        <p className="text-pink-500 font-semibold mb-1">{price}</p>
      )}
      {sessionDetails && (
        <p className="text-gray-500 italic text-sm mb-4">{sessionDetails}</p>
      )}
      {firstLine && (
        <p className="text-xl font-bold text-pink-500 mb-2">{firstLine}</p>
      )}
      <p className="text-gray-600 mb-6 whitespace-pre-line">
        {restOfDescription}
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
        Let's Chat, Amiga
      </a>
    </div>
  );
};

export default ProgramCard;
