import { type ReactNode } from "react";

type DemoCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

export function DemoCard({ title, description, children, className }: DemoCardProps) {
  return (
    <div className={`group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-electric-500/10 ${className ?? ""}`}>
      <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" aria-hidden />
        <span className="ml-3 text-xs font-medium text-ink-500 truncate">{title}</span>
      </div>
      <div className="relative flex-1 overflow-hidden p-6 bg-gradient-to-b from-mist-50 to-white">
        {children}
      </div>
      <div className="border-t border-slate-100 px-5 py-3">
        <p className="text-sm text-ink-700">{description}</p>
      </div>
    </div>
  );
}
