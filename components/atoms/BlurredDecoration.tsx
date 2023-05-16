import React from 'react';
import { cn } from '@/lib/utils';

interface BlurredDecorationProps {
  className?: string;
  color?: 'indigo' | 'green' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
}

const BlurredDecoration = ({
  className,
  color = 'indigo',
  size = 'md',
}: BlurredDecorationProps) => {
  const classes = cn(
    {
      'absolute rounded-full opacity-30 blur-sm bg-gradient-to-b to-transparent animate-bounce-slow':
        true,
      'from-indigo-500': color === 'indigo',
      'from-green-500': color === 'green',
      'from-cyan-500': color === 'cyan',
      'w-32 h-32': size === 'sm',
      'w-64 h-64': size === 'md',
      'w-96 h-96': size === 'lg',
    },
    className
  );
  return <div className={classes} />;
};

export default BlurredDecoration;
