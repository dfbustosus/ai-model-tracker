import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-950)_0%,_transparent_70%)]" />
      <div className="relative pt-8 pb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-600/10 border border-primary-600/20 text-primary-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Updated February 2026
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
            AI Model Tracker
          </h1>
          <p className="text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto mb-3">
            The Complete 2025-2026 Landscape
          </p>
          <p className="text-sm text-surface-500 max-w-xl mx-auto mb-8">
            Compare 80+ models across benchmarks, pricing, and capabilities. From GPT-5.2 to Gemini 3 Deep Think to DeepSeek V3.2.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => onNavigate('timeline')}
              className="px-6 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-sm font-medium transition-colors"
            >
              Explore Models
            </button>
            <button
              onClick={() => onNavigate('benchmarks')}
              className="px-6 py-2.5 bg-surface-800 hover:bg-surface-700 text-white rounded-xl text-sm font-medium transition-colors border border-surface-700"
            >
              View Benchmarks
            </button>
          </div>
          <button
            onClick={() => onNavigate('timeline')}
            className="mt-10 text-surface-600 hover:text-surface-400 transition-colors"
          >
            <ArrowDown className="w-5 h-5 mx-auto animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
}
