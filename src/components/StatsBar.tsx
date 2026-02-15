import { Brain, DollarSign, Zap, Globe } from 'lucide-react';

const stats = [
  { icon: Brain, label: 'Models Tracked', value: '80+', color: 'text-primary-400' },
  { icon: Zap, label: 'Benchmarks', value: '8', color: 'text-yellow-400' },
  { icon: DollarSign, label: 'Price Range', value: '350x', color: 'text-green-400' },
  { icon: Globe, label: 'Providers', value: '10+', color: 'text-blue-400' },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map(stat => (
        <div key={stat.label} className="bg-surface-900/50 border border-surface-800 rounded-2xl p-5 text-center hover:border-surface-700 transition-colors">
          <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
          <div className="text-2xl font-bold text-white">{stat.value}</div>
          <div className="text-xs text-surface-400 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
