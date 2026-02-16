import { useState } from 'react';
import { X, FileText, ExternalLink } from 'lucide-react';
import { modelReleases } from '../data/models';
import { pricingData } from '../data/pricing';
import { reasoningBenchmarks } from '../data/benchmarks';
import { PROVIDER_COLORS } from '../data/types';

export function ModelComparison() {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const availableModels = modelReleases
    .filter(m => !selectedModels.includes(m.id))
    .filter(m => searchQuery === '' || m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.provider.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 20);

  const toggleModel = (id: string) => {
    if (selectedModels.includes(id)) {
      setSelectedModels(selectedModels.filter(i => i !== id));
    } else if (selectedModels.length < 3) {
      setSelectedModels([...selectedModels, id]);
    }
  };

  const comparedModels = selectedModels.map(id => {
    const model = modelReleases.find(m => m.id === id)!;
    const pricing = pricingData.find(p => p.model === model.name);
    const benchmark = reasoningBenchmarks.find(b => b.model === model.name);
    return { model, pricing, benchmark };
  });

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search models to compare..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2.5 bg-surface-900 border border-surface-700 rounded-xl text-sm text-white placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Search models"
        />
        <div className="text-xs text-surface-500 mt-2">
          Select up to 3 models to compare ({selectedModels.length}/3)
        </div>
      </div>

      {selectedModels.length < 3 && (
        <div className="mb-6">
          <div className="text-xs text-surface-400 mb-3 font-medium">
            {selectedModels.length === 0 ? 'Select models to compare:' : 'Add more models to compare:'}
          </div>
          {availableModels.length === 0 ? (
            <div className="p-8 text-center bg-surface-900/50 border border-surface-800 rounded-xl">
              <p className="text-sm text-surface-400">No models found matching "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs text-primary-400 hover:text-primary-300"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {availableModels.map(model => (
                <button
                  key={model.id}
                  onClick={() => toggleModel(model.id)}
                  className="text-left p-4 bg-surface-900/50 border border-surface-800 rounded-xl hover:border-primary-500 hover:bg-surface-900 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="px-2 py-0.5 rounded-md text-[10px] font-bold text-white uppercase"
                      style={{ backgroundColor: PROVIDER_COLORS[model.provider] || '#6366f1' }}
                    >
                      {model.provider}
                    </span>
                    <span className="font-medium text-white text-sm">{model.name}</span>
                  </div>
                  <p className="text-xs text-surface-400 line-clamp-2">{model.notable}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {selectedModels.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-surface-700">
                <th className="text-left py-3 px-3 text-surface-400 font-medium sticky left-0 bg-surface-950 z-10">
                  Feature
                </th>
                {comparedModels.map(({ model }) => (
                  <th key={model.id} className="text-left py-3 px-3 min-w-[200px]">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div
                          className="px-2 py-0.5 rounded-md text-[10px] font-bold text-white uppercase mb-1 inline-block"
                          style={{ backgroundColor: PROVIDER_COLORS[model.provider] }}
                        >
                          {model.provider}
                        </div>
                        <div className="font-medium text-white">{model.name}</div>
                      </div>
                      <button
                        onClick={() => setSelectedModels(selectedModels.filter(id => id !== model.id))}
                        className="p-1 rounded-lg hover:bg-surface-800 text-surface-500 hover:text-white transition-colors"
                        aria-label="Remove from comparison"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <ComparisonRow
                label="Release Date"
                values={comparedModels.map(({ model }) => new Date(model.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }))}
              />
              <ComparisonRow
                label="Parameters"
                values={comparedModels.map(({ model }) => model.params || '-')}
              />
              <ComparisonRow
                label="Context Length"
                values={comparedModels.map(({ model }) => model.context || '-')}
              />
              <ComparisonRow
                label="License"
                values={comparedModels.map(({ model }) => model.license || '-')}
              />
              <ComparisonRow
                label="Category"
                values={comparedModels.map(({ model }) => model.category)}
                renderValue={(v) => <span className="capitalize">{v.replace('-', ' ')}</span>}
              />
              <ComparisonRow
                label="Input Cost ($/MTok)"
                values={comparedModels.map(({ model, pricing }) => pricing?.inputCost ?? model.costInput ?? '-')}
                renderValue={(v) => typeof v === 'number' ? <span className="text-yellow-400">${v}</span> : v}
              />
              <ComparisonRow
                label="Output Cost ($/MTok)"
                values={comparedModels.map(({ model, pricing }) => pricing?.outputCost ?? model.costOutput ?? '-')}
                renderValue={(v) => typeof v === 'number' ? <span className="text-green-400">${v}</span> : v}
              />
              <ComparisonRow
                label="AIME 2025"
                values={comparedModels.map(({ benchmark }) => benchmark?.aime2025 ?? '-')}
                renderValue={(v) => typeof v === 'number' ? `${v}%` : v}
              />
              <ComparisonRow
                label="GPQA Diamond"
                values={comparedModels.map(({ benchmark }) => benchmark?.gpqaDiamond ?? '-')}
                renderValue={(v) => typeof v === 'number' ? `${v}%` : v}
              />
              <ComparisonRow
                label="SWE-bench"
                values={comparedModels.map(({ benchmark }) => benchmark?.sweBenchVerified ?? '-')}
                renderValue={(v) => typeof v === 'number' ? `${v}%` : v}
              />
              <ComparisonRow
                label="ARC-AGI-2"
                values={comparedModels.map(({ benchmark }) => benchmark?.arcAgi2 ?? '-')}
                renderValue={(v) => typeof v === 'number' ? `${v}%` : v}
              />
              <ComparisonRow
                label="Notable"
                values={comparedModels.map(({ model }) => model.notable)}
                renderValue={(v) => <span className="text-surface-300">{v}</span>}
              />
              <ComparisonRow
                label="Resources"
                values={comparedModels.map(({ model }) => ({ paperUrl: model.paperUrl, blogUrl: model.blogUrl }))}
                renderValue={(v) => (
                  <div className="flex gap-2">
                    {v.paperUrl && (
                      <a href={v.paperUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300">
                        <FileText className="w-3 h-3" /> Paper
                      </a>
                    )}
                    {v.blogUrl && (
                      <a href={v.blogUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300">
                        <ExternalLink className="w-3 h-3" /> Blog
                      </a>
                    )}
                    {!v.paperUrl && !v.blogUrl && '-'}
                  </div>
                )}
              />
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}

interface ComparisonRowProps<T = string | number> {
  label: string;
  values: T[];
  renderValue?: (value: T) => React.ReactNode;
}

function ComparisonRow<T = string | number>({ label, values, renderValue }: ComparisonRowProps<T>) {
  return (
    <tr className="border-b border-surface-800/50">
      <td className="py-2.5 px-3 text-surface-400 font-medium sticky left-0 bg-surface-950 z-10">
        {label}
      </td>
      {values.map((value, i) => (
        <td key={i} className="py-2.5 px-3 text-surface-300">
          {renderValue ? renderValue(value) : String(value)}
        </td>
      ))}
    </tr>
  );
}
