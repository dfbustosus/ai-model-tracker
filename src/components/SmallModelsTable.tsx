import { smallModels } from '../data/smallModels';
import { Smartphone, Cpu } from 'lucide-react';

export function SmallModelsTable() {
  return (
    <div>
      <div className="bg-surface-900/30 border border-primary-600/20 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <Smartphone className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm text-surface-200">
              <strong className="text-white">Key Trend:</strong> Qwen3 4B in thinking mode rivals Qwen2.5-72B, a 18x parameter advantage eliminated through reasoning-time compute. Gemma 3n achieves 5B-model quality with just 2B active memory.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {smallModels.map(model => (
          <div key={model.name} className="bg-surface-900/50 border border-surface-800 rounded-xl p-4 hover:border-surface-600 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-primary-400" />
              <h3 className="font-semibold text-white text-sm">{model.name}</h3>
              <span className="text-[10px] bg-surface-800 text-surface-400 px-1.5 py-0.5 rounded font-medium">{model.params}</span>
            </div>
            <p className="text-xs text-surface-400 mb-2">{model.keyStrength}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-surface-500">
              <span>{model.provider}</span>
              <span>{model.release}</span>
              {model.context !== '-' && <span>ctx: {model.context}</span>}
              <span className="text-green-400/70">{model.license}</span>
              <span className="text-primary-400/70">{model.target}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
