export type Provider =
  | 'OpenAI' | 'Anthropic' | 'Google' | 'Meta' | 'DeepSeek'
  | 'Mistral' | 'xAI' | 'Alibaba' | 'Microsoft' | 'Cohere'
  | 'MiniMax' | 'Moonshot' | 'Zhipu' | 'Apple'
  | 'Stability AI' | 'Black Forest Labs' | 'Midjourney' | 'Runway'
  | 'Kuaishou' | 'Amazon';

export interface ModelRelease {
  id: string;
  date: string;
  provider: Provider;
  name: string;
  params?: string;
  context?: string;
  license?: string;
  costInput?: number;
  costOutput?: number;
  notable: string;
  category: 'frontier' | 'reasoning' | 'small' | 'open-source' | 'multimodal' | 'coding' | 'image-gen' | 'video-gen';
}

export interface BenchmarkEntry {
  model: string;
  provider: Provider;
  aime2025?: number;
  gpqaDiamond?: number;
  math500?: number;
  sweBenchVerified?: number;
  codeforcesElo?: number;
  arcAgi2?: number;
  hle?: number;
  mmluPro?: number;
}

export interface ArenaEntry {
  rank: number;
  model: string;
  provider: Provider;
  elo: number;
  category?: string;
}

export interface PricingEntry {
  model: string;
  provider: Provider;
  inputCost: number;
  outputCost: number;
  context: string;
  tier: 'Budget' | 'Mid' | 'High' | 'Premium' | 'Ultra';
}

export interface CodingTool {
  name: string;
  type: string;
  pricing: string;
  models: string;
  keyFeature: string;
}

export interface LocalTool {
  name: string;
  type: string;
  keyStrength: string;
  formats: string;
  bestFor: string;
}

export interface SmallModel {
  name: string;
  provider: Provider | string;
  params: string;
  release: string;
  context: string;
  license: string;
  keyStrength: string;
  target: string;
}

export interface ModalityEntry {
  model: string;
  provider: Provider;
  textIn: boolean;
  imageIn: boolean;
  videoIn: boolean;
  audioIn: boolean;
  textOut: boolean;
  imageOut: boolean;
  audioOut: boolean;
  videoOut: boolean;
}

export const PROVIDER_COLORS: Record<string, string> = {
  'OpenAI': '#10a37f',
  'Anthropic': '#d4a574',
  'Google': '#4285f4',
  'Meta': '#0668e1',
  'DeepSeek': '#4a90d9',
  'Mistral': '#f97316',
  'xAI': '#1d9bf0',
  'Alibaba': '#ff6a00',
  'Microsoft': '#00a4ef',
  'Cohere': '#39594d',
  'Stability AI': '#7c3aed',
  'Black Forest Labs': '#ec4899',
  'Midjourney': '#e11d48',
  'Runway': '#06b6d4',
  'Kuaishou': '#f59e0b',
  'Amazon': '#ff9900',
  'MiniMax': '#6d28d9',
  'Moonshot': '#0ea5e9',
  'Zhipu': '#dc2626',
  'Apple': '#a3a3a3',
};
