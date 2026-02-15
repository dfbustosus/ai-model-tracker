import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, title, subtitle, badge, children }: SectionWrapperProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          {badge && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-primary-600/20 text-primary-400 border border-primary-600/30 uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
        <p className="text-surface-400 mt-2 max-w-2xl text-sm">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}
