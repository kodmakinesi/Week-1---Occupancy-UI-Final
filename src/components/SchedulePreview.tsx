import { Card } from './ui/Card';

export function SchedulePreview() {
  const lessons = [
    { time: '18:30', name: 'Crossfit High Intensity', status: 'Kayıtlı', isAccent: true },
    { time: '20:00', name: 'Yoga & Stretching', status: 'Kontenjan Var', isAccent: false },
  ];

  return (
    <div className="px-10 mb-32">
      <h3 className="text-xs uppercase tracking-[0.1em] text-gym-muted mb-4 font-bold">Günün Dersleri</h3>
      <Card className="p-0 overflow-hidden">
        {lessons.map((lesson, idx) => (
          <div 
            key={idx} 
            className={`flex items-center justify-between p-6 ${idx !== lessons.length - 1 ? 'border-bottom border-white/5' : ''}`}
          >
            <div className="flex flex-col gap-1">
              <span className="font-mono text-gym-blue text-sm font-bold tracking-wider">{lesson.time}</span>
              <span className="text-white font-bold">{lesson.name}</span>
            </div>
            <span className={`text-sm font-bold ${lesson.isAccent ? 'text-gym-accent' : 'text-gym-muted'}`}>
              {lesson.status}
            </span>
          </div>
        ))}
      </Card>
    </div>
  );
}
