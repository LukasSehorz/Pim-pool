import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const stats = [
    { value: "100 %", label: "Pools nach Maß" },
    { value: "Premium", label: "Qualität & Material" },
    { value: "Region", label: "Aus Niederbayern" },
  ];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".trust-card", {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%" },
      });
      gsap.from(".trust-stat", {
        y: 18, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12, delay: 0.2,
        scrollTrigger: { trigger: ref.current, start: "top 90%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="relative z-10 -mt-16 px-6">
      <div className="trust-card max-w-3xl mx-auto bg-white rounded-2xl shadow-elegant grid grid-cols-3 divide-x divide-border">
        {stats.map((s) => (
          <div key={s.label} className="trust-stat flex flex-col items-center justify-center py-8 px-4 text-center">
            <span
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "#F15A22", fontFamily: "'Playfair Display', serif" }}
            >
              {s.value}
            </span>
            <span className="mt-2 text-sm md:text-base text-muted-foreground font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
