import { ArrowDown, Share2 } from 'lucide-react';

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
          <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
            <button
              onClick={() => onNavigate('timeline')}
              className="px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-105"
            >
              Explore Models
            </button>
            <button
              onClick={() => onNavigate('compare')}
              className="px-8 py-3.5 bg-surface-800 hover:bg-surface-700 text-white rounded-xl text-sm font-bold transition-all border border-surface-700 hover:border-surface-600 hover:shadow-lg"
            >
              Compare Models
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <a
              href="https://twitter.com/intent/tweet?text=AI%20Model%20Tracker%20%E2%80%93%20Track%2060%2B%20AI%20models%20with%20benchmarks%2C%20pricing%2C%20and%20papers&url=https://dfbustosus.github.io/ai-model-tracker/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-800/50 text-surface-400 hover:text-white hover:bg-surface-700 transition-colors text-xs"
              aria-label="Share on Twitter"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share on Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://dfbustosus.github.io/ai-model-tracker/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-800/50 text-surface-400 hover:text-white hover:bg-surface-700 transition-colors text-xs"
              aria-label="Share on LinkedIn"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share on LinkedIn</span>
            </a>
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
