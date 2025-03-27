import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import ProgramCard from '../components/programs/ProgramCard';
import ProcessStep from '../components/programs/ProcessStep';
import TestimonialCard from '../components/common/TestimonialCard';
import CallToAction from '../components/common/CallToAction';

const ProgramsPage: React.FC = () => {
  // Program data
  const programs = [
    {
      title: "Quick Consultation",
      price: "$150",
      sessionDetails: "60-minute power session",
      description: "Get Unstuck in 60 Minutes🚀\nFeeling stuck on one specific thing?\nLet's break through it together!",
      features: [
        "One specific challenge or decision",
        "No prep needed - just show up",
        "One follow-up question (w/in 7 days)",
        "Practical guidance, no fluff"
      ],
      perfectFor: [
        "Deciding between business ideas",
        "Getting clear on your next step",
        "Simplifying a confusing decision",
        "Breaking through one roadblock"
      ]
    },
    {
      title: "Strategy Session",
      price: "$1,000",
      sessionDetails: "3-hour transformation + follow-up",
      description: "Transform Your Business in a Day✨\nReady for a complete business refresh?\nLet's make big moves together!",
      features: [
        "Full business strategy overhaul",
        "Custom action plan delivered after",
        "Access to call recording for 30 days",
        "30-min implementation check-in (w/in 30 days)"
      ],
      perfectFor: [
        "Revamping your business model",
        "Creating a growth strategy",
        "Building systems that scale",
        "Overhauling client acquisition"
      ]
    }
  ];
  
  // Process steps data
  const processSteps = [
    {
      number: 1,
      title: "Book",
      description: "Schedule a time that works for you using my simple online calendar."
    },
    {
      number: 2,
      title: "Chat",
      description: "We'll meet virtually to discuss your challenges and identify the best path forward for your specific situation."
    },
    {
      number: 3,
      title: "Clarity",
      description: "Walk away with clear action steps and the confidence to implement them in your business."
    }
  ];

  // Testimonial data
  const testimonial = {
    quote: "Thank you so much, Gaby, for everything you do. I'm so grateful my mom shared your information with me. You've been such a blessing—thank you!",
    name: "Dr. Whitley C.",
    company: "Vital Family Chiropractic"
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="programs" />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            My <span className="text-pink-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's Find Your Business Clarity, Amiga!✨
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Two simple ways to make business feel less complicado.
          </p>
        </div>
      </section>
      
      {/* Program Details */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Program Cards */}
            {programs.map((program, index) => (
              <ProgramCard 
                key={index}
                title={program.title}
                price={program.price}
                sessionDetails={program.sessionDetails}
                description={program.description}
                features={program.features}
                perfectFor={program.perfectFor}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Simple Process Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No matter which service you choose, expect a straightforward experience designed for your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <TestimonialCard
            quote={testimonial.quote}
            name={testimonial.name}
            company={testimonial.company}
          />
        </div>
      </section>
      
      {/* Connect Section */}
      <CallToAction
        title="Let's Connect!"
        description="Ready to take your business to the next level? I'd love to chat and explore how we can work together."
        primaryButtonText="Book a Discovery Call"
        primaryButtonLink="https://calendly.com/poquillo/30-min"
        secondaryButtonText="Learn More About Me"
        secondaryButtonLink="/about"
        isExternal={true}
        isDark={true}
      />
      
      <Footer />
    </div>
  );
};

export default ProgramsPage;
