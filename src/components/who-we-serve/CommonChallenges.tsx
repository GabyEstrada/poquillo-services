
import React from 'react';

const challenges = [
  {
    number: "1",
    title: "Strategic Clarity",
    items: [
      "Uncertainty about business direction or next steps",
      "Lack of clear implementation plan",
      "Analysis paralysis when making decisions",
      "Need for structured guidance"
    ]
  },
  {
    number: "2",
    title: "Operational Challenges",
    items: [
      "Systems and processes needing optimization",
      "Efficiency and productivity issues",
      "Scaling challenges for established businesses",
      "Client acquisition struggles"
    ]
  },
  {
    number: "3",
    title: "Mindset Barriers",
    items: [
      "Fear of leaving stability (aspiring entrepreneurs)",
      "Self-doubt about capabilities",
      "Need for confidence reinforcement",
      "Impostor syndrome"
    ]
  },
  {
    number: "4",
    title: "Financial Concerns",
    items: [
      "Income transition worries",
      "Pricing and profitability issues",
      "Investment decision uncertainty",
      "ROI concerns for business investments"
    ]
  }
];

const CommonChallenges = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Common Challenges We Help Solve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These are the obstacles our clients typically face before working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">{challenge.number}</span>
                {challenge.title}
              </h3>
              <ul className="space-y-3 pl-11">
                {challenge.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonChallenges;
