import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import ProgramCard from '../components/programs/ProgramCard';
import ProcessStep from '../components/programs/ProcessStep';
import TestimonialCard from '../components/common/TestimonialCard';

const ProgramsPage: React.FC = () => {
  // Program data
  const programs = [
    {
      title: "Business Consultation",
      price: "$1,000",
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
      price: "$3,000",
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
    },
    {
      title: "From Fear to Clarity Session",
      price: "$1,500",
      sessionDetails: "90-min breakthrough + follow-up",
      description: "Find Your Perfect Client & Service✨\nTransform self-doubt into confidence as you discover exactly who you're meant to serve and how to serve them. No more second-guessing!",
      features: [
        "Clarify your core values & non-negotiables",
        "30-day access to call recording",
        "Personalized report on your ideal client profile & where to find them",
        "30-day confidence-building plan (client acquisition + pricing)",
        "30-minute follow-up call after report delivery (w/in 30 days)"
      ],
      perfectFor: [
        "Talented professionals unsure who to serve",
        "Multi-passionate people feeling scattered",
        "Those doubting if they're 'expert enough'",
        "Anyone stuck between different business ideas"
      ]
    },
    {
      title: "Business Systems Strategy Session",
      price: "$3,000",
      sessionDetails: "3-hour intensive + follow-up",
      description: "Transform Your Business System(s)✨\nSay goodbye to chaos and hello to streamlined operations that run without you!",
      features: [
        "Comprehensive systems assessment",
        "90-day access to call recording",
        "In-depth analysis & report with a personalized action plan",
        "Custom systems & process framework recommendations",
        "30-minute implementation check-in (w/in 30 days)"
      ],
      perfectFor: [
        "Scaling without working more hours",
        "Building a sustainable growth strategy",
        "Transforming how you operate day-to-day",
        "Streamlining your client onboarding",
        "Building team workflows that scale",
        "Designing a content system that's sustainable",
        "Optimizing your customer experience"
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
      
      {/* Hero Section with improved visual hierarchy */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-gradient-to-b from-pink-50 to-white">
        <div className="space-y-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            My <span className="text-pink-500">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Let's Find Your Business Clarity, Amiga!✨
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Four simple ways to make business feel less complicado.
          </p>
          <div className="mt-8 bg-pink-50 p-5 rounded-lg border border-pink-100 max-w-3xl mx-auto">
            <p className="text-gray-700 italic">
              <span className="font-semibold">Note:</span> 3-month and 6-month coaching/working session packages (including implementation guidance, accountability, and DM support between sessions) are available for purchase post-session.
            </p>
          </div>
        </div>
      </section>
      
      {/* Program Details with improved spacing */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
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
      
      {/* Our Simple Process Section with improved spacing */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No matter which service you choose, expect a straightforward experience designed for your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
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
      
      {/* Testimonial Section with enhanced styling */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-pink-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What Clients Say</h2>
          <TestimonialCard
            quote={testimonial.quote}
            name={testimonial.name}
            company={testimonial.company}
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProgramsPage;
