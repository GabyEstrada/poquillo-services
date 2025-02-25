import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-pink-500">Poquillo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our mission to empower women entrepreneurs with clarity and confidence.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="w-full h-80 md:h-96 bg-pink-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-200 to-pink-50 opacity-80"></div>
                <img 
                  src="/lovable-uploads/49f19e7f-9391-495c-a991-16a729d954cb.png"
                  alt="Gaby Estrada, founder of Poquillo" 
                  className="object-cover w-full h-full mix-blend-overlay"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-black opacity-10"></div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Our Origin Story</h2>
              <p className="text-lg text-gray-600">
                Poquillo was founded by Gaby Estrada, a passionate advocate for women in business. After years of seeing talented women struggle with the complexities of entrepreneurship, she set out to create a simpler, more supportive path.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to provide practical guidance, proven systems, and a genuine community where women can thrive without feeling overwhelmed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Poquillo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "✨",
                title: "Clarity",
                description: "We believe in cutting through the noise to provide straightforward, actionable advice."
              },
              {
                icon: "🤝",
                title: "Community",
                description: "We foster a supportive environment where women can connect, collaborate, and grow together."
              },
              {
                icon: "🚀",
                title: "Empowerment",
                description: "We equip women with the tools and confidence to take control of their business journey."
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
      
      {/* Meet the Founder */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/49f19e7f-9391-495c-a991-16a729d954cb.png"
                alt="Gaby Estrada, founder of Poquillo" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Meet Gaby Estrada</h2>
              <p className="text-lg text-gray-600">
                Gaby is a bicultural entrepreneur with a passion for helping women succeed. With a background in business strategy and a deep understanding of the unique challenges women face, she brings a fresh perspective to the world of entrepreneurship.
              </p>
              <p className="text-lg text-gray-600">
                When she's not working with clients, Gaby enjoys exploring new cultures, trying new recipes, and spending time with her family.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/poquillo1212/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition">Instagram</a>
                <a href="https://www.linkedin.com/company/poquillo/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Commitment */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Commitment to You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We promise to provide you with the tools, resources, and support you need to build a business you love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Personalized Guidance
              </h3>
              <p className="text-gray-600">
                We tailor our approach to meet your specific needs and goals.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Practical Strategies
              </h3>
              <p className="text-gray-600">
                We focus on strategies that you can implement right away.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                Genuine Support
              </h3>
              <p className="text-gray-600">
                We're here to support you every step of the way.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                Lasting Results
              </h3>
              <p className="text-gray-600">
                We're committed to helping you achieve sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your journey with us?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's work together to build the business of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/programs" className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 transition duration-300 text-lg">
              Explore Our Programs
            </Link>
            <Link to="/" className="bg-transparent hover:bg-white hover:text-black border border-white text-white font-medium py-3 px-8 transition duration-300 text-lg">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
