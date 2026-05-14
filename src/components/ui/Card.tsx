import { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  key?: string | number;
}

export function Card({ children, className, onClick }: CardProps) {
  const Component = onClick ? motion.div : 'div';
  
  return (
    <Component
      onClick={onClick}
      whileHover={onClick ? { scale: 0.985 } : undefined}
      whileTap={onClick ? { scale: 0.97 } : undefined}
      className={cn(
        "bg-gym-card rounded-[24px] p-6 border border-white/[0.05] shadow-2xl transition-all duration-300",
        onClick && "cursor-pointer hover:border-gym-accent/20 active:bg-gym-card/80",
        className
      )}
    >
      {children}
    </Component>
  );
}
