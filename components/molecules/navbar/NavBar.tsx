import Link from 'next/link';
import React from 'react';
import { landingPageConfig } from '@/config/marketing';
import MobileNavMenu from '@/components/molecules/navbar/MobileNavMenu';
import { siteConfig } from '@/config/site';
import { NavLink } from '@/components/molecules/navbar/NavLink';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="absolute w-full z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <Image
              src={siteConfig.logo}
              alt="Adam Nagy"
              width={64}
              height={64}
              className="h-full"
            />
          </Link>
          <div className="flex lg:hidden">
            <MobileNavMenu />
          </div>
          <div className="hidden lg:flex md:items-center">
            {landingPageConfig.mainNav.map((navLink) => (
              <NavLink
                key={navLink.href}
                href={navLink.href}
                type={navLink.type}
                className={`ml-8 font-bold uppercase`}
              >
                {navLink.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
