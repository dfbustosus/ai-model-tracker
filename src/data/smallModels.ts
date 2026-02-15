import type { SmallModel } from './types';

export const smallModels: SmallModel[] = [
  { name: 'Phi-4-mini', provider: 'Microsoft', params: '3.8B', release: 'Feb 2025', context: '128K', license: 'MIT', keyStrength: "Math (AIME'24: 52.3%), 20+ languages", target: 'Edge, mobile' },
  { name: 'Phi-4-mini-reasoning', provider: 'Microsoft', params: '3.8B', release: 'May 2025', context: '128K', license: 'MIT', keyStrength: 'Reasoning parity with 70B distills', target: 'Edge reasoning' },
  { name: 'Gemma 3 1B', provider: 'Google', params: '1B', release: 'Mar 2025', context: '32K', license: 'Gemma TOU', keyStrength: 'Ultra-lightweight text', target: 'Mobile, embedded' },
  { name: 'Gemma 3 4B', provider: 'Google', params: '4B', release: 'Mar 2025', context: '128K', license: 'Gemma TOU', keyStrength: 'Multimodal, beats Gemma 2-27B', target: 'Laptop, single GPU' },
  { name: 'Gemma 3n E2B', provider: 'Google', params: '5B (2B active)', release: 'Jun 2025', context: '32K', license: 'Gemma TOU', keyStrength: 'Text+image+audio+video, mobile-first', target: 'Mobile, on-device' },
  { name: 'Gemma 3 270M', provider: 'Google', params: '270M', release: 'Feb 2026', context: '-', license: 'Gemma TOU', keyStrength: 'Ultra-compact, 0.75% battery per 25 chats', target: 'IoT, task-specific' },
  { name: 'Qwen 2.5 0.5B', provider: 'Alibaba', params: '0.5B', release: 'Sep 2024', context: '128K', license: 'Apache 2.0', keyStrength: 'Outperforms Gemma2-2.6B on math', target: 'Edge, IoT' },
  { name: 'Qwen 2.5 7B', provider: 'Alibaba', params: '7B', release: 'Sep 2024', context: '128K', license: 'Apache 2.0', keyStrength: 'MMLU 74.2, HumanEval 84.8', target: 'Desktop, single GPU' },
  { name: 'Qwen3 4B', provider: 'Alibaba', params: '4B', release: 'Apr 2025', context: '256K', license: 'Apache 2.0', keyStrength: 'Rivals Qwen2.5-72B in thinking mode', target: 'Laptop' },
  { name: 'Qwen3 8B', provider: 'Alibaba', params: '8B', release: 'Apr 2025', context: '40K', license: 'Apache 2.0', keyStrength: 'Matches Qwen2.5-14B', target: 'Desktop' },
  { name: 'SmolLM2 1.7B', provider: 'Hugging Face', params: '1.7B', release: 'Nov 2024', context: '-', license: 'Apache 2.0', keyStrength: 'Outperforms Llama 1B, 11T training tokens', target: 'On-device' },
  { name: 'SmolLM3', provider: 'Hugging Face', params: '3B', release: 'Mid-2025', context: '64K-128K', license: 'Apache 2.0', keyStrength: 'Dual-mode reasoning, fully transparent', target: 'Edge, laptop' },
  { name: 'Llama 3.2 1B/3B', provider: 'Meta', params: '1B/3B', release: 'Sep 2024', context: '128K', license: 'Llama License', keyStrength: 'Qualcomm/MediaTek/Arm optimized', target: 'Mobile, edge' },
  { name: 'Ministral 3 (3B)', provider: 'Mistral', params: '3.4B', release: 'Dec 2025', context: '256K', license: 'Apache 2.0', keyStrength: 'Vision+text, edge-first, reasoning variant', target: 'Drones, robots, phones' },
  { name: 'Ministral 3 (8B)', provider: 'Mistral', params: '8B', release: 'Dec 2025', context: '256K', license: 'Apache 2.0', keyStrength: 'Multimodal, 3 variants per size', target: 'Laptop, single GPU' },
  { name: 'DeepSeek R1-Distill 7B', provider: 'DeepSeek', params: '7B', release: 'Jan 2025', context: '128K', license: 'MIT', keyStrength: 'Reasoning from R1, Qwen2.5 base', target: 'Self-hosted reasoning' },
];
