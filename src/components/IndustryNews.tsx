import { Building2, Rocket, TrendingUp, AlertTriangle, Cpu, Globe, UserX, Code, Merge } from 'lucide-react';

const news = [
  {
    icon: Merge,
    title: 'SpaceX Acquires xAI',
    content: 'SpaceX acquired xAI (Feb 2, 2026) in a $1.25T combined valuation deal — the largest merger ever. Goal: orbital data centers for AI compute.',
    color: 'text-cyan-400',
  },
  {
    icon: Building2,
    title: 'Record Funding',
    content: 'Anthropic closed $30B at $380B valuation ($14B ARR). OpenAI assembling ~$100B round at $830B valuation. Both expected to IPO in H2 2026.',
    color: 'text-primary-400',
  },
  {
    icon: Rocket,
    title: 'Stargate Project',
    content: "$500B joint venture (OpenAI, SoftBank, Oracle, MGX) — $400B committed, ~7 GW data center capacity. Flagship Abilene, TX campus: 2M+ GB200 Blackwell chips.",
    color: 'text-yellow-400',
  },
  {
    icon: TrendingUp,
    title: 'Agentic AI Paradigm',
    content: "Feb 2026: 7 frontier models launched in 28 days. Agent Teams (Claude), Codex on Cerebras (OpenAI), MCP now Linux Foundation standard.",
    color: 'text-green-400',
  },
  {
    icon: Code,
    title: 'AI Coding: $5B+ Market',
    content: 'Named 2026 Breakthrough Technology by MIT Technology Review. Cognition acquires Windsurf ($250M). Claude Code $2.5B ARR. Cursor 2.0 ships cloud agents.',
    color: 'text-emerald-400',
  },
  {
    icon: AlertTriangle,
    title: '$2T Market Cap Evaporated',
    content: '$2 trillion in software market cap evaporated from peak valuations as investors priced in AI disruption of traditional software businesses.',
    color: 'text-red-400',
  },
  {
    icon: UserX,
    title: 'Yann LeCun Leaves Meta',
    content: 'Yann LeCun left Meta to found his own world-model AI lab, seeking a $5B valuation. A seismic shift in AI research leadership.',
    color: 'text-purple-400',
  },
  {
    icon: Cpu,
    title: 'No-NVIDIA Frontier Models',
    content: 'GLM-5 (744B) trained entirely on Huawei Ascend chips. GPT-5.3-Codex-Spark runs on Cerebras. NVIDIA dominance fracturing.',
    color: 'text-blue-400',
  },
  {
    icon: Globe,
    title: 'Chinese Models Rise',
    content: 'GLM-5 (SWE-bench 77.8%), Qwen 3.5 (GPQA 88.4%), MiniMax M2.5 (SWE-bench 80.2%), Kimi K2.5 — all open-source, competitive with Western frontier models.',
    color: 'text-orange-400',
  },
];

const keyTakeaways = [
  { title: 'Open-Closed Gap Vanished', desc: 'MiniMax M2.5 80.2% vs Claude Opus 80.9% SWE-bench. GLM-5, Qwen 3.5 match frontier at 1/10th cost.' },
  { title: 'Reasoning = New Scaling', desc: 'Gemini 3.1 Pro 100% AIME, 77.1% ARC-AGI-2. Deep Think 84.6% ARC-AGI-2. 18 unsolved research problems solved.' },
  { title: "Coding is AI's Killer App", desc: 'Claude Code $2.5B ARR, Agent Teams ship. Cursor 2.0, GPT-5.3-Codex on Cerebras at 1000+ tok/s.' },
];

export function IndustryNews() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {news.map(item => (
          <div key={item.title} className="bg-surface-900/50 border border-surface-800 rounded-xl p-5 hover:border-surface-600 hover:bg-surface-900 hover:shadow-lg transition-all">
            <item.icon className={`w-6 h-6 ${item.color} mb-3`} />
            <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
            <p className="text-xs text-surface-400 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface-900/30 border border-surface-700 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Three Dynamics Defining the Current Moment</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {keyTakeaways.map((t, i) => (
            <div key={t.title} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-600/20 text-primary-400 flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">{t.title}</h4>
                <p className="text-xs text-surface-400 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
