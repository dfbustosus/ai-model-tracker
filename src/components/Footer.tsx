import { Cpu, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-surface-800 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">AI Model Tracker</div>
              <div className="text-[10px] text-surface-500">The Complete 2025-2026 Landscape</div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-surface-500">
            Made with <Heart className="w-3 h-3 text-red-400" /> for the AI community
          </div>
          <div className="text-xs text-surface-600">
            Data current as of February 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
