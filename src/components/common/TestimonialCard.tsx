
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, company }) => {
  return (
    <div className="bg-black p-12 text-white text-center relative">
      <div className="text-6xl text-pink-500 opacity-30 absolute top-8 left-8">"</div>
      <div className="relative">
        <p className="text-xl italic mb-6">
          {quote}
        </p>
        <div className="inline-block">
          <div className="font-bold">{name}</div>
          <div className="text-pink-300 text-sm">{company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
