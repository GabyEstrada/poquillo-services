import React from 'react';
import { Check, Target, LightbulbIcon } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  price?: string;
  sessionDetails?: string;
  description: string;
  features: string[];
  perfectFor?: string[];
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  title, 
  price, 
  sessionDetails, 
  description, 
  features,
  perfectFor 
}) => {
  // Split description by newline to handle the first line separately
  const descriptionLines = description.split('\n');
  const firstLine = descriptionLines[0];
  const restOfDescription = descriptionLines.slice(1).join('\n');
  
  // Function to get appropriate icon for each "Perfect for" item
  const getIconForItem = (item: string, index: number) => {
    // Keep the first icon as is, use check for the rest
    if (index === 0) {
      if (item.toLowerCase().includes('idea') || item.toLowerCase().includes('deciding')) {
        return <LightbulbIcon className="text-pink-500" size={18} />;
      } else {
        return <Target className="text-pink-500" size={18} />;
      }
    } else {
      // Use checkmark for all other items
      return <Check className="text-pink-500" size={18} />;
    }
  };
  
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
      
      {perfectFor && perfectFor.length > 0 && (
        <div className="mb-6 bg-gray-50 p-4 border-l-4 border-pink-500 rounded">
          <p className="font-semibold text-gray-800 mb-3">Perfect for:</p>
          <ul className="space-y-3">
            {perfectFor.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-0.5">{getIconForItem(item, index)}</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <a 
        href="https://calendly.com/poquillo/30-min" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-3 px-6 transition duration-300 inline-block"
      >
        {title === "Strategy Session" ? "Let's Transform Together" : "Let's Chat, Amiga"}
      </a>
    </div>
  );
};

export default ProgramCard;
