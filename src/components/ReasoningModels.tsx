import { Zap, Lock, Unlock, DollarSign } from 'lucide-react';

const reasoningModels = [
  { name: 'OpenAI o3', mechanism: 'RL-trained CoT + agentic tools', params: 'Undisclosed', context: '200K', openSource: false, cost: '$8.00' },
  { name: 'OpenAI o3-mini', mechanism: 'RL-trained CoT, 3 effort levels', params: 'Undisclosed', context: '200K', openSource: false, cost: '$4.40' },
  { name: 'OpenAI o4-mini', mechanism: 'Multimodal CoT + agentic tools', params: 'Undisclosed', context: '200K', openSource: false, cost: '$4.40' },
  { name: 'DeepSeek R1', mechanism: 'GRPO RL + explicit <think> tags', params: '671B (37B active)', context: '128K', openSource: true, cost: '$2.19' },
  { name: 'Claude 3.7+ (Extended)', mechanism: 'Hybrid standard/thinking, budget-controllable', params: 'Undisclosed', context: '200K', openSource: false, cost: '$15.00' },
  { name: 'Gemini 2.5 Pro', mechanism: 'Built-in step-by-step reasoning', params: 'Undisclosed', context: '1M', openSource: false, cost: '$10.00' },
  { name: 'Gemini 3 Deep Think', mechanism: 'Parallel extended reasoning', params: 'Undisclosed', context: '1M', openSource: false, cost: '~$12.00' },
  { name: 'QwQ-32B', mechanism: 'RL on Qwen2.5-32B, curiosity-driven', params: '32B', context: '131K', openSource: true, cost: 'Free (self-hosted)' },
  { name: 'Qwen3-235B-A22B', mechanism: '4-stage hybrid thinking pipeline', params: '235B (22B active)', context: '128K', openSource: true, cost: 'Free (self-hosted)' },
];

export function ReasoningModels() {
  return (
    <div className="grid gap-3">
      {reasoningModels.map(model => (
        <div key={model.name} className="bg-surface-900/50 border border-surface-800 rounded-xl p-4 hover:border-surface-600 transition-colors">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
                <h3 className="font-semibold text-white text-sm">{model.name}</h3>
                {model.openSource ? (
                  <span className="flex items-center gap-1 text-[10px] font-medium text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">
                    <Unlock className="w-3 h-3" /> Open
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] font-medium text-surface-500 bg-surface-800 px-1.5 py-0.5 rounded">
                    <Lock className="w-3 h-3" /> Closed
                  </span>
                )}
              </div>
              <p className="text-xs text-surface-400">{model.mechanism}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px] text-surface-500">
                <span>Params: {model.params}</span>
                <span>Context: {model.context}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-400">
              <DollarSign className="w-3.5 h-3.5" />
              <span>{model.cost}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
