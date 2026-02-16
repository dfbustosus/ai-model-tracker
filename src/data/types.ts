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
  paperUrl?: string;
  blogUrl?: string;
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
  'OpenAI': '#10b981',        // Vibrant emerald green
  'Anthropic': '#f59e0b',     // Bright amber/gold
  'Google': '#3b82f6',        // Vivid blue
  'Meta': '#0ea5e9',          // Bright sky blue
  'DeepSeek': '#6366f1',      // Vibrant indigo
  'Mistral': '#f97316',       // Bold orange (kept)
  'xAI': '#06b6d4',           // Bright cyan
  'Alibaba': '#ff6a00',       // Vibrant orange (kept)
  'Microsoft': '#0ea5e9',     // Bright sky blue
  'Cohere': '#14b8a6',        // Vibrant teal
  'Stability AI': '#8b5cf6',  // Bright violet
  'Black Forest Labs': '#ec4899', // Hot pink (kept)
  'Midjourney': '#f43f5e',    // Bright rose
  'Runway': '#14b8a6',        // Vibrant teal
  'Kuaishou': '#facc15',      // Bright yellow
  'Amazon': '#f97316',        // Bold orange
  'MiniMax': '#a855f7',       // Bright purple
  'Moonshot': '#06b6d4',      // Bright cyan
  'Zhipu': '#ef4444',         // Vibrant red
  'Apple': '#94a3b8',         // Light slate gray
};
