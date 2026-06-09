import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Layers, Umbrella, Smartphone, Droplets, Check, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";

const GOLD = "#C49A3C";
const NAVY = "#16527A";
const DISPLAY = "'Fraunces', 'Playfair Display', Georgia, serif";

export const Route = createFileRoute("/poolabdeckungen/")({
  head: () => ({
    meta: [
      { title: "Unsere Pools – pim POOL" },
      { name: "description", content: "Pool ist nicht gleich Pool. pim POOL baut Ihr Becken Stein für Stein in jeder Form, mit Römischer Treppe, smarter Technik und auf Wunsch als pflegeleichten Salzwasser-Pool." },
    ],
  }),
  component: UnserePoolsPage,
});

const RAFFINESSEN = [
  {
    icon: Layers,
    title: "Verschiebbare Terrasse",
    text: "Eine per App verschiebbare Terrasse dient als Abdeckung und gibt das Wasser frei, wann immer Sie möchten.",
  },
  {
    icon: Umbrella,
    title: "Glas- & Rollabdeckung",
    text: "Eine Glasüberdachung oder eine Rollabdeckung schützt das Becken, hält die Wärme und verlängert Ihre Badesaison.",
  },
  {
    icon: Smartphone,
    title: "Smart Home",
    text: "Beleuchtung, Gegenstromanlage und Abdeckung binden wir auf Wunsch in Ihren Smart Home Manager ein.",
  },
];

const FORMEN = [
  "Römische Treppen in runder oder gerader Form",
  "Integrierter Relax-Bereich zum Entspannen",
  "Kinder-Spielbereich im flachen Wasser",
  "Nahezu jede Form und Größe durch Styroporsteine",
];

const POOLS = [
  { img: "/images/pim/pool_1.jpg", title: "Rechteckpool an moderner Villa", desc: "Klassische Form mit türkiser RENOLIT Folie und großzügiger Terrasse" },
  { img: "/images/pim/pool_3.jpg", title: "Pool mit Römischer Treppe", desc: "Geschwungene Form mit integrierter Treppe in tiefblauer RENOLIT Folie" },
  { img: "/images/pim/pool_2.jpg", title: "Pool mit Glasüberdachung", desc: "Eingebettet in eine gepflegte Gartenlandschaft, geschützt durch eine Überdachung" },
  { img: "/images/pim/pool_start.jpg", title: "Runder Pool mit Überdachung", desc: "Stimmungsvoll beleuchtet, geschützt durch eine hohe Überdachung" },
  { img: "/images/pim/glass-enclosure.webp", title: "Flache Glasüberdachung", desc: "Becken mit nahezu unsichtbarer Schiebeüberdachung aus Glas" },
];

function UnserePoolsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  // Salzwasser-Balken laden sich auf, sobald das Panel ins Bild scrollt
  const saltRef = useRef<HTMLDivElement>(null);
  const [saltIn, setSaltIn] = useState(false);
  useEffect(() => {
    const el = saltRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSaltIn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSaltIn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const barEase = "cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div ref={rootRef}>
      {/* HERO */}
      <section className="relative -mt-18 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/images/pim/pool_1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div data-hero className="relative text-center text-white px-6 pt-32 pb-20">
          <div data-hero-item className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
            Unsere Pools
          </div>
          <h1
            data-hero-item
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: DISPLAY, textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
          >
            Pool ist nicht gleich Pool
          </h1>
          <p data-hero-item className="mt-5 text-lg text-white/85 max-w-2xl mx-auto" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
            Jeder Pool wird individuell nach Ihren Wünschen geplant und gebaut. Hochwertige Becken mit erstklassigen RENOLIT Folien aus Oberbayern.
          </p>
          <Link
            to="/kontakt"
            data-hero-item
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#16527A] transition-all duration-200 hover:bg-[#C49A3C] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-95"
          >
            Jetzt Beratung vereinbaren
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* INDIVIDUALITÄT – Pool ist nicht gleich Pool */}
      <section className="container-page py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal="left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>
              Maßarbeit aus Hohenpolding
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: DISPLAY }}>
              Wir realisieren genau Ihre Vorstellung
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Wir berücksichtigen die örtlichen Gegebenheiten und setzen Ihre Ideen Stein für Stein um. Da wir mit
              Styroporsteinen arbeiten, lässt sich annähernd jede Form und Größe individuell verwirklichen, genau so,
              wie Sie es sich vorstellen.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {FORMEN.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full" style={{ backgroundColor: NAVY }}>
                    <Check className="size-3.5 text-white" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal="right" className="relative">
            <div className="absolute -bottom-5 -right-5 h-2/3 w-2/3 rounded-3xl" style={{ backgroundColor: `${GOLD}26` }} aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-elegant ring-1 ring-black/5">
              <img
                src="/images/pim/pool_3.jpg"
                alt="Pool mit Römischer Treppe und geschwungener Form von pim POOL"
                className="block h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNISCHE RAFFINESSEN */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <img
          src="/images/Pim pool/Pool Section Hintergrund.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f7fa]/55 via-[#eef3f8]/35 to-[#f4f7fa]/25" aria-hidden="true" />
        <div className="container-page relative z-10">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: NAVY }}>
              Technische Raffinessen
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily: DISPLAY }}>
              Komfort, der mitdenkt
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Über die Form hinaus lassen sich allerlei technische Raffinessen verwirklichen, die Ihren Pool
              komfortabler, sicherer und sparsamer machen.
            </p>
          </div>

          <div data-reveal-group className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
            {RAFFINESSEN.map((r, i) => (
              <article
                key={r.title}
                data-reveal-item
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-white/95 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C49A3C]/40 hover:shadow-elegant"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-3 text-6xl leading-none text-[#16527A]/[0.06] transition-colors duration-300 group-hover:text-[#C49A3C]/20"
                  style={{ fontFamily: DISPLAY }}
                >
                  0{i + 1}
                </span>
                <span className="relative grid size-12 place-items-center rounded-xl ring-1 ring-inset ring-[#C49A3C]/30" style={{ backgroundColor: `${GOLD}14` }}>
                  <r.icon className="size-6" strokeWidth={1.5} style={{ color: GOLD }} />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.01em]" style={{ fontFamily: DISPLAY, color: NAVY }}>{r.title}</h3>
                <div className="mt-3 h-px w-8 transition-all duration-300 group-hover:w-16" style={{ backgroundColor: GOLD }} aria-hidden="true" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SALZWASSER – Spezialisierung (Dark Luxury) */}
      <section className="container-page py-20 md:py-28">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[1.75rem] gradient-deep p-8 text-white shadow-elegant ring-1 ring-inset ring-white/10 md:p-14"
        >
          {/* feine Gold-Haarlinie oben */}
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C49A3C]/70 to-transparent" aria-hidden="true" />
          {/* weicher Gold-Schimmer + Wasser-Wasserzeichen statt generischer Blobs */}
          <div className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(196,154,60,0.22), transparent 70%)" }} aria-hidden="true" />
          <Droplets className="pointer-events-none absolute -bottom-10 -right-6 size-64 rotate-12 text-white/[0.04]" strokeWidth={0.75} aria-hidden="true" />

          <div className="relative grid items-center gap-12 md:grid-cols-[1.15fr_1fr] md:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10" style={{ backgroundColor: GOLD }} aria-hidden="true" />
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em]" style={{ color: GOLD }}>
                  Unsere Spezialisierung
                </p>
              </div>
              <h2 className="mt-5 text-4xl leading-[1.05] md:text-5xl" style={{ fontFamily: DISPLAY }}>
                Salzwasser-Pools
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
                Salzwasser-Pools sind pflegeleicht und besonders angenehm für die Haut. Es genügt eine sehr geringe
                Menge Salz, weit entfernt von dem, was Sie aus dem Meer kennen. Die klassische Variante mit Chlor
                planen und realisieren wir selbstverständlich ebenso.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full ring-1 ring-inset ring-[#C49A3C]/40" style={{ backgroundColor: `${GOLD}26` }}>
                  <Droplets className="size-3.5" style={{ color: GOLD }} />
                </span>
                <span className="text-sm text-white/80">Sanft zur Haut, schonend für Material und Technik.</span>
              </div>
            </div>

            {/* Vergleichs-Panel */}
            <div ref={saltRef} className="rounded-2xl border border-white/[0.12] bg-white/[0.04] p-7 backdrop-blur-md md:p-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/55">
                Benötigtes Salz pro m³ Wasser
              </p>

              <div className="mt-7 space-y-7">
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-white/85">Ihr pim POOL</span>
                    <span
                      className="bg-gradient-to-br from-[#EBD08A] via-[#C49A3C] to-[#9A7424] bg-clip-text text-4xl font-semibold tabular-nums text-transparent"
                      style={{ fontFamily: DISPLAY }}
                    >
                      1,5 kg
                    </span>
                  </div>
                  <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
                    <div className="h-full rounded-full" style={{ width: saltIn ? "12%" : "0%", background: "linear-gradient(90deg, #C49A3C, #EBD08A)", boxShadow: "0 0 16px rgba(196,154,60,0.5)", transition: `width 1.4s ${barEase}` }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-white/55">Indischer Ozean</span>
                    <span className="text-4xl font-semibold tabular-nums text-white/45" style={{ fontFamily: DISPLAY }}>34 kg</span>
                  </div>
                  <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
                    <div className="h-full rounded-full bg-white/30" style={{ width: saltIn ? "100%" : "0%", transition: `width 1.4s ${barEase} 0.2s` }} />
                  </div>
                </div>
              </div>

              {/* Kicker-Stat */}
              <div className="mt-7 flex items-baseline gap-2.5 border-t border-white/10 pt-5">
                <span className="text-3xl font-semibold tabular-nums" style={{ fontFamily: DISPLAY, color: GOLD }}>20×</span>
                <span className="text-sm leading-snug text-white/65">weniger Salz als im Meerwasser</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="container-page pb-20 md:pb-28">
        <div data-reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>
            Referenzen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: DISPLAY }}>
            Realisierte Projekte
          </h2>
        </div>
        <div data-reveal-group className="flex flex-wrap justify-center gap-6">
          {POOLS.map((p, i) => (
            <div key={i} data-reveal-item className="group basis-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow duration-300 hover:shadow-elegant sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title}, ${p.desc}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold" style={{ fontFamily: DISPLAY }}>{p.title}</h3>
                <div className="mt-2 h-[2px] w-8 transition-all duration-300 group-hover:w-16" style={{ backgroundColor: GOLD }} />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Lust auf Ihren eigenen Pool?"
        text="Wir planen und bauen Ihren individuellen Pool. Sprechen Sie uns an, unverbindlich und kostenfrei."
        primary="Jetzt Pool-Projekt anfragen"
      />
    </div>
  );
}
