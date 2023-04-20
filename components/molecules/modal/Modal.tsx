import * as React from 'react';
import { cn } from '@/lib/utils';

interface IModalProps {
  children: React.ReactNode;
  className?: string;
  open?: boolean;
}

function Modal({ children, open, className }: IModalProps) {
  const modalClass = cn(
    {
      modal: true,
      'modal-open': open,
    },
    className
  );
  return <div className={modalClass}>{children}</div>;
}

Modal.Body = function Body({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('modal-box', className)}>{children}</div>;
};

export default Modal;
