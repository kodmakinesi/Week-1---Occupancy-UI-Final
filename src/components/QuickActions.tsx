import { QrCode, Calendar, LineChart } from 'lucide-react';
import { Card } from './ui/Card';
import { cn } from '../lib/utils';

export function QuickActions() {
  const actions = [
    { icon: <Calendar size={28} />, label: "Programım", color: "text-blue-400" },
    { icon: <QrCode size={28} />, label: "Hızlı Giriş", isAccent: true },
    { icon: <LineChart size={28} />, label: "İstatistik", color: "text-purple-400" },
  ];

  return (
    <div className="px-10 mb-8">
      <div className="grid grid-cols-3 gap-6">
        {actions.map((action, idx) => (
          <Card 
            key={idx}
            onClick={() => {}}
            className={cn(
              "flex flex-col items-center justify-center gap-3 py-6",
              action.isAccent ? "bg-gym-accent text-gym-dark" : ""
            )}
          >
            <div className={cn(
              "w-14 h-14 rounded-[16px] flex items-center justify-center",
              action.isAccent ? "bg-black/10" : "bg-white/[0.05]"
            )}>
              {action.icon}
            </div>
            <span className={cn(
              "font-bold text-sm",
              action.isAccent ? "text-gym-dark" : "text-white"
            )}>{action.label}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
