import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { pricingData } from '../data/pricing';
import { PROVIDER_COLORS } from '../data/types';

type ViewMode = 'table' | 'chart';
type TierFilter = 'all' | 'Budget' | 'Mid' | 'High' | 'Premium' | 'Ultra';

const tierColors: Record<string, string> = {
  Budget: '#22c55e',
  Mid: '#3b82f6',
  High: '#f59e0b',
  Premium: '#ef4444',
  Ultra: '#a855f7',
};

export function PricingTable() {
  const [view, setView] = useState<ViewMode>('table');
  const [tierFilter, setTierFilter] = useState<TierFilter>('all');

  const filtered = useMemo(() => {
    return pricingData.filter(p => tierFilter === 'all' || p.tier === tierFilter);
  }, [tierFilter]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex gap-1.5">
          <button
            onClick={() => setView('table')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium ${view === 'table' ? 'bg-primary-600 text-white' : 'bg-surface-800 text-surface-400'}`}
          >
            Table
          </button>
          <button
            onClick={() => setView('chart')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium ${view === 'chart' ? 'bg-primary-600 text-white' : 'bg-surface-800 text-surface-400'}`}
          >
            Chart
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(['all', 'Budget', 'Mid', 'High', 'Premium', 'Ultra'] as TierFilter[]).map(t => (
            <button
              key={t}
              onClick={() => setTierFilter(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium ${tierFilter === t ? 'bg-primary-600 text-white' : 'bg-surface-800 text-surface-400 hover:text-white'}`}
            >
              {t === 'all' ? 'All Tiers' : t}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-surface-900/50 border border-surface-800 rounded-2xl overflow-hidden">
        {view === 'table' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-surface-800/50">
                  <th className="text-left py-3 px-4 text-surface-400 font-medium">Model</th>
                  <th className="text-left py-3 px-4 text-surface-400 font-medium">Provider</th>
                  <th className="text-right py-3 px-4 text-surface-400 font-medium">Input $/MTok</th>
                  <th className="text-right py-3 px-4 text-surface-400 font-medium">Output $/MTok</th>
                  <th className="text-center py-3 px-4 text-surface-400 font-medium">Context</th>
                  <th className="text-center py-3 px-4 text-surface-400 font-medium">Tier</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(row => (
                  <tr key={row.model} className="border-t border-surface-800/50 hover:bg-surface-800/30 transition-colors">
                    <td className="py-2.5 px-4 font-medium text-white">{row.model}</td>
                    <td className="py-2.5 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold text-white" style={{ backgroundColor: PROVIDER_COLORS[row.provider] || '#6366f1' }}>
                        {row.provider}
                      </span>
                    </td>
                    <td className="text-right py-2.5 px-4 text-surface-300">${row.inputCost.toFixed(2)}</td>
                    <td className="text-right py-2.5 px-4 text-white font-medium">${row.outputCost.toFixed(2)}</td>
                    <td className="text-center py-2.5 px-4 text-surface-400">{row.context}</td>
                    <td className="text-center py-2.5 px-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium" style={{ color: tierColors[row.tier], backgroundColor: tierColors[row.tier] + '20' }}>
                        {row.tier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6">
            <h3 className="text-sm font-semibold text-white mb-4">Output Cost per Million Tokens (USD)</h3>
            <ResponsiveContainer width="100%" height={Math.max(300, filtered.length * 32)}>
              <BarChart data={filtered} layout="vertical" margin={{ left: 0, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="model" width={150} stroke="#94a3b8" tick={{ fontSize: 10 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', fontSize: '12px' }}
                  formatter={(value: number) => [`$${value.toFixed(2)}/MTok`, 'Output Cost']}
                />
                <Bar dataKey="outputCost" radius={[0, 6, 6, 0]}>
                  {filtered.map((entry, i) => (
                    <Cell key={i} fill={tierColors[entry.tier] || '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
