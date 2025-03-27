
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
      title: "Launch Accelerator",
      description: "A comprehensive program designed to help you launch your business with confidence and clarity.",
      features: [
        "Define your ideal client",
        "Create a simple business system",
        "Build authentic marketing strategies",
        "Turn overthinking into action"
      ]
    },
    {
      title: "Clarity Session",
      description: "A one-on-one session to help you gain clarity on your business goals and create a roadmap for success.",
      features: [
        "Identify your core values",
        "Set achievable goals",
        "Develop a strategic plan",
        "Overcome obstacles"
      ]
    },
    {
      title: "Implementation Support",
      description: "Ongoing support to help you implement your business strategies and achieve your goals.",
      features: [
        "Regular check-ins",
        "Personalized guidance",
        "Actionable feedback",
        "Accountability"
      ]
    }
  ];
  
  // Process steps data
  const processSteps = [
    {
      number: 1,
      title: "Discovery Call",
      description: "We'll uncover your challenges, goals, and vision to understand exactly where your business stands."
    },
    {
      number: 2,
      title: "Kickoff Call",
      description: "Together, we'll map out a personalized action plan tailored to your needs."
    },
    {
      number: 3,
      title: "Recurring Working Sessions",
      description: "Consistent progress with actionable steps, guidance, and real-time problem-solving."
    },
    {
      number: 4,
      title: "Project Delivery",
      description: "Receive tangible results: a streamlined process, clear strategy, or completed deliverable."
    },
    {
      number: 5,
      title: "Wrap-Up Call",
      description: "We'll review the results, finalize next steps, and make sure you're set for continued success."
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
                description={program.description}
                features={program.features}
              />
            ))}
            
            {/* Call to Action Card */}
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
