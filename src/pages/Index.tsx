import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Youtube } from "lucide-react";
import TestimonialCard from '@/components/common/TestimonialCard';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const Index = () => {
  const { toast } = useToast();

  const handleComingSoon = () => {
    toast({
      title: "Coming Soon!",
      description: "Our blog content is currently being prepared. Check back soon!",
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Use the Navigation component with currentPage="home" */}
      <Navigation currentPage="home" />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Turn Business <span className="text-pink-500">Confusion</span> into Clear Action Steps
          </h1>
          <p className="text-xl text-gray-600">
            Practical guidance for women entrepreneurs ready to build businesses they love without the overwhelm.
          </p>
          <div className="pt-4">
            <a 
              href="https://calendly.com/poquillo/30-min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 transition duration-300 text-lg text-center"
            >
              Book a 30-Minute Session
            </a>
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
                title: "Quick Consultation",
                description: "Get unstuck in 60 minutes with a focused session to break through one specific challenge.",
                icon: "🚀"
              },
              {
                title: "Business Clarity Session",
                description: "Transform your most pressing business challenge into a clear action plan in just 60 minutes.",
                icon: "✨"
              },
              {
                title: "Strategy Session",
                description: "A comprehensive 3-hour transformation to create a complete strategy for your business growth.",
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
          
          <TestimonialCard 
            quote="Gaby is a phenomenal business intuitive, who will take the time to get to the root of your struggles because she truly cares, and because it matters to your business. Her acumen for uncovering weaknesses and then remedying them is ON POINT. 10/10 would always recommend!"
            name="Rebekah J."
            company=""
          />
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
            Let's turn confusion into your next clear step.
          </p>
          <a 
            href="https://calendly.com/poquillo/30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-4 px-10 transition duration-300 text-lg inline-block"
          >
            Book a Call
          </a>
        </div>
      </section>
      
      {/* Use the Footer component */}
      <Footer />
    </div>
  );
};

export default Index;
