import { localTools } from '../data/tools';
import { HardDrive, MonitorSmartphone } from 'lucide-react';

export function LocalLLMsSection() {
  return (
    <div>
      <div className="bg-surface-900/30 border border-blue-600/20 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <MonitorSmartphone className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
          <div className="text-sm text-surface-200">
            <p><strong className="text-white">RTX 4090 (24GB):</strong> 8B models at ~95 tok/s, 32B at ~34 tok/s. A quantized 70B fits in 24GB VRAM with 4-bit GGUF.</p>
            <p className="mt-1 text-surface-400">GGUF is the de facto standard for local deployment, supporting quantization from 1.5-bit to 8-bit.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {localTools.map(tool => (
          <div key={tool.name} className="bg-surface-900/50 border border-surface-800 rounded-xl p-4 hover:border-surface-600 hover:bg-surface-900 hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 mb-2">
              <HardDrive className="w-4 h-4 text-blue-400" />
              <h3 className="font-semibold text-white text-sm">{tool.name}</h3>
              <span className="text-[10px] bg-surface-800 text-surface-400 px-1.5 py-0.5 rounded">{tool.type}</span>
            </div>
            <p className="text-xs text-surface-400 mb-2">{tool.keyStrength}</p>
            <div className="flex gap-3 text-[10px] text-surface-500">
              <span>Formats: {tool.formats}</span>
              <span>Best for: {tool.bestFor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
