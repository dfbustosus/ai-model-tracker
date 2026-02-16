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
        <div key={stat.label} className="bg-surface-900/50 border border-surface-800 rounded-2xl p-6 text-center hover:border-surface-600 hover:bg-surface-900 hover:shadow-lg transition-all group">
          <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
          <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
          <div className="text-xs text-surface-400 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
