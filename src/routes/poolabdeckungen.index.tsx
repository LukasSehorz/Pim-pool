import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { CTASection } from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";

export const Route = createFileRoute("/poolabdeckungen/")({
  head: () => ({
    meta: [
      { title: "Unsere Pools – FuchsPools" },
      { name: "description", content: "Realisierte Pool-Projekte von FuchsPools aus Niederbayern – individuell geplant und gebaut, mit hochwertigen Alkorplan-Folien." },
    ],
  }),
  component: UnserePoolsPage,
});

const POOLS = [
  { img: "/images/fuchs/5.jpg", title: "Pool 8,5 × 4 m", desc: "Hellgraue Alkorplan 2000 Folie" },
  { img: "/images/fuchs/6-2.jpg", title: "Pool 8 × 4 m", desc: "Dunkelgraue Alkorplan 2000 Folie" },
  { img: "/images/fuchs/image5.jpeg", title: "Pool 8 × 4 m", desc: "Alkorplan Touch Vanity Folie" },
  { img: "/images/fuchs/4.jpg", title: "Pool 8 × 4 m", desc: "Alkorplan Touch Authentic Folie" },
  { img: "/images/fuchs/image4.jpeg", title: "Pool 10 × 4 m", desc: "Türkise Alkorplan 2000 Folie" },
  { img: "/images/fuchs/45.jpg", title: "Pool 6 × 3 m", desc: "Mit Garage für Dach, abgedeckt mit Luftkissenfolie" },
];

function UnserePoolsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div ref={rootRef}>
      {/* HERO */}
      <section className="relative -mt-18 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/images/Unsere Pools Hero Section.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div data-hero className="relative text-center text-white px-6 pt-32 pb-20">
          <div data-hero-item className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
            Unsere Pools
          </div>
          <h1
            data-hero-item
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
          >
            Realisierte Pool-Projekte
          </h1>
          <p data-hero-item className="mt-5 text-lg text-white/85 max-w-2xl mx-auto" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
            Jeder Pool wird individuell nach Ihren Wünschen geplant und gebaut – hochwertige Becken mit erstklassigen Alkorplan-Folien in Niederbayern.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-page py-16 text-center max-w-3xl">
        <p data-reveal className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#16B5C0" }}>
          Maßarbeit aus Reisbach
        </p>
        <h2 data-reveal data-reveal-delay="0.06" className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ihr Traum-Pool, ganz nach Ihren Vorstellungen
        </h2>
        <p data-reveal data-reveal-delay="0.12" className="text-base text-muted-foreground leading-relaxed">
          Von der Größe über die Form bis zur Folienfarbe – bei FuchsPools entsteht jeder Pool individuell.
          Werfen Sie einen Blick auf einige unserer realisierten Projekte und lassen Sie sich inspirieren.
        </p>
      </section>

      {/* GALERIE */}
      <section className="container-page pb-20">
        <div data-reveal-group className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POOLS.map((p, i) => (
            <div key={i} data-reveal-item className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} – ${p.desc}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
                <div className="mt-2 h-[2px] w-8 transition-all duration-300 group-hover:w-16" style={{ backgroundColor: "#16B5C0" }} />
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Lust auf Ihren eigenen Pool?"
        text="Wir planen und bauen Ihren individuellen Traum-Pool – sprechen Sie uns an, unverbindlich und kostenfrei."
        primary="Jetzt Pool-Projekt anfragen"
      />
    </div>
  );
}
