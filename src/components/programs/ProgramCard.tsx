
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
  
  // Determine the correct Calendly link based on the title of the program
  const getCalendlyLink = () => {
    if (title === "Strategy Session") {
      return "https://calendly.com/poquillo/quick-consultation";
    } else {
      return "https://calendly.com/poquillo/quick-consultation";
    }
  };
  
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Card Header with a subtle gradient background */}
      <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-8 border-b border-gray-100">
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        {price && (
          <p className="text-pink-500 font-bold text-xl mb-1">{price}</p>
        )}
        {sessionDetails && (
          <p className="text-gray-600 italic text-sm mb-0">{sessionDetails}</p>
        )}
      </div>
      
      {/* Card Content */}
      <div className="p-8">
        {firstLine && (
          <p className="text-xl font-bold text-pink-500 mb-3">{firstLine}</p>
        )}
        <p className="text-gray-600 mb-6 whitespace-pre-line">
          {restOfDescription}
        </p>
        
        {/* Features list with improved styling */}
        <div className="mb-6 bg-gray-50 p-5 rounded-md">
          <p className="font-semibold text-gray-800 mb-3">What's included:</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-pink-500 mr-2 mt-1" size={16} />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Perfect for section with existing icons but improved styling */}
        {perfectFor && perfectFor.length > 0 && (
          <div className="mb-6 bg-pink-50 p-5 border-l-4 border-pink-400 rounded-md">
            <p className="font-semibold text-gray-800 mb-3">Perfect for:</p>
            <ul className="space-y-3">
              {perfectFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-0.5 flex-shrink-0">{getIconForItem(item, index)}</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Call to action button with improved styling */}
        <a 
          href={getCalendlyLink()} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 transition duration-300 rounded-md inline-block w-full text-center shadow-md hover:shadow-lg"
        >
          {title === "Strategy Session" ? "Let's Transform Together" : "Let's Chat, Amiga"}
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;
