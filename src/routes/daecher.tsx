import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ShieldCheck, Thermometer, Smartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const TURQ = "#C49A3C";
const ORANGE = "#16527A";
const PLAYFAIR = "'Playfair Display', serif";

export const Route = createFileRoute("/daecher")({
  head: () => ({
    meta: [
      { title: "Überdachungen & Abdeckungen – pim POOL" },
      {
        name: "description",
        content:
          "Verschiebbare Terrasse, Glasüberdachung oder Rollabdeckung. pim POOL plant die passende Abdeckung für Ihren Pool, schützt das Wasser und verlängert Ihre Badesaison.",
      },
    ],
  }),
  component: DaecherPage,
});

const VORTEILE = [
  { icon: ShieldCheck, title: "Schutz", text: "Laub, Schmutz und neugierige Blicke bleiben draußen, das Wasser bleibt sauber und sicher." },
  { icon: Thermometer, title: "Wärme", text: "Eine geschlossene Abdeckung hält die Wärme im Becken und verlängert Ihre Badesaison spürbar." },
  { icon: Smartphone, title: "Komfort", text: "Auf Wunsch öffnen und schließen Sie Ihre Abdeckung bequem per App oder über Ihren Smart Home Manager." },
];

const MODELLE = [
  {
    name: "Flache Schiebeüberdachung",
    label: "Nahezu unsichtbar",
    text: "Eine niedrige Überdachung aus Glas fügt sich dezent in den Garten ein und lässt sich bei schönem Wetter einfach zur Seite schieben.",
    img: "/images/pim/glass-enclosure.webp",
  },
  {
    name: "Überdachung im Garten",
    label: "Schutz & Eleganz",
    text: "Eine feste oder schiebbare Glasüberdachung verwandelt den Poolbereich in einen lichtdurchfluteten Wohlfühlraum und schützt zuverlässig vor Wind und Wetter.",
    img: "/images/pim/pool_2.jpg",
  },
  {
    name: "Hohe Überdachung",
    label: "Begehbarer Komfort",
    text: "Eine hohe Überdachung schafft echten Raum am Wasser. Auch bei kühlem Wetter baden Sie im warmen, stimmungsvoll beleuchteten Becken.",
    img: "/images/pim/pool_start.jpg",
  },
];

function DaecherPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      gsap.from(".phil-img", {
        x: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".phil-img", start: "top 80%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      <PageHero
        eyebrow="Überdachungen"
        title="Schützen Sie Ihr Wasser, verlängern Sie die Saison"
        subtitle="Ob verschiebbare Terrasse, elegante Glasüberdachung oder praktische Rollabdeckung. Wir finden die Lösung, die zu Ihrem Pool und Ihrem Garten passt."
        crumbs={[{ label: "Überdachungen" }]}
        image="/images/pim/pool_3.jpg"
        ctaLabel="Jetzt beraten lassen"
        ctaTo="/kontakt"
      />

      {/* PHILOSOPHIE */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div className="reveal-up">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: TURQ }}>
              Technik mit Raffinesse
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl" style={{ fontFamily: PLAYFAIR }}>
              Eine Abdeckung, die zu Ihrem Leben passt
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Bei der Abdeckung lassen sich allerlei technische Raffinessen verwirklichen. Eine per App verschiebbare
              Terrasse macht aus der Wasserfläche wertvollen Lebensraum, eine Glasüberdachung holt Licht und Wärme in
              den Poolbereich und eine Rollabdeckung sorgt mit einem Knopfdruck für Sicherheit.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Wir beraten Sie ehrlich, welche Variante zu Ihrem Becken, Ihrem Budget und den örtlichen Gegebenheiten
              passt, und binden sie auf Wunsch in Ihren Smart Home Manager ein.
            </p>

            {/* Vorteile */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {VORTEILE.map((v) => (
                <div key={v.title}>
                  <v.icon className="size-8" strokeWidth={1.5} style={{ color: TURQ }} />
                  <h3 className="mt-3 text-base font-bold" style={{ fontFamily: PLAYFAIR }}>{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bild + Zitat */}
          <div className="phil-img relative">
            <div className="absolute -bottom-5 -left-5 h-2/3 w-2/3 rounded-3xl bg-[#C49A3C]/15" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-elegant ring-1 ring-black/5">
              <img
                src="/images/pim/glass-enclosure.webp"
                alt="Pool mit hochwertiger Glasüberdachung von pim POOL"
                className="block h-auto w-full rounded-2xl"
              />
            </div>
            {/* Zitat-Badge */}
            <div className="absolute -bottom-6 right-4 max-w-xs rounded-2xl bg-white px-5 py-4 shadow-card ring-1 ring-black/5 md:right-8">
              <p className="text-sm font-medium italic leading-snug text-foreground" style={{ fontFamily: PLAYFAIR }}>
                „Wir planen jede Abdeckung passend zu Ihrem Pool und Ihrem Alltag."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODELLE */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f4f7fa" }}>
        <div className="container-page">
          <div className="reveal-up mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: ORANGE }}>
              Unsere Möglichkeiten
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: PLAYFAIR }}>
              Für jeden Pool die passende Lösung
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3">
            {MODELLE.map((m) => (
              <article key={m.name} className="reveal-up group overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-shadow duration-500 hover:shadow-elegant">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.img}
                    alt={`Poolabdeckung ${m.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm" style={{ color: TURQ }}>
                    {m.label}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold" style={{ fontFamily: PLAYFAIR }}>{m.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Welche Abdeckung passt zu Ihrem Pool?"
        text="Wir beraten Sie persönlich zu verschiebbaren Terrassen, Glasüberdachungen und Rollabdeckungen, unverbindlich und kostenfrei."
        primary="Jetzt Beratung anfragen"
      />
    </div>
  );
}
