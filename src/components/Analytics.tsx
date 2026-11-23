import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { goatCounterEndpoint } from "@/config/analytics";

declare global {
  interface Window {
    goatcounter?: {
      count?: (options?: { path?: string; title?: string }) => void;
      no_onload?: boolean;
    };
  }
}

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!goatCounterEndpoint) return;

    window.goatcounter = { ...window.goatcounter, no_onload: true };
    const existing = document.querySelector<HTMLScriptElement>("script[data-leandro-goatcounter]");
    const countPage = () => window.goatcounter?.count?.({
      path: location.pathname + location.search,
      title: document.title,
    });

    if (existing) {
      if (window.goatcounter?.count) countPage();
      else existing.addEventListener("load", countPage, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://gc.zgo.at/count.js";
    script.dataset.goatcounter = goatCounterEndpoint;
    script.dataset.leandroGoatcounter = "true";
    script.addEventListener("load", countPage, { once: true });
    document.head.appendChild(script);
  }, [location.pathname, location.search]);

  return null;
};