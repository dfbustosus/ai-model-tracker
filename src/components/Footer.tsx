import { Cpu, Heart } from 'lucide-react';

const REPO_URL = 'https://github.com/dfbustosus/ai-model-tracker';

export function Footer() {
  return (
    <footer className="border-t border-surface-800 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center" aria-hidden="true">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">AI Model Tracker</div>
              <div className="text-[10px] text-surface-500">The Complete 2025-2026 Landscape</div>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-xs">
            <span className="text-surface-400 font-medium">Links</span>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="text-surface-500 hover:text-white transition-colors">GitHub Repository</a>
            <a href={`${REPO_URL}/issues`} target="_blank" rel="noopener noreferrer" className="text-surface-500 hover:text-white transition-colors">Report an Issue</a>
            <a href={`${REPO_URL}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noopener noreferrer" className="text-surface-500 hover:text-white transition-colors">Contributing Guide</a>
            <a href={`${REPO_URL}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer" className="text-surface-500 hover:text-white transition-colors">MIT License</a>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-xs">
            <div className="flex items-center gap-1 text-surface-500">
              Made with <Heart className="w-3 h-3 text-red-400" /> for the AI community
            </div>
            <div className="text-surface-600">
              Data current as of February 2026
            </div>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-800/70 text-surface-400 hover:text-white hover:bg-surface-700 hover:shadow-md transition-all text-xs font-medium"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
