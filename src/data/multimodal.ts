import type { ModalityEntry } from './types';

export const modalityMatrix: ModalityEntry[] = [
  { model: 'GPT-5.2', provider: 'OpenAI', textIn: true, imageIn: true, videoIn: true, audioIn: true, textOut: true, imageOut: true, audioOut: true, videoOut: false },
  { model: 'Claude Opus 4.6', provider: 'Anthropic', textIn: true, imageIn: true, videoIn: false, audioIn: false, textOut: true, imageOut: false, audioOut: false, videoOut: false },
  { model: 'Gemini 3 Pro', provider: 'Google', textIn: true, imageIn: true, videoIn: true, audioIn: true, textOut: true, imageOut: true, audioOut: true, videoOut: false },
  { model: 'Llama 4 Maverick', provider: 'Meta', textIn: true, imageIn: true, videoIn: false, audioIn: false, textOut: true, imageOut: false, audioOut: false, videoOut: false },
  { model: 'Qwen 2.5-Omni', provider: 'Alibaba', textIn: true, imageIn: true, videoIn: true, audioIn: true, textOut: true, imageOut: false, audioOut: true, videoOut: false },
  { model: 'Phi-4-multimodal', provider: 'Microsoft', textIn: true, imageIn: true, videoIn: false, audioIn: true, textOut: true, imageOut: false, audioOut: false, videoOut: false },
  { model: 'Gemma 3n E4B', provider: 'Google', textIn: true, imageIn: true, videoIn: true, audioIn: true, textOut: true, imageOut: false, audioOut: false, videoOut: false },
  { model: 'Qwen 3.5', provider: 'Alibaba', textIn: true, imageIn: true, videoIn: true, audioIn: false, textOut: true, imageOut: false, audioOut: false, videoOut: false },
  { model: 'Gemini 3.1 Pro', provider: 'Google', textIn: true, imageIn: true, videoIn: true, audioIn: true, textOut: true, imageOut: true, audioOut: true, videoOut: false },
  { model: 'Phi-4-reasoning-vision', provider: 'Microsoft', textIn: true, imageIn: true, videoIn: false, audioIn: false, textOut: true, imageOut: false, audioOut: false, videoOut: false },
];

export const videoGenModels = [
  { name: 'Sora 2', provider: 'OpenAI', release: 'Sep 2025', maxLength: '25s (Pro)', audio: 'Native dialogue + SFX', feature: 'Social app, Characters feature, ChatGPT integration coming' },
  { name: 'Veo 3 / 3.1', provider: 'Google', release: 'May 2025', maxLength: '8s (API), 2min (app)', audio: 'Native lip-sync + music', feature: '72% preference over Sora in MovieBench' },
  { name: 'Runway Gen-4', provider: 'Runway', release: '2025', maxLength: 'Variable, 4K upscale', audio: '-', feature: 'Director Mode, 65% of pro creators' },
  { name: 'Midjourney Video', provider: 'Midjourney', release: 'Jun 2025', maxLength: '5-21s', audio: '-', feature: 'From static MJ images' },
  { name: 'Kling AI 3.0', provider: 'Kuaishou', release: '2026', maxLength: '2min', audio: '-', feature: '4K output, camera controls, strong in China' },
  { name: 'Helios', provider: 'ByteDance', release: 'Mar 2026', maxLength: '60s', audio: '-', feature: '14B params, 19.5 FPS on single H100, Apache 2.0' },
  { name: 'LTX-2.3', provider: 'Lightricks', release: 'Mar 2026', maxLength: 'Variable', audio: 'Native synchronized', feature: '22B params, native 4K at 50 FPS, open-source' },
];

export const imageGenModels = [
  { name: 'gpt-image-1.5', provider: 'OpenAI', keyStrength: 'Prompt adherence, ChatGPT integration', pricing: '$0.01-$0.17/image' },
  { name: 'Midjourney v7', provider: 'Midjourney', keyStrength: 'Best artistic/aesthetic quality', pricing: '$10-$120/mo subscription' },
  { name: 'FLUX.1 Pro', provider: 'Black Forest Labs', keyStrength: '#1 photorealism', pricing: 'API-based' },
  { name: 'Imagen 4', provider: 'Google', keyStrength: 'GA in Gemini API, 2K resolution, text rendering', pricing: '~$0.039/image' },
  { name: 'Imagen 4 Fast', provider: 'Google', keyStrength: 'Speed-optimized, high-volume tasks', pricing: '$0.02/image' },
  { name: 'Stable Diffusion 3.5', provider: 'Stability AI', keyStrength: 'Open-source, maximum customization', pricing: 'Free (open)' },
];
