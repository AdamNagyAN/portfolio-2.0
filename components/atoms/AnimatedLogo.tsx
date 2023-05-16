import React from 'react';
import { siteConfig } from '@/config/site';
import Image from 'next/image';

const AnimatedLogo = () => {
  return (
    <Image
      src={siteConfig.logo}
      alt="Adam Nagy"
      width={64}
      height={64}
      className="h-full"
    />
  );
};

export default AnimatedLogo;
