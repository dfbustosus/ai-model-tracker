import { Building2, Rocket, TrendingUp, AlertTriangle, Cpu, Globe, UserX, Code } from 'lucide-react';

const news = [
  {
    icon: Building2,
    title: 'Record Funding',
    content: 'Anthropic closed $30B at $380B valuation. OpenAI assembling ~$100B round at $830B valuation. Both expected to IPO in H2 2026.',
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
    content: "Models transitioning from assistants to autonomous agents. MCP (Anthropic's open standard) adopted by OpenAI, Microsoft, Google — donated to Linux Foundation.",
    color: 'text-green-400',
  },
  {
    icon: Code,
    title: 'AI Coding: $5B+ Market',
    content: 'Named 2026 Breakthrough Technology by MIT Technology Review. Cursor $10B valuation, 50%+ of Fortune 500 adopted. Tools shifting from completion to autonomous agents.',
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
    title: 'MoE Architectures Dominate',
    content: "Llama 4, DeepSeek V3/R1, Mistral Large 3, Qwen3, and Apple's server model all use mixture-of-experts architectures.",
    color: 'text-blue-400',
  },
  {
    icon: Globe,
    title: 'Chinese Models Rise',
    content: 'Chinese models represent ~40% of the top 60 on Chatbot Arena. MiniMax M2.5, Kimi K2.5, GLM-4.7 all competitive with Western frontier models.',
    color: 'text-orange-400',
  },
];

const keyTakeaways = [
  { title: 'Open-Closed Gap', desc: '~3 months. DeepSeek V3.2 matches GPT-5 on AIME at 1/33rd the cost.' },
  { title: 'Reasoning = New Scaling', desc: 'Inference-time compute yields outsized returns. GPT-5.2 perfect AIME, Gemini 3 Deep Think 84.6% ARC-AGI-2.' },
  { title: "Coding is AI's Killer App", desc: 'Claude Code $2.5B ARR, Cursor $10B valuation, 25-30% of code at Big Tech is AI-generated.' },
];

export function IndustryNews() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {news.map(item => (
          <div key={item.title} className="bg-surface-900/50 border border-surface-800 rounded-xl p-5 hover:border-surface-600 transition-colors">
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
