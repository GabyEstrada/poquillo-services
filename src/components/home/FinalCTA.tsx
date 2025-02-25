
import React from 'react';

interface FinalCTAProps {
  calendlyUrl: string;
}

const FinalCTA = ({ calendlyUrl }: FinalCTAProps) => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for clarity in your business?
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Let's turn confusion into your next clear step. Book a discovery call to see how we can work together.
        </p>
        <a 
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-4 px-10 transition duration-300 text-lg"
        >
          Book Your Discovery Call
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
