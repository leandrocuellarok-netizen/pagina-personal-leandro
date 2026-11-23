import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { goatCounterEndpoint } from "@/config/analytics";

declare global {
  interface Window {
    goatcounter?: {
      visit_count?: (options?: { append?: string; path?: string; no_branding?: boolean }) => void;
    };
  }
}

const AudiencePage = () => {
  const [configured, setConfigured] = useState(Boolean(goatCounterEndpoint));

  useEffect(() => {
    if (!goatCounterEndpoint) return;
    setConfigured(true);
    const renderCount = () => window.goatcounter?.visit_count?.({
      append: "#audience-total",
      path: "TOTAL",
      no_branding: false,
    });
    const script = document.querySelector<HTMLScriptElement>("script[data-leandro-goatcounter]");
    if (window.goatcounter?.visit_count) renderCount();
    else script?.addEventListener("load", renderCount, { once: true });
  }, []);

  return (
    <>
      <SEO title="Nuestra audiencia" description="Transparencia estadística del sitio oficial de Leandro A. Cuellar. Métricas de visitas verificables." />
      <main className="min-h-screen bg-[#35101f] px-6 py-16 text-[#f1e8df] md:px-10">
        <div className="mx-auto max-w-4xl">
          <Link to="/" className="text-xs uppercase tracking-[0.2em] text-[#d8b978] hover:underline">← Volver al sitio</Link>
          <p className="mt-12 text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">Transparencia · Datos medibles</p>
          <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Nuestra audiencia</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#f1e8df]/80">Publicamos las métricas de visitas que registra nuestro sistema de medición. No estimamos lectores ni mostramos cifras inventadas.</p>
          <section className="mt-10 border border-[#d8b978]/60 bg-[#2b0c19] p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d8b978]">Visitas registradas en todo el sitio</p>
            {configured ? (
              <div id="audience-total" className="mt-5 min-h-16 text-3xl font-semibold" aria-live="polite">Cargando dato verificado…</div>
            ) : (
              <div className="mt-5">
                <p className="text-2xl font-semibold">Medición en preparación</p>
                <p className="mt-3 text-sm leading-7 text-[#f1e8df]/70">El panel está publicado, pero el contador todavía no está conectado a una cuenta de medición. Por eso no mostramos números estimados.</p>
              </div>
            )}
          </section>
          <section className="mt-8 grid gap-5 sm:grid-cols-2">
            <article className="border border-white/15 p-5">
              <h2 className="font-serif text-xl">Qué medimos</h2>
              <p className="mt-3 text-sm leading-7 text-[#f1e8df]/70">Visitas por página y visitas totales. Una visita no equivale necesariamente a una persona distinta: una misma persona puede volver en otra sesión.</p>
            </article>
            <article className="border border-white/15 p-5">
              <h2 className="font-serif text-xl">Cómo se verifica</h2>
              <p className="mt-3 text-sm leading-7 text-[#f1e8df]/70">Los datos provienen del contador GoatCounter y pueden tener demoras de actualización. Los bloqueadores de seguimiento pueden impedir que algunas visitas se registren.</p>
            </article>
          </section>
          <p className="mt-8 text-xs text-[#f1e8df]/50">Última actualización: el contador se actualiza automáticamente cuando se conecte el servicio.</p>
        </div>
      </main>
    </>
  );
};

export default AudiencePage;