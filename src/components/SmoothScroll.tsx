import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    // Respect users who prefer reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -12 * t)), // long, silky exponential out
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.6,
      lerp: 0.08,
      syncTouch: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
