
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/who-we-serve/PageHeader';
import AudienceOverview from '@/components/who-we-serve/AudienceOverview';
import RightPlaceSection from '@/components/who-we-serve/RightPlaceSection';
import IdealClientProfile from '@/components/who-we-serve/IdealClientProfile';
import CommonChallenges from '@/components/who-we-serve/CommonChallenges';
import FinalCTA from '@/components/who-we-serve/FinalCTA';

const WhoWeServePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navigation />
      <PageHeader />
      <AudienceOverview />
      <RightPlaceSection />
      <IdealClientProfile />
      <CommonChallenges />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default WhoWeServePage;
