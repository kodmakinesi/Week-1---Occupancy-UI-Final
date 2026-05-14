import { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export function Button({ 
  children, 
  onClick, 
  className, 
  variant = 'primary',
  size = 'md' 
}: ButtonProps) {
  const variants = {
    primary: "bg-gym-accent text-gym-dark font-bold hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]",
    secondary: "bg-white/10 text-white hover:bg-white/20",
    outline: "border border-gym-accent/50 text-gym-accent hover:bg-gym-accent/10",
    ghost: "text-gym-muted hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    icon: "p-3 rounded-full"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
