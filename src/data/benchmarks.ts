import type { BenchmarkEntry, ArenaEntry } from './types';

export const reasoningBenchmarks: BenchmarkEntry[] = [
  { model: 'Gemini 3 Deep Think', provider: 'Google', aime2025: 98.0, gpqaDiamond: 93.8, codeforcesElo: 3455, arcAgi2: 84.6, hle: 48.4, sweBenchVerified: 82.1 },
  { model: 'GPT-5.2', provider: 'OpenAI', aime2025: 100, gpqaDiamond: 92.4, sweBenchVerified: 80.0, arcAgi2: 52.9, hle: 34.5, codeforcesElo: 2845 },
  { model: 'Gemini 3 Pro', provider: 'Google', aime2025: 95.0, gpqaDiamond: 91.9, sweBenchVerified: 76.2, codeforcesElo: 2512, arcAgi2: 31.1, hle: 37.5 },
  { model: 'o4-mini', provider: 'OpenAI', aime2025: 92.7, gpqaDiamond: 81.4, math500: 97, arcAgi2: 2.4, sweBenchVerified: 71.5 },
  { model: 'o3', provider: 'OpenAI', aime2025: 88.9, gpqaDiamond: 83.3, math500: 97, sweBenchVerified: 69.1, codeforcesElo: 2727, arcAgi2: 3.0, hle: 20.3 },
  { model: 'Claude Opus 4.6', provider: 'Anthropic', aime2025: 94.0, gpqaDiamond: 88.0, sweBenchVerified: 80.8, codeforcesElo: 2352, arcAgi2: 68.8, hle: 40.0 },
  { model: 'Claude Opus 4.5', provider: 'Anthropic', aime2025: 92.5, gpqaDiamond: 86.5, sweBenchVerified: 80.9, codeforcesElo: 2298, arcAgi2: 58.2, hle: 38.1 },
  { model: 'DeepSeek R1-0528', provider: 'DeepSeek', aime2025: 87.5, gpqaDiamond: 80.0, sweBenchVerified: 65.0, codeforcesElo: 2156 },
  { model: 'DeepSeek V3.2', provider: 'DeepSeek', aime2025: 96.0, gpqaDiamond: 78.5, sweBenchVerified: 73.0, arcAgi2: 24.8 },
  { model: 'Grok 4.1', provider: 'xAI', aime2025: 91.0, gpqaDiamond: 87.2, sweBenchVerified: 74.5, hle: 35.2 },
  { model: 'DeepSeek R1', provider: 'DeepSeek', aime2025: 70.0, gpqaDiamond: 71.5, math500: 97.3, sweBenchVerified: 49.2, codeforcesElo: 2029 },
  { model: 'Claude Sonnet 4.5', provider: 'Anthropic', aime2025: 89.0, gpqaDiamond: 84.2, sweBenchVerified: 77.2, arcAgi2: 42.5 },
];

export const arenaLeaderboard: ArenaEntry[] = [
  { rank: 1, model: 'Gemini 3 Pro', provider: 'Google', elo: 1501 },
  { rank: 2, model: 'Grok 4.1', provider: 'xAI', elo: 1483 },
  { rank: 3, model: 'Gemini 3 Flash', provider: 'Google', elo: 1471 },
  { rank: 4, model: 'Claude Opus 4.6', provider: 'Anthropic', elo: 1469 },
  { rank: 5, model: 'Claude Opus 4.5', provider: 'Anthropic', elo: 1467 },
  { rank: 6, model: 'GPT-5.2', provider: 'OpenAI', elo: 1464 },
  { rank: 7, model: 'GPT-5.1', provider: 'OpenAI', elo: 1458 },
  { rank: 8, model: 'Grok 4', provider: 'xAI', elo: 1452 },
  { rank: 9, model: 'DeepSeek V3.2', provider: 'DeepSeek', elo: 1447 },
  { rank: 10, model: 'Claude Sonnet 4.5', provider: 'Anthropic', elo: 1445 },
];

