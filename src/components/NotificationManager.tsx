import { useEffect, useState } from 'react';
import { requestForToken, onMessageListener } from '../lib/firebase';
import { Bell, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function NotificationManager() {
  const [notification, setNotification] = useState<{ title: string; body: string } | null>(null);

  useEffect(() => {
    // Request permission on mount
    requestForToken();

    // Listen for foreground messages
    const listenForMessages = async () => {
      const payload: any = await onMessageListener();
      if (payload?.notification) {
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body
        });
      }
    };
    listenForMessages();
  }, []);

  // For demo/testing: Function to simulate a subscription expiry reminder
  const simulateExpiryReminder = () => {
    setNotification({
      title: "Üyelik Hatırlatması",
      body: "Üyeliğinizin bitmesine 3 gün kaldı! Yenilemek için cüzdanınızı ziyaret edin."
    });
  };

  return (
    <>
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-6 left-6 right-6 z-[100]"
          >
            <div className="bg-gym-card border border-gym-accent/30 p-5 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-start gap-4 backdrop-blur-xl">
              <div className="w-12 h-12 rounded-2xl bg-gym-accent/10 flex items-center justify-center flex-shrink-0 animate-pulse border border-gym-accent/20">
                <Bell className="text-gym-accent" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold text-lg leading-tight">{notification.title}</h4>
                <p className="text-gym-muted text-sm mt-1">{notification.body}</p>
              </div>
              <button 
                onClick={() => setNotification(null)}
                className="text-gym-muted hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden button for developers to test notifications in the preview if needed */}
      <div className="hidden">
        <button id="simulateNotification" onClick={simulateExpiryReminder}>Simulate</button>
      </div>
    </>
  );
}
