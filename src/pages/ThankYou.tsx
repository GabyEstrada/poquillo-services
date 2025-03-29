
import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="none" />
      
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="space-y-8 text-center">
          <div className="inline-block mx-auto mb-6">
            <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            ¡<span className="text-pink-500">Gracias</span>, Amiga!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Thank you for investing in your business growth with me!
          </p>
          
          <div className="bg-pink-50 p-8 rounded-lg border border-pink-100 max-w-3xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-4">What happens next?</h2>
            <ol className="text-left text-gray-700 space-y-4 list-decimal list-inside">
              <li>Check your email for confirmation details</li>
              <li>Keep an eye on your calendar for our upcoming session</li>
              <li>Take a moment to reflect on what you want to achieve in our time together</li>
              <li>Feel free to gather any materials you'd like to discuss during our session</li>
            </ol>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-600 mb-6">
              If you have any questions before our session, please don't hesitate to reach out!
            </p>
            <Button asChild className="bg-pink-500 hover:bg-pink-600">
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ThankYouPage;
