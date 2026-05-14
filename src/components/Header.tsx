import { Bell, User } from 'lucide-react';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-10">
      <div className="user-info">
        <h1 className="text-white text-[32px] font-bold tracking-tight leading-tight">Merhaba, Ahmet</h1>
        <p className="text-gym-muted mt-1 text-base">Bugün antrenman için harika bir gün.</p>
      </div>
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-gym-card rounded-2xl border border-white/[0.05] flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
          <Bell size={20} className="text-white" />
        </div>
        <div className="w-12 h-12 rounded-2xl bg-gym-muted/20 border border-white/[0.05] overflow-hidden cursor-pointer">
          <div className="w-full h-full bg-[url('https://picsum.photos/seed/avatar/100/100')] bg-cover" />
        </div>
      </div>
    </header>
  );
}
