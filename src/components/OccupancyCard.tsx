import { Users } from 'lucide-react';
import { Card } from './ui/Card';
import { ProgressBar } from './ui/ProgressBar';

export function OccupancyCard() {
  const occupancy = 75;
  
  return (
    <Card className="bg-linear-to-br from-gym-card to-[#151515] p-8 flex flex-col h-full h-full min-h-[220px]">
      <h2 className="text-xs uppercase tracking-[0.1em] text-gym-muted mb-5 font-bold">Salon Doluluk Durumu</h2>
      
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-[48px] font-extrabold text-white leading-none tracking-tighter">%{occupancy}</span>
        <span className="text-lg font-medium text-gym-accent">Dolu</span>
      </div>
      
      <div className="mt-auto">
        <ProgressBar progress={occupancy} className="h-3 shadow-[0_0_20px_rgba(204,255,0,0.2)]" />
        <p className="mt-4 text-xs font-medium text-gym-muted">Şu an orta yoğunlukta. Antrenman için uygun.</p>
      </div>
    </Card>
  );
}
