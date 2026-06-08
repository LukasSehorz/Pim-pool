import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  heroTitle,
  subtitle,
  crumbs,
  video,
}: {
  eyebrow?: string;
  title: string;
  heroTitle?: string;
  subtitle?: string;
  crumbs?: Crumb[];
  video?: string;
}) {
  const hasVideo = !!video;
  const displayTitle = hasVideo && heroTitle ? heroTitle : title;

  return (
    <section className={`relative overflow-hidden border-b border-border ${hasVideo ? "-mt-18 min-h-[520px] flex items-center" : "gradient-soft"}`}>
      {hasVideo ? (
        <>
          <video
            src={video}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </>
      ) : (
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute -top-40 -right-40 size-[40rem] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 size-[30rem] rounded-full bg-secondary/15 blur-3xl" />
        </div>
      )}

      <div className={`container-page relative ${hasVideo ? "pt-36 pb-24" : "py-16 md:py-24"}`}>
        {crumbs && (
          <nav className={`flex flex-wrap items-center gap-1 text-xs mb-5 ${hasVideo ? "text-white/70" : "text-muted-foreground"}`}>
            <Link to="/" className="hover:text-primary">Start</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="size-3" />
                {c.to ? <Link to={c.to} className="hover:text-primary">{c.label}</Link> : <span className={hasVideo ? "text-white" : "text-foreground"}>{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4 ${hasVideo ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
            {eyebrow}
          </div>
        )}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight whitespace-pre-line ${hasVideo ? "text-white" : ""}`}
          style={hasVideo ? { fontFamily: "'Playfair Display', serif", textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)" } : {}}
        >
          {displayTitle}
        </h1>
        {subtitle && (
          <p className={`mt-5 text-lg max-w-2xl leading-relaxed ${hasVideo ? "text-white/85" : "text-muted-foreground"}`}
            style={hasVideo ? { textShadow: "0 1px 6px rgba(0,0,0,0.7)" } : {}}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
