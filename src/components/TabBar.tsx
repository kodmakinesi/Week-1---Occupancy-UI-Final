import { Home, LineChart, QrCode, ClipboardList, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Ana Sayfa' },
    { id: 'program', icon: ClipboardList, label: 'Program' },
    { id: 'qr', icon: QrCode, label: 'Giriş', isCenter: true },
    { id: 'stats', icon: LineChart, label: 'İstatistik' },
    { id: 'profile', icon: User, label: 'Profil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gym-card/80 backdrop-blur-[20px] border-t border-white/[0.05] h-[90px] px-10 z-50">
      <div className="flex items-center justify-between h-full max-w-md mx-auto relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          if (tab.isCenter) {
            return (
              <div key={tab.id} className="relative -top-10">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onTabChange(tab.id)}
                  className="w-[70px] h-[70px] bg-gym-accent rounded-[24px] flex items-center justify-center shadow-[0_10px_30px_rgba(204,255,0,0.2)] text-gym-dark"
                >
                  <Icon size={28} />
                </motion.button>
              </div>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center gap-1.5 transition-all duration-300",
                isActive ? "text-gym-accent" : "text-gym-muted hover:text-white"
              )}
            >
              <Icon size={24} />
              {isActive && (
                <motion.div 
                  layoutId="activeTabDot"
                  className="w-1 h-1 bg-gym-accent rounded-full"
                />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  );
}
