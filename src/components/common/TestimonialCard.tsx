
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, company }) => {
  return (
    <div className="bg-white p-8 md:p-12 shadow-sm">
      <div className="mb-6 text-5xl text-pink-200">"</div>
      <p className="text-xl text-gray-700 mb-8">
        {quote}
      </p>
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 bg-pink-500 rounded-full mr-4"></div>
        <div className="text-left">
          <div className="font-bold">{name}</div>
          {company && <div className="text-gray-500">{company}</div>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
