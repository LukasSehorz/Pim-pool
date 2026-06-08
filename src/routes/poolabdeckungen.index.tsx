import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/")({
  head: () => ({
    meta: [
      { title: `${CONTENT["poolabdeckungen"].title} – POOLCAP` },
      { name: "description", content: CONTENT["poolabdeckungen"].subtitle },
    ],
  }),
  component: RouteComponent,
});

const SUBCATEGORIES = [
  { label: "Rolloabdeckungen", to: "/poolabdeckungen/rolloabdeckungen", img: "/images/poolabdeckungen/rolloabdeckungen.png" },
  { label: "Schaumabdeckung", to: "/poolabdeckungen/schaumabdeckung", img: "/images/poolabdeckungen/schaumabdeckung.png" },
  { label: "Luftpolsterabdeckung", to: "/poolabdeckungen/luftpolsterabdeckung", img: "/images/poolabdeckungen/luftpolsterabdeckung.png" },
  { label: "Schutz- & Winternetze", to: "/poolabdeckungen/schutz-winter-sicherheitsnetz", img: "/images/poolabdeckungen/schutz-winternetze.png" },
  { label: "Aircover Winterabdeckung", to: "/poolabdeckungen/aircover-winterabdeckung", img: "/images/poolabdeckungen/aircover.png" },
  { label: "Randaufliegende Abdeckung", to: "/poolabdeckungen/randaufliegende-abdeckung", img: "/images/poolabdeckungen/randaufliegende-abdeckung.png" },
];

