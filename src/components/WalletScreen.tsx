import { motion } from 'motion/react';
import { Card } from './ui/Card';
import { CreditCard, History, Wallet as WalletIcon, Settings, Bell, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function WalletScreen() {
  const subscription = {
    type: "Premium Üyelik",
    expiry: "14 Haziran 2026",
    daysRemaining: 31,
    status: "active"
  };

  const balance = "1,240.00 ₺";

  const transactions = [
    { title: "Kantin Alışverişi", date: "Bugün, 14:20", amount: "-45.00 ₺", icon: "juice" },
    { title: "Bakiye Yükleme", date: "Dün, 10:15", amount: "+500.00 ₺", icon: "topup" },
    { title: "Kişisel Antrenör", date: "12 Mayıs", amount: "-200.00 ₺", icon: "coach" },
  ];

  return (
    <div className="px-8 py-10 animate-in fade-in duration-700">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">Cüzdanım</h2>
        <div className="relative">
          <button className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
            <Bell size={22} className="text-gym-accent" />
          </button>
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-gym-dark" />
        </div>
      </div>

      {/* Wallet Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-gradient-to-br from-gym-accent to-gym-accent/70 p-8 rounded-[32px] border-0 text-gym-dark relative overflow-hidden mb-10 shadow-[0_20px_40px_rgba(204,255,0,0.2)]">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <WalletIcon size={80} />
          </div>
          
          <div className="relative z-10">
            <span className="text-sm font-bold opacity-60 uppercase tracking-widest">Kullanılabilir Bakiye</span>
            <div className="text-5xl font-black mt-2 mb-10">{balance}</div>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-60 uppercase tracking-tighter">Kart Sahibi</span>
                <span className="font-bold">AHMET MEMİŞOĞLU</span>
              </div>
              <div className="w-12 h-8 bg-black/10 rounded-lg flex items-center justify-center backdrop-blur-md">
                 <CreditCard size={20} />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Subscription Status */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="font-bold text-white">Üyelik Durumu</h3>
          <span className="text-gym-accent text-xs font-bold uppercase tracking-widest">Yönet</span>
        </div>
        <Card className="bg-white/5 border-white/5 p-6 flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gym-accent/10 flex items-center justify-center border border-gym-accent/20">
            <ShieldCheckIcon className="text-gym-accent" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white text-lg">{subscription.type}</h4>
            <p className="text-gym-muted text-sm">Bitiş: {subscription.expiry}</p>
          </div>
          <div className="text-right">
            <div className="text-gym-accent font-black text-xl">{subscription.daysRemaining}</div>
            <div className="text-[10px] text-gym-muted uppercase font-bold">Gün Kaldı</div>
          </div>
        </Card>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="font-bold text-white">Son İşlemler</h3>
          <div className="flex items-center gap-1 text-gym-muted text-xs font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
            Hepsi <ChevronRight size={14} />
          </div>
        </div>
        
        <div className="space-y-4">
          {transactions.map((t, i) => (
            <div key={i} className="flex items-center gap-4 p-2 hover:bg-white/5 rounded-2xl transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                <History size={20} className="text-gym-muted" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-white">{t.title}</div>
                <div className="text-xs text-gym-muted">{t.date}</div>
              </div>
              <div className={cn(
                "font-bold",
                t.amount.startsWith('+') ? "text-gym-accent" : "text-white"
              )}>
                {t.amount}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
