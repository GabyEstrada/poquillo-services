import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-pink-500">Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored programs designed to help you gain clarity and take action in your business journey.
          </p>
        </div>
      </section>
      
      {/* Programs Overview */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((service, index) => (
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
      
      {/* Final CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's find the right program to help you move from where you are to where you want to be.
          </p>
          <a 
            href="https://calendly.com/poquillo/30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-4 px-10 transition duration-300 text-lg"
          >
            Book Your Discovery Call
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProgramsPage;
