import React, { ButtonHTMLAttributes } from 'react';
import {cn} from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg' | 'xs';
  color?: 'primary' | 'secondary' | 'danger';
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size = 'md',
  color = 'primary',
  ...props
}) => {
  const classes = cn( "btn", `btn-${size}`, `btn-${color}`, className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
