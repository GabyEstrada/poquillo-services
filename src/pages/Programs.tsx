import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProgramsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('all');
  const [expandedExpectations, setExpandedExpectations] = useState<string | null>(null);

  const toggleExpectations = (programId: string) => {
    if (expandedExpectations === programId) {
      setExpandedExpectations(null);
    } else {
      setExpandedExpectations(programId);
    }
  };

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
          <Link to="/who-we-serve" className="text-gray-900 hover:text-pink-500 transition">Who We Serve</Link>
          <Link to="/programs" className="text-gray-900 hover:text-pink-500 transition font-bold border-b-2 border-pink-500">Programs</Link>
          <Link to="#" className="text-gray-900 hover:text-pink-500 transition">About</Link>
          <button className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition">Work With Me</button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full z-10">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-900 hover:text-pink-500 transition">Home</Link>
            <Link to="/who-we-serve" className="text-gray-900 hover:text-pink-500 transition">Who We Serve</Link>
            <Link to="/programs" className="text-gray-900 hover:text-pink-500 transition font-bold">Programs</Link>
            <Link to="#" className="text-gray-900 hover:text-pink-500 transition">About</Link>
            <button className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition">Work With Me</button>
          </div>
        </div>
      )}
      
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-pink-500">Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, practical support to help you build a business that works for you.
          </p>
        </div>
      </section>
      
      {/* Program Filters */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12 overflow-x-auto whitespace-nowrap">
            <div className="flex space-x-2 border-b border-gray-200 pb-2">
              <button 
                className={`px-6 py-2 text-lg transition-colors ${selectedTab === 'all' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setSelectedTab('all')}
              >
                All Programs
              </button>
              <button 
                className={`px-6 py-2 text-lg transition-colors ${selectedTab === 'starting' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setSelectedTab('starting')}
              >
                Starting Out
              </button>
              <button 
                className={`px-6 py-2 text-lg transition-colors ${selectedTab === 'growing' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setSelectedTab('growing')}
              >
                Growing a Business
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Grid */}
      <section className="pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className={`${(selectedTab === 'all' || selectedTab === 'starting') ? 'block' : 'hidden'} border border-gray-100 hover:border-pink-100 transition-all`}>
              <div className="bg-pink-50 h-2"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">90-Day Launch Accelerator</h3>
                <p className="text-gray-600 mb-6">
                  From vision to first client with a simple, step-by-step plan that actually works.
                </p>
                
                <h4 className="font-bold text-lg mb-3">Perfect For:</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Aspiring entrepreneurs ready to launch",
                    "Side-hustlers preparing to go full-time",
                    "Professionals with skills to monetize",
                    "Action-takers ready for their first client"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-3">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-bold text-lg mb-3">What's Included:</h4>
                <ul className="space-y-2 mb-8">
                  {[
                    "Weekly strategy & celebration calls",
                    "Your perfect client profile",
                    "Signature service creation",
                    "Marketing materials & templates",
                    "20 connections daily outreach plan",
                    "AI business acceleration bonus"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-3">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="mb-4">
                    <span className="text-2xl font-bold">$2,500</span>
                  </div>
                  <a 
                    href="https://calendly.com/poquillo/30-min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 transition text-center block mb-3"
                  >
                    Learn More
                  </a>
                  <button
                    onClick={() => toggleExpectations('launch-accelerator')}
                    className="w-full border border-gray-200 text-gray-600 py-2 text-sm hover:bg-gray-50 transition"
                  >
                    {expandedExpectations === 'launch-accelerator' ? 'Hide Program Expectations' : 'View Program Expectations'}
                  </button>
                  {expandedExpectations === 'launch-accelerator' && (
                    <div className="mt-4 bg-gray-50 p-4 text-sm">
                      <h5 className="font-bold mb-3">Program Expectations:</h5>
                      <ul className="space-y-2">
                        <li>• Commit to 3-5 hours weekly for implementation</li>
                        <li>• Attend all scheduled strategy calls</li>
                        <li>• Complete assigned action items between sessions</li>
                        <li>• Take full responsibility for implementing strategies</li>
                        <li>• Communicate proactively if facing challenges</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Program 2 */}
            <div className={`${(selectedTab === 'all' || selectedTab === 'starting') ? 'block' : 'hidden'} border border-gray-100 hover:border-pink-100 transition-all`}>
              <div className="bg-pink-50 h-2"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">From Fear to Clarity Session</h3>
                <p className="text-gray-600 mb-6">
                  Transform self-doubt into confidence as you discover exactly who you're meant to serve and how.
                </p>
                
                <h4 className="font-bold text-lg mb-3">Perfect For:</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Talented professionals unsure who to serve",
                    "Multi-passionate people feeling scattered",
                    "Those doubting if they're 'expert enough'",
                    "Anyone stuck between different business ideas"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-3">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-bold text-lg mb-3">What's Included:</h4>
                <ul className="space-y-2 mb-8">
                  {[
                    "90-min deep dive breakthrough session",
                    "Custom clarity blueprint",
                    "Ideal client profile & service framework",
                    "Pricing strategy that feels right",
                    "30-day confidence-building plan"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-3">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="mb-4">
                    <span className="text-2xl font-bold">$1,500</span>
                  </div>
                  <a 
                    href="https://calendly.com/poquillo/30-min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 transition text-center block mb-3"
                  >
                    Learn More
                  </a>
                  <button
                    onClick={() => toggleExpectations('fear-to-clarity')}
                    className="w-full border border-gray-200 text-gray-600 py-2 text-sm hover:bg-gray-50 transition"
                  >
                    {expandedExpectations === 'fear-to-clarity' ? 'Hide Program Expectations' : 'View Program Expectations'}
                  </button>
                  {expandedExpectations === 'fear-to-clarity' && (
                    <div className="mt-4 bg-gray-50 p-4 text-sm">
                      <h5 className="font-bold mb-3">Program Expectations:</h5>
                      <ul className="space-y-2">
                        <li>• Come prepared with your business ideas/concerns</li>
                        <li>• Be open to feedback and new perspectives</li>
                        <li>• Complete pre-session questionnaire</li>
                        <li>• Implement action items from your clarity blueprint</li>
                        <li>• Follow through with the 30-day plan provided</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Program 3 */}
            <div className={`${(selectedTab === 'all' || selectedTab === 'growing') ? 'block' : 'hidden'} border border-gray-100 hover:border-pink-100 transition-all relative`}>
              <div className="bg-pink-50 h-2"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-black text-white text-xs px-3 py-1 rounded">Popular</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Business Clarity Breakthrough</h3>
                <p className="text-gray-600 mb-6">
                  Transform your most pressing business challenge into a clear action plan you can implement immediately.
                </p>
                
                <h4 className="font-bold text-lg mb-3">Perfect For:</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Business owners with specific challenges",
                    "Entrepreneurs needing expert guidance",
                    "Those seeking clarity on next steps",
                    "Anyone ready for quick, actionable solutions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-3">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-bold text-lg mb-3">What's Included:</h4>
                <ul className="space-y-2 mb-8">
                  {[
                    "60-minute focused strategy session",
                    "Custom solution plan",
                    "Implementation timeline",
                    "Recommended tools & resources",
                    "Optional 15-min walkthrough call"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-3">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="mb-4">
                    <span className="text-2xl font-bold">$500</span>
                  </div>
                  <a 
                    href="https://calendly.com/poquillo/30-min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 transition text-center block mb-3"
                  >
                    Learn More
                  </a>
                  <button
                    onClick={() => toggleExpectations('clarity-breakthrough')}
                    className="w-full border border-gray-200 text-gray-600 py-2 text-sm hover:bg-gray-50 transition"
                  >
                    {expandedExpectations === 'clarity-breakthrough' ? 'Hide Program Expectations' : 'View Program Expectations'}
                  </button>
                  {expandedExpectations === 'clarity-breakthrough' && (
                    <div className="mt-4 bg-gray-50 p-4 text-sm">
                      <h5 className="font-bold mb-3">Program Expectations:</h5>
                      <ul className="space-y-2">
                        <li>• Have a specific business challenge in mind</li>
                        <li>• Complete pre-session brief</li>
                        <li>• Be ready to take immediate action</li>
                        <li>• Implement the provided solution plan</li>
                        <li>• Schedule follow-up call if needed</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Program 4 */}
            <div className={`${(selectedTab === 'all' || selectedTab === 'growing') ? 'block' : 'hidden'} border border-gray-100 hover:border-pink-100 transition-all lg:col-span-3`}>
              <div className="bg-pink-50 h-2"></div>
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">Custom Implementation Support & Business Coaching</h3>
                    <p className="text-gray-600 mb-6">
                      Ready to take your established business to the next level? Let's create a custom solution tailored specifically to your growth goals.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h4 className="font-bold text-lg mb-3">Perfect For:</h4>
                        <ul className="space-y-2">
                          {[
                            "Established business owners with proven model",
                            "Entrepreneurs ready to scale their services",
                            "Business owners needing systems implementation",
                            "Those looking for personalized guidance"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-pink-500 mr-3">✓</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-lg mb-3">Support Options:</h4>
                        <ul className="space-y-2">
                          {[
                            "Project-based implementation",
                            "Monthly strategy & support",
                            "Intensive implementation days",
                            "Ongoing business coaching"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-pink-500 mr-3">✓</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      We'll create a solution that fits your exact needs - no cookie-cutter approaches or unnecessary fluff. Every recommendation will be tailored to your business goals and implementation capacity.
                    </p>
                  </div>
                  
                  <div className="lg:w-1/3 bg-gray-50 p-6">
                    <h4 className="font-bold text-lg mb-4">Custom Solution Process</h4>
                    <ul className="space-y-4">
                      {[
                        { title: "Application", description: "Complete a quick form about your business needs" },
                        { title: "Discovery Call", description: "Review your goals and explore solutions" },
                        { title: "Custom Proposal", description: "Receive a tailored plan for your business" },
                        { title: "Implementation", description: "Get personalized support for your growth" }
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-1">
                            {index + 1}
                          </div>
                          <div>
                            <span className="font-bold block">{item.title}</span>
                            <span className="text-gray-600 text-sm">{item.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 mb-4">Investment: Custom quoted based on scope</p>
                      <p className="text-gray-600 mb-4">Typically ranges from $3,000-$10,000 depending on scope</p>
                      <button className="w-full bg-black hover:bg-gray-800 text-white py-3 transition">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Overview */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Simple Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A general framework that adapts to each program's specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Initial Connection", description: "Through a discovery call or assessment form, we'll understand your unique needs and challenges." },
              { title: "Kickoff Call", description: "Together, we'll map out a personalized action plan tailored to your specific situation." },
              { title: "Implementation Support", description: "Get guidance through sessions (where applicable) or structured support appropriate to your program." },
              { title: "Project Delivery", description: "Receive tangible results: a clear strategy, action plan, or completed deliverable." },
              { title: "Next Steps", description: "We'll review your progress and identify opportunities for continued growth and success." }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="bg-white border border-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold z-10 relative">
                    {index + 1}
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gray-200 -z-10"></div>
                  )}
                </div>
                <h3 className="font-bold text-lg mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Client Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stories from entrepreneurs who've transformed their businesses with our programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 relative">
              <div className="text-5xl text-pink-200 absolute top-4 left-6">"</div>
              <div className="relative">
                <p className="text-gray-700 italic mb-6 pt-6">
                  Working with Gabriela was great! She was thoughtful and very communicative. She made sure to send me several iterations of designs and was very open to feedback. I highly recommend working with her for all your needs!
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold">Stephanie C.</div>
                    <div className="text-gray-500 text-sm">Coconut Coaching</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 relative">
              <div className="text-5xl text-pink-200 absolute top-4 left-6">"</div>
              <div className="relative">
                <p className="text-gray-700 italic mb-6 pt-6">
                  Thank you so much, Gaby, for everything you do. I'm so grateful my mom shared your information with me. You've been such a blessing—thank you!
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold">Dr. Whitley C.</div>
                    <div className="text-gray-500 text-sm">Vital Family Chiropractic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know before getting started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I know which program is right for me?",
                answer: "The best program depends on your business stage and specific needs. If you're just starting out, our 90-Day Launch Accelerator or Fear to Clarity Session are ideal. For established businesses facing specific challenges, try our Clarity Breakthrough Session or Custom Implementation Support. Still unsure? Book a free discovery call and we'll help you decide."
              },
              {
                question: "What makes your approach different?",
                answer: "We focus on simplicity and implementation rather than complicated strategies or theory. Our programs are designed to give you clear, actionable steps that feel doable. We also bring a bicultural perspective, making our guidance especially valuable for entrepreneurs from diverse backgrounds."
              },
              {
                question: "Do I need to have a business idea already?",
                answer: "For most programs, yes. Our Fear to Clarity Session can help if you have multiple ideas and need to choose one. For our Launch Accelerator, you should have at least a general direction for your business, though we'll help refine and clarify it."
              },
              {
                question: "Can I get a refund if I'm not satisfied?",
                answer: "We don't offer refunds, as our programs require your active participation to succeed. However, we're deeply committed to your success and will work with you to ensure you get value from our programs. If you're on the fence, start with a smaller program like our Clarity Breakthrough Session to experience our approach."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's find the right program to help you move from confusion to clarity and confident action.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 transition duration-300 text-lg">
              Book Your Discovery Call
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
                  <li><Link to="#" className="text-gray-600 hover:text-pink-500 transition">Home</Link></li>
                  <li><Link to="#" className="text-gray-600 hover:text-pink-500 transition">Who We Serve</Link></li>
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

export default ProgramsPage;
