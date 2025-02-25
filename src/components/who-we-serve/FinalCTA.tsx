
import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to get the clarity you need?
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Let's find the right program to help you move from where you are to where you want to be.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/programs" className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 transition duration-300 text-lg">
            Explore Our Programs
          </Link>
          <a 
            href="https://calendly.com/poquillo/30-min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-transparent hover:bg-white hover:text-black border border-white text-white font-medium py-3 px-8 transition duration-300 text-lg"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
