import { Link } from "@tanstack/react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export type Crumb = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  heroTitle,
  subtitle,
  crumbs,
  video,
  image,
  ctaLabel,
  ctaTo,
  ctaHref,
}: {
  eyebrow?: string;
  title: string;
  heroTitle?: string;
  subtitle?: string;
  crumbs?: Crumb[];
  video?: string;
  image?: string;
  ctaLabel?: string;
  ctaTo?: string;
  /** Anker auf derselben Seite, z. B. "#formular" (hat Vorrang vor ctaTo) */
  ctaHref?: string;
}) {
  const hasVideo = !!video;
  const hasImage = !!image && !hasVideo;
  const hasMedia = hasVideo || hasImage;
  const displayTitle = hasMedia && heroTitle ? heroTitle : title;

  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".hero-stagger");
      if (!items.length) return;
      gsap.set(items, { opacity: 0, y: 22 });
      gsap.to(items, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        stagger: 0.1, delay: 0.06, clearProps: "opacity,transform",
      });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative overflow-hidden border-b border-border ${
        hasMedia ? "-mt-18 flex items-center" : "gradient-soft"
      } ${hasVideo ? "min-h-[520px]" : ""} ${hasImage ? "min-h-[560px] md:min-h-[660px]" : ""}`}
    >
      {hasVideo && (
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
      )}

      {hasImage && (
        <>
          <img src={encodeURI(image!)} alt="" className="absolute inset-0 w-full h-full object-cover" />
          {/* gerichtete Verläufe: Text links lesbar, Bilddetails rechts sichtbar */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        </>
      )}

      {!hasMedia && (
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute -top-40 -right-40 size-[40rem] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 size-[30rem] rounded-full bg-secondary/15 blur-3xl" />
        </div>
      )}

      <div ref={contentRef} className={`container-page relative ${hasMedia ? "pt-36 pb-24" : "py-16 md:py-24"}`}>
        {crumbs && (
          <nav className={`hero-stagger flex flex-wrap items-center gap-1 text-xs mb-5 ${hasMedia ? "text-white/70" : "text-muted-foreground"}`}>
            <Link to="/" className="transition-colors hover:text-primary">Start</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="size-3" />
                {c.to ? <Link to={c.to} className="transition-colors hover:text-primary">{c.label}</Link> : <span className={hasMedia ? "text-white" : "text-foreground"}>{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <div className={`hero-stagger inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4 ${hasMedia ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
            {eyebrow}
          </div>
        )}
        <h1
          className={`hero-stagger text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight whitespace-pre-line ${hasMedia ? "text-white" : ""}`}
          style={hasVideo ? { fontFamily: "'Playfair Display', serif", textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)" } : hasImage ? { textShadow: "0 2px 16px rgba(0,0,0,0.6)" } : {}}
        >
          {displayTitle}
        </h1>
        {subtitle && (
          <p className={`hero-stagger mt-5 text-lg max-w-2xl leading-relaxed ${hasMedia ? "text-white/85" : "text-muted-foreground"}`}
            style={hasMedia ? { textShadow: "0 1px 6px rgba(0,0,0,0.7)" } : {}}>
            {subtitle}
          </p>
        )}
        {ctaLabel && (ctaHref || ctaTo) && (() => {
          const cls =
            "hero-stagger group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-95";
          const inner = (
            <>
              {ctaLabel}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </>
          );
          return ctaHref ? (
            <a href={ctaHref} className={cls}>{inner}</a>
          ) : (
            <Link to={ctaTo!} className={cls}>{inner}</Link>
          );
        })()}
      </div>
    </section>
  );
}
