import { Check, X as XIcon } from 'lucide-react';
import { modalityMatrix, videoGenModels, imageGenModels } from '../data/multimodal';
import { PROVIDER_COLORS } from '../data/types';

function Indicator({ value }: { value: boolean }) {
  return value ? (
    <Check className="w-4 h-4 text-green-400 mx-auto" />
  ) : (
    <XIcon className="w-4 h-4 text-surface-700 mx-auto" />
  );
}

export function MultimodalSection() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Input/Output Modality Matrix</h3>
        <div className="bg-surface-900/50 border border-surface-800 rounded-2xl overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-surface-800/50">
                <th className="text-left py-3 px-4 text-surface-400 font-medium">Model</th>
                <th className="text-center py-3 px-2 text-surface-400 font-medium">Text In</th>
                <th className="text-center py-3 px-2 text-surface-400 font-medium">Image In</th>
                <th className="text-center py-3 px-2 text-surface-400 font-medium">Video In</th>
                <th className="text-center py-3 px-2 text-surface-400 font-medium">Audio In</th>
                <th className="text-center py-3 px-2 text-surface-400 font-medium">Text Out</th>
                <th className="text-center py-3 px-2 text-surface-400 font-medium">Image Out</th>
                <th className="text-center py-3 px-2 text-surface-400 font-medium">Audio Out</th>
                <th className="text-center py-3 px-2 text-surface-400 font-medium">Video Out</th>
              </tr>
            </thead>
            <tbody>
              {modalityMatrix.map(row => (
                <tr key={row.model} className="border-t border-surface-800/50 hover:bg-surface-800/50 transition-colors">
                  <td className="py-2.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: PROVIDER_COLORS[row.provider] }} />
                      <span className="font-medium text-white">{row.model}</span>
                    </div>
                  </td>
                  <td className="py-2.5 px-2"><Indicator value={row.textIn} /></td>
                  <td className="py-2.5 px-2"><Indicator value={row.imageIn} /></td>
                  <td className="py-2.5 px-2"><Indicator value={row.videoIn} /></td>
                  <td className="py-2.5 px-2"><Indicator value={row.audioIn} /></td>
                  <td className="py-2.5 px-2"><Indicator value={row.textOut} /></td>
                  <td className="py-2.5 px-2"><Indicator value={row.imageOut} /></td>
                  <td className="py-2.5 px-2"><Indicator value={row.audioOut} /></td>
                  <td className="py-2.5 px-2"><Indicator value={row.videoOut} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Video Generation</h3>
          <div className="space-y-3">
            {videoGenModels.map(m => (
              <div key={m.name} className="bg-surface-900/50 border border-surface-800 rounded-xl p-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-white text-sm">{m.name}</h4>
                  <span className="text-[10px] text-surface-500">{m.release}</span>
                </div>
                <p className="text-xs text-surface-400 mb-1">{m.feature}</p>
                <div className="flex gap-3 text-[10px] text-surface-500">
                  <span>Max: {m.maxLength}</span>
                  <span>Audio: {m.audio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Image Generation</h3>
          <div className="space-y-3">
            {imageGenModels.map(m => (
              <div key={m.name} className="bg-surface-900/50 border border-surface-800 rounded-xl p-4">
                <h4 className="font-semibold text-white text-sm mb-1">{m.name}</h4>
                <p className="text-xs text-surface-400 mb-1">{m.keyStrength}</p>
                <span className="text-[10px] text-green-400">{m.pricing}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
