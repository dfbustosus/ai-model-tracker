import type { CodingTool, LocalTool } from './types';

export const codingTools: CodingTool[] = [
  { name: 'GitHub Copilot', type: 'IDE plugin', pricing: 'Free-$39/mo', models: 'GPT-5 mini, GPT-4.1, Claude Opus 4.5/4.6', keyFeature: 'Agent Mode, Coding Agent for PRs, widest IDE support' },
  { name: 'Cursor', type: 'AI-native IDE', pricing: 'Free-$200/mo', models: 'Claude Opus 4.5/4.6, GPT-5.2, Gemini 3', keyFeature: 'Background Agents, Mission Control, $10B valuation' },
  { name: 'Claude Code', type: 'Terminal CLI', pricing: '$20-$200/mo', models: 'Claude Sonnet 4.5, Opus 4.5/4.6', keyFeature: 'Deep codebase understanding, $2.5B ARR, 30-hour sessions' },
  { name: 'Windsurf', type: 'AI-native IDE + plugins', pricing: 'Free-$60/mo', models: 'Claude Opus 4.6, GPT-5.2-Codex, Gemini 3 Flash', keyFeature: 'Cascade agent, Arena Mode, Plan Mode' },
  { name: 'Cline', type: 'VS Code extension', pricing: 'Free (BYOK)', models: 'Any model (Claude, GPT, Gemini, local)', keyFeature: 'Open-source (29K+ stars), model-agnostic, ~$0.04/request' },
  { name: 'Aider', type: 'Terminal CLI', pricing: 'Free (open-source)', models: 'Any model via API or local', keyFeature: 'Git-native, best for incremental changes' },
  { name: 'Amazon Q Developer', type: 'IDE plugin', pricing: 'Free-$19/mo', models: 'Amazon models', keyFeature: 'Deep AWS integration, security scanning' },
  { name: 'Google Antigravity', type: 'Cloud IDE', pricing: 'Free (preview)', models: 'Gemini models', keyFeature: 'Parallel agent orchestration (5 simultaneous agents)' },
  { name: 'Kimi Code', type: 'Terminal + IDE', pricing: 'Free (open-source)', models: 'Kimi K2.5', keyFeature: '#4 in power rankings, agentic coding' },
];

export const localTools: LocalTool[] = [
  { name: 'Ollama', type: 'CLI (100K+ GitHub stars)', keyStrength: 'Docker-like simplicity, massive ecosystem', formats: 'GGUF', bestFor: 'Default choice, integrations' },
  { name: 'LM Studio', type: 'Desktop GUI', keyStrength: 'Most accessible, Vulkan offloading', formats: 'GGUF', bestFor: 'Beginners, no-GPU machines' },
  { name: 'llama.cpp', type: 'C/C++ engine', keyStrength: 'Maximum performance, foundation for Ollama', formats: 'GGUF', bestFor: 'Power users, edge deployment' },
  { name: 'vLLM', type: 'Production server', keyStrength: 'PagedAttention, 2-4x throughput vs naive', formats: 'Safetensors, HF', bestFor: 'Production APIs, high-traffic' },
  { name: 'LocalAI', type: 'Full stack', keyStrength: 'OpenAI drop-in replacement, multimodal', formats: 'GGUF, GPTQ, AWQ, Safetensors', bestFor: 'Multimodal local AI' },
  { name: 'GPT4All', type: 'Desktop app', keyStrength: 'Zero-setup, offline', formats: 'GGUF', bestFor: 'Casual users, Windows' },
  { name: 'Jan.ai', type: 'Desktop app (AGPLv3)', keyStrength: 'Privacy-first, fully open-source', formats: 'GGUF', bestFor: 'Privacy advocates' },
];
