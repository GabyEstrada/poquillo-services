
import React from 'react';

const AudienceOverview = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="w-full h-80 md:h-96 bg-pink-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-200 to-pink-50 opacity-80"></div>
              <img 
                src="/lovable-uploads/8c21bc59-bd7e-4da0-80b7-4df310f3a519.png"
                alt="Two women entrepreneurs in a modern setting having a business discussion" 
                className="object-cover w-full h-full mix-blend-overlay"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-black opacity-10"></div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Two Types of Women Ready for Clarity</h2>
            <p className="text-lg text-gray-600">
              Whether you're just starting out or already running your business, we help you cut through the noise and focus on what really matters.
            </p>
            <div className="space-y-4 pt-4">
              <div className="border-l-4 border-pink-500 pl-4 py-2">
                <h3 className="text-xl font-bold">Aspiring Entrepreneurs</h3>
                <p className="text-gray-600">Ready to transform your skills into a thriving business but need a clear roadmap to get there.</p>
              </div>
              <div className="border-l-4 border-black pl-4 py-2">
                <h3 className="text-xl font-bold">Established Business Owners</h3>
                <p className="text-gray-600">Looking to optimize systems, scale services, or overcome specific growth challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceOverview;
