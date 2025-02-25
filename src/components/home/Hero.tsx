
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  calendlyUrl: string;
}

const Hero = ({ calendlyUrl }: HeroProps) => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
      <div className="md:w-1/2 space-y-6 mb-10 md:mb-0 md:pr-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Turn Business <span className="text-pink-500">Confusion</span> into Clear Action Steps
        </h1>
        <p className="text-xl text-gray-600">
          Practical guidance for women entrepreneurs ready to build businesses they love without the overwhelm.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <a 
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 transition duration-300 text-lg text-center"
          >
            Get Started
          </a>
          <Link 
            to="/who-we-serve"
            className="bg-white text-black border border-black hover:bg-gray-50 font-medium py-3 px-8 transition duration-300 text-lg text-center"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="w-full h-80 md:h-96 bg-pink-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-200 to-pink-50 opacity-80"></div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Woman entrepreneur with confidence" 
            className="object-cover w-full h-full mix-blend-overlay"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black opacity-10"></div>
      </div>
    </section>
  );
};

export default Hero;
