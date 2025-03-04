
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
                    <span className="text-2xl font-bold">$2,950</span>
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
                    <div className="mt-4 bg-gray-50 p-6 text-sm">
                      <h3 className="text-xl font-bold mb-6">Your Journey to Your First Client (In 90-Days) 🚀</h3>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="font-bold text-lg mb-4">Phase 1: Setting Your Foundation</h4>
                          <p className="mb-3">Together we'll create your success toolkit:</p>
                          <ul className="space-y-2">
                            {[
                              "Your Perfect Client Profile",
                              "Your Signature Service (that feels amazing to offer!)",
                              "Simple & Beautiful Marketing Materials",
                              "Authentic Outreach Messages"
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-pink-500 mr-2">✨</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg mb-4">Phase 2: Connecting With Confidence</h4>
                          <p className="mb-3">Building momentum día por día:</p>
                          <ul className="space-y-2">
                            {[
                              "Personal Network Outreach (20 meaningful connections daily)",
                              "Heart-Centered Message Templates",
                              "Simple Progress Tracking",
                              "Weekly Celebration & Strategy Calls",
                              "Adjustments When Needed (because flexibility is key!)"
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-pink-500 mr-2">✨</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg mb-4">Additional Support (Available When You Need It!) ✨</h4>
                          <p className="mb-3">Extra tools to expand your reach:</p>
                          <ul className="space-y-2">
                            {[
                              "Cold Email Templates & Strategy",
                              "LinkedIn Profile Optimization",
                              "Additional Connection Channels"
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-pink-500 mr-2">✨</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-4 text-gray-600 italic">
                            Note: Many of our amigas land their first client through personal network outreach alone! These additional tools are here for you if and when you want to expand your reach further.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg mb-4">How We'll Make Magic Happen 📋</h4>
                          
                          <div className="space-y-6">
                            <div>
                              <h5 className="font-bold mb-3">Weekly Support & Celebrations</h5>
                              <ul className="space-y-2">
                                {[
                                  "30-min Check-in & Strategy Calls",
                                  "Review Your Amazing Progress",
                                  "Fine-tune Your Approach",
                                  "Celebrate Every Win (big or small!)",
                                  "Problem-Solve Together"
                                ].map((item, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-pink-500 mr-2">✨</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h5 className="font-bold mb-3">Your Success Tools</h5>
                              <ul className="space-y-2">
                                {[
                                  "Simple Daily Tracker",
                                  "Authentic Message Templates",
                                  "Beautiful Marketing Materials",
                                  "Connection Scripts That Feel Natural"
                                ].map((item, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-pink-500 mr-2">✨</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h5 className="font-bold mb-3">Your Path to Success</h5>
                              <ul className="space-y-2">
                                {[
                                  "Commit to 20 meaningful connections daily",
                                  "Join weekly accountability celebrations",
                                  "Track your progress with pride",
                                  "Follow our proven system",
                                  "Trust the process, amiga!"
                                ].map((item, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-pink-500 mr-2">✨</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-pink-50 p-4 rounded">
                          <h4 className="font-bold text-lg mb-3">My Promise To You ⭐</h4>
                          <p className="mb-4">When you show up for yourself by following this system – reaching out to 20 potential connections every day and implementing our strategies with heart – you will find your first amazing client. This isn't about being perfect; it's about being consistently YOU.</p>
                          <p className="italic text-gray-600">Note: This program works when you do! Your success depends on completing your daily outreach and participating fully in the process.</p>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-6">
                          <h4 className="text-xl font-bold mb-4">Special Bonus: AI Business Accelerator 🚀</h4>
                          <h5 className="font-bold mb-3">Supercharge Your Business with AI ✨</h5>
                          <p className="mb-4">As a special bonus, you'll get exclusive access to:</p>
                          
                          <div>
                            <h5 className="font-bold mb-3">AI Business Masterclass</h5>
                            <p className="mb-3">Learn how to leverage AI tools to:</p>
                            <ul className="space-y-2">
                              {[
                                "Create content in minutes instead of hours",
                                "Generate creative ideas quickly",
                                "Enhance your client communications",
                                "Scale your business efficiently"
                              ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-pink-500 mr-2">✨</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <p className="mt-4 italic text-gray-600">
                              This bonus alone can save you 10+ hours every week, letting you focus more time on connecting with potential clients and growing your business!
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg mb-4">How the Phases Work 🌟</h4>
                          <p>Each phase adapts to your unique journey. We'll focus first on the proven strategies that work fastest (connecting with your network!), and then provide additional support tools as you need them.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg mb-4">Let's Make Sure We're a Match 🤍</h4>
                          <p className="mb-3">This program is perfect for you if you're ready to:</p>
                          <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Dedicate time daily to reaching out (20 connections minimum)</li>
                            <li>Keep track of your amazing progress</li>
                            <li>Show up for our weekly strategy sessions</li>
                            <li>Start simple and grow naturally</li>
                            <li>Trust and follow our proven process</li>
                          </ul>
                          <p className="italic text-gray-600">
                            This program is for mi amigas who are ready to take action with heart. If you're looking for overnight success without the work, this might not be your perfect fit.
                          </p>
                        </div>
                      </div>
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
                    <div className="mt-4 bg-gray-50 p-6 text-sm">
                      <h3 className="text-xl font-bold mb-6">Your Breakthrough Journey 🚀</h3>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="font-bold text-lg mb-4">Phase 1: Discovery & Mindset (90-Min Deep Dive Call)</h4>
                          <p className="mb-3">Together we'll uncover:</p>
                          <ul className="space-y-2">
                            {[
                              "What's really holding you back (beyond the surface fears)",
                              "Your unique zones of genius (they're bigger than you think!)",
                              "The impact you truly want to make",
                              "Which of your skills light you up the most",
                              "Where your confidence needs strengthening",
                              "What success looks like for YOU"
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-pink-500 mr-2">✨</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg mb-4">Phase 2: Your Custom Clarity Blueprint</h4>
                          <p className="mb-3">I'll create your complete clarity plan including:</p>
                          <ul className="space-y-2">
                            {[
                              "Ideal Client Profile & Where to Find Them",
                              "Your Signature Service Framework",
                              "Unique Selling Proposition",
                              "Pricing Strategy That Feels Good",
                              "Simple Marketing Message Guide",
                              "30-Day Confidence-Building Plan"
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-pink-500 mr-2">✨</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg mb-4">Phase 3: Implementation Support</h4>
                          <ul className="space-y-2 mb-4">
                            {[
                              "Complete Digital Delivery of All Materials",
                              "Optional 60-Minute Walkthrough Call",
                              "Implementation Guide & Templates"
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-pink-500 mr-2">✨</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-start">
                            <span className="text-pink-500 mr-2">✨</span>
                            <span>Purchase coaching sessions with me (optional)</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg mb-4">How I Make It Simple 🌟</h4>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li>Say "No More" to Fear (purchase this listing)</li>
                            <li>Complete the Fear-to-Clarity Assessment (sent via email after purchase)</li>
                            <li>Join me for your 90-minute breakthrough session</li>
                            <li>Receive your complete clarity blueprint (within 3 business days)</li>
                            <li>Get support with an optional 30-min walkthrough call</li>
                            <li>Take action with your confidence-building plan</li>
                          </ol>
                        </div>
                        
                        <div className="bg-pink-50 p-4 rounded">
                          <h4 className="font-bold text-lg mb-3">My Promise To You ⭐</h4>
                          <p>No generic ideal client exercises or "just push through the fear" advice. I'll help you dig deep to uncover what's really holding you back and get specific about who you're meant to serve. This is about finding clarity that feels authentic to YOU.</p>
                        </div>
                      </div>
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
                    <div className="mt-4 bg-gray-50 p-6 text-sm">
                      <h3 className="text-xl font-bold mb-6">What's Included in Your Breakthrough Session 🚀</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold mb-3">Pre-Session</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Focused Business Assessment Form</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Expert review of your current situation</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Personalized solution preparation</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3">Strategy Session (60 minutes)</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Deep-dive into your specific challenge</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Identify core bottleneck</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Explore targeted solutions</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Prioritize next steps</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3">Your Custom Solution Plan</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Detailed Action Plan delivered within 24-hours</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Estimated implementation timeline included</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Recommended tools & resources</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Clear success metrics</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3">Optional Implementation Support</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Optional 15-min walkthrough call within 7 days of plan delivery</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✨</span>
                              <span>Quote for Poquillo implementation support</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3">How Simple I Make It 🌟</h4>
                          <ol className="space-y-2 list-decimal pl-5">
                            <li>Say yes to clarity (purchase this listing)</li>
                            <li>Fill out the focused assessment form (link in the purchase email receipt)</li>
                            <li>Join your breakthrough strategy session</li>
                            <li>Receive your custom solution plan</li>
                            <li>Get implementation support (optional)</li>
                            <li>Start seeing results</li>
                          </ol>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3">Who is this for? 🎯</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✔️</span>
                              <span>Solopreneurs & Small Business Owners</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✔️</span>
                              <span>Those feeling stuck & needing expert guidance</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-pink-500 mr-2">✔️</span>
                              <span>Anyone launching, scaling, or troubleshooting their business</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-pink-50 p-4 rounded">
                          <h4 className="font-bold mb-3">My Promise To You ⭐</h4>
                          <p>No surface-level advice or generic solutions. I'll help you identify the real root of your challenge and create a practical action plan that moves your business forward. You'll walk away knowing exactly what to do next and how to do it.</p>
                        </div>
                      </div>
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
                    
                    <p className="text-gray-600 mb-6">
                      Because these services are highly customized, we'll begin with a complimentary consultation to discuss your specific needs and how we can best support your business growth.
                    </p>
                    
                    <a 
                      href="https://calendly.com/poquillo/30-min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black hover:bg-gray-800 text-white px-6 py-3 transition inline-block"
                    >
                      Schedule Consultation
                    </a>
                  </div>
                  
                  <div className="lg:w-1/3 bg-gray-50 p-6">
                    <h4 className="font-bold text-lg mb-4">How We Work Together</h4>
                    <ol className="list-decimal pl-5 space-y-4 text-gray-600">
                      <li>
                        <strong>Discovery Call:</strong> We'll discuss your business, challenges, and goals.
                      </li>
                      <li>
                        <strong>Custom Proposal:</strong> You'll receive a tailored solution designed specifically for your business.
                      </li>
                      <li>
                        <strong>Implementation:</strong> Together, we'll put your plan into action with expert guidance every step of the way.
                      </li>
                      <li>
                        <strong>Measurement & Refinement:</strong> We'll track results and adjust as needed to ensure your success.
                      </li>
                    </ol>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-600 italic">
                        "Working with Gaby transformed how I approach my business. Her systems and strategies helped me double my client base while actually working fewer hours." — Maria S.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
