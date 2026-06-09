import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Layers, Waves, ArrowRight, Palette, Wrench, Settings, Sparkles, PencilRuler, Leaf } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";
import { useReveal } from "@/lib/useReveal";
import leistungenBg from "@/assets/leistungen-bg.png";

// Echte Bilder von pim POOL (public/images/pim)
const aboutPool = "/images/pim/pool_start.jpg";
const ref9 = "/images/pim/pool_1.jpg";
const ref10 = "/images/pim/pool_2.jpg";
const ref11 = "/images/pim/pool_3.jpg";
const ref12 = "/images/pim/teich_1.jpg";
const ref13 = "/images/pim/teich_2.jpg";
const ref14 = "/images/pim/teich_3.jpg";
const ref15 = "/images/pim/schwimmteich_start.jpg";
const ref16 = "/images/pim/natural-pond.webp";
const ref17 = "/images/pim/glass-enclosure.webp";
const bild19 = "/images/pim/pim-portrait.webp";
const highlight1 = "/images/pim/pool_1.jpg";
const highlight2 = "/images/pim/pool_3.jpg";
const highlight3 = "/images/pim/teich_2.jpg";
const highlight4 = "/images/pim/glass-enclosure.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "pim POOL – Individuelle Wasserlandschaften aus Oberbayern" },
      { name: "description", content: "pim POOL aus Hohenpolding plant und baut individuelle Pools und Schwimmteiche ganz nach Ihren Wünschen. Ihr Ansprechpartner für Wasserlandschaften im Großraum München und Erding." },
    ],
  }),
  component: HomePage,
});

// PLATZHALTER – bitte durch echte pim POOL Kundenbewertungen ersetzen.
const REVIEWS = [
  {
    text: "Von der ersten Idee bis zum fertigen Becken hatten wir immer einen festen Ansprechpartner. Unsere Wasserlandschaft ist genau so geworden, wie wir sie uns erträumt haben.",
    name: "",
    source: "",
  },
  {
    text: "Die Begeisterung für Wasser spürt man in jedem Detail. Beratung, 3D-Planung und Umsetzung waren rundum stimmig und ehrlich.",
    name: "",
    source: "",
  },
  {
    text: "Unser Schwimmteich fügt sich völlig natürlich in den Garten ein. Wir genießen jeden Tag die Erholung im eigenen Wasser.",
    name: "",
    source: "",
  },
];

const LEISTUNGEN = [
  { icon: Waves, title: "Pools nach Maß", text: "Wir bauen Ihren Pool Stein für Stein und verwirklichen dabei nahezu jede Form und Größe, die Ihnen vorschwebt.", to: "/poolabdeckungen" },
  { icon: Leaf, title: "Schwimmteiche", text: "Die Erholung im eigenen Garten ganz ohne Chemie. Vom naturnahen Teich bis zum Natur-Pool in sechs Kategorien.", to: "/schwimmteich" },
  { icon: Wrench, title: "Aufbau & Montage", text: "Mit robusten Styroporsteinen entsteht jedes Becken individuell vor Ort. Vom Fundament bis zur fertigen Technik begleiten wir jeden Schritt.", to: "/aufbau-unserer-pools" },
  { icon: Palette, title: "Folien & Design", text: "Als zertifizierter RENOLIT Fachverleger kleiden wir Ihr Becken in Ihrer Wunschfarbe aus, auf Wunsch in edler Steinoptik.", to: "/folien-farben-design" },
  { icon: Sparkles, title: "Salzwasser-Pools", text: "Unsere Spezialität. Salzwasser ist angenehm zur Haut und besonders pflegeleicht. Die klassische Variante mit Chlor bauen wir ebenso.", to: "/poolabdeckungen" },
  { icon: Layers, title: "Überdachungen", text: "Ob verschiebbare Terrasse, Glasüberdachung oder Rollabdeckung. So verlängern Sie Ihre Badesaison und schützen das Wasser.", to: "/daecher" },
  { icon: Settings, title: "Wellness & Technik", text: "Gegenstromanlage, Schwalldusche, Luftsprudler und smarte Steuerung machen aus Ihrem Becken eine echte Wellness-Oase.", to: "/kontakt" },
  { icon: PencilRuler, title: "3D-Planung & Beratung", text: "Nach dem Aufmaß fertigen wir eine 3D-Planung, damit Ihre Vorstellungen Gestalt annehmen. Persönlich und mit 30 Jahren Erfahrung.", to: "/kontakt" },
];

