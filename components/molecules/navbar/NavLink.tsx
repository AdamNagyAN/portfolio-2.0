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
      ['text-base text-dark hover:text-black']: type === 'text',
      ['btn btn-primary btn-sm']: type === 'button',
    },
    className
  );
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
};
