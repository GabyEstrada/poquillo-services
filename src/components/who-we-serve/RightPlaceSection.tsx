
import React from 'react';

const rightPlaceItems = [
  {
    icon: "🔍",
    title: "Seeking Strategic Clarity",
    description: "You're uncertain about your business direction or next steps and need a structured plan."
  },
  {
    icon: "💼",
    title: "Ready for Implementation",
    description: "You're tired of endless planning and want to start taking action on your business ideas."
  },
  {
    icon: "🧠",
    title: "Battling Analysis Paralysis",
    description: "You tend to overthink decisions and need help breaking through mental roadblocks."
  },
  {
    icon: "⚙️",
    title: "Craving Better Systems",
    description: "Your business operations feel chaotic and you need streamlined processes."
  },
  {
    icon: "💫",
    title: "Building with Confidence",
    description: "You want to grow your business authentically without pushy marketing tactics."
  },
  {
    icon: "🌎",
    title: "Valuing Cultural Connection",
    description: "You appreciate a bicultural perspective that honors diverse backgrounds and approaches."
  }
];

const RightPlaceSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            You're in the Right Place If...
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These experiences resonate with where you are in your business journey right now.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rightPlaceItems.map((item, index) => (
            <div key={index} className="bg-white p-6 border border-gray-100">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightPlaceSection;
