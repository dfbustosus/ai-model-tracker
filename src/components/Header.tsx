import { useState } from 'react';
import { Menu, X, Cpu, Star } from 'lucide-react';

const REPO_URL = 'https://github.com/dfbustosus/ai-model-tracker';

const navItems = [
  { id: 'timeline', label: 'Timeline' },
  { id: 'compare', label: 'Compare' },
  { id: 'benchmarks', label: 'Benchmarks' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'reasoning', label: 'Reasoning' },
  { id: 'small-models', label: 'Small Models' },
  { id: 'multimodal', label: 'Multimodal' },
  { id: 'coding-tools', label: 'Coding Tools' },
  { id: 'local-llms', label: 'Local LLMs' },
  { id: 'open-vs-closed', label: 'Open vs Closed' },
  { id: 'industry', label: 'Industry' },
];

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-950/80 backdrop-blur-xl border-b border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('timeline')}
            className="flex items-center gap-4 group -ml-1"
            aria-label="Go to home"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-all" aria-hidden="true">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h1 className="text-[17px] font-black text-white tracking-tight leading-none">
                AI Model Tracker
              </h1>
              <p className="text-[11px] text-surface-400 font-semibold tracking-wider leading-none">
                2025-2026 LANDSCAPE
              </p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main navigation">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
                className={`px-3 py-2 rounded-lg text-[13px] font-semibold tracking-tight transition-all whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'text-surface-300 hover:text-white hover:bg-surface-800/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star on GitHub"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 text-yellow-400 hover:border-yellow-500/40 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all text-xs font-semibold"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <Star className="w-3.5 h-3.5" />
              <span>Star</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-surface-400 hover:text-white hover:bg-surface-800"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden bg-surface-900 border-t border-surface-800" aria-label="Mobile navigation">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
                  activeSection === item.id
                    ? 'bg-primary-600 text-white'
                    : 'text-surface-400 hover:text-white hover:bg-surface-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