export const codingArena: ArenaEntry[] = [
  { rank: 1, model: 'Claude Opus 4.6', provider: 'Anthropic', elo: 1518, category: 'Coding' },
  { rank: 2, model: 'Claude Opus 4.5', provider: 'Anthropic', elo: 1510, category: 'Coding' },
  { rank: 3, model: 'GPT-5.2-Codex', provider: 'OpenAI', elo: 1505, category: 'Coding' },
  { rank: 4, model: 'Gemini 3 Flash', provider: 'Google', elo: 1492, category: 'Coding' },
  { rank: 5, model: 'Claude Sonnet 4.5', provider: 'Anthropic', elo: 1485, category: 'Coding' },
];

export const sweBenchLeaderboard: ArenaEntry[] = [
  { rank: 1, model: 'Gemini 3 Deep Think', provider: 'Google', elo: 82.1, category: 'SWE-bench' },
  { rank: 2, model: 'Claude Opus 4.5', provider: 'Anthropic', elo: 80.9, category: 'SWE-bench' },
  { rank: 3, model: 'Claude Opus 4.6', provider: 'Anthropic', elo: 80.8, category: 'SWE-bench' },
  { rank: 4, model: 'MiniMax M2.5', provider: 'MiniMax', elo: 80.2, category: 'SWE-bench' },
  { rank: 5, model: 'GPT-5.2', provider: 'OpenAI', elo: 80.0, category: 'SWE-bench' },
  { rank: 6, model: 'Gemini 3 Flash', provider: 'Google', elo: 78.0, category: 'SWE-bench' },
  { rank: 7, model: 'Claude Sonnet 4.5', provider: 'Anthropic', elo: 77.2, category: 'SWE-bench' },
  { rank: 8, model: 'Gemini 3 Pro', provider: 'Google', elo: 76.2, category: 'SWE-bench' },
  { rank: 9, model: 'Grok 4.1', provider: 'xAI', elo: 74.5, category: 'SWE-bench' },
  { rank: 10, model: 'DeepSeek V3.2', provider: 'DeepSeek', elo: 73.0, category: 'SWE-bench' },
];

export const aiderLeaderboard = [
  { rank: 1, model: 'GPT-5.2 (high)', provider: 'OpenAI' as const, score: 89.5, costPerRun: 32.15 },
  { rank: 2, model: 'GPT-5 (high)', provider: 'OpenAI' as const, score: 88.0, costPerRun: 29.08 },
  { rank: 3, model: 'Claude Opus 4.6 (thinking)', provider: 'Anthropic' as const, score: 87.8, costPerRun: 58.42 },
  { rank: 4, model: 'GPT-5 (medium)', provider: 'OpenAI' as const, score: 86.7, costPerRun: 17.69 },
  { rank: 5, model: 'Gemini 3 Flash', provider: 'Google' as const, score: 85.2, costPerRun: 8.45 },
  { rank: 6, model: 'o3-pro (high)', provider: 'OpenAI' as const, score: 84.9, costPerRun: 146.32 },
  { rank: 7, model: 'Gemini 2.5 Pro (32k think)', provider: 'Google' as const, score: 83.1, costPerRun: 49.88 },
  { rank: 8, model: 'o3 (high)', provider: 'OpenAI' as const, score: 81.3, costPerRun: 21.23 },
  { rank: 9, model: 'DeepSeek V3.2', provider: 'DeepSeek' as const, score: 74.2, costPerRun: 1.30 },
  { rank: 10, model: 'Claude Haiku 4.5', provider: 'Anthropic' as const, score: 71.5, costPerRun: 3.85 },
];

export const mmluProScores = [
  { model: 'GPT-5.2 (xhigh)', provider: 'OpenAI' as const, score: 90.2 },
  { model: 'Gemini 3 Pro (high)', provider: 'Google' as const, score: 89.8 },
  { model: 'Claude Opus 4.6 (reasoning)', provider: 'Anthropic' as const, score: 89.7 },
  { model: 'Claude Opus 4.5 (reasoning)', provider: 'Anthropic' as const, score: 89.5 },
  { model: 'Gemini 3 Flash', provider: 'Google' as const, score: 88.0 },
  { model: 'DeepSeek V3.2', provider: 'DeepSeek' as const, score: 86.8 },
];
