
import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="bg-white border border-gray-100 p-6 relative">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-bold mt-6 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;
