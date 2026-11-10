"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// El contenido siempre es visible sin JavaScript. No se bloquea el scroll.
const targets = [
  ".hero-copy", ".hero-visual", ".page-intro", ".about-art", ".breadcrumb",
  ".purpose-strip", ".section-heading", ".product-spotlight-copy", ".product-spotlight > .photo",
  ".inner-visual", ".path-card", ".community-art", ".community-copy", ".pitch-card",
  ".team-grid > article", ".uses-grid > article", ".values-list > article",
  ".story-columns > p", ".compost-story > *", ".separation-section > *", ".timeline > article",
  ".faq-section > div:first-child", ".faq-list > details", ".contact-copy", ".join-banner", ".site-footer",
].join(",");

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;

    function stop() {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    }
    function start() {
      stop();
      if (preference.matches) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer?.unobserve(entry.target);
          // No animar un bloque mientras el usuario ya está interactuando con él.
          if (entry.target.contains(document.activeElement)) return;
          const parent = entry.target.parentElement;
          const staggered = parent?.matches(".team-grid, .uses-grid, .path-grid, .values-list, .timeline, .faq-list");
          const index = staggered && parent ? Array.from(parent.children).indexOf(entry.target) : 0;
          const animation = entry.target.animate(
            [{ opacity: 0, translate: "0 20px" }, { opacity: 1, translate: "0 0" }],
            { duration: 650, delay: Math.min(index * 65, 195), easing: "cubic-bezier(.22, 1, .36, 1)", fill: "backwards" },
          );
          animations.add(animation);
          void animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
        });
      }, { threshold: 0.08 });
      document.querySelectorAll(targets).forEach((element) => observer?.observe(element));
    }
    const frame = requestAnimationFrame(start);
    preference.addEventListener("change", start);
    return () => {
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", start);
      stop();
    };
  }, [pathname]);

  return null;
}
