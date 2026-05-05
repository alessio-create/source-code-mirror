import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollTop = () => {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true, force: true });
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollTop();
    requestAnimationFrame(scrollTop);
    const t = setTimeout(scrollTop, 80);

    return () => clearTimeout(t);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
