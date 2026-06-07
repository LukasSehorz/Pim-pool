import { Link } from "@tanstack/react-router";
import { Check, Image as ImageIcon, ChevronRight } from "lucide-react";
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

export function ProductPage({ content }: { content: ProductContent }) {
  return (
    <article>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
        crumbs={content.crumbs}
      />

      <section className="container-page py-16 grid lg:grid-cols-[1.4fr_1fr] gap-12">
        <div className="space-y-5 text-foreground/85 leading-relaxed">
          {content.description.map((p, i) => (
            <p key={i} className="text-base md:text-lg">{p}</p>
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

      <section className="container-page py-12">
        <h3 className="text-2xl font-bold mb-5">Bildergalerie</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl gradient-soft border border-border grid place-items-center text-muted-foreground"
            >
              <div className="flex flex-col items-center gap-1.5">
                <ImageIcon className="size-7 opacity-50" />
                <span className="text-xs">Bild folgt</span>
              </div>
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

      {content.related && content.related.length > 0 && (
        <section className="container-page py-12">
          <h3 className="text-2xl font-bold mb-6">Das könnte Sie ebenfalls interessieren</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.related.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 hover:border-primary hover:shadow-card transition"
              >
                <span className="font-medium">{r.label}</span>
                <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary transition" />
              </Link>
            ))}
          </div>
        </section>
      )}

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
