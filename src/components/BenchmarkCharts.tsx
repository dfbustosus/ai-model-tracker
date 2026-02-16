import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { reasoningBenchmarks, arenaLeaderboard, sweBenchLeaderboard, aiderLeaderboard, mmluProScores } from '../data/benchmarks';
import { PROVIDER_COLORS } from '../data/types';

type BenchmarkTab = 'arena' | 'swebench' | 'reasoning' | 'aider' | 'mmlu';

export function BenchmarkCharts() {
  const [activeTab, setActiveTab] = useState<BenchmarkTab>('arena');

  const tabs: { id: BenchmarkTab; label: string }[] = [
    { id: 'arena', label: 'Chatbot Arena' },
    { id: 'swebench', label: 'SWE-bench' },
    { id: 'reasoning', label: 'Reasoning' },
    { id: 'aider', label: 'Aider Polyglot' },
    { id: 'mmlu', label: 'MMLU-Pro' },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                : 'bg-surface-800/70 text-surface-400 hover:text-white hover:bg-surface-700 hover:shadow-md'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-surface-900/50 border border-surface-800 rounded-2xl p-4 sm:p-6">
        {activeTab === 'arena' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">LMArena Elo Ratings</h3>
            <p className="text-xs text-surface-400 mb-6">Feb 2026, 5.27M votes</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={arenaLeaderboard} layout="vertical" margin={{ left: 0, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" domain={[1400, 1520]} stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <YAxis type="category" dataKey="model" width={140} stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', fontSize: '12px' }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Bar dataKey="elo" radius={[0, 6, 6, 0]}>
                  {arenaLeaderboard.map((entry, i) => (
                    <Cell key={i} fill={PROVIDER_COLORS[entry.provider] || '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === 'swebench' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">SWE-bench Verified</h3>
            <p className="text-xs text-surface-400 mb-6">Top 10, Feb 2026</p>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={sweBenchLeaderboard} layout="vertical" margin={{ left: 0, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" domain={[60, 85]} stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <YAxis type="category" dataKey="model" width={180} stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', fontSize: '12px' }}
                  formatter={(value: number) => [`${value}%`, 'Score']}
                />
                <Bar dataKey="elo" radius={[0, 6, 6, 0]}>
                  {sweBenchLeaderboard.map((entry, i) => (
                    <Cell key={i} fill={PROVIDER_COLORS[entry.provider] || '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === 'reasoning' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Reasoning Model Showdown</h3>
            <p className="text-xs text-surface-400 mb-6">Across key benchmarks</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-surface-700">
                    <th className="text-left py-3 px-2 text-surface-400 font-medium">Model</th>
                    <th className="text-right py-3 px-2 text-surface-400 font-medium">AIME '25</th>
                    <th className="text-right py-3 px-2 text-surface-400 font-medium">GPQA</th>
                    <th className="text-right py-3 px-2 text-surface-400 font-medium">SWE-bench</th>
                    <th className="text-right py-3 px-2 text-surface-400 font-medium">Codeforces</th>
                    <th className="text-right py-3 px-2 text-surface-400 font-medium">ARC-AGI-2</th>
                    <th className="text-right py-3 px-2 text-surface-400 font-medium">HLE</th>
                  </tr>
                </thead>
                <tbody>
                  {reasoningBenchmarks.map(row => (
                    <tr key={row.model} className="border-b border-surface-800/50 hover:bg-surface-800/30">
                      <td className="py-2.5 px-2">
                        <span className="font-medium text-white">{row.model}</span>
                      </td>
                      <td className="text-right py-2.5 px-2 text-surface-300">{row.aime2025 != null ? `${row.aime2025}%` : '-'}</td>
                      <td className="text-right py-2.5 px-2 text-surface-300">{row.gpqaDiamond != null ? `${row.gpqaDiamond}%` : '-'}</td>
                      <td className="text-right py-2.5 px-2 text-surface-300">{row.sweBenchVerified != null ? `${row.sweBenchVerified}%` : '-'}</td>
                      <td className="text-right py-2.5 px-2 text-surface-300">{row.codeforcesElo ?? '-'}</td>
                      <td className="text-right py-2.5 px-2 text-surface-300">{row.arcAgi2 != null ? `${row.arcAgi2}%` : '-'}</td>
                      <td className="text-right py-2.5 px-2 text-surface-300">{row.hle != null ? `${row.hle}%` : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'aider' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Aider Polyglot Coding</h3>
            <p className="text-xs text-surface-400 mb-6">Score vs cost per run</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={aiderLeaderboard} margin={{ left: 0, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="model" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                <YAxis domain={[60, 95]} stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', fontSize: '12px' }}
                />
                <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                  {aiderLeaderboard.map((entry, i) => (
                    <Cell key={i} fill={PROVIDER_COLORS[entry.provider] || '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
              {aiderLeaderboard.map(entry => (
                <div key={entry.model} className="bg-surface-800/50 rounded-lg p-2.5 text-[11px]">
                  <div className="text-surface-300 font-medium">{entry.model}</div>
                  <div className="text-surface-500">${entry.costPerRun}/run</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mmlu' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">MMLU-Pro Scores</h3>
            <p className="text-xs text-surface-400 mb-6">Approaching saturation at ~90%</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={mmluProScores} layout="vertical" margin={{ left: 0, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" domain={[85, 92]} stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <YAxis type="category" dataKey="model" width={200} stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', fontSize: '12px' }}
                  formatter={(value: number) => [`${value}%`, 'Score']}
                />
                <Bar dataKey="score" radius={[0, 6, 6, 0]}>
                  {mmluProScores.map((entry, i) => (
                    <Cell key={i} fill={PROVIDER_COLORS[entry.provider] || '#6366f1'} />
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
