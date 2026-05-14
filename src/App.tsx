/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { OccupancyCard } from './components/OccupancyCard';
import { StatsCard } from './components/StatsCard';
import { QuickActions } from './components/QuickActions';
import { SchedulePreview } from './components/SchedulePreview';
import { WalletScreen } from './components/WalletScreen';
import { QRCodeScreen } from './components/QRCodeScreen';
import { NotificationManager } from './components/NotificationManager';
import { TabBar } from './components/TabBar';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen max-w-lg mx-auto bg-gym-dark relative pb-20 border-x border-white/[0.02]">
      {/* Decorative background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none max-w-lg mx-auto">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gym-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-gym-accent/[0.02] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        <NotificationManager />
        <Header />
        
        <main>
          {activeTab === 'home' && (
            <div className="animate-in fade-in duration-700">
              <div className="grid grid-cols-2 gap-6 px-10 mb-8">
                <OccupancyCard />
                <StatsCard />
              </div>
              <QuickActions />
              <SchedulePreview />
            </div>
          )}

          {activeTab === 'wallet' && <WalletScreen />}
          
          {activeTab === 'qr' && <QRCodeScreen />}
          
          {activeTab !== 'home' && activeTab !== 'wallet' && activeTab !== 'qr' && (
            <div className="px-10 py-20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/5">
                <span className="text-4xl">🚧</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Çok Yakında</h2>
              <p className="text-gym-muted text-base max-w-xs">
                Bu özellik şu an geliştirilme aşamasındadır.
              </p>
            </div>
          )}
        </main>
      </div>

      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

