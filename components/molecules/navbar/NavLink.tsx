import React from 'react';
import { cn } from '@/lib/utils';

export const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'text';
}> = ({ href, children, className, type = 'text' }) => {
  const classes = cn(
    {
      ['text-base text-dark']: type === 'text',
      ['text-base text-white bg-black py-2 px-8 rounded-full hover:bg-white hover:text-black transition-all']:
        type === 'button',
    },
    className
  );
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
};
