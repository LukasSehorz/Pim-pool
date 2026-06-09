import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Leaf, Droplets, Fish } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";

const GOLD = "#C49A3C";
const NAVY = "#16527A";
const PLAYFAIR = "'Playfair Display', serif";

export const Route = createFileRoute("/schwimmteich")({
  head: () => ({
    meta: [
      { title: "Schwimmteiche – pim POOL" },
      {
        name: "description",
        content:
          "Ihr Schwimmteich im eigenen Garten, ganz ohne Chemie. pim POOL baut naturnahe Schwimmteiche in sechs Kategorien, vom Teichdoktorprinzip bis zum Natur-Pool.",
      },
    ],
  }),
  component: SchwimmteichPage,
});

const VORTEILE = [
  { icon: Leaf, title: "Ganz ohne Chemie", text: "Ein natürlicher Regenerationsbereich reinigt das Wasser auf biologische Weise. Sie baden in einem lebendigen Stück Natur." },
  { icon: Fish, title: "Erholung im Garten", text: "Der naturnahe Liebhaber weiß die Ruhe am eigenen Teich zu schätzen. Pflanzen, Wasser und Tiere bilden ein eigenes kleines Biotop." },
  { icon: Droplets, title: "30 Jahre Erfahrung", text: "Schon vor 30 Jahren hat unser Geschäftsführer Pim van der Poel Schwimmteiche in Holland gebaut. Dieses Wissen fließt in jedes Projekt ein." },
];

const KATEGORIEN = [
  {
    n: "0",
    name: "Teichdoktorprinzip",
    text: "Nach dem Prinzip von Franz Frischmuth, dem Teichdoktor. Ganz ohne Technik und ohne Pflanzen, da diese beim Absterben das Wasser belasten würden. Besonders ökologisch.",
    regen: "ca. 10 %",
    tiefe: "3,5 m",
  },
  {
    n: "I",
    name: "Ohne Technik, mit Pflanzen",
    text: "Ein Schwimmteich, der vollständig ohne Technik auskommt. Pflanzen sind hier ausdrücklich erwünscht und übernehmen die natürliche Reinigung.",
    regen: "50 bis 70 %",
    tiefe: "2,5 m",
  },
  {
    n: "II",
    name: "Mit wenig Technik",
    text: "Eine schwache Pumpe unterstützt die Natur im Hintergrund und läuft etwa vier bis acht Stunden am Tag.",
    regen: "50 %",
    tiefe: "Betrieb 4 bis 8 h",
  },
  {
    n: "III",
    name: "Mit Oberflächenabsaugung",
    text: "Eine stärkere Pumpe sorgt für eine saubere Wasseroberfläche und arbeitet etwa vier bis acht Stunden täglich.",
    regen: "45 %",
    tiefe: "Betrieb 4 bis 8 h",
  },
  {
    n: "IV",
    name: "Mit umfangreicher Technik",
    text: "Eine starke Pumpe und durchdachte Technik halten das Wasser über zwölf bis vierundzwanzig Stunden klar und gepflegt.",
    regen: "35 %",
    tiefe: "Betrieb 12 bis 24 h",
  },
  {
    n: "V",
    name: "Natur-Pool",
    text: "Die Kombination aus Poolgefühl und natürlichem Wasser. Eine starke Pumpe läuft rund um die Uhr, der Regenerationsbereich bleibt kompakt.",
    regen: "33 %",
    tiefe: "Betrieb 24 h",
  },
];

const GALERIE = [
  { img: "/images/pim/schwimmteich_start.jpg", alt: "Schwimmteich mit Holzsteg vor einem Holzhaus, im Wasser gespiegelt", span: "sm:col-span-2 sm:row-span-2" },
  { img: "/images/pim/teich_1.jpg", alt: "Naturschwimmteich mit Holzdeck und Liegestühlen am Ufer", span: "sm:col-span-2" },
  { img: "/images/pim/natural-pond.webp", alt: "Naturteich mit Steineinfassung und Kiesufer im Garten", span: "" },
  { img: "/images/pim/teich_3.jpg", alt: "Naturschwimmteich mit Edelstahltreppe und Kiesufer", span: "" },
];

function SchwimmteichPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div ref={rootRef}>
      <PageHero
        eyebrow="Schwimmteiche"
        title="Ihr Schwimmteich im eigenen Garten"
        subtitle="Ein Schwimmteich verbindet Pool und Gartenteich zu einem lebendigen Ganzen. Genießen Sie die Erholung im eigenen Wasser, ganz ohne Chemie."
        crumbs={[{ label: "Schwimmteiche" }]}
        image="/images/pim/teich_2.jpg"
        ctaLabel="Jetzt beraten lassen"
        ctaTo="/kontakt"
      />

      {/* EINLEITUNG */}
      <section className="container-page py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal="left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>
              Eine Kombination aus Pool und Gartenteich
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl" style={{ fontFamily: PLAYFAIR }}>
              Natur und Badespaß in einem
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Der naturnahe Liebhaber schätzt die Erholung im eigenen Garten ganz ohne Chemie. Ein Schwimmteich
              entwickelt sich zu einem kleinen Biotop, das Sie das ganze Jahr über begleitet, im Sommer als Badesee
              und in den übrigen Monaten als ruhiges Stück Natur.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Wir teilen Schwimmteiche in sechs Kategorien ein. Sie reichen vom völlig naturbelassenen Teich bis zum
              technisch unterstützten Natur-Pool. Gemeinsam finden wir heraus, welche Variante zu Ihrem Garten und
              Ihren Vorstellungen passt.
            </p>
          </div>

          <div data-reveal="right" className="grid gap-6">
            {VORTEILE.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
                <v.icon className="size-8 shrink-0" strokeWidth={1.5} style={{ color: GOLD }} />
                <div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: PLAYFAIR }}>{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPRESSIONEN / GALERIE */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="container-page">
          <div data-reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>
              Impressionen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: PLAYFAIR }}>
              Schwimmteiche aus unserer Werkstatt
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Jeder Teich fügt sich anders in seinen Garten ein. Diese Eindrücke zeigen, wie natürlich sich Wasser,
              Pflanzen und Stein verbinden.
            </p>
          </div>

          <div data-reveal-group className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-4 md:auto-rows-[240px]">
            {GALERIE.map((g) => (
              <figure
                key={g.img}
                data-reveal-item
                className={`group relative overflow-hidden rounded-2xl border border-border shadow-card ring-1 ring-black/5 ${g.span}`}
              >
                <img
                  src={g.img}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* KATEGORIEN */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f4f7fa" }}>
        <div className="container-page">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: NAVY }}>
              Sechs Kategorien
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: PLAYFAIR }}>
              Von naturbelassen bis Natur-Pool
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Je nachdem, wie naturbelassen Sie Ihren Teich anlegen und wie viel Technik Sie einsetzen möchten,
              verändert sich der Regenerationsbereich, also die Fläche, die das Wasser auf natürliche Weise reinigt.
            </p>
          </div>

          <div data-reveal-group className="mt-14 grid gap-6 md:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {KATEGORIEN.map((k) => (
              <article key={k.n} data-reveal-item className="group overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-card transition-shadow duration-500 hover:shadow-elegant">
                <div className="flex items-center gap-4">
                  <span
                    className="grid size-14 shrink-0 place-items-center rounded-2xl text-2xl font-bold text-white"
                    style={{ backgroundColor: NAVY, fontFamily: PLAYFAIR }}
                  >
                    {k.n}
                  </span>
                  <h3 className="text-xl font-bold leading-tight" style={{ fontFamily: PLAYFAIR }}>
                    Kategorie {k.n}
                    <span className="mt-0.5 block text-sm font-medium text-muted-foreground">{k.name}</span>
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{k.text}</p>
                <div className="mt-6 flex gap-3 border-t border-border pt-5 text-sm">
                  <div className="flex-1">
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">Regeneration</span>
                    <span className="mt-1 block font-bold" style={{ color: GOLD }}>{k.regen}</span>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">Tiefe / Betrieb</span>
                    <span className="mt-1 block font-bold text-foreground">{k.tiefe}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pflegehinweis */}
          <div data-reveal className="mx-auto mt-14 max-w-3xl rounded-3xl border-l-4 bg-white p-7 shadow-card" style={{ borderColor: GOLD }}>
            <p className="text-base leading-relaxed text-muted-foreground">
              Schwimmteiche der Kategorie 0 lassen sich ganz ohne Pflege betreiben. Einmal im Jahr werden die
              Sedimente abgesaugt und die Sauerstoffpflanzen versorgt. Ein Natur-Pool möchte in der Regel einmal
              wöchentlich abgesaugt werden, so wie ein klassischer Pool auch.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Welcher Schwimmteich passt zu Ihrem Garten?"
        text="Wir beraten Sie persönlich, welche Kategorie zu Ihren örtlichen Gegebenheiten passt, und entwerfen Ihren naturnahen Teich. Unverbindlich und kostenfrei."
        primary="Jetzt Schwimmteich anfragen"
      />
    </div>
  );
}
