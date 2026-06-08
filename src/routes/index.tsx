import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, Sun, Zap, Droplets, Bot, Layers, Waves, Sparkles, ArrowRight } from "lucide-react";
import heroPool from "@/assets/hero.png";
import aboutPool from "@/assets/about-pool.png";
import leistungenBg from "@/assets/leistungen-bg.png";
import ref9 from "@/assets/ref9.avif";
import ref10 from "@/assets/ref10.avif";
import ref11 from "@/assets/ref11.avif";
import ref12 from "@/assets/ref12.avif";
import ref13 from "@/assets/ref13.avif";
import ref14 from "@/assets/ref14.avif";
import ref15 from "@/assets/ref15.avif";
import ref16 from "@/assets/ref16.avif";
import ref17 from "@/assets/ref17.avif";
import bild19 from "@/assets/bild19.png";
import highlight1 from "@/assets/highlight1.png";
import highlight2 from "@/assets/highlight2.png";
import highlight3 from "@/assets/highlight3.png";
import highlight4 from "@/assets/highlight4.png";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "POOLCAP – Poolabdeckungen, Überdachungen & Wassertechnik | Baierbrunn" },
      { name: "description", content: "Premium Poolabdeckungen, Poolüberdachungen, Wärmepumpen und chlorfreie Wasseraufbereitung im Großraum München – seit 2000." },
    ],
  }),
  component: HomePage,
});

const REVIEWS = [
  {
    text: "Nach längerem Suchen – und negativer Erfahrung – sind wir zum Glück auf die Firma Poolcap gestoßen. Das Preis-Leistungsverhältnis stimmt. Mit dem Service waren wir voll zufrieden. Genaue Maße wurden mit dem Lasermessgerät genommen, sodass die Plane dann auch genau passte. Die Lieferzeit wurde eingehalten, ebenso wie der Zeitpunkt der Montage, was heutzutage nicht unbedingt selbstverständlich ist. Auch wurde das Verpackungsmaterial noch am selben Tag mitgenommen. So können wir die Firma – Hr. Regul – Baierbrunn, nicht zuletzt wegen Ihrer Akkuratesse wirklich empfehlen.",
    name: "C. und W. Pade, Forstenried",
    source: "",
  },
  {
    text: "Eine der informativsten Webseiten zu Schwimmbad-Abdeckungen, die ich finden konnte.",
    name: "Michael Koitzsch",
    source: "Rezension aus Google · 5/5 · vor einem Jahr",
  },
  {
    text: "Alles zur Zufriedenheit ausgeführt.",
    name: "",
    source: "5/5",
  },
];

const PARTNER_SLIDES = [
  [
    { name: "BAYROL", tagline: "your pool & spa water expert", serif: false },
    { name: "BEHNCKE", tagline: "GmbH", serif: false },
    { name: "bsw", tagline: "Bundesverband Schwimmbad & Wellness e.V.", serif: true },
    { name: "ASEKO", tagline: "water treatment", serif: false },
    { name: "FLUIDRA", tagline: "Pool & Wellness", serif: false },
  ],
  [
    { name: "PAHLEN", tagline: "Pool Technology", serif: false },
    { name: "CERTIKIN", tagline: "Pool & Spa Products", serif: false },
    { name: "HAYWARD", tagline: "Pool Equipment", serif: false },
    { name: "MAYTRONICS", tagline: "Dolphin Robotics", serif: false },
    { name: "ZODIAC", tagline: "Pool & Spa", serif: false },
  ],
  [
    { name: "PENTAIR", tagline: "Water Treatment", serif: false },
    { name: "SPECK", tagline: "Pumpen GmbH", serif: false },
    { name: "ELECRO", tagline: "Pool Heating", serif: false },
    { name: "COVERSTAR", tagline: "Pool Covers", serif: false },
    { name: "AQUA-PLUS", tagline: "Schwimmbadtechnik", serif: false },
  ],
];

