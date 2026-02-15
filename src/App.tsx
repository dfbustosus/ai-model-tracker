import { useState, useCallback, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { SectionWrapper } from './components/SectionWrapper';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';

// Lazy-load chart-heavy sections to reduce initial bundle
const BenchmarkCharts = lazy(() => import('./components/BenchmarkCharts').then(m => ({ default: m.BenchmarkCharts })));
const PricingTable = lazy(() => import('./components/PricingTable').then(m => ({ default: m.PricingTable })));
const OpenVsClosedSection = lazy(() => import('./components/OpenVsClosedSection').then(m => ({ default: m.OpenVsClosedSection })));

// Lazy-load below-fold sections
const ReasoningModels = lazy(() => import('./components/ReasoningModels').then(m => ({ default: m.ReasoningModels })));
const SmallModelsTable = lazy(() => import('./components/SmallModelsTable').then(m => ({ default: m.SmallModelsTable })));
const MultimodalSection = lazy(() => import('./components/MultimodalSection').then(m => ({ default: m.MultimodalSection })));
const CodingToolsSection = lazy(() => import('./components/CodingToolsSection').then(m => ({ default: m.CodingToolsSection })));
const LocalLLMsSection = lazy(() => import('./components/LocalLLMsSection').then(m => ({ default: m.LocalLLMsSection })));
const IndustryNews = lazy(() => import('./components/IndustryNews').then(m => ({ default: m.IndustryNews })));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('timeline');

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-surface-950">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Hero onNavigate={handleNavigate} />

          <div className="mt-8 mb-12">
            <StatsBar />
          </div>

          <div className="space-y-20">
            <SectionWrapper
              id="timeline"
              title="Model Release Timeline"
              subtitle="Every significant AI model release from December 2024 through February 2026, ordered chronologically."
              badge="Timeline"
            >
              <Timeline />
            </SectionWrapper>

            <SectionWrapper
              id="benchmarks"
              title="Benchmark Leaderboards"
              subtitle="Google and Anthropic trading the lead. MMLU and MATH-500 have saturated - the field has shifted to harder evaluations."
              badge="Benchmarks"
            >
              <Suspense fallback={<SectionLoader />}>
                <BenchmarkCharts />
              </Suspense>
            </SectionWrapper>

            <SectionWrapper
              id="pricing"
              title="API Pricing Comparison"
              subtitle="A 350x cost range: from $0.28/MTok (DeepSeek V3.2) to $80/MTok (o3-pro). Pricing as of February 2026."
              badge="Pricing"
            >
              <Suspense fallback={<SectionLoader />}>
                <PricingTable />
              </Suspense>
            </SectionWrapper>

            <SectionWrapper
              id="reasoning"
              title="Reasoning Models"
              subtitle="The sharpest competitive frontier. Extended thinking, chain-of-thought, and reinforcement learning approaches compared."
              badge="Reasoning"
            >
              <Suspense fallback={<SectionLoader />}>
                <ReasoningModels />
              </Suspense>
            </SectionWrapper>

            <SectionWrapper
              id="small-models"
              title="Small Language Models"
              subtitle="Models under 10B parameters now match GPT-4-class systems from 2023. Edge-deployable on phones, laptops, and IoT."
              badge="SLMs"
            >
              <Suspense fallback={<SectionLoader />}>
                <SmallModelsTable />
              </Suspense>
            </SectionWrapper>

            <SectionWrapper
              id="multimodal"
              title="Multimodal Models"
              subtitle="Text, vision, video, audio, and generation capabilities across providers."
              badge="Multimodal"
            >
              <Suspense fallback={<SectionLoader />}>
                <MultimodalSection />
              </Suspense>
            </SectionWrapper>

            <SectionWrapper
              id="coding-tools"
              title="AI Coding Tools"
              subtitle="A $5B+ market. From IDE assistants to terminal agents to fully autonomous coding systems."
              badge="Coding"
            >
              <Suspense fallback={<SectionLoader />}>
                <CodingToolsSection />
              </Suspense>
            </SectionWrapper>

            <SectionWrapper
              id="local-llms"
              title="Local LLM Tools"
              subtitle="Production-quality inference on consumer hardware. GGUF standardization and better quantization drive adoption."
              badge="Local"
            >
              <Suspense fallback={<SectionLoader />}>
                <LocalLLMsSection />
              </Suspense>
            </SectionWrapper>

            <SectionWrapper
              id="open-vs-closed"
              title="Open vs Closed Source"
              subtitle="The gap has narrowed to its smallest point ever - approximately 3 months as of early 2026."
              badge="Analysis"
            >
              <Suspense fallback={<SectionLoader />}>
                <OpenVsClosedSection />
              </Suspense>
            </SectionWrapper>

            <SectionWrapper
              id="industry"
              title="Industry News & Trends"
              subtitle="Funding, infrastructure, and the forces shaping AI in 2026."
              badge="Industry"
            >
              <Suspense fallback={<SectionLoader />}>
                <IndustryNews />
              </Suspense>
            </SectionWrapper>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
