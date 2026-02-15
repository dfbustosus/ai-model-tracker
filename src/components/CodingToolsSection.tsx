import { codingTools } from '../data/tools';
import { Code, ExternalLink } from 'lucide-react';

export function CodingToolsSection() {
  return (
    <div>
      <div className="bg-surface-900/30 border border-green-600/20 rounded-xl p-4 mb-6">
        <p className="text-sm text-surface-200">
          <strong className="text-white">$5B+ market:</strong> AI now writes 30% of Microsoft's code and 25%+ of Google's. Claude Code alone generates $2.5B in annualized revenue.
        </p>
      </div>

      <div className="grid gap-3">
        {codingTools.map(tool => (
          <div key={tool.name} className="bg-surface-900/50 border border-surface-800 rounded-xl p-4 hover:border-surface-600 transition-colors group">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Code className="w-4 h-4 text-green-400" />
                  <h3 className="font-semibold text-white text-sm">{tool.name}</h3>
                  <span className="text-[10px] text-surface-500 bg-surface-800 px-1.5 py-0.5 rounded">{tool.type}</span>
                </div>
                <p className="text-xs text-surface-400 mb-2">{tool.keyFeature}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-surface-500">
                  <span>Models: {tool.models}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-sm font-medium text-green-400">{tool.pricing}</span>
                <ExternalLink className="w-3.5 h-3.5 text-surface-600 group-hover:text-surface-400 mt-1 ml-auto transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
