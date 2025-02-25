import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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
          <Link to="/who-we-serve" className="text-gray-900 hover:text-pink-500 transition">Who We Serve</Link>
          <Link to="/programs" className="text-gray-900 hover:text-pink-500 transition">Programs</Link>
          <Link to="/about" className="text-gray-900 hover:text-pink-500 transition font-bold border-b-2 border-pink-500">About</Link>
          <button className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition">Work With Me</button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full z-10">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-900 hover:text-pink-500 transition">Home</Link>
            <Link to="/who-we-serve" className="text-gray-900 hover:text-pink-500 transition">Who We Serve</Link>
            <Link to="/programs" className="text-gray-900 hover:text-pink-500 transition">Programs</Link>
            <Link to="/about" className="text-gray-900 hover:text-pink-500 transition font-bold">About</Link>
            <button className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition">Work With Me</button>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-100 rounded-full opacity-70"></div>
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 overflow-hidden">
              <img 
                src="/api/placeholder/600/700" 
                alt="Gaby Estrada, founder of Poquillo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black opacity-10"></div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-pink-500">Poquillo</span>
          </h1>
          <p className="text-xl text-gray-600">
            Hi, love! 🥰 I'm Gaby Estrada, and I'm so glad you're here!
          </p>
          <p className="text-lg text-gray-600">
            You know that feeling when you have this amazing business idea but aren't quite sure how to make it real? Or maybe you've already started but feel stuck? Trust me, I've been exactly where you are.
          </p>
          <div className="pt-4">
            <button className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 transition duration-300 text-lg">
              Work With Me
            </button>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">My Story</h2>
            <p className="text-lg text-gray-600">
              The journey from Etsy shop to business coach
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="bg-pink-500 text-white text-center py-3 px-6">
                  <span className="block text-2xl font-bold">2015</span>
                  <span className="text-sm">The Beginning</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3">From Etsy to Entrepreneurship</h3>
                <p className="text-gray-600 mb-4">
                  Back in 2015, I started Poquillo as an Etsy shop of all things! 😹 Yes, really—picture me crafting away while dreaming of something bigger. After spending years working in startups and diving deep into business strategy, I kept noticing something that broke my heart: I'd meet these incredible, talented women with brilliant business ideas, but they were stuck in the "how do I even start?" phase.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="bg-black text-white text-center py-3 px-6">
                  <span className="block text-2xl font-bold">2023</span>
                  <span className="text-sm">The Pivot</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3">Sharing Knowledge & Building Community</h3>
                <p className="text-gray-600 mb-4">
                  That's when something clicked. In 2023, I started sharing everything I'd learned through the Poquillo blog. But here's where it gets good—when my friends started reaching out saying "Gaby, I need your help and guidance!", I knew it was time for something bigger.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="bg-pink-500 text-white text-center py-3 px-6">
                  <span className="block text-2xl font-bold">2024</span>
                  <span className="text-sm">The Evolution</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3">A Mission Takes Shape</h3>
                <p className="text-gray-600 mb-4">
                  In 2024, I transformed Poquillo into what you see today: a cozy corner of the business world where ambitious women like you get the clarity, strategy, and step-by-step support to build businesses that actually work (without losing your mind in the process! 😅).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Makes Me Different */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What Makes Me Different
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I don't do complicated business jargon or those confusing frameworks that leave you more overwhelmed than when you started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Refreshingly Simple",
                description: "No jargon, no fluff—just clear explanations and practical guidance you can actually use."
              },
              {
                title: "Authentically Bicultural",
                description: "Natural Spanglish that feels like home, with cultural insights that honor diverse backgrounds."
              },
              {
                title: "Practically Helpful",
                description: "Every piece of advice comes with concrete steps and templates you can implement today."
              },
              {
                title: "Warmly Professional",
                description: "Expert guidance delivered like advice from a trusted friend over coffee—approachable and encouraging."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 p-8 transition-all hover:border-pink-100">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="bg-pink-500 w-10 h-10 flex items-center justify-center mr-4">M</span>
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed">
                "Poquillo empowers aspiring entrepreneurs to transform their passion into sustainable businesses through practical guidance and proven entrepreneurial expertise, helping them achieve both personal fulfillment and financial freedom."
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="bg-pink-500 w-10 h-10 flex items-center justify-center mr-4">V</span>
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed">
                "To be the catalyst that helps individuals discover and actualize their entrepreneurial potential, creating a world where more people find joy and prosperity in building businesses they love."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How I Help */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              How I Help You Succeed
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Through my signature programs, I'll help you move from "maybe someday" to "look at me now!"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-100 p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-pink-500 mr-4">✨</span>
                Get clear on who you serve
              </h3>
              <p className="text-gray-600">
                No more confusion about who your ideal client is or what they really want from you. We'll define exactly who you're meant to serve and how to reach them effectively.
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-pink-500 mr-4">✨</span>
                Create simple business systems
              </h3>
              <p className="text-gray-600">
                Build streamlined processes that make your business flow smoothly without the complexity. From client onboarding to delivery, we'll make it all feel effortless.
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-pink-500 mr-4">✨</span>
                Build authentic marketing
              </h3>
              <p className="text-gray-600">
                Develop marketing that feels natural and aligned with your personality, not pushy or salesy. Connect genuinely with your audience in a way that resonates.
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-pink-500 mr-4">✨</span>
                Turn overthinking into action
              </h3>
              <p className="text-gray-600">
                Break through analysis paralysis and start making real progress. Replace endless planning with concrete steps that move your business forward every day.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fun Facts */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              A Bit More About Me
            </h2>
            <p className="text-lg text-gray-600">
              The person behind the business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex gap-4">
              <div className="bg-pink-500 text-white w-10 h-10 flex items-center justify-center flex-shrink-0">
                <span>01</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Bilingual Business Builder</h3>
                <p className="text-gray-600">
                  I bring a bicultural perspective to everything I do, moving fluidly between Spanish and English to create a welcoming space for diverse entrepreneurs.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-pink-500 text-white w-10 h-10 flex items-center justify-center flex-shrink-0">
                <span>02</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Startup Experience</h3>
                <p className="text-gray-600">
                  My background includes years working with startups, where I honed my skills in building systems and strategies that work for growing businesses.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-pink-500 text-white w-10 h-10 flex items-center justify-center flex-shrink-0">
                <span>03</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Customer Success Specialist</h3>
                <p className="text-gray-600">
                  I currently work in customer success, where I've learned how to create experiences that truly serve people's needs and exceed expectations.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-pink-500 text-white w-10 h-10 flex items-center justify-center flex-shrink-0">
                <span>04</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Continuous Learner</h3>
                <p className="text-gray-600">
                  I'm constantly reading, studying, and growing my expertise to bring you the most effective strategies for your business success.
                </p>
              </div>
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
            Ready to make your business dream a reality? I'd love to chat and explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 transition duration-300 text-lg">
              Book a Discovery Call
            </button>
            <button className="bg-white border border-black text-black font-medium py-3 px-8 transition duration-300 hover:bg-gray-50 text-lg">
              Browse My Programs
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
                  <li><Link to="/programs" className="text-gray-600 hover:text-pink-500 transition">Programs</Link></li>
                  <li><Link to="/about" className="text-gray-600 hover:text-pink-500 transition">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Programs</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-pink-500 transition">Launch Accelerator</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-500 transition">Clarity Session</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-500 transition">Implementation Support</a></li>
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

export default AboutPage;
