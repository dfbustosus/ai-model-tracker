<div align="center">

# AI Model Tracker

### The Complete 2025-2026 AI Model Landscape

Track, compare, and visualize **80+ AI models** across benchmarks, pricing, and capabilities.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-4f46e5?style=for-the-badge&logo=github)](https://dfbustosus.github.io/ai-model-tracker)
[![GitHub Stars](https://img.shields.io/github/stars/dfbustosus/ai-model-tracker?style=for-the-badge&logo=github&color=yellow)](https://github.com/dfbustosus/ai-model-tracker/stargazers)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

![React](https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript_5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?logo=vite&logoColor=white)

---

**GPT-5.2 vs Gemini 3 Deep Think vs Claude Opus 4.6 vs DeepSeek V3.2** — which model wins on which benchmark, and at what cost? Stop Googling. Start tracking.

</div>

## Why This Exists

The AI model landscape changes weekly. New releases, new benchmarks, new pricing — scattered across dozens of blog posts, tweets, and papers. This project puts **everything in one place** with interactive visualizations so you can actually make informed decisions.

> **Last updated:** February 2026 &mdash; Data from 14+ providers, 55+ model releases, 8 benchmark categories

## Features

| Section | What You Get |
|---------|-------------|
| **Timeline** | 55+ model releases (Dec 2024 - Feb 2026) with search, filter by category |
| **Benchmarks** | Interactive charts: LMArena Elo, SWE-bench Verified, AIME 2025, GPQA Diamond, ARC-AGI-2, HLE, Aider Polyglot, MMLU-Pro |
| **Pricing** | 25 models compared side-by-side with table/chart toggle and tier filtering (Budget to Ultra) |
| **Reasoning** | Architecture deep-dive: o3 vs DeepSeek R1 vs Claude Extended Thinking vs Gemini Deep Think vs QwQ-32B |
| **Small Models** | 16 edge-deployable models under 10B params — from Gemma 3 270M to Qwen3 8B |
| **Multimodal** | Input/output modality matrix + video gen (Sora 2, Veo 3) + image gen (Midjourney v7, FLUX.1) |
| **Coding Tools** | 9 tools: GitHub Copilot, Cursor ($10B), Claude Code ($2.5B ARR), Windsurf, Cline, Aider |
| **Local LLMs** | 7 tools for running models locally — Ollama, LM Studio, vLLM, llama.cpp |
| **Open vs Closed** | Gap analysis with bar charts — open models now trail by just ~3 months |
| **Industry** | $30B Anthropic round, $500B Stargate project, Yann LeCun's new lab, $2T market cap evaporation |

## Quick Start

```bash
git clone https://github.com/dfbustosus/ai-model-tracker.git
cd ai-model-tracker
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and you're in.

### Other Commands

```bash
npm run build     # Production build (code-split, ~220KB initial)
npm run preview   # Preview production build locally
npm run lint      # ESLint check
```

## Tech Stack

| | Technology | Why |
|---|-----------|-----|
| **Framework** | [React 19](https://react.dev) | Latest with concurrent features |
| **Language** | [TypeScript 5.9](https://typescriptlang.org) | Full type safety across all data |
| **Build** | [Vite 7](https://vite.dev) | Sub-2s builds, instant HMR |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) | Zero runtime, dark theme |
| **Charts** | [Recharts 2](https://recharts.org) | Declarative, responsive SVG charts |
| **Icons** | [Lucide React](https://lucide.dev) | 1,500+ consistent icons |
| **Deploy** | [GitHub Pages](https://pages.github.com) | Free, auto-deploy via Actions |

## Project Structure

```
src/
├── components/          # 15 React components
│   ├── Header.tsx       # Fixed nav, 10 section links, mobile responsive
│   ├── Hero.tsx         # Landing with radial gradient + CTAs
│   ├── Timeline.tsx     # Searchable/filterable model timeline
│   ├── BenchmarkCharts.tsx  # 5-tab interactive charts (lazy-loaded)
│   ├── PricingTable.tsx     # Table + chart views (lazy-loaded)
│   ├── OpenVsClosedSection.tsx  # Comparison charts (lazy-loaded)
│   └── ...              # 9 more section components
├── data/                # Pure TypeScript data layer
│   ├── types.ts         # Interfaces + provider color map
│   ├── models.ts        # 55+ model releases with full metadata
│   ├── benchmarks.ts    # Arena, SWE-bench, reasoning, Aider, MMLU
│   ├── pricing.ts       # 25 models with input/output/tier
│   ├── tools.ts         # Coding tools + local LLM tools
│   ├── smallModels.ts   # 16 small language models
│   └── multimodal.ts    # Modality matrix + video/image gen
├── App.tsx              # Main app with lazy loading + smooth scroll
├── main.tsx             # React root
└── index.css            # Tailwind + custom theme (14 provider colors)
```

## Performance

- **Code-split**: 9 lazy-loaded sections, Recharts loaded on-demand
- **Initial bundle**: ~220KB (down from 645KB monolith)
- **Lighthouse**: Optimized for Core Web Vitals
- **SEO**: Open Graph meta tags, semantic HTML, descriptive titles

## Data Coverage

### Providers Tracked (14+)

| Provider | Models | Notable |
|----------|--------|---------|
| OpenAI | GPT-5.x, o3/o4, GPT-4.1 | AIME 100% (GPT-5.2) |
| Anthropic | Claude 3.7 through Opus 4.6 | SWE-bench #1 (80.8%) |
| Google | Gemini 2.0/2.5/3, Gemma 3/3n | ARC-AGI-2 84.6% (Deep Think) |
| DeepSeek | V3/V3.1/V3.2, R1 | $0.42/MTok output, MIT license |
| Meta | Llama 3.3, 4 Scout/Maverick | 10M context (Scout) |
| Mistral | Small 3, Large 3, Ministral 3 | 675B MoE, Apache 2.0 |
| xAI | Grok 3, 4, 4.1 | LMArena #2 |
| Alibaba | Qwen 2.5/3, Omni | 119 languages |
| Microsoft | Phi-4, Phi-4-mini/reasoning | 3.8B beats 70B distills |
| MiniMax | M2.5 | SWE-bench 80.2% (open-weight) |
| Moonshot | Kimi K2.5 | LiveCodeBench 85% |
| + more | Cohere, Zhipu, Apple... | |

### Key Numbers

| Metric | Value |
|--------|-------|
| Models tracked | 55+ |
| Benchmark categories | 8 |
| Price range | 350x ($0.14 - $80/MTok) |
| Providers | 14+ |
| Open vs closed gap | ~3 months |
| Data currency | February 2026 |

## Contributing

We welcome contributions! The easiest way to help:

### Add a New Model

1. Fork the repo
2. Add the model to `src/data/models.ts`
3. Add benchmark data to `src/data/benchmarks.ts` (if available)
4. Add pricing to `src/data/pricing.ts` (if available)
5. Run `npm run build` to verify
6. Submit a PR using the template

### Update Existing Data

Found outdated pricing or a new benchmark score? Edit the relevant file in `src/data/` and submit a PR with a source link.

### Report Issues

Use the [issue templates](https://github.com/dfbustosus/ai-model-tracker/issues/new/choose) for:
- **New Model** requests
- **Bug Reports** for incorrect data or UI issues

## Deployment

Auto-deploys to GitHub Pages on every push to `main` via GitHub Actions.

To enable:
1. Push to GitHub
2. Go to **Settings > Pages**
3. Set Source to **GitHub Actions**
4. Your site is live at `https://<username>.github.io/ai-model-tracker/`

Alternative: Deploy to Vercel or Netlify by connecting your repo — zero config needed.

## License

[MIT](LICENSE) - Use it, fork it, build on it.

---

<div align="center">

**If this helped you navigate the AI landscape, consider giving it a star.**

[Report Bug](https://github.com/dfbustosus/ai-model-tracker/issues) · [Request Model](https://github.com/dfbustosus/ai-model-tracker/issues/new?template=new-model.md) · [Contribute](https://github.com/dfbustosus/ai-model-tracker/pulls)

</div>
