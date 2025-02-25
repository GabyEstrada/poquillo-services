
import React from 'react';

const bulletPoints = [
  "Get super clear on exactly who you serve and what you offer",
  "Create simple systems that make your business flow like butter",
  "Build authentic marketing that feels natural, not pushy",
  "Turn overthinking into confident action (yes, it's possible!)"
];

const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Business doesn't have to be complicated, <span className="text-pink-500">amiga</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I help women entrepreneurs transform overthinking into action with straightforward guidance, practical systems, and genuine support.
            </p>
            <div className="space-y-4">
              {bulletPoints.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-pink-500 mr-3">✓</div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-80 md:h-96 bg-gray-900 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Woman entrepreneur working" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 py-6 px-8 max-w-sm">
                  <p className="text-lg font-medium text-center italic">
                    "Building a business shouldn't feel like trying to solve a Rubik's cube in the dark."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
