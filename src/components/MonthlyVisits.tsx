import { useEffect, useState } from "react";
import { goatCounterEndpoint } from "@/config/analytics";

declare global {
  interface Window {
    goatcounter?: {
      visit_count?: (options?: {
        append?: string;
        path?: string;
        no_branding?: boolean;
        start?: string;
        end?: string;
      }) => void;
    };
  }
}

const MonthlyVisits = () => {
  const [configured, setConfigured] = useState(Boolean(goatCounterEndpoint));
  const [period] = useState(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const format = (date: Date) => {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    };
    return { start: format(start), end: format(now) };
  });

  useEffect(() => {
    if (!goatCounterEndpoint) return;
    setConfigured(true);
    const renderCount = () => window.goatcounter?.visit_count?.({
      append: "#monthly-visits-count",
      path: "TOTAL",
      start: period.start,
      end: period.end,
    });
    const script = document.querySelector<HTMLScriptElement>("script[data-leandro-goatcounter]");
    if (window.goatcounter?.visit_count) renderCount();
    else script?.addEventListener("load", renderCount, { once: true });
  }, [period]);

  const monthLabel = new Intl.DateTimeFormat("es-AR", { month: "long", year: "numeric" }).format(new Date());

  return (
    <section aria-label="Audiencia mensual" className="mt-10 flex flex-col gap-3 border-t border-[#d8b978]/40 pt-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8b978]">Audiencia · {monthLabel}</p>
        <p className="mt-2 font-serif text-2xl">Visitas registradas este mes</p>
        <p className="mt-1 text-xs text-[#f1e8df]/60">Datos públicos y verificables · Actualización automática</p>
      </div>
      <div id="monthly-visits-count" className="min-h-10 min-w-24 text-right text-3xl font-semibold text-[#d8b978]" aria-live="polite">
        {configured ? "Cargando…" : "Contador en configuración"}
      </div>
    </section>
  );
};

export default MonthlyVisits;
