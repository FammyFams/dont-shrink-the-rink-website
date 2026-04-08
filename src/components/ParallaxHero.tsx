"use client";

import { useEffect, useRef } from "react";

export default function ParallaxHero({ imageUrl }: { imageUrl: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (el) {
            const offset = window.scrollY * 0.4;
            el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform scale-115"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        top: "-15%",
        bottom: "-15%",
      }}
    />
  );
}