function HomePage() {
  const [reviewSlide, setReviewSlide] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div ref={rootRef}>
      {/* HERO */}
      <section className="relative isolate overflow-hidden -mt-18 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <img src="/images/Pim pool/Hero Section Landing Page Hintergrund.png" alt="" width={1920} height={1080} className="size-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div data-hero className="flex flex-col items-center text-center px-6 pt-48 pb-24 text-white">
          <h1
            data-hero-item
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)", textTransform: "none" }}
          >
            WASSERLANDSCHAFTEN<br />DIE FASZINIEREN
          </h1>
          <p
            data-hero-item
            className="mt-5 text-lg md:text-2xl font-medium tracking-widest uppercase text-white/90"
            style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
          >
            Individuelle Pools und Schwimmteiche<br />aus Hohenpolding in Oberbayern
          </p>
          <p data-hero-item className="mt-5 text-base md:text-lg text-white/75 max-w-xl" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
            Lassen Sie sich von unserer Begeisterung für Wasser anstecken und genießen Sie schon bald die Faszination Wasser im eigenen Garten.
          </p>
          <Link
            to="/kontakt"
            data-hero-item
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold transition text-[#16527A] hover:bg-[#C49A3C] hover:text-white"
          >
            Jetzt Termin für Erstberatung vereinbaren <ArrowRight className="size-4" />
          </Link>
          <div data-hero-item className="mt-10 opacity-60">
            <svg width="180" height="48" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16 C 30 2, 60 30, 90 16 C 120 2, 150 30, 175 16" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              <path d="M5 28 C 30 14, 60 42, 90 28 C 120 14, 150 42, 175 28" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              <path d="M5 40 C 30 26, 60 54, 90 40 C 120 26, 150 54, 175 40" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ÜBER UNS */}
      <section className="mt-20 grid lg:grid-cols-[3fr_1.2fr] overflow-hidden">
        {/* Text links */}
        <div data-reveal="left" className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 lg:py-24 bg-white">
          <h2
            className="text-2xl md:text-3xl lg:text-[1.9rem] font-bold leading-tight text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Wasser ist Lebenselixier und pim POOLs sind Lebensfreude
          </h2>
          <div className="mt-8 border-l-2 pl-6 space-y-3 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif", borderColor: "#C49A3C" }}>
            <p className="text-base text-muted-foreground">
              Wasser fasziniert Groß und Klein. Ob Morgenfitness oder Abkühlung nach einem heißen Tag, ob Meerrauschen oder das Plätschern eines Bachlaufes. Für uns von pim POOL ist jede Wasserlandschaft, die wir für Sie kreieren, pure Lebensfreude.
            </p>
            <p className="text-base text-muted-foreground">
              Gemeinsam mit Ihnen entwerfen wir Ihren ganz individuellen Pool oder Schwimmteich. Neben unserer Begeisterung dürfen Sie von uns die Erfahrung aus 30 Jahren und ein starkes Netzwerk an Partnern erwarten. Von der Planung bis zur Umsetzung haben Sie immer einen festen Ansprechpartner.
            </p>
            <p className="text-base text-muted-foreground">
              Als zertifizierter Fachverleger für Schwimmbecken-Auskleidungen von RENOLIT stehen wir für Qualität bis ins Detail. Wenn Sie selbst mit gestalten möchten, bringen Sie gerne Eigenleistung ein. Oder Sie vertrauen uns und unseren Partnern und genießen einfach.
            </p>
          </div>
        </div>

        {/* Bild rechts */}
        <div data-reveal="right" className="relative min-h-[520px]" style={{ backgroundColor: "#C49A3C" }}>
          <div className="absolute inset-8 border border-white/50 pointer-events-none z-10" />
          <div className="absolute top-10 -left-10 right-10 bottom-10 shadow-2xl overflow-hidden">
            <img src={aboutPool} alt="Individuelle Wasserlandschaft von pim POOL" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Wassertropfen Hintergrund */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img src={leistungenBg} alt="" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="container-page relative z-10">
          <h2
            data-reveal
            className="text-center text-4xl md:text-5xl font-bold mb-16 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Unsere Leistungen
          </h2>
          <div data-reveal-group className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {LEISTUNGEN.map((item) => (
              <Link key={item.title} to={item.to} data-reveal-item className="group">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition">
                    {item.title}
                  </h3>
                  <item.icon className="size-10 shrink-0 mt-0.5" strokeWidth={1} style={{ color: "#C49A3C" }} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section>
        <div className="py-16 text-center" style={{ backgroundColor: "#f5f5f3" }}>
          <div data-reveal className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Highlights</div>
          <h2
            data-reveal
            data-reveal-delay="0.08"
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Vier gute Gründe für Ihre Wasserlandschaft
          </h2>
        </div>
        <div data-reveal-group className="grid grid-cols-2 lg:grid-cols-4 gap-y-8" style={{ backgroundColor: "#f5f5f3" }}>
          {/* Zeile 1 */}
          <div data-reveal-item className="bg-[#f5f5f3] flex flex-col items-center justify-center px-8 py-16 min-h-[480px]">
            <Waves className="size-16 mb-6" strokeWidth={1} style={{ color: "#C49A3C" }} />
            <h3 className="text-xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Pools nach Maß</h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">Stein für Stein entsteht Ihr Becken in der Form, Größe und Tiefe, die Sie sich wünschen.</p>
            <Link to="/poolabdeckungen" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Mehr erfahren <ArrowRight className="size-3.5" /></Link>
          </div>
          <div data-reveal-item className="min-h-[480px] overflow-hidden">
            <img src={highlight1} alt="" className="w-full h-full object-cover" />
          </div>
          <div data-reveal-item className="bg-[#f5f5f3] flex flex-col items-center justify-center px-8 py-16 min-h-[480px]">
            <Palette className="size-16 mb-6" strokeWidth={1} style={{ color: "#C49A3C" }} />
            <h3 className="text-xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Folien & Design</h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">Hochwertige RENOLIT Folien in vielen Farben und Oberflächen, auf Wunsch in täuschend echter Steinoptik.</p>
            <Link to="/folien-farben-design" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Mehr erfahren <ArrowRight className="size-3.5" /></Link>
          </div>
          <div data-reveal-item className="min-h-[480px] overflow-hidden">
            <img src={highlight2} alt="" className="w-full h-full object-cover" />
          </div>
          {/* Zeile 2 */}
          <div data-reveal-item className="bg-[#f5f5f3] flex flex-col items-center justify-center px-8 py-16 min-h-[480px]">
            <Leaf className="size-16 mb-6" strokeWidth={1} style={{ color: "#C49A3C" }} />
            <h3 className="text-xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Schwimmteiche</h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">Erholung im eigenen Garten ganz ohne Chemie, vom naturnahen Teich bis zum Natur-Pool.</p>
            <Link to="/schwimmteich" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Mehr erfahren <ArrowRight className="size-3.5" /></Link>
          </div>
          <div data-reveal-item className="min-h-[480px] overflow-hidden">
            <img src={highlight3} alt="" className="w-full h-full object-cover" />
          </div>
          <div data-reveal-item className="bg-[#f5f5f3] flex flex-col items-center justify-center px-8 py-16 min-h-[480px]">
            <Wrench className="size-16 mb-6" strokeWidth={1} style={{ color: "#C49A3C" }} />
            <h3 className="text-xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Aufbau & Montage</h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">Vom Aushub über den Beckenbau aus Styroporsteinen bis zur Technik kommt alles aus einer Hand.</p>
            <Link to="/aufbau-unserer-pools" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Mehr erfahren <ArrowRight className="size-3.5" /></Link>
          </div>
          <div data-reveal-item className="min-h-[480px] overflow-hidden">
            <img src={highlight4} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* REFERENZEN */}
      <section className="relative overflow-hidden">
        {/* Split-Hintergrund über die gesamte Sektionshöhe */}
        <div className="absolute inset-0 grid grid-cols-[42%_58%] pointer-events-none" aria-hidden="true">
          <div className="bg-white" />
          <div style={{ backgroundColor: "#C49A3C" }} />
        </div>

        {/* Inhalt */}
        <div className="relative">
          {/* Heading-Bereich: "Referenzen" links, beige rechts sichtbar */}
          <div className="px-16 py-24">
            <h2
              data-reveal
              className="text-5xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Referenzen
            </h2>
          </div>

          {/* Bild-Grid – spannt über weiße UND beige Seite */}
          <div data-reveal-group className="grid grid-cols-3 gap-3 px-28 pb-16">
            {[ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17].map((src, i) => (
              <div key={i} data-reveal-item className="aspect-[4/3] overflow-hidden group">
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REZENSIONEN */}
      <section className="relative overflow-hidden bg-white py-24 px-8">
        {/* Wassertropfen-Textur */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img src={leistungenBg} alt="" className="w-full h-full object-cover opacity-15" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2
            data-reveal
            className="text-5xl font-bold text-foreground mb-14"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Rezensionen
          </h2>

          {/* Zitat-Box mit feiner brauner Umrandung */}
          <div data-reveal data-reveal-delay="0.1" className="px-14 py-12" style={{ border: "1px solid #C49A3C" }}>
            <div className="min-h-[140px] flex flex-col justify-center">
              <p
                className="text-xl leading-relaxed text-foreground/80 italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {REVIEWS[reviewSlide].text}
              </p>
              {REVIEWS[reviewSlide].name && (
                <p className="mt-8 text-base font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {REVIEWS[reviewSlide].name}
                </p>
              )}
              {REVIEWS[reviewSlide].source && (
                <p className="mt-1 text-sm text-muted-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {REVIEWS[reviewSlide].source}
                </p>
              )}
            </div>
          </div>

          {/* Navigations-Punkte */}
          <div className="flex justify-center gap-2 mt-10">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setReviewSlide(i)}
                className={`rounded-full transition-all ${i === reviewSlide ? "size-2.5 bg-foreground/50" : "size-2 bg-foreground/20 hover:bg-foreground/35"}`}
                aria-label={`Rezension ${i + 1}`}
              />
            ))}
          </div>

          <Link
            to="/kontakt"
            className="mt-10 inline-flex items-center px-6 py-3 text-white font-medium transition hover:opacity-90"
            style={{ backgroundColor: "#16527A", fontFamily: "'Playfair Display', serif" }}
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      {/* ÜBER UNS – Bild links / Text rechts */}
      <section id="ueber-uns" className="grid lg:grid-cols-2 overflow-hidden scroll-mt-20">
        {/* Bild – Porträt von Pim van der Poel, vollständig sichtbar */}
        <div data-reveal="left" className="relative min-h-[600px] flex items-end justify-center" style={{ background: "linear-gradient(160deg, #eef2f5 0%, #dfe6ec 100%)" }}>
          <img src={bild19} alt="Pim van der Poel, Geschäftsführer von pim POOL" className="h-[88%] w-auto max-w-full object-contain self-end" />
        </div>

        {/* Text rechts */}
        <div data-reveal="right" className="flex flex-col justify-center px-14 lg:px-20 py-20 bg-white">
          <h2
            className="text-4xl font-bold text-foreground mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Über uns
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            Schon vor 30 Jahren hat unser Geschäftsführer Pim van der Poel die ersten Schwimmteiche in Holland gebaut. Diese Erfahrung fließt heute in jede Wasserlandschaft ein, die in Hohenpolding entsteht. Für die Umsetzung sind viele Bauabschnitte nötig, von den Erdarbeiten über den Wasseranschluss bis zur Gartengestaltung. Wir koordinieren alle Firmen, damit Sie immer einen festen Ansprechpartner haben.
          </p>

          {/* Callout mit linkem Balken */}
          <div className="border-l-[3px] pl-5 mb-6" style={{ borderColor: "#C49A3C" }}>
            <p className="text-base font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Unsere Leistungen auf einen Blick:
            </p>
          </div>

          {/* 2-spaltige Liste – klickbar */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {LEISTUNGEN.map((item) => (
              <Link key={item.title} to={item.to} className="flex items-center gap-3 group">
                <div className="size-3 shrink-0 transition group-hover:opacity-70" style={{ backgroundColor: "#C49A3C" }} />
                <span className="text-sm text-foreground group-hover:text-primary transition">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
