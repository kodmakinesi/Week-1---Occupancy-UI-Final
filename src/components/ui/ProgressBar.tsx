import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
  color?: string;
}

export function ProgressBar({ progress, className, color = "bg-gym-accent" }: ProgressBarProps) {
  return (
    <div className={cn("w-full h-3 bg-white/5 rounded-full overflow-hidden", className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn("h-full", color)}
      />
    </div>
  );
}
