import { Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import { PageHero, type Crumb } from "./PageHero";
import { CTASection } from "./CTASection";

export type ProductContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string[];
  benefits: { title: string; text: string }[];
  faq?: { q: string; a: string }[];
  related?: { label: string; to: string }[];
  crumbs?: Crumb[];
};

import { useState } from "react";

export function ProductPage({ content, video, heroTitle, beigeRight, beforeCTA }: { content: ProductContent; video?: string; heroTitle?: string; beigeRight?: boolean; beforeCTA?: React.ReactNode }) {
  return (
    <article>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        heroTitle={heroTitle}
        subtitle={content.subtitle}
        crumbs={content.crumbs}
        video={video}
      />

      <section className="relative overflow-hidden">
        {beigeRight && (
          <div className="absolute right-0 top-0 bottom-0 w-[25%] pointer-events-none" style={{ backgroundColor: "#c9b99a" }} />
        )}
        <div className="container-page relative py-16 grid lg:grid-cols-[1.4fr_1fr] gap-12">
        <div className="space-y-5 text-foreground/85 leading-relaxed">
          {content.description.map((p, i) => (
            <p key={i} className={`text-base md:text-lg${p.startsWith("Dann") ? " font-bold text-foreground" : ""}`}>{p}</p>
          ))}
        </div>
        <aside className="rounded-2xl border border-border bg-card p-6 shadow-card h-fit sticky top-24">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Persönliche Beratung</div>
          <h3 className="mt-2 text-xl font-bold">Will ich mir ansehen!</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Erhalten Sie ein kostenloses, individuelles Angebot innerhalb von 24 Stunden.
          </p>
          <Link
            to="/kontakt"
            className="mt-5 block w-full rounded-full gradient-water text-primary-foreground text-center py-3 font-semibold shadow-card hover:opacity-95 transition"
          >
            Angebot anfordern
          </Link>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Unverbindlich & kostenfrei</li>
            <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Beratung durch Spezialisten</li>
            <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Made for Bayern</li>
          </ul>
        </aside>
        </div>
      </section>

      <section className="container-page pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.benefits.map((b) => (
            <div key={b.title} className="group rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-1 transition">
              <div className="size-10 rounded-xl gradient-water grid place-items-center text-primary-foreground mb-4 shadow-card">
                <Check className="size-5" />
              </div>
              <h4 className="font-bold text-base">{b.title}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {content.faq && content.faq.length > 0 && (
        <section className="container-page py-12">
          <h3 className="text-2xl font-bold mb-6">Häufige Fragen</h3>
          <div className="space-y-2">
            {content.faq.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </section>
      )}

      {beforeCTA}

      <CTASection />
    </article>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [o, setO] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left font-medium hover:bg-accent/40 transition"
        onClick={() => setO((v) => !v)}
      >
        <span>{q}</span>
        <ChevronRight className={`size-4 transition ${o ? "rotate-90 text-primary" : ""}`} />
      </button>
      {o && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