const LEISTUNGEN = [
  { icon: ShieldCheck, title: "Poolabdeckungen", text: "Rolloabdeckungen, Solar- und Sicherheitsabdeckungen nach Maß – für maximalen Schutz und bis zu 70 % Energieersparnis.", to: "/poolabdeckungen" },
  { icon: Layers, title: "Poolüberdachungen", text: "Von flach bis begehbar: 14 Premiummodelle für jeden Pool und Geschmack – individuell geplant und montiert.", to: "/poolueberdachungen" },
  { icon: Droplets, title: "Pool chlorfrei", text: "Kristallklares, hautschonendes Wasser durch modernste Ionisierungstechnik – ganz ohne Chlorgeruch.", to: "/pool-chlorfrei" },
  { icon: Zap, title: "Wärmepumpen", text: "Effizient heizen, länger schwimmen: Unsere Wärmepumpen verlängern die Badesaison – ideal für Bayern.", to: "/weitere-produkte/waermepumpen" },
  { icon: Waves, title: "Wasserbehandlung", text: "Vollautomatische ASEKO-Dosiertechnik für perfekte Wasserqualität – rund um die Uhr, ohne Aufwand.", to: "/weitere-produkte/wasserbehandlung" },
  { icon: Bot, title: "Reinigungsroboter", text: "Sauberer Pool ohne Handarbeit: Unsere Roboter reinigen Boden und Wände vollautomatisch und gründlich.", to: "/weitere-produkte/reinigungsroboter" },
];

const HIGHLIGHTS = [
  { icon: Layers, title: "Fahrbares Pooldeck", text: "Die elegante Lösung: Terrasse und Abdeckung in einem.", to: "/weitere-produkte/fahrbares-pooldeck" },
  { icon: Waves, title: "Pools (Einstück)", text: "Hochwertige Fertigbecken in Premium-Qualität.", to: "/weitere-produkte/pools" },
  { icon: Droplets, title: "Pool chlorfrei", text: "Kristallklares Wasser – ganz ohne Chlorgeruch.", to: "/pool-chlorfrei" },
  { icon: Sparkles, title: "Wasserbehandlung", text: "Profi-Dosiertechnik ASEKO – vollautomatisch.", to: "/weitere-produkte/wasserbehandlung" },
  { icon: Zap, title: "Wärmepumpen", text: "Effizient heizen – ideal für das bayerische Klima.", to: "/weitere-produkte/waermepumpen" },
  { icon: Bot, title: "Reinigungsroboter", text: "Sauberer Pool – komplett ohne Handarbeit.", to: "/weitere-produkte/reinigungsroboter" },
  { icon: Sun, title: "Solaranlagen", text: "Sonnenwärme nutzen – kostenlos und nachhaltig.", to: "/weitere-produkte/solaranlage" },
  { icon: ShieldCheck, title: "Umwälzpumpen", text: "Leise, sparsam, langlebig – das Herz Ihres Pools.", to: "/weitere-produkte/umwaelzpumpen" },
];

