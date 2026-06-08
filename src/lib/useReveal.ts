import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Dezente, wiederverwendbare Animationen – datengetrieben, damit Sektionen
 * nicht statisch wirken, ohne ins Übertriebene zu kippen.
 *
 *  data-hero            → Container, dessen [data-hero-item] beim Laden gestaffelt einschweben (Intro, kein Scroll)
 *  data-reveal          → einzelnes Element beim Scrollen; Richtung "up" (default) | "down" | "left" | "right" | "fade"
 *  data-reveal-delay    → optionaler Delay in Sekunden
 *  data-reveal-group    → Container; direkte [data-reveal-item] werden beim Scrollen gestaffelt eingeblendet
 *
 * Nutzt set + to + clearProps → Elemente enden IMMER sichtbar (kein Hängenbleiben auf opacity:0).
 * Respektiert prefers-reduced-motion.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero-Intro (sofort beim Laden, ohne Scroll)
      const hero = scope.current?.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const items = hero.querySelectorAll<HTMLElement>("[data-hero-item]");
        if (items.length) {
          gsap.set(items, { opacity: 0, y: 26 });
          gsap.to(items, {
            opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
            stagger: 0.12, delay: 0.08, clearProps: "opacity,transform",
          });
        }
      }

      // Einzel-Reveals beim Scrollen
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const dir = el.dataset.reveal || "up";
        const delay = parseFloat(el.dataset.revealDelay || "0");
        const fromVars: gsap.TweenVars = { opacity: 0 };
        if (dir === "up") fromVars.y = 36;
        else if (dir === "down") fromVars.y = -36;
        else if (dir === "left") fromVars.x = -52;
        else if (dir === "right") fromVars.x = 52;
        gsap.set(el, fromVars);
        gsap.to(el, {
          opacity: 1, x: 0, y: 0, duration: 0.9, ease: "power3.out", delay,
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Gestaffelte Gruppen beim Scrollen
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
        if (!items.length) return;
        gsap.set(items, { opacity: 0, y: 40 });
        gsap.to(items, {
          opacity: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.09,
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: group, start: "top 84%" },
        });
      });
    }, scope);

    // Positionen neu berechnen, sobald Fonts/Bilder geladen sind (verhindert zu frühes Auslösen)
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready?.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [scope]);
}
