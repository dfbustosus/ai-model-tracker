# AI Model Tracker

**The Complete 2025-2026 AI Model Landscape**

Track and compare 80+ AI models across benchmarks, pricing, and capabilities. From GPT-5.2 to Gemini 3 Deep Think to DeepSeek V3.2.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)

## What's Inside

- **Timeline** - 50+ model releases from Dec 2024 to Feb 2026, searchable and filterable
- **Benchmarks** - Interactive charts for LMArena, SWE-bench, AIME, GPQA, ARC-AGI-2, HLE
- **Pricing** - Full API pricing comparison across 25+ models with tier filtering
- **Reasoning Models** - Architecture comparison of o3, DeepSeek R1, Claude Extended Thinking, Gemini Deep Think
- **Small Models** - 16 edge-deployable models under 10B parameters
- **Multimodal** - Input/output modality matrix, video generation, image generation
- **Coding Tools** - 9 AI coding tools from GitHub Copilot to Claude Code to Cursor
- **Local LLMs** - 7 tools for running models locally (Ollama, LM Studio, vLLM, etc.)
- **Open vs Closed** - Gap analysis showing open models trail by just 3 months
- **Industry News** - Funding rounds, Stargate project, market trends

## Quick Start

```bash
# Clone the repo
git clone https://github.com/your-username/ai-model-tracker.git
cd ai-model-tracker

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| [React 19](https://react.dev) | UI framework |
| [TypeScript 5.9](https://typescriptlang.org) | Type safety |
| [Vite 7](https://vite.dev) | Build tool |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling |
| [Recharts 2](https://recharts.org) | Charts and data visualization |
| [Lucide React](https://lucide.dev) | Icons |

## Project Structure

```
ai-model-tracker/
├── public/
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── Timeline.tsx
│   │   ├── BenchmarkCharts.tsx
│   │   ├── PricingTable.tsx
│   │   ├── ReasoningModels.tsx
│   │   ├── SmallModelsTable.tsx
│   │   ├── MultimodalSection.tsx
│   │   ├── CodingToolsSection.tsx
│   │   ├── LocalLLMsSection.tsx
│   │   ├── OpenVsClosedSection.tsx
│   │   ├── IndustryNews.tsx
│   │   └── Footer.tsx
│   ├── data/             # All model data
│   │   ├── types.ts
│   │   ├── models.ts
│   │   ├── benchmarks.ts
│   │   ├── pricing.ts
│   │   ├── tools.ts
│   │   ├── smallModels.ts
│   │   ├── multimodal.ts
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Key Data Points

- **80+ models** from 10+ providers tracked
- **8 benchmark categories** with interactive visualizations
- **350x price range** from $0.28 to $80 per million output tokens
- **Feb 2026 data** - the most current landscape available

## Contributing

Contributions welcome! To add a new model or update data:

1. Fork the repo
2. Edit the relevant file in `src/data/`
3. Submit a PR

## License

MIT License - see [LICENSE](LICENSE)
