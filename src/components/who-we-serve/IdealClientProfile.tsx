
import React from 'react';

const IdealClientProfile = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our Ideal Client
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Women who thrive most with our approach share these qualities.
          </p>
        </div>
        
        <div className="bg-black text-white p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 border-b border-pink-500 pb-4">Key Characteristics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">●</span>
                  <div>
                    <span className="font-bold">Business Type:</span> Service-based businesses (consulting, coaching, creative services, etc.)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">●</span>
                  <div>
                    <span className="font-bold">Financial Readiness:</span> Has savings or resources to invest in business growth
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">●</span>
                  <div>
                    <span className="font-bold">Achievement-oriented:</span> Natural go-getters with proven track records
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">●</span>
                  <div>
                    <span className="font-bold">Knowledge seekers:</span> Value education and continuous self-improvement
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">●</span>
                  <div>
                    <span className="font-bold">Action-ready:</span> Willing to implement strategies rather than just collect information
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">●</span>
                  <div>
                    <span className="font-bold">Values authenticity:</span> Seeks genuine connections and honest guidance
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealClientProfile;
