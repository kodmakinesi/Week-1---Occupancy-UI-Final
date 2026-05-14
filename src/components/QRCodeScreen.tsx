import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'motion/react';
import { Card } from './ui/Card';
import { RefreshCw, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

export function QRCodeScreen() {
  const [qrValue, setQrValue] = useState(`USER_${Math.random().toString(36).substr(2, 9)}_${Date.now()}`);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          refreshQR();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const refreshQR = () => {
    setQrValue(`USER_${Math.random().toString(36).substr(2, 9)}_${Date.now()}`);
    setTimeLeft(60);
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Giriş QR Kodu</h2>
        <p className="text-gym-muted">Okuyucuya yaklaştırın</p>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative group"
      >
        {/* Glow behind QR */}
        <div className="absolute inset-0 bg-gym-accent/20 blur-[60px] rounded-full group-hover:bg-gym-accent/30 transition-all duration-500" />
        
        <Card className="p-8 bg-white relative z-10 border-0 shadow-[0_20px_50px_rgba(204,255,0,0.15)]">
          <QRCodeSVG 
            value={qrValue} 
            size={240}
            level="H"
            includeMargin={true}
          />
        </Card>
      </motion.div>

      <div className="mt-12 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/5">
          <RefreshCw className="text-gym-accent animate-spin-slow" size={18} />
          <span className="text-white font-medium">Yenileniyor: {timeLeft}s</span>
        </div>

        <div className="flex items-center gap-2 text-gym-muted text-sm">
          <ShieldCheck size={16} className="text-gym-accent" />
          <span>Güvenli ve tek kullanımlık kod</span>
        </div>

        <button 
          onClick={refreshQR}
          className="mt-4 px-8 py-4 bg-gym-accent text-gym-dark font-bold rounded-[20px] transition-transform active:scale-95 shadow-[0_10px_30px_rgba(204,255,0,0.2)]"
        >
          Kodu Manuel Yenile
        </button>
      </div>
    </div>
  );
}
