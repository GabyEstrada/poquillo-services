
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, company }) => {
  return (
    <div className="bg-white p-8 md:p-12 shadow-md rounded-lg">
      <div className="flex justify-center mb-6">
        <div className="bg-pink-100 rounded-full p-4">
          <Quote className="text-pink-500 w-8 h-8" />
        </div>
      </div>
      <p className="text-xl text-gray-700 mb-8 text-center italic">
        "{quote}"
      </p>
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 bg-pink-500 rounded-full mr-4 flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div className="text-left">
          <div className="font-bold text-lg">{name}</div>
          {company && <div className="text-gray-500">{company}</div>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
