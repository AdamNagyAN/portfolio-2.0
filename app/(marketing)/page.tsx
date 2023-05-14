import * as React from 'react';
import Hero from '@/components/molecules/pages/marketing/Hero';
import Services from '@/components/molecules/pages/marketing/Services';
import Portfolio from '@/components/molecules/pages/marketing/Portfolio';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
    </>
  );
};

export default LandingPage;
