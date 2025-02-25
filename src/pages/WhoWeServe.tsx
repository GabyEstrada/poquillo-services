
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WhoWeServePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center">
          <span className="text-black font-bold text-2xl">Poquillo</span>
          <span className="ml-2 text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-sm">by Gaby Estrada</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-900 hover:text-pink-500 transition">Home</Link>
          <Link to="/who-we-serve" className="text-gray-900 hover:text-pink-500 transition font-bold border-b-2 border-pink-500">Who We Serve</Link>
          <Link to="#" className="text-gray-900 hover:text-pink-500 transition">Programs</Link>
          <Link to="#" className="text-gray-900 hover:text-pink-500 transition">About</Link>
          <button className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition">Work With Me</button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full z-10">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-900 hover:text-pink-500 transition">Home</Link>
            <Link to="/who-we-serve" className="text-gray-900 hover:text-pink-500 transition font-bold">Who We Serve</Link>
            <Link to="#" className="text-gray-900 hover:text-pink-500 transition">Programs</Link>
            <Link to="#" className="text-gray-900 hover:text-pink-500 transition">About</Link>
            <button className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition">Work With Me</button>
          </div>
        </div>
      )}
      
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Who <span className="text-pink-500">We Serve</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Poquillo is for ambitious women entrepreneurs ready to transform business confusion into confident action.
          </p>
        </div>
      </section>
      
      {/* Main Audience Overview */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="w-full h-80 md:h-96 bg-pink-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-200 to-pink-50 opacity-80"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Woman entrepreneur working on business" 
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
      
      {/* You're in the Right Place If */}
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
            {[
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
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-100">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Ideal Client Profile */}
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
                      <span className="font-bold">Business Type:</span> Service-based businesses (consulting, coaching, creative services)
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
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-3">●</span>
                    <div>
                      <span className="font-bold">Holistic thinkers:</span> Sees business as part of a broader life vision and purpose
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Common Challenges */}
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
            <div className="bg-white p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Strategic Clarity
              </h3>
              <ul className="space-y-3 pl-11">
                <li className="text-gray-600">Uncertainty about business direction or next steps</li>
                <li className="text-gray-600">Lack of clear implementation plan</li>
                <li className="text-gray-600">Analysis paralysis when making decisions</li>
                <li className="text-gray-600">Need for structured guidance</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Operational Challenges
              </h3>
              <ul className="space-y-3 pl-11">
                <li className="text-gray-600">Systems and processes needing optimization</li>
                <li className="text-gray-600">Efficiency and productivity issues</li>
                <li className="text-gray-600">Scaling challenges for established businesses</li>
                <li className="text-gray-600">Client acquisition struggles</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                Mindset Barriers
              </h3>
              <ul className="space-y-3 pl-11">
                <li className="text-gray-600">Fear of leaving stability (aspiring entrepreneurs)</li>
                <li className="text-gray-600">Self-doubt about capabilities</li>
                <li className="text-gray-600">Need for confidence reinforcement</li>
                <li className="text-gray-600">Impostor syndrome</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                Financial Concerns
              </h3>
              <ul className="space-y-3 pl-11">
                <li className="text-gray-600">Income transition worries</li>
                <li className="text-gray-600">Pricing and profitability issues</li>
                <li className="text-gray-600">Investment decision uncertainty</li>
                <li className="text-gray-600">ROI concerns for business investments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get the clarity you need?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's find the right program to help you move from where you are to where you want to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 transition duration-300 text-lg">
              Explore Our Programs
            </button>
            <button className="bg-transparent hover:bg-white hover:text-black border border-white text-white font-medium py-3 px-8 transition duration-300 text-lg">
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 text-center md:text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-black font-bold text-xl">Poquillo</span>
                <span className="ml-2 text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-sm">by Gaby Estrada</span>
              </div>
              <p className="text-gray-600 mt-4 max-w-xs mx-auto md:mx-0">
                Helping women entrepreneurs build confidence and clarity in their business journey.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-600 hover:text-pink-500 transition">Home</Link></li>
                  <li><Link to="/who-we-serve" className="text-gray-600 hover:text-pink-500 transition">Who We Serve</Link></li>
                  <li><Link to="#" className="text-gray-600 hover:text-pink-500 transition">Programs</Link></li>
                  <li><Link to="#" className="text-gray-600 hover:text-pink-500 transition">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Programs</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-gray-600 hover:text-pink-500 transition">Launch Accelerator</Link></li>
                  <li><Link to="#" className="text-gray-600 hover:text-pink-500 transition">Clarity Session</Link></li>
                  <li><Link to="#" className="text-gray-600 hover:text-pink-500 transition">Implementation Support</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-gray-600 hover:text-pink-500 transition">Instagram</Link></li>
                  <li><Link to="#" className="text-gray-600 hover:text-pink-500 transition">LinkedIn</Link></li>
                  <li><Link to="#" className="text-gray-600 hover:text-pink-500 transition">Email</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© 2025 Poquillo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WhoWeServePage;
