import { useState, useMemo } from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { modelReleases } from '../data/models';
import { PROVIDER_COLORS } from '../data/types';

const categories = ['all', 'frontier', 'reasoning', 'small', 'open-source', 'coding', 'multimodal'] as const;

export function Timeline() {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return modelReleases
      .filter(m => filter === 'all' || m.category === filter)
      .filter(m =>
        searchQuery === '' ||
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.provider.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [filter, searchQuery]);

  const grouped = useMemo(() => {
    const groups: Record<string, typeof filtered> = {};
    filtered.forEach(m => {
      const key = m.date.slice(0, 7);
      if (!groups[key]) groups[key] = [];
      groups[key].push(m);
    });
    return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a));
  }, [filtered]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by model name or provider..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-3 bg-surface-900/50 border border-surface-700 rounded-xl text-sm text-white placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 focus:bg-surface-900 transition-all"
          aria-label="Search models"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold capitalize transition-all whitespace-nowrap ${
                filter === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-surface-800/70 text-surface-400 hover:text-white hover:bg-surface-700 hover:shadow-md'
              }`}
            >
              {cat === 'all' ? 'All' : cat.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-surface-400">
          <span className="font-semibold text-white">{filtered.length}</span> model{filtered.length !== 1 ? 's' : ''} found
        </div>
        {(searchQuery || filter !== 'all') && (
          <button
            onClick={() => { setSearchQuery(''); setFilter('all'); }}
            className="text-xs text-primary-400 hover:text-primary-300 font-medium"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-surface-800" />

        {grouped.map(([monthKey, models]) => {
          const d = new Date(monthKey + '-01');
          const monthLabel = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
          return (
            <div key={monthKey} className="mb-8">
              <div className="flex items-center gap-3 mb-4 ml-1">
                <div className="w-3 h-3 rounded-full bg-primary-500 ring-4 ring-surface-950 relative z-10" />
                <h3 className="text-sm font-semibold text-surface-300">{monthLabel}</h3>
              </div>
              <div className="ml-10 grid gap-3">
                {models.map(model => (
                  <div
                    key={model.id}
                    className="group bg-surface-900/50 border border-surface-800 rounded-xl p-4 hover:border-surface-600 transition-all hover:bg-surface-900"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span
                            className="px-2 py-0.5 rounded-md text-[10px] font-bold text-white uppercase"
                            style={{ backgroundColor: PROVIDER_COLORS[model.provider] || '#6366f1' }}
                          >
                            {model.provider}
                          </span>
                          <h4 className="font-semibold text-white text-sm">{model.name}</h4>
                        </div>
                        <p className="text-xs text-surface-400 mt-1">{model.notable}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px] text-surface-500">
                          {model.params && <span>Params: {model.params}</span>}
                          {model.context && <span>Context: {model.context}</span>}
                          {model.license && <span>License: {model.license}</span>}
                          {model.costOutput != null && (
                            <span className="text-green-400">${model.costOutput}/MTok output</span>
                          )}
                        </div>
                        {(model.paperUrl || model.blogUrl) && (
                          <div className="flex gap-2 mt-3">
                            {model.paperUrl && (
                              <a
                                href={model.paperUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-800 text-surface-300 hover:text-white hover:bg-surface-700 transition-colors text-[11px] font-medium"
                                aria-label="View research paper"
                              >
                                <FileText className="w-3 h-3" />
                                Paper
                              </a>
                            )}
                            {model.blogUrl && (
                              <a
                                href={model.blogUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-800 text-surface-300 hover:text-white hover:bg-surface-700 transition-colors text-[11px] font-medium"
                                aria-label="View blog post"
                              >
                                <ExternalLink className="w-3 h-3" />
                                Blog
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-surface-500 whitespace-nowrap mt-0.5">
                        {new Date(model.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
