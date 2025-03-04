import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProgramsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center">
          <Link to="/" className="text-black font-bold text-2xl">Poquillo</Link>
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
          <Link to="/about" className="text-gray-900 hover:text-pink-500 transition">About</Link>
          <a 
            href="https://calendly.com/poquillo/30-min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition"
          >
            Work With Me
          </a>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full z-10">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-900 hover:text-pink-500 transition">Home</Link>
            <Link to="/who-we-serve" className="text-gray-900 hover:text-pink-500 transition">Who We Serve</Link>
            <Link to="/programs" className="text-gray-900 hover:text-pink-500 transition font-bold">Programs</Link>
            <Link to="/about" className="text-gray-900 hover:text-pink-500 transition">About</Link>
            <a 
              href="https://calendly.com/poquillo/30-min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition"
            >
              Work With Me
            </a>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-100 rounded-full opacity-70"></div>
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 overflow-hidden rounded-full">
              <img 
                src="/lovable-uploads/c8f79299-5799-4991-a09f-985919ca981f.png"
                alt="Gaby Estrada, founder of Poquillo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black opacity-10"></div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            My <span className="text-pink-500">Programs</span>
          </h1>
          <p className="text-xl text-gray-600">
            Ready to turn your business dreams into reality?
          </p>
          <p className="text-lg text-gray-600">
            I offer a range of programs designed to help you gain clarity, build solid systems, and create marketing that feels authentic.
          </p>
          <div className="pt-4">
            <a 
              href="https://calendly.com/poquillo/30-min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 transition duration-300 text-lg"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>
      
      {/* Program Details */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Launch Accelerator */}
            <div className="bg-white border border-gray-100 p-8">
              <h2 className="text-2xl font-bold mb-4">Launch Accelerator</h2>
              <p className="text-gray-600 mb-6">
                A comprehensive program designed to help you launch your business with confidence and clarity.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Define your ideal client</li>
                <li>Create a simple business system</li>
                <li>Build authentic marketing strategies</li>
                <li>Turn overthinking into action</li>
              </ul>
              <a 
                href="https://calendly.com/poquillo/30-min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-3 px-6 transition duration-300 inline-block"
              >
                Schedule a Call
              </a>
            </div>
            
            {/* Clarity Session */}
            <div className="bg-white border border-gray-100 p-8">
              <h2 className="text-2xl font-bold mb-4">Clarity Session</h2>
              <p className="text-gray-600 mb-6">
                A one-on-one session to help you gain clarity on your business goals and create a roadmap for success.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Identify your core values</li>
                <li>Set achievable goals</li>
                <li>Develop a strategic plan</li>
                <li>Overcome obstacles</li>
              </ul>
              <a 
                href="https://calendly.com/poquillo/30-min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-3 px-6 transition duration-300 inline-block"
              >
                Schedule a Call
              </a>
            </div>
            
            {/* Implementation Support */}
            <div className="bg-white border border-gray-100 p-8">
              <h2 className="text-2xl font-bold mb-4">Implementation Support</h2>
              <p className="text-gray-600 mb-6">
                Ongoing support to help you implement your business strategies and achieve your goals.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Regular check-ins</li>
                <li>Personalized guidance</li>
                <li>Actionable feedback</li>
                <li>Accountability</li>
              </ul>
              <a 
                href="https://calendly.com/poquillo/30-min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-3 px-6 transition duration-300 inline-block"
              >
                Schedule a Call
              </a>
            </div>
            
            {/* New Section - Call to Action */}
            <div className="bg-white border border-gray-100 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Ready to transform your business?</h2>
              <p className="text-gray-600 mb-6">
                Let's find the right program to help you move from confusion to clarity and confident action.
              </p>
              <a 
                href="https://calendly.com/poquillo/30-min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 transition duration-300 inline-block text-center"
              >
                Book Your Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Simple Process Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No matter which program you choose, expect a straightforward experience designed for your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Step 1 */}
            <div className="bg-white border border-gray-100 p-6 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-center">Discovery Call</h3>
              <p className="text-gray-600 text-center">
                We'll uncover your challenges, goals, and vision to understand exactly where your business stands.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white border border-gray-100 p-6 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-center">Kickoff Call</h3>
              <p className="text-gray-600 text-center">
                Together, we'll map out a personalized action plan tailored to your needs.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white border border-gray-100 p-6 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-center">Recurring Working Sessions</h3>
              <p className="text-gray-600 text-center">
                Consistent progress with actionable steps, guidance, and real-time problem-solving.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white border border-gray-100 p-6 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-center">Project Delivery</h3>
              <p className="text-gray-600 text-center">
                Receive tangible results: a streamlined process, clear strategy, or completed deliverable.
              </p>
            </div>
            
            {/* Step 5 */}
            <div className="bg-white border border-gray-100 p-6 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-center">Next Steps</h3>
              <p className="text-gray-600 text-center">
                We'll review the results, finalize next steps, and make sure you're set for continued success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-black p-12 text-white text-center relative">
            <div className="text-6xl text-pink-500 opacity-30 absolute top-8 left-8">"</div>
            <div className="relative">
              <p className="text-xl italic mb-6">
                Gaby is a natural leader. Before we started working on the consulting project, she initiated organizing communication and best practices within our group. It's evident that working closely with others is something she holds close to her heart and is very passionate about. Throughout the project, she always went the extra mile to ensure our client was being heard and all aspects of their needs were being met by us.
              </p>
              <div className="inline-block">
                <div className="font-bold">Amber H.</div>
                <div className="text-pink-300 text-sm">Colleague</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Connect Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-pink-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Let's Connect!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Ready to take your business to the next level? I'd love to chat and explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/poquillo/30-min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 transition duration-300 text-lg"
            >
              Book a Discovery Call
            </a>
            <Link 
              to="/about" 
              className="bg-white border border-black text-black font-medium py-3 px-8 transition duration-300 hover:bg-gray-50 text-lg"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 text-center md:text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <Link to="/" className="text-black font-bold text-xl">Poquillo</Link>
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
                  <li><Link to="/programs" className="text-gray-600 hover:text-pink-500 transition">Programs</Link></li>
                  <li><Link to="/about" className="text-gray-600 hover:text-pink-500 transition">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Programs</h3>
                <ul className="space-y-2">
                  <li><Link to="/programs" className="text-gray-600 hover:text-pink-500 transition">Launch Accelerator</Link></li>
                  <li><Link to="/programs" className="text-gray-600 hover:text-pink-500 transition">Clarity Session</Link></li>
                  <li><Link to="/programs" className="text-gray-600 hover:text-pink-500 transition">Implementation Support</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-pink-500 transition">Instagram</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-500 transition">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-500 transition">YouTube</a></li>
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
