import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden gradient-soft border-b border-border">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute -top-40 -right-40 size-[40rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-[30rem] rounded-full bg-secondary/15 blur-3xl" />
      </div>
      <div className="container-page relative py-16 md:py-24">
        {crumbs && (
          <nav className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground mb-5">
            <Link to="/" className="hover:text-primary">Start</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="size-3" />
                {c.to ? <Link to={c.to} className="hover:text-primary">{c.label}</Link> : <span className="text-foreground">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
