# Changelog

All notable changes to AI Model Tracker will be documented in this file.

## [1.1.0] - 2026-02-15

### 🚀 Major Features Added

**Model Comparison Tool**
- Side-by-side comparison of up to 3 models
- Compare benchmarks, pricing, parameters, and resources
- Interactive selection from all 60+ models
- Real-time filtering and search

**Research Citations**
- Added arXiv paper links to 12+ major models
- Added official blog post links to 15+ releases
- Integrated "Paper" and "Blog" buttons in Timeline
- Establishes repository as research resource, not just tracker

**Social Sharing**
- Twitter and LinkedIn share buttons in Hero section
- Pre-populated share text with project description
- Drives virality and community engagement

**PWA Support**
- Progressive Web App manifest for installability
- Themed app icons (192x192, 512x512)
- Offline-capable with proper meta tags
- "Add to Home Screen" on mobile devices

### ✨ Enhancements

**Data Improvements**
- Fixed chronological ordering in models.ts (63 entries, Q1-Q4 2025 + 2026)
- Added QwQ-32B (missing reasoning model from Alibaba)
- Fixed pricing inconsistencies (removed phantom models, split combined entries)
- Added missing cost data to Grok 3 and GPT-4.1 mini

**Accessibility**
- Added ARIA labels to all interactive elements (Header, navigation, buttons)
- Added `aria-current` to active navigation items
- Added `aria-expanded` to mobile menu toggle
- Added `aria-hidden` to decorative icons
- Improved semantic HTML throughout

**SEO & Discovery**
- Added Twitter Card meta tags
- Added `og:url` and canonical URL
- Added `theme-color` meta tag
- Created `robots.txt` (allow all crawlers)
- Created `sitemap.xml` (weekly changefreq)

**Error Handling**
- Added ErrorBoundary component wrapping all 9 lazy-loaded sections
- Graceful fallback UI with "Retry" button
- Prevents entire app crash on component failure

**UI/UX**
- Improved Footer with 3-column grid (logo, links, CTA)
- Added GitHub repository link to Header
- Added "Compare" to main navigation
- Updated price range: 570x ($0.14-$80/MTok)
- Updated model counts to 60+

### 📚 Documentation

**New Files**
- `CONTRIBUTING.md` - Contribution guidelines, data standards, PR workflow
- `CODE_OF_CONDUCT.md` - Community standards (Contributor Covenant v2.1)
- `SECURITY.md` - Vulnerability disclosure policy
- `CHANGELOG.md` - Version history (this file)

**README Updates**
- Prominent live site link at top
- Added CI status badge
- Added "Commands" section with all npm scripts
- Linked to CONTRIBUTING.md and SECURITY.md
- Updated deployment instructions
- Added ErrorBoundary to project structure

### 🛠️ Developer Experience

**New Scripts**
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting without changes

**Dependencies**
- Added `prettier@^3.8.1` as dev dependency

**GitHub Automation**
- Added Dependabot config for weekly dependency updates
- Added Stale workflow (auto-stale after 30 days, close after 7)
- Improved PR template (added "Why?", "Data source", expanded checklist)
- Improved Bug template (added steps, actual behavior, environment, screenshots)

### 🔧 Technical

**Bundle Size**
- Main chunk: 242KB (up from 228KB due to comparison tool)
- Recharts: 381KB (lazy-loaded, unchanged)
- Total lazy sections: 9
- Initial load: ~242KB

**Build Performance**
- Build time: ~3.2s (up from 2.8s, still fast)
- Zero TypeScript errors
- Zero ESLint warnings

---

## [1.0.0] - 2026-02-14

### Initial Release

- 60+ AI model releases (Dec 2024 - Feb 2026)
- 8 benchmark categories (Arena, SWE-bench, AIME, GPQA, ARC-AGI-2, HLE, Aider, MMLU-Pro)
- 28 pricing entries with tier classification
- Timeline with search and category filters
- Interactive benchmark charts (Recharts)
- Pricing comparison table
- Reasoning models deep-dive
- Small models table (16 entries)
- Multimodal capabilities matrix
- Coding tools section (9 tools)
- Local LLM tools section (7 tools)
- Open vs Closed comparison
- Industry news section
- Dark theme with Tailwind CSS 4
- Code-split architecture with React.lazy()
- TypeScript strict mode
- ESLint + Prettier
- GitHub Actions CI/CD
- MIT License
