import * as React from 'react';
import Hero from '@/components/molecules/pages/marketing/Hero';
import Services from '@/components/molecules/pages/Services';
import PortfolioItem from '@/components/molecules/pages/marketing/PortfolioItem';
import { porfolioItemsConfig } from '@/config/marketing';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <section id="portfolio">
        <div className="container mx-auto mt-16">
          <h1 className="text-2xl font-bold text-center">PORTFOLIO</h1>
          <div className="mt-8 flex flex-col gap-8">
            {porfolioItemsConfig.map((item, index) => (
              <PortfolioItem
                key={JSON.stringify(item)}
                even={index % 2 === 0}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