function SubcategoryGrid() {
  return (
    <section className="py-16 px-8 lg:px-16 bg-white">
      <div className="grid grid-cols-3 gap-5">
        {SUBCATEGORIES.map((cat) => (
          <Link
            key={cat.to}
            to={cat.to}
            className="group relative overflow-hidden"
            style={{ aspectRatio: "2/3" }}
          >
            <img
              src={cat.img}
              alt={cat.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                className="text-white text-lg font-semibold leading-snug"
                style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
              >
                {cat.label}
              </p>
              <div
                className="mt-2 h-[2px] w-8 transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: "#c9b99a" }}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Bar3D({ x, baseY, barH, w, color, colorDark, colorTop, label, visible, delay }: {
  x: number; baseY: number; barH: number; w: number;
  color: string; colorDark: string; colorTop: string;
  label: string; visible: boolean; delay: number;
}) {
  const dx = 18; const dy = -10;
  const top = baseY - barH;

  const front = `${x},${top} ${x + w},${top} ${x + w},${baseY} ${x},${baseY}`;
  const side = `${x + w},${top} ${x + w + dx},${top + dy} ${x + w + dx},${baseY + dy} ${x + w},${baseY}`;
  const topFace = `${x},${top} ${x + w},${top} ${x + w + dx},${top + dy} ${x + dx},${top + dy}`;

  const transition = `transform 2.2s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;

  return (
    <g>
      {/* Animated bar body */}
      <g
        style={{
          transform: visible ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: `0px ${baseY}px`,
          transformBox: "user-space-on-use" as any,
          transition,
        }}
      >
        <polygon points={side} fill={colorDark} />
        <polygon points={front} fill={color} />
        <polygon points={topFace} fill={colorTop} />
      </g>
      {/* Label fades in after bar finishes */}
      <text
        x={x + w / 2}
        y={top - 12}
        textAnchor="middle"
        fontSize="13"
        fontWeight="bold"
        fill={color}
        style={{
          opacity: visible ? 1 : 0,
          transition: `opacity 0.6s ease ${delay + 2000}ms`,
        }}
      >
        {label}
      </text>
    </g>
  );
}

function EnergieChart() {
  const pTop = 48; const pBottom = 72; const pLeft = 56; const pRight = 36;
  const chartH = 300; const barW = 68; const gap = 22; const groupGap = 72;
  const dx = 18;
  const groupW = barW * 2 + gap;
  const totalW = pLeft + 2 * groupW + groupGap + pRight + dx;
  const svgH = pTop + chartH + pBottom;
  const baseY = pTop + chartH;

  const groups = [
    { label: "Außenpool", ohne: 100, mit: 30, saving: "-70%" },
    { label: "Hallenbad", ohne: 100, mit: 20, saving: "-80%" },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center w-full h-full px-8 py-16 bg-white">
      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#c9b99a" }}>
        Energieverbrauch im Vergleich
      </p>
      <h3 className="text-2xl font-bold mb-10 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
        Ersparnis durch Abdeckung
      </h3>

      <svg viewBox={`0 0 ${totalW} ${svgH}`} className="w-full max-w-sm">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((v) => {
          const y = pTop + (chartH * (100 - v)) / 100;
          return (
            <g key={v}>
              <line x1={pLeft - 6} y1={y} x2={totalW - pRight} y2={y} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,4" />
              <text x={pLeft - 10} y={y + 4} textAnchor="end" fontSize="11" fill="#9ca3af">{v}%</text>
            </g>
          );
        })}

        {/* Baseline */}
        <line x1={pLeft - 6} y1={baseY} x2={totalW - pRight} y2={baseY} stroke="#d1d5db" strokeWidth="1.5" />

        {groups.map((g, gi) => {
          const gx = pLeft + gi * (groupW + groupGap);
          const ohneH = (chartH * g.ohne) / 100;
          const mitH = (chartH * g.mit) / 100;

          return (
            <g key={g.label}>
              {/* Ohne (red) — same delay as green */}
              <Bar3D
                x={gx} baseY={baseY} barH={ohneH} w={barW}
                color="#e05252" colorDark="#a83030" colorTop="#f08080"
                label={`${g.ohne}%`} visible={visible} delay={gi * 200}
              />
              {/* Mit (green) — same delay, stops earlier naturally */}
              <Bar3D
                x={gx + barW + gap} baseY={baseY} barH={mitH} w={barW}
                color="#4caf82" colorDark="#2e7a56" colorTop="#7dd4ab"
                label={`${g.mit}%`} visible={visible} delay={gi * 200}
              />
              {/* Saving badge */}
              <text x={gx + groupW / 2} y={baseY + 22} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#c9b99a">
                {g.saving} Ersparnis
              </text>
              {/* Group label */}
              <text x={gx + groupW / 2} y={baseY + 42} textAnchor="middle" fontSize="13" fill="#374151" fontWeight="600">
                {g.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex gap-8 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#e05252" }} />
          <span className="text-sm text-foreground/70 font-medium">Ohne Abdeckung</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#4caf82" }} />
          <span className="text-sm text-foreground/70 font-medium">Mit Abdeckung</span>
        </div>
      </div>
    </div>
  );
}

function EnergieSection() {
  return (
    <section className="grid lg:grid-cols-2 overflow-hidden">
      {/* Left: chart on white background */}
      <div className="min-h-[600px] flex items-center bg-white">
        <EnergieChart />
      </div>

      {/* Right: text on white */}
      <div className="flex flex-col justify-center px-14 lg:px-20 py-20 bg-white">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#c9b99a" }}>
          Poolabdeckungen
        </p>
        <h2
          className="text-3xl lg:text-4xl font-bold mb-8 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Energieeinsparung
        </h2>

        <p className="text-sm text-foreground/75 leading-relaxed mb-6">
          Expertenberechnungen zeigen, dass der Energiebedarf eines abgedeckten Pools um bis zu <strong>70 Prozent</strong> sinkt, bei Hallenbädern bis zu <strong>80 Prozent</strong>.
        </p>

        <div className="border-l-[3px] pl-5 mb-5" style={{ borderColor: "#c9b99a" }}>
          <p className="font-bold text-sm mb-2">Die Energiekostenersparnis bei einem Außenpool:</p>
          <p className="text-sm text-foreground/75 leading-relaxed">
            Eine Abdeckung des Pools verhindert das schnelle Abkühlen des Schwimmbadwassers — im Freibad, besonders in der Nacht, bei Wind oder während Schlechtwetterperioden. Die Schwimmbadsaison kann bedeutend verlängert werden, bis hin zum Winterbetrieb. Die Heizkosten können durch eine Abdeckung auf ein Minimum gesenkt werden. Zusätzlich verringern sich die Chemiekosten beträchtlich.
          </p>
        </div>

        <p className="text-sm text-foreground/75 leading-relaxed mb-5">
          Ein Solarprofil bei einer Rolloabdeckung bringt nochmal zusätzliche kostenlose Wärme in den Pool.
        </p>

        <div className="border-l-[3px] pl-5 mb-5" style={{ borderColor: "#c9b99a" }}>
          <p className="font-bold text-sm mb-2">Weniger Reinigungsaufwand bei einem Außenpool:</p>
          <p className="text-sm text-foreground/75 leading-relaxed">
            Die Schwimmbadabdeckung verhindert im Freibad zusätzlich die Verschmutzung.
          </p>
        </div>

        <div className="border-l-[3px] pl-5" style={{ borderColor: "#c9b99a" }}>
          <p className="font-bold text-sm mb-2">Die Energiekostenersparnis bei einem Innenpool:</p>
          <p className="text-sm text-foreground/75 leading-relaxed">
            Im Hallenbad entsteht eine sehr hohe Luftfeuchtigkeit, die mit Entfeuchtungsgeräten reduziert werden muss — Geräte mit sehr hohem Stromverbrauch und langen Laufzeiten. Hinzu kommt, dass die Lufttemperatur immer höher gehalten werden muss als die Wassertemperatur. Durch eine Abdeckung wird die Luftfeuchte erheblich reduziert, die Lufttemperatur in der Schwimmhalle kann deutlich gesenkt werden. Darüber hinaus wird die Bausubstanz geschützt, die Geruchsbelästigung durch Poolchemie verringert und der Wasserverbrauch sinkt.
          </p>
        </div>
      </div>
    </section>
  );
}

function RouteComponent() {
  return (
    <ProductPage
      content={CONTENT["poolabdeckungen"]}
      video="/videos/hero-rollo.mp4"
      heroTitle={"Sie haben einen Pool\n...aber keine Poolabdeckung!"}
      beigeRight
      beforeCTA={<><SubcategoryGrid /><EnergieSection /></>}
    />
  );
}
