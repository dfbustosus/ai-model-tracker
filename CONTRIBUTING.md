# Contributing to AI Model Tracker

Thank you for your interest in contributing! This project tracks the fast-moving AI model landscape, and community contributions are essential to keeping it accurate and current.

## How to Contribute

### Report Incorrect Data

If you notice outdated pricing, wrong benchmark scores, or missing models:

1. Open an [issue](https://github.com/dfbustosus/ai-model-tracker/issues/new?template=bug.md) with the correct data and a source link
2. Or submit a PR directly (see below)

### Add a New Model

1. Fork the repository
2. Add model data to the relevant files in `src/data/`:
   - `models.ts` — Required: model name, provider, release date, category
   - `benchmarks.ts` — If benchmark scores are available
   - `pricing.ts` — If API pricing is available
   - `smallModels.ts` — If it's a model under 10B parameters
   - `multimodal.ts` — If it has multimodal capabilities
3. Ensure the model's provider exists in `types.ts` (add to `Provider` type and `PROVIDER_COLORS` if new)
4. Run `npm run build` to verify no TypeScript errors
5. Submit a PR using the pull request template

### Fix Bugs or Improve the UI

1. Fork the repository
2. Create a feature branch: `git checkout -b fix/description`
3. Make your changes
4. Run the quality checks:
   ```bash
   npm run typecheck
   npm run lint
   npm run build
   ```
5. Submit a PR

## Development Setup

```bash
git clone https://github.com/dfbustosus/ai-model-tracker.git
cd ai-model-tracker
npm install
npm run dev
```

## Code Style

- TypeScript strict mode is enabled
- Prettier handles formatting (`npm run format`)
- ESLint handles linting (`npm run lint`)
- Use `import type` for type-only imports

## Data Guidelines

- All data must have a verifiable source (official blog post, API docs, paper)
- Benchmark scores should come from official leaderboards or papers
- Pricing should reflect current published API rates
- Models should be sorted chronologically in `models.ts`

## Pull Request Guidelines

- Keep PRs focused — one model or one fix per PR
- Include source links for any data changes
- Ensure `npm run build` passes
- Fill out the PR template completely
