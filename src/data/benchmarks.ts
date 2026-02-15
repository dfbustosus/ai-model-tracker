import type { BenchmarkEntry, ArenaEntry } from './types';

export const reasoningBenchmarks: BenchmarkEntry[] = [
  { model: 'o3', provider: 'OpenAI', aime2025: 88.9, gpqaDiamond: 83.3, math500: 97, sweBenchVerified: 69.1, codeforcesElo: 2727, arcAgi2: 3.0, hle: 20.3 },
  { model: 'o4-mini', provider: 'OpenAI', aime2025: 92.7, gpqaDiamond: 81.4, math500: 97, arcAgi2: 2.4 },
  { model: 'DeepSeek R1', provider: 'DeepSeek', aime2025: 70, gpqaDiamond: 71.5, math500: 97.3, sweBenchVerified: 49.2, codeforcesElo: 2029 },
  { model: 'R1-0528', provider: 'DeepSeek', aime2025: 87.5, gpqaDiamond: 80, sweBenchVerified: 65 },
  { model: 'Claude Opus 4.6', provider: 'Anthropic', gpqaDiamond: 88, sweBenchVerified: 80.8, codeforcesElo: 2352, arcAgi2: 68.8, hle: 40.0 },
  { model: 'Gemini 3 Pro', provider: 'Google', aime2025: 95.0, gpqaDiamond: 91.9, sweBenchVerified: 76.2, codeforcesElo: 2512, arcAgi2: 31.1, hle: 37.5 },
  { model: 'Gemini 3 Deep Think', provider: 'Google', gpqaDiamond: 93.8, codeforcesElo: 3455, arcAgi2: 84.6, hle: 48.4 },
  { model: 'GPT-5.2', provider: 'OpenAI', aime2025: 100, gpqaDiamond: 92.4, sweBenchVerified: 80.0, arcAgi2: 52.9, hle: 34.5 },
];

export const arenaLeaderboard: ArenaEntry[] = [
  { rank: 1, model: 'Gemini 3 Pro', provider: 'Google', elo: 1492 },
  { rank: 2, model: 'Grok 4.1 Thinking', provider: 'xAI', elo: 1480 },
  { rank: 3, model: 'Gemini 3 Flash', provider: 'Google', elo: 1471 },
  { rank: 4, model: 'Claude Opus 4.5', provider: 'Anthropic', elo: 1467 },
  { rank: 5, model: 'GPT-5.2', provider: 'OpenAI', elo: 1464 },
];

export const codingArena: ArenaEntry[] = [
  { rank: 1, model: 'Claude Opus 4.5 (Thinking)', provider: 'Anthropic', elo: 1510, category: 'Coding' },
];

export const sweBenchLeaderboard: ArenaEntry[] = [
  { rank: 1, model: 'Claude Opus 4.5', provider: 'Anthropic', elo: 80.9, category: 'SWE-bench' },
  { rank: 2, model: 'Claude Opus 4.6', provider: 'Anthropic', elo: 80.8, category: 'SWE-bench' },
  { rank: 3, model: 'MiniMax M2.5', provider: 'MiniMax', elo: 80.2, category: 'SWE-bench' },
  { rank: 4, model: 'GPT-5.2 Pro', provider: 'OpenAI', elo: 80.0, category: 'SWE-bench' },
  { rank: 5, model: 'Claude Opus 4.6 (Thinking)', provider: 'Anthropic', elo: 79.2, category: 'SWE-bench' },
  { rank: 6, model: 'Gemini 3 Flash', provider: 'Google', elo: 78.0, category: 'SWE-bench' },
  { rank: 7, model: 'Claude Sonnet 4.5', provider: 'Anthropic', elo: 77.2, category: 'SWE-bench' },
  { rank: 8, model: 'Gemini 3 Pro', provider: 'Google', elo: 76.2, category: 'SWE-bench' },
  { rank: 9, model: 'DeepSeek V3.2', provider: 'DeepSeek', elo: 73.0, category: 'SWE-bench' },
  { rank: 10, model: 'Claude Haiku 4.5', provider: 'Anthropic', elo: 73.3, category: 'SWE-bench' },
];

export const aiderLeaderboard = [
  { rank: 1, model: 'GPT-5 (high)', provider: 'OpenAI' as const, score: 88.0, costPerRun: 29.08 },
  { rank: 2, model: 'GPT-5 (medium)', provider: 'OpenAI' as const, score: 86.7, costPerRun: 17.69 },
  { rank: 3, model: 'o3-pro (high)', provider: 'OpenAI' as const, score: 84.9, costPerRun: 146.32 },
  { rank: 4, model: 'Gemini 2.5 Pro (32k think)', provider: 'Google' as const, score: 83.1, costPerRun: 49.88 },
  { rank: 5, model: 'o3 (high)', provider: 'OpenAI' as const, score: 81.3, costPerRun: 21.23 },
  { rank: 6, model: 'DeepSeek V3.2-Exp', provider: 'DeepSeek' as const, score: 74.2, costPerRun: 1.30 },
];

export const mmluProScores = [
  { model: 'Gemini 3 Pro (high)', provider: 'Google' as const, score: 89.8 },
  { model: 'Claude Opus 4.5 (Reasoning)', provider: 'Anthropic' as const, score: 89.5 },
  { model: 'GPT-5.2 (xhigh)', provider: 'OpenAI' as const, score: 89.0 },
  { model: 'Gemini 3 Flash', provider: 'Google' as const, score: 88.0 },
];
