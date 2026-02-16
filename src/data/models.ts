import type { ModelRelease } from './types';

export const modelReleases: ModelRelease[] = [
  // 2024
  { id: 'llama-3.3-70b', date: '2024-12-06', provider: 'Meta', name: 'Llama 3.3 70B', params: '70B dense', context: '128K', license: 'Llama License', notable: 'Open-weight, instruction-tuned', category: 'open-source', blogUrl: 'https://ai.meta.com/blog/llama-3-3-70b/' },
  { id: 'phi-4', date: '2024-12-12', provider: 'Microsoft', name: 'Phi-4', params: '14B dense', context: '16K', license: 'MIT', notable: 'Synthetic data focus', category: 'small', paperUrl: 'https://arxiv.org/abs/2412.08905', blogUrl: 'https://azure.microsoft.com/en-us/blog/introducing-phi-4-microsoft-s-newest-small-language-model-specializing-in-complex-reasoning/' },
  { id: 'deepseek-v3', date: '2024-12-25', provider: 'DeepSeek', name: 'DeepSeek-V3', params: '671B MoE (37B active)', context: '128K', license: 'MIT', notable: '$5.5M training cost', category: 'frontier', paperUrl: 'https://arxiv.org/abs/2412.19437', blogUrl: 'https://api-docs.deepseek.com/news/news1226' },

  // 2025 Q1
  { id: 'deepseek-r1', date: '2025-01-20', provider: 'DeepSeek', name: 'DeepSeek-R1', params: '671B MoE (37B active)', context: '128K', license: 'MIT', costInput: 0.55, costOutput: 2.19, notable: 'Open-source reasoning model', category: 'reasoning', paperUrl: 'https://arxiv.org/abs/2501.12948', blogUrl: 'https://api-docs.deepseek.com/news/news0120' },
  { id: 'qwen-2.5-max', date: '2025-01-29', provider: 'Alibaba', name: 'Qwen 2.5-Max', params: 'Large MoE', notable: 'Claimed to beat GPT-4o, DeepSeek-V3', category: 'frontier' },
  { id: 'mistral-small-3', date: '2025-01-30', provider: 'Mistral', name: 'Mistral Small 3', params: '24B dense', context: '32K', license: 'Apache 2.0', notable: 'Competitive with 70B models', category: 'small' },
  { id: 'o3-mini', date: '2025-01-31', provider: 'OpenAI', name: 'o3-mini', context: '200K', costInput: 1.10, costOutput: 4.40, notable: '3 effort levels', category: 'reasoning', blogUrl: 'https://openai.com/index/early-access-to-o3-mini/' },
  { id: 'gemini-2.0-flash', date: '2025-02-05', provider: 'Google', name: 'Gemini 2.0 Flash', context: '1M', costInput: 0.10, costOutput: 0.40, notable: 'Native multimodal', category: 'multimodal', blogUrl: 'https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/' },
  { id: 'grok-3', date: '2025-02-17', provider: 'xAI', name: 'Grok 3', params: '~3T params', context: '131K', costInput: 3.00, costOutput: 15.00, notable: '200K H100 training, DeepSearch', category: 'frontier' },
  { id: 'claude-3.7-sonnet', date: '2025-02-24', provider: 'Anthropic', name: 'Claude 3.7 Sonnet', context: '200K', notable: 'First hybrid reasoning model, extended thinking', category: 'reasoning', blogUrl: 'https://www.anthropic.com/news/claude-3-7-sonnet' },
  { id: 'phi-4-mini', date: '2025-02-26', provider: 'Microsoft', name: 'Phi-4-mini', params: '3.8B', context: '128K', license: 'MIT', notable: 'Edge-optimized', category: 'small' },
  { id: 'gpt-4.5', date: '2025-02-27', provider: 'OpenAI', name: 'GPT-4.5', context: '128K', costInput: 75, costOutput: 150, notable: 'Largest ever, deprecated Jul 2025', category: 'frontier' },
  { id: 'gemma-3', date: '2025-03-12', provider: 'Google', name: 'Gemma 3', params: '1B/4B/12B/27B', context: '128K', license: 'Gemma TOU', notable: 'Open weights, multimodal', category: 'open-source' },
  { id: 'command-a', date: '2025-03-13', provider: 'Cohere', name: 'Command A', params: '111B', context: '256K', notable: 'Enterprise RAG focus, 2 GPU deployment', category: 'frontier' },
  { id: 'qwen-2.5-omni', date: '2025-03-15', provider: 'Alibaba', name: 'Qwen 2.5-Omni', context: '128K', notable: 'Full omni-modal: text+image+video+audio I/O', category: 'multimodal' },
  { id: 'qwq-32b', date: '2025-03-17', provider: 'Alibaba', name: 'QwQ-32B', params: '32B', context: '131K', license: 'Apache 2.0', notable: 'RL on Qwen2.5-32B, curiosity-driven reasoning', category: 'reasoning' },
  { id: 'gemini-2.5-pro', date: '2025-03-25', provider: 'Google', name: 'Gemini 2.5 Pro', context: '1M', costInput: 1.25, costOutput: 10.00, notable: 'First thinking Gemini, #1 Arena at launch', category: 'reasoning', blogUrl: 'https://blog.google/technology/google-deepmind/google-gemini-thinking/' },

  // 2025 Q2
  { id: 'llama-4-scout', date: '2025-04-05', provider: 'Meta', name: 'Llama 4 Scout', params: '109B MoE (17B active)', context: '10M', license: 'Llama License', notable: 'Open-weight MoE, multimodal', category: 'open-source', blogUrl: 'https://ai.meta.com/blog/llama-4-scout-maverick/' },
  { id: 'llama-4-maverick', date: '2025-04-05', provider: 'Meta', name: 'Llama 4 Maverick', params: '400B MoE (17B active)', context: '1M', license: 'Llama License', notable: 'Open-weight MoE, multimodal', category: 'open-source', blogUrl: 'https://ai.meta.com/blog/llama-4-scout-maverick/' },
  { id: 'phi-4-multimodal', date: '2025-04-10', provider: 'Microsoft', name: 'Phi-4-multimodal', params: '5.6B', context: '128K', license: 'MIT', notable: 'Vision+speech input, edge multimodal', category: 'multimodal' },
  { id: 'gpt-4.1', date: '2025-04-14', provider: 'OpenAI', name: 'GPT-4.1', context: '1M', costInput: 2.00, costOutput: 8.00, notable: 'Coding-optimized', category: 'coding' },
  { id: 'gpt-4.1-mini', date: '2025-04-14', provider: 'OpenAI', name: 'GPT-4.1 mini', context: '1M', costInput: 0.40, costOutput: 1.60, notable: 'Smaller coding variant', category: 'coding' },
  { id: 'gpt-4.1-nano', date: '2025-04-14', provider: 'OpenAI', name: 'GPT-4.1 nano', context: '1M', costInput: 0.10, costOutput: 0.40, notable: 'Smallest coding variant', category: 'small' },
  { id: 'o3', date: '2025-04-16', provider: 'OpenAI', name: 'o3', context: '200K', costInput: 2.00, costOutput: 8.00, notable: 'Agentic tool use', category: 'reasoning' },
  { id: 'o4-mini', date: '2025-04-16', provider: 'OpenAI', name: 'o4-mini', context: '200K', costInput: 1.10, costOutput: 4.40, notable: 'Agentic tool use', category: 'reasoning' },
  { id: 'qwen-3', date: '2025-04-29', provider: 'Alibaba', name: 'Qwen 3', params: '0.6B-235B MoE', context: '128K', license: 'Apache 2.0', notable: 'Hybrid thinking, 119 languages', category: 'open-source', paperUrl: 'https://arxiv.org/abs/2412.20164', blogUrl: 'https://qwenlm.github.io/blog/qwen3/' },
  { id: 'phi-4-reasoning', date: '2025-04-30', provider: 'Microsoft', name: 'Phi-4-reasoning', params: '14B', license: 'MIT', notable: 'RL-trained, outperforms 70B distills', category: 'reasoning' },
  { id: 'claude-4-sonnet', date: '2025-05-22', provider: 'Anthropic', name: 'Claude 4 Sonnet', context: '200K (1M beta)', costInput: 3.00, costOutput: 15.00, notable: 'ASL-3 safety', category: 'frontier' },
  { id: 'claude-4-opus', date: '2025-05-22', provider: 'Anthropic', name: 'Claude 4 Opus', context: '200K (1M beta)', costInput: 15.00, costOutput: 75.00, notable: 'ASL-3 safety', category: 'frontier' },
  { id: 'deepseek-r1-0528', date: '2025-05-28', provider: 'DeepSeek', name: 'DeepSeek R1-0528', params: '671B MoE', context: '128K', notable: 'AIME 70% to 87.5% upgrade', category: 'reasoning' },

  // 2025 Q3
  { id: 'o3-pro', date: '2025-06-10', provider: 'OpenAI', name: 'o3-pro', context: '200K', costInput: 20.00, costOutput: 80.00, notable: 'Max reliability', category: 'reasoning' },
  { id: 'gemma-3n', date: '2025-06-15', provider: 'Google', name: 'Gemma 3n', params: 'E2B (5B/2B) / E4B (8B/4B)', license: 'Gemma TOU', notable: 'Mobile-first, audio+vision', category: 'small' },
  { id: 'grok-4', date: '2025-07-09', provider: 'xAI', name: 'Grok 4', notable: 'Claimed SOTA', category: 'frontier' },
  { id: 'grok-4-heavy', date: '2025-07-09', provider: 'xAI', name: 'Grok 4 Heavy', notable: 'HLE: 50.7%', category: 'frontier' },
  { id: 'gpt-5', date: '2025-08-07', provider: 'OpenAI', name: 'GPT-5', context: '400K', costInput: 1.25, costOutput: 10.00, notable: 'Unified reasoning + conversation', category: 'frontier' },
  { id: 'gpt-5-mini', date: '2025-08-07', provider: 'OpenAI', name: 'GPT-5 mini', context: '400K', costInput: 0.25, costOutput: 2.00, notable: 'Smaller GPT-5 variant', category: 'frontier' },
  { id: 'gpt-5-nano', date: '2025-08-07', provider: 'OpenAI', name: 'GPT-5 nano', context: '400K', costInput: 0.05, costOutput: 0.40, notable: 'Budget GPT-5', category: 'small' },
  { id: 'deepseek-v3.1', date: '2025-08-21', provider: 'DeepSeek', name: 'DeepSeek V3.1', params: '671B MoE', context: '128K', license: 'MIT', notable: 'Hybrid thinking/non-thinking', category: 'open-source' },

  // 2025 Q4
  { id: 'claude-sonnet-4.5', date: '2025-09-29', provider: 'Anthropic', name: 'Claude Sonnet 4.5', context: '200K (1M beta)', costInput: 3.00, costOutput: 15.00, notable: 'SWE-bench 77.2%, AIME 100% w/ tools', category: 'coding', blogUrl: 'https://www.anthropic.com/news/claude-4-5-sonnet' },
  { id: 'claude-haiku-4.5', date: '2025-10-15', provider: 'Anthropic', name: 'Claude Haiku 4.5', context: '200K', costInput: 1.00, costOutput: 5.00, notable: 'SWE-bench 73.3%, extended thinking', category: 'small' },
  { id: 'kimi-k2.5', date: '2025-11-10', provider: 'Moonshot', name: 'Kimi K2.5', notable: 'LiveCodeBench 85%, open-source, #4 coding power rankings', category: 'open-source' },
  { id: 'gpt-5.1', date: '2025-11-13', provider: 'OpenAI', name: 'GPT-5.1', context: '400K', notable: 'Adaptive reasoning effort', category: 'frontier' },
  { id: 'grok-4.1', date: '2025-11-17', provider: 'xAI', name: 'Grok 4.1', notable: 'LMArena 1483 Elo (#1 at release)', category: 'frontier' },
  { id: 'gemini-3-pro', date: '2025-11-18', provider: 'Google', name: 'Gemini 3 Pro', context: '1M', costInput: 2.00, costOutput: 12.00, notable: 'LMArena 1501 (#1), GPQA 91.9%', category: 'frontier' },
  { id: 'claude-opus-4.5', date: '2025-11-24', provider: 'Anthropic', name: 'Claude Opus 4.5', context: '200K (1M beta)', costInput: 5.00, costOutput: 25.00, notable: '66% cheaper than Opus 4, best coding', category: 'frontier' },
  { id: 'mistral-large-3', date: '2025-12-02', provider: 'Mistral', name: 'Mistral Large 3', params: '675B MoE (41B active)', context: '256K', license: 'Apache 2.0', notable: 'Multimodal', category: 'open-source', blogUrl: 'https://mistral.ai/news/mistral-large-3/' },
  { id: 'ministral-3', date: '2025-12-02', provider: 'Mistral', name: 'Ministral 3', params: '3B/8B/14B', context: '256K', license: 'Apache 2.0', notable: 'Edge-first, reasoning variant', category: 'small' },
  { id: 'gpt-5.2', date: '2025-12-11', provider: 'OpenAI', name: 'GPT-5.2', context: '400K (128K output)', costInput: 1.75, costOutput: 14.00, notable: 'AIME 100%, ARC-AGI-1 90.5%', category: 'frontier' },
  { id: 'gemini-3-flash', date: '2025-12-17', provider: 'Google', name: 'Gemini 3 Flash', context: '1M', costInput: 0.50, costOutput: 3.00, notable: 'SWE-bench 78%, pro-grade at flash speed', category: 'frontier' },
  { id: 'glm-4.7', date: '2025-12-20', provider: 'Zhipu', name: 'GLM-4.7', notable: 'Chatbot Arena #19 (~1430 Elo), Chinese frontier model', category: 'frontier' },
  { id: 'deepseek-v3.2', date: '2025-12-25', provider: 'DeepSeek', name: 'DeepSeek V3.2', params: '671B MoE (37B active)', context: '128K', license: 'MIT', costInput: 0.28, costOutput: 0.42, notable: 'AIME 96%, MIT license', category: 'open-source', paperUrl: 'https://arxiv.org/abs/2501.02678', blogUrl: 'https://api-docs.deepseek.com/news/news1225' },

  // 2026
  { id: 'gpt-5.2-codex', date: '2026-01-14', provider: 'OpenAI', name: 'GPT-5.2-Codex', notable: 'SWE-bench Pro 56.4%, cybersecurity capabilities', category: 'coding' },
  { id: 'minimax-m2.5', date: '2026-01-20', provider: 'MiniMax', name: 'MiniMax M2.5', notable: 'SWE-bench 80.2% (open-weight), competitive with Claude Opus', category: 'open-source' },
  { id: 'gemma-3-270m', date: '2026-02-01', provider: 'Google', name: 'Gemma 3 270M', params: '270M', license: 'Gemma TOU', notable: 'Ultra-compact, 0.75% battery per 25 chats', category: 'small' },
  { id: 'claude-opus-4.6', date: '2026-02-05', provider: 'Anthropic', name: 'Claude Opus 4.6', context: '200K (1M beta, 128K output)', costInput: 5.00, costOutput: 25.00, notable: 'SWE-bench 80.8%, adaptive thinking', category: 'frontier', blogUrl: 'https://www.anthropic.com/news/claude-opus-4-6' },
  { id: 'gpt-5.3-codex-spark', date: '2026-02-12', provider: 'OpenAI', name: 'GPT-5.3-Codex-Spark', notable: 'Latest Codex variant', category: 'coding' },
  { id: 'gemini-3-deep-think', date: '2026-02-12', provider: 'Google', name: 'Gemini 3 Deep Think', notable: 'HLE 48.4%, ARC-AGI-2 84.6%, Codeforces 3455', category: 'reasoning' },
];