function HomePage() {
  const [partnerSlide, setPartnerSlide] = useState(0);
  const [reviewSlide, setReviewSlide] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden -mt-18 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <img src={heroPool} alt="" width={1920} height={1080} className="size-full object-cover" />
          <div className="absolute inset-0 bg-black/68" />
        </div>
        <div className="flex flex-col items-center text-center px-6 pt-48 pb-24 text-white">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide uppercase"
            style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)" }}
          >
            POOLABDECKUNGEN<br />NACH MAß
          </h1>
          <p
            className="mt-5 text-lg md:text-2xl font-medium tracking-widest uppercase text-white/90"
            style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
          >
            Ihr Spezialist für Ihre individuelle<br />Schwimmbadabdeckung
          </p>
          <p className="mt-5 text-base md:text-lg text-white/75 max-w-xl" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
            Wir führen sämtliche Produkte für Ihren Pool, kontaktieren Sie uns!
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold transition hover:bg-white/90"
            style={{ color: "#29ABE2" }}
          >
            Jetzt Angebot anfordern <ArrowRight className="size-4" />
          </Link>
          <div className="mt-10 opacity-60">
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
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 lg:py-24 bg-white">
          <h2
            className="text-2xl md:text-3xl lg:text-[1.9rem] font-bold leading-tight text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            POOLCAP aus Baierbrunn schützt und pflegt Ihren Pool
          </h2>
          <div className="mt-8 border-l-2 pl-6 space-y-3 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif", borderColor: "#c9b99a" }}>
            <p className="text-base text-muted-foreground">
              Seit über 25 Jahren beraten, liefern und montieren wir hochwertige Poolabdeckungen, Überdachungen und Wassertechnik im Großraum München. Das macht uns zu Ihrem kompetenten und persönlichen Ansprechpartner rund um Ihren Pool.
            </p>
            <p className="text-base text-muted-foreground">
              Ob Rolloabdeckung nach Maß, elegante Poolüberdachung oder chlorfreie Wasseraufbereitung – jede Lösung wird individuell auf Ihre Wünsche abgestimmt. Wir führen ausschließlich geprüfte Markenprodukte und begleiten Sie von der Erstberatung bis zur Montage.
            </p>
            <p className="text-base text-muted-foreground">
              Selbstverständlich kümmern wir uns auch um Heiztechnik, Solaranlagen und Reinigungstechnik – für einen gepflegten Pool das ganze Jahr über.
            </p>
          </div>
        </div>

        {/* Bild rechts */}
        <div className="relative min-h-[520px]" style={{ backgroundColor: "#c9b99a" }}>
          <div className="absolute inset-8 border border-white/50 pointer-events-none z-10" />
          <div className="absolute top-10 -left-10 right-10 bottom-10 shadow-2xl overflow-hidden">
            <img src={aboutPool} alt="POOLCAP Pool" className="w-full h-full object-cover" />
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
            className="text-center text-4xl md:text-5xl font-bold mb-16 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            POOLCAP Leistungen
          </h2>
          <div className="grid md:grid-cols-3 gap-x-16 gap-y-14">
            {LEISTUNGEN.map((item) => (
              <Link key={item.to} to={item.to} className="group">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition">
                    {item.title}
                  </h3>
                  <item.icon className="size-10 shrink-0 mt-0.5" strokeWidth={1} style={{ color: "#c9b99a" }} />
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
          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Highlights</div>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Premiumprodukte, die Sie sofort begeistern
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8" style={{ backgroundColor: "#f5f5f3" }}>
          {/* Zeile 1 */}
          <div className="bg-[#f5f5f3] flex flex-col items-center justify-center px-8 py-16 min-h-[480px]">
            <Layers className="size-16 mb-6" strokeWidth={1} style={{ color: "#c9b99a" }} />
            <h3 className="text-xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Fahrbares Pooldeck</h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">Die elegante Lösung: Terrasse und Abdeckung in einem – sicher, platzsparend und ästhetisch.</p>
            <Link to="/weitere-produkte/fahrbares-pooldeck" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Mehr erfahren <ArrowRight className="size-3.5" /></Link>
          </div>
          <div className="min-h-[480px] overflow-hidden">
            <img src={highlight1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#f5f5f3] flex flex-col items-center justify-center px-8 py-16 min-h-[480px]">
            <Droplets className="size-16 mb-6" strokeWidth={1} style={{ color: "#c9b99a" }} />
            <h3 className="text-xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Pool chlorfrei</h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">Kristallklares, hautschonendes Wasser durch Ionisierung – ganz ohne Chlorgeruch.</p>
            <Link to="/pool-chlorfrei" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Mehr erfahren <ArrowRight className="size-3.5" /></Link>
          </div>
          <div className="min-h-[480px] overflow-hidden">
            <img src={highlight2} alt="" className="w-full h-full object-cover" />
          </div>
          {/* Zeile 2 */}
          <div className="bg-[#f5f5f3] flex flex-col items-center justify-center px-8 py-16 min-h-[480px]">
            <Zap className="size-16 mb-6" strokeWidth={1} style={{ color: "#c9b99a" }} />
            <h3 className="text-xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Wärmepumpen</h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">Effizient heizen, länger schwimmen – unsere Wärmepumpen verlängern die Badesaison in Bayern.</p>
            <Link to="/weitere-produkte/waermepumpen" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Mehr erfahren <ArrowRight className="size-3.5" /></Link>
          </div>
          <div className="min-h-[480px] overflow-hidden">
            <img src={highlight3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#f5f5f3] flex flex-col items-center justify-center px-8 py-16 min-h-[480px]">
            <Bot className="size-16 mb-6" strokeWidth={1} style={{ color: "#c9b99a" }} />
            <h3 className="text-xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Reinigungsroboter</h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">Sauberer Pool ohne Handarbeit – vollautomatische Reinigung von Boden und Wänden.</p>
            <Link to="/weitere-produkte/reinigungsroboter" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Mehr erfahren <ArrowRight className="size-3.5" /></Link>
          </div>
          <div className="min-h-[480px] overflow-hidden">
            <img src={highlight4} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* PARTNERFIRMEN */}
      <section className="py-24" style={{ backgroundColor: "#f2f2f0" }}>
        <div className="container-page text-center">
          <h2
            className="text-4xl md:text-5xl mb-20 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Unsere Partnerfirmen
          </h2>
          <div className="relative overflow-hidden min-h-[80px]">
            {PARTNER_SLIDES.map((slide, si) => (
              <div
                key={si}
                className="flex items-center justify-center gap-14 flex-wrap grayscale opacity-60 transition-all duration-500 absolute inset-0"
                style={{ opacity: si === partnerSlide ? 0.6 : 0, pointerEvents: si === partnerSlide ? "auto" : "none" }}
              >
                {slide.map((p) => (
                  <div key={p.name} className="flex flex-col items-center">
                    <span
                      className="text-3xl font-bold tracking-widest text-foreground"
                      style={p.serif ? { fontFamily: "'Playfair Display', serif", fontSize: "2rem" } : {}}
                    >
                      {p.name}
                    </span>
                    <span className="text-[11px] tracking-wider text-foreground/60 mt-0.5 max-w-[110px] leading-tight text-center">
                      {p.tagline}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-16">
            {PARTNER_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setPartnerSlide(i)}
                className={`rounded-full transition-all ${i === partnerSlide ? "size-2.5 bg-foreground/50" : "size-2 bg-foreground/20 hover:bg-foreground/35"}`}
                aria-label={`Partner-Seite ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* REFERENZEN */}
      <section className="relative overflow-hidden">
        {/* Split-Hintergrund über die gesamte Sektionshöhe */}
        <div className="absolute inset-0 grid grid-cols-[42%_58%] pointer-events-none" aria-hidden="true">
          <div className="bg-white" />
          <div style={{ backgroundColor: "#c9b99a" }} />
        </div>

        {/* Inhalt */}
        <div className="relative">
          {/* Heading-Bereich: "Referenzen" links, beige rechts sichtbar */}
          <div className="px-16 py-24">
            <h2
              className="text-5xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Referenzen
            </h2>
          </div>

          {/* Bild-Grid – spannt über weiße UND beige Seite */}
          <div className="grid grid-cols-3 gap-3 px-28 pb-16">
            {[ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17].map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden">
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
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
            className="text-5xl font-bold text-foreground mb-14"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Rezensionen
          </h2>

          {/* Zitat-Box mit feiner brauner Umrandung */}
          <div className="px-14 py-12" style={{ border: "1px solid #c9b99a" }}>
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
            style={{ backgroundColor: "#29ABE2", fontFamily: "'Playfair Display', serif" }}
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      {/* ÜBER UNS – Bild links / Text rechts */}
      <section className="grid lg:grid-cols-2 overflow-hidden">
        {/* Bild – randlos links */}
        <div className="relative min-h-[600px]">
          <img src={bild19} alt="POOLCAP – Ihr Poolspezialist" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Text rechts */}
        <div className="flex flex-col justify-center px-14 lg:px-20 py-20 bg-white">
          <h2
            className="text-4xl font-bold text-foreground mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Über uns
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            Seit über 25 Jahren sind wir Ihr zuverlässiger Ansprechpartner rund um den Pool im Großraum München. Von der individuellen Beratung über die Maßfertigung bis zur fachgerechten Montage – bei POOLCAP erhalten Sie alles aus einer Hand. Unser Team berät Sie persönlich und findet für jeden Pool die optimale Lösung.
          </p>

          {/* Callout mit linkem Balken */}
          <div className="border-l-[3px] pl-5 mb-6" style={{ borderColor: "#c9b99a" }}>
            <p className="text-base font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Unsere Leistungen auf einen Blick:
            </p>
          </div>

          {/* 2-spaltige Liste – klickbar */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {LEISTUNGEN.map((item) => (
              <Link key={item.to} to={item.to} className="flex items-center gap-3 group">
                <div className="size-3 shrink-0 transition group-hover:opacity-70" style={{ backgroundColor: "#c9b99a" }} />
                <span className="text-sm text-foreground group-hover:text-primary transition">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
