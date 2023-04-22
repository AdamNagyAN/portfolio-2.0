import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg' | 'xs';
  color?: 'primary' | 'secondary';
};

const Colors: Record<string, string> = {
  primary: 'bg-black text-white hover:bg-white hover:text-black transition-all',
  secondary:
    'bg-white text-black hover:bg-black hover:text-white transition-all',
};

const Sizes: Record<string, string> = {
  xs: 'py-2 px-4',
  sm: 'py-3 px-5',
  md: 'py-4 px-7',
  lg: 'py-5 px-8',
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size = 'md',
  color = 'primary',
  ...props
}) => {
  const classes = cn('btn rounded-full', Sizes[size], Colors[color], className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
