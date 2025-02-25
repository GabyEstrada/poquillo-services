
import React from 'react';
import { toast } from "@/components/ui/use-toast";

const SimpleSteps = () => {
  const handleComingSoon = () => {
    toast({
      title: "Coming Soon!",
      description: "This content is being crafted with love and will be available soon.",
    });
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple Steps You Can Take Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical tips to help you move forward right now.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-100 p-8">
            <div className="text-pink-500 font-bold text-xl mb-4">01</div>
            <h3 className="text-xl font-bold mb-3">Define Your Perfect Client</h3>
            <p className="text-gray-600 mb-4">
              Get ultra-specific about who you're meant to serve. The clearer you are, the easier everything else becomes.
            </p>
            <button onClick={handleComingSoon} className="text-pink-500 hover:text-pink-600 font-medium transition">
              Get my client clarity guide →
            </button>
          </div>
          <div className="border border-gray-100 p-8">
            <div className="text-pink-500 font-bold text-xl mb-4">02</div>
            <h3 className="text-xl font-bold mb-3">Create a Simple Outreach Plan</h3>
            <p className="text-gray-600 mb-4">
              Identify 20 people you already know who might need your services or know someone who does.
            </p>
            <button onClick={handleComingSoon} className="text-pink-500 hover:text-pink-600 font-medium transition">
              Download outreach templates →
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button onClick={handleComingSoon} className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 transition duration-300 text-lg">
            Get More Practical Tips
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;
