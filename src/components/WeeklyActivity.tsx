import { Card } from './ui/Card';

export function WeeklyActivity() {
  const days = ['P', 'S', 'Ç', 'P', 'C', 'C', 'P'];
  const data = [40, 70, 45, 90, 65, 30, 0];

  return (
    <div className="px-6 mb-32">
      <h2 className="text-white font-bold mb-4 ml-1">Haftalık Aktivite</h2>
      <Card>
        <div className="flex items-end justify-between h-32 px-2">
          {data.map((val, i) => (
            <div key={i} className="flex flex-col items-center gap-3 w-full">
              <div className="w-full px-1.5 flex items-end h-24">
                <div 
                  style={{ height: `${val || 5}%` }}
                  className={`w-full rounded-t-lg transition-all duration-1000 ${val > 80 ? 'bg-gym-accent' : 'bg-white/10'}`}
                />
              </div>
              <span className="text-[10px] text-gym-muted font-bold">{days[i]}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
