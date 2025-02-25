
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import ValueProposition from '@/components/home/ValueProposition';
import Testimonial from '@/components/home/Testimonial';
import SimpleSteps from '@/components/home/SimpleSteps';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  const calendlyUrl = "https://calendly.com/poquillo/30-min";

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navigation calendlyUrl={calendlyUrl} />
      <Hero calendlyUrl={calendlyUrl} />
      <ServicesPreview />
      <ValueProposition />
      <Testimonial />
      <SimpleSteps />
      <FinalCTA calendlyUrl={calendlyUrl} />
      <Footer />
    </div>
  );
};

export default Index;
