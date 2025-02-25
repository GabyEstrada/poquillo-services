
import React from 'react';

const services = [
  {
    title: "90-Day Launch Accelerator",
    description: "From vision to first client with a simple, step-by-step plan that actually works.",
    icon: "🚀",
    link: "#"
  },
  {
    title: "Business Clarity Session",
    description: "Transform your most pressing business challenge into a clear action plan in just 60 minutes.",
    icon: "✨",
    link: "#"
  },
  {
    title: "Custom Implementation Support",
    description: "Personalized guidance to take your established business to the next level.",
    icon: "⭐",
    link: "#"
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Can Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, practical support tailored to where you are in your business journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 p-8 transition-all hover:shadow-md">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a 
                href={service.link} 
                className="inline-block text-pink-500 hover:text-pink-600 font-medium transition"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
