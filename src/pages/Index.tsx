import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleComingSoon = () => {
    toast({
      title: "Coming Soon!",
      description: "Our blog content is currently being prepared. Check back soon!",
    });
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
            <Link to="/who-we-serve" className="text-gray-900 hover:text-pink-500 transition">Who We Serve</Link>
            <Link to="#" className="text-gray-900 hover:text-pink-500 transition">Programs</Link>
            <Link to="#" className="text-gray-900 hover:text-pink-500 transition">About</Link>
            <button className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition">Work With Me</button>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Turn Business <span className="text-pink-500">Confusion</span> into Clear Action Steps
          </h1>
          <p className="text-xl text-gray-600">
            Practical guidance for women entrepreneurs ready to build businesses they love without the overwhelm.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://calendly.com/poquillo/30-min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 transition duration-300 text-lg text-center"
            >
              Get Started
            </a>
            <Link 
              to="/who-we-serve"
              className="bg-white text-black border border-black hover:bg-gray-50 font-medium py-3 px-8 transition duration-300 text-lg text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="w-full h-80 md:h-96 bg-pink-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-200 to-pink-50 opacity-80"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Woman entrepreneur with confidence" 
              className="object-cover w-full h-full mix-blend-overlay"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black opacity-10"></div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Can Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, practical support tailored to where you are in your business journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "90-Day Launch Accelerator",
                description: "From vision to first client with a simple, step-by-step plan that actually works.",
                icon: "🚀"
              },
              {
                title: "Business Clarity Session",
                description: "Transform your most pressing business challenge into a clear action plan in just 60 minutes.",
                icon: "✨"
              },
              {
                title: "Custom Implementation Support",
                description: "Personalized guidance to take your established business to the next level.",
                icon: "⭐"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white border border-gray-100 p-8 transition-all hover:shadow-md">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/programs" 
                  className="inline-block text-pink-500 hover:text-pink-600 font-medium transition"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Value Proposition */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Business doesn't have to be complicated, <span className="text-pink-500">amiga</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                I help women entrepreneurs transform overthinking into action with straightforward guidance, practical systems, and genuine support.
              </p>
              <div className="space-y-4">
                {[
                  "Get super clear on exactly who you serve and what you offer",
                  "Create simple systems that make your business flow like butter",
                  "Build authentic marketing that feels natural, not pushy",
                  "Turn overthinking into confident action (yes, it's possible!)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-pink-500 mr-3">✓</div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="w-full h-80 md:h-96 bg-gray-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Woman entrepreneur working" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 py-6 px-8 max-w-sm">
                    <p className="text-lg font-medium text-center italic">
                      "Building a business shouldn't feel like trying to solve a Rubik's cube in the dark."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-pink-50 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            From Overwhelm to "I've Got This!"
          </h2>
          
          <div className="bg-white p-8 md:p-12 shadow-sm">
            <div className="mb-6 text-5xl text-pink-200">"</div>
            <p className="text-xl text-gray-700 mb-8">
              Thank you so much, Gaby, for everything you do. I'm so grateful my mom shared your information with me. You've been such a blessing—thank you!
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full mr-4"></div>
              <div className="text-left">
                <div className="font-bold">Dr. Whitley C.</div>
                <div className="text-gray-500">Vital Family Chiropractic</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Simple Steps Section */}
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
              <button 
                onClick={handleComingSoon}
                className="text-pink-500 hover:text-pink-600 font-medium transition"
              >
                Get my client clarity guide →
              </button>
            </div>
            <div className="border border-gray-100 p-8">
              <div className="text-pink-500 font-bold text-xl mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Create a Simple Outreach Plan</h3>
              <p className="text-gray-600 mb-4">
                Identify 20 people you already know who might need your services or know someone who does.
              </p>
              <button 
                onClick={handleComingSoon}
                className="text-pink-500 hover:text-pink-600 font-medium transition"
              >
                Download outreach templates →
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={handleComingSoon}
              className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 transition duration-300 text-lg"
            >
              Get More Practical Tips
            </button>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for clarity in your business?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's turn confusion into your next clear step. Book a discovery call to see how we can work together.
          </p>
          <a 
            href="https://calendly.com/poquillo/30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-4 px-10 transition duration-300 text-lg inline-block"
          >
            Book Your Discovery Call
          </a>
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
                  <li><a href="#" className="text-gray-600 hover:text-pink-500 transition">Home</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-500 transition">Who We Serve</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-500 transition">Programs</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-500 transition">About</a></li>
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
                  <li><a href="#" className="text-gray-600 hover:text-pink-500 transition">Email</a></li>
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

export default Index;
