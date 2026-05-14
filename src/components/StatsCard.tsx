import { Card } from './ui/Card';

export function StatsCard() {
  const stats = [
    { label: 'Kalan Gün', value: '24 Gün' },
    { label: 'Aktif Program', value: 'Upper Body' },
    { label: 'Kalori (Bugün)', value: '450 kcal' },
    { label: 'Sıralama', value: '#12' },
  ];

  return (
    <Card className="grid grid-cols-2 gap-4 h-full">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white/[0.03] p-4 rounded-[16px]">
          <div className="text-[10px] text-gym-muted font-bold uppercase tracking-wider mb-2">{stat.label}</div>
          <div className="text-lg font-bold text-white">{stat.value}</div>
        </div>
      ))}
    </Card>
  );
}
