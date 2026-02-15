import { TrendingUp, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const comparisonData = [
  { benchmark: 'SWE-bench', open: 80.2, closed: 80.9, openModel: 'MiniMax M2.5', closedModel: 'Claude Opus 4.5' },
  { benchmark: 'AIME 2025', open: 96.0, closed: 100, openModel: 'DeepSeek V3.2', closedModel: 'GPT-5.2' },
  { benchmark: 'GPQA Diamond', open: 86.0, closed: 93.8, openModel: 'Qwen3-235B', closedModel: 'Gemini 3 Deep Think' },
  { benchmark: 'LiveCodeBench', open: 85.0, closed: 85.0, openModel: 'Kimi K2.5', closedModel: 'GPT-5' },
];

const openAdvantages = [
  'Cost efficiency (9-50x cheaper)',
  'Coding performance at scale',
  'Mathematics',
  'Multilingual tasks (CJK)',
  'Customizability',
];

const closedAdvantages = [
  'Hardest reasoning (ARC-AGI-2, HLE)',
  'Multimodal integration quality',
  'Alignment/safety systems',
  'Production reliability',
];

export function OpenVsClosedSection() {
  return (
    <div className="space-y-8">
      <div className="bg-surface-900/30 border border-yellow-600/20 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm text-surface-200">
              <strong className="text-white">Gap closed to ~3 months.</strong> Open-weight models now lag proprietary SOTA by approximately 3 months as of early 2026 — down from 12-18 months in 2023.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-surface-900/50 border border-surface-800 rounded-2xl p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Best Open vs Best Closed</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData} margin={{ left: 0, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="benchmark" stroke="#94a3b8" tick={{ fontSize: 11 }} />
            <YAxis domain={[70, 105]} stroke="#94a3b8" tick={{ fontSize: 11 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', fontSize: '12px' }}
              formatter={(value: number) => [`${value}%`]}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="open" name="Best Open" fill="#22c55e" radius={[4, 4, 0, 0]} />
            <Bar dataKey="closed" name="Best Closed" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-surface-700">
                <th className="text-left py-2 px-3 text-surface-400">Benchmark</th>
                <th className="text-left py-2 px-3 text-green-400">Best Open</th>
                <th className="text-right py-2 px-3 text-green-400">Score</th>
                <th className="text-left py-2 px-3 text-primary-400">Best Closed</th>
                <th className="text-right py-2 px-3 text-primary-400">Score</th>
                <th className="text-right py-2 px-3 text-surface-400">Gap</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map(row => (
                <tr key={row.benchmark} className="border-b border-surface-800/50">
                  <td className="py-2 px-3 text-white font-medium">{row.benchmark}</td>
                  <td className="py-2 px-3 text-surface-300">{row.openModel}</td>
                  <td className="py-2 px-3 text-right text-green-400">{row.open}%</td>
                  <td className="py-2 px-3 text-surface-300">{row.closedModel}</td>
                  <td className="py-2 px-3 text-right text-primary-400">{row.closed}%</td>
                  <td className="py-2 px-3 text-right text-surface-500">{(row.closed - row.open).toFixed(1)}pp</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-surface-900/50 border border-green-600/20 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" /> Where Open Models Win
          </h3>
          <ul className="space-y-2">
            {openAdvantages.map(a => (
              <li key={a} className="text-xs text-surface-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-surface-900/50 border border-primary-600/20 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-primary-400 mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" /> Where Closed Models Lead
          </h3>
          <ul className="space-y-2">
            {closedAdvantages.map(a => (
              <li key={a} className="text-xs text-surface-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
