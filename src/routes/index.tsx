import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Sun, Zap, Droplets, Bot, Layers, Waves, Sparkles, ArrowRight, Check, Star } from "lucide-react";
import heroPool from "@/assets/hero-pool.jpg";
import catAbdeckung from "@/assets/cat-abdeckung.jpg";
import catUeber from "@/assets/cat-ueberdachung.jpg";
import catChlor from "@/assets/cat-chlorfrei.jpg";
import catTechnik from "@/assets/cat-technik.jpg";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "POOLCAP – Poolabdeckungen, Überdachungen & Wassertechnik | Baierbrunn" },
      { name: "description", content: "Premium Poolabdeckungen, Poolüberdachungen, Wärmepumpen und chlorfreie Wasseraufbereitung im Großraum München – seit 2000." },
    ],
  }),
  component: HomePage,
});

const CATEGORIES = [
  { title: "Poolabdeckungen", text: "Rolloabdeckungen, Solar- und Sicherheitsabdeckungen.", to: "/poolabdeckungen", img: catAbdeckung },
  { title: "Poolüberdachungen", text: "Flach bis begehbar – 14 Premiummodelle.", to: "/poolueberdachungen", img: catUeber },
  { title: "Pool chlorfrei", text: "Sanftes Wasser durch Ionisierung & Aktivsauerstoff.", to: "/pool-chlorfrei", img: catChlor },
  { title: "Wassertechnik", text: "Wärmepumpen, Solar, Pumpen & Roboter.", to: "/weitere-produkte", img: catTechnik },
];

const HIGHLIGHTS = [
  { icon: Layers, title: "Fahrbares Pooldeck", text: "Die elegante Lösung: Terrasse und Abdeckung in einem." },
  { icon: Waves, title: "Pools (Einstück)", text: "Hochwertige Fertigbecken in Premium-Qualität." },
  { icon: Droplets, title: "Pool chlorfrei", text: "Kristallklares Wasser – ganz ohne Chlorgeruch." },
  { icon: Sparkles, title: "Wasserbehandlung", text: "Profi-Dosiertechnik ASEKO – vollautomatisch." },
  { icon: Zap, title: "Wärmepumpen", text: "Effizient heizen – ideal für das bayerische Klima." },
  { icon: Bot, title: "Reinigungsroboter", text: "Sauberer Pool – komplett ohne Handarbeit." },
  { icon: Sun, title: "Solaranlagen", text: "Sonnenwärme nutzen – kostenlos und nachhaltig." },
  { icon: ShieldCheck, title: "Umwälzpumpen", text: "Leise, sparsam, langlebig – das Herz Ihres Pools." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroPool} alt="" width={1920} height={1080} className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/60 to-transparent" />
        </div>
        <div className="container-page py-24 md:py-36 text-primary-foreground">
          <div className="max-w-2xl reveal">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <Star className="size-3.5 fill-current" /> Spezialist seit {COMPANY.since} · {COMPANY.region}
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02]">
              Ihr Pool. Sicher. Warm. Gepflegt – <span className="text-primary">auf Knopfdruck.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-xl">
              Premium Poolabdeckungen, Überdachungen und Wassertechnik aus einer Hand – persönliche Beratung im Großraum München.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold shadow-elegant hover:opacity-95 transition"
              >
                Kostenloses Angebot anfordern <ArrowRight className="size-4" />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 backdrop-blur px-7 py-4 font-medium hover:bg-primary-foreground/10 transition"
              >
                <Phone className="size-4" /> {COMPANY.phone}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/85">
              {["Bis zu 70 % Energieersparnis", "Geprüfte Sicherheit", "Hersteller-Qualität"].map((t) => (
                <li key={t} className="flex items-center gap-1.5"><Check className="size-4 text-primary" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* KATEGORIEN */}
      <section className="container-page py-20">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Unsere Welten</div>
          <h2 className="text-3xl md:text-4xl font-bold">Alles für Ihren Pool – aus einer Hand</h2>
          <p className="mt-3 text-muted-foreground">
            Von der Abdeckung bis zur vollautomatischen Wasseraufbereitung: Wir liefern, beraten und montieren in Premiumqualität.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card hover:shadow-elegant transition"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt="" loading="lazy" className="size-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                <div className="text-xl font-bold">{c.title}</div>
                <div className="text-sm text-primary-foreground/80 mt-1">{c.text}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Entdecken <ArrowRight className="size-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Highlights</div>
              <h2 className="text-3xl md:text-4xl font-bold max-w-xl">Premiumprodukte, die Sie sofort begeistern</h2>
            </div>
            <Link to="/weitere-produkte" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Alle Produkte ansehen <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="rounded-2xl bg-card border border-border p-5 hover:shadow-card hover:-translate-y-1 transition">
                <div className="size-11 rounded-xl gradient-water grid place-items-center text-primary-foreground shadow-card">
                  <h.icon className="size-5" />
                </div>
                <div className="mt-4 font-bold">{h.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{h.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WARUM POOLCAP */}
      <section className="container-page py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Warum POOLCAP</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Über 25 Jahre Erfahrung. Tausende glückliche Pools.</h2>
          <p className="mt-4 text-muted-foreground">
            Wir sind Spezialisten – kein Baumarkt-Sortiment. Jedes System wird mit Ihnen geplant, getestet und persönlich übergeben.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Beratung durch echte Pool-Profis, nicht durch Verkäufer",
              "Hersteller-Qualität – ausschließlich geprüfte Marken",
              "Eigener Montageservice im Großraum München",
              "Faire Garantie- und Wartungspakete",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <div className="mt-0.5 size-6 rounded-full gradient-water grid place-items-center text-primary-foreground shrink-0"><Check className="size-3.5" /></div>
                <span className="text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full gradient-water px-6 py-3 font-semibold text-primary-foreground shadow-card hover:opacity-95 transition">
              Jetzt unverbindlich beraten lassen
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-elegant">
            <img src={catAbdeckung} alt="POOLCAP Rolloabdeckung" loading="lazy" className="size-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-elegant max-w-[220px]">
            <div className="flex gap-0.5 text-primary">
              {[0,1,2,3,4].map((i)=> <Star key={i} className="size-4 fill-current" />)}
            </div>
            <p className="mt-2 text-sm font-medium">„Top-Beratung und perfekte Montage – wir würden sofort wieder bei POOLCAP kaufen.“</p>
            <div className="mt-2 text-xs text-muted-foreground">Familie Huber · Starnberg</div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
