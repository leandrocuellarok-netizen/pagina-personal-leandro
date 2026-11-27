import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import artwork from "@/assets/Unknown_Intervention_30x40cm_300dpi.png";

const ThisIsNotAaart = () => (
  <div className="min-h-screen bg-[#35101f] text-[#f1e8df]">
    <SEO
      title="THIS IS NOT AAART! | Leandro A. Cuellar"
      description="Una intervención visual experimental de Leandro A. Cuellar. Dibujo espontáneo, libre asociación, materia, memoria y experimentación sonora."
    />
    <Header />
    <main>
      <section className="px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24 lg:px-14">
        <article className="mx-auto max-w-6xl">
          <Link to="/" className="text-[10px] uppercase tracking-[0.3em] text-[#d8b978] hover:text-[#f5bd20]">← Leandro A. Cuellar</Link>
          <p className="mt-16 text-[10px] uppercase tracking-[0.4em] text-[#d8b978]">Arte · Investigación visual · 2026</p>
          <h1 className="mt-5 max-w-5xl font-serif text-5xl font-normal leading-[0.96] tracking-[-0.045em] sm:text-7xl lg:text-8xl">THIS IS NOT AAART!</h1>
          <p className="mt-6 max-w-2xl text-xs uppercase tracking-[0.22em] text-[#f1e8df]/65">Leandro A. Cuellar · Unknown Intervention · Serie experimental</p>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <figure className="m-0 border border-[#d8b978]/50 bg-[#fff0c2] p-3 shadow-[9px_9px_0_rgba(35,20,8,.18)] md:p-5">
              <img
                src={artwork}
                alt="Unknown Intervention, obra experimental de Leandro A. Cuellar: rostro fragmentado y texturas gestuales en tonos ocres, negros, rojizos y violetas."
                className="h-auto w-full border-0 object-contain"
                fetchPriority="high"
              />
              <figcaption className="px-1 pb-1 pt-4 text-[10px] uppercase tracking-[0.2em]">Unknown Intervention · Edición limitada 1/5</figcaption>
            </figure>
            <div className="space-y-7 text-base leading-8 text-[#f1e8df]/85 md:text-lg md:leading-9">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">La intervención</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">Una imagen que aparece antes de tener nombre.</h2>
              </div>
              <p>Unknown Intervention nace de un ejercicio de imaginación y libre asociación. El punto de partida fue un dibujo espontáneo a lápiz: una figura humana que emerge entre líneas, tachaduras, gestos y acumulaciones de grafito.</p>
              <p>En lugar de corregir el trazo o buscar una representación académica, la intervención conserva la energía del accidente. La imagen se transforma mediante una exploración digital de texturas, capas y color, sin borrar del todo las huellas de su origen.</p>
              <p>La experiencia estuvo acompañada por “Napoli Meets Tehran”, de Luigi Pascal Rondanini. Ese encuentro sonoro entre referencias culturales distintas funcionó como impulso creativo y abrió un espacio de asociaciones visuales.</p>
              <p>El resultado no pretende ofrecer una respuesta cerrada ni ilustrar una idea previa. Propone detenerse ante una imagen en transformación: algo entre el rostro, la memoria y la materia.</p>
              <div className="border-t border-[#d8b978]/45 pt-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8b978]">Ficha de obra</p>
                <dl className="mt-4 grid grid-cols-[105px_1fr] gap-x-4 gap-y-3 text-sm leading-6">
                  <dt className="text-[#d8b978]">Título</dt><dd>Unknown Intervention</dd>
                  <dt className="text-[#d8b978]">Autor</dt><dd>Leandro A. Cuellar</dd>
                  <dt className="text-[#d8b978]">Fecha</dt><dd>26 de noviembre de 2026</dd>
                  <dt className="text-[#d8b978]">Proceso</dt><dd>Dibujo espontáneo y experimentación digital de técnica mixta</dd>
                  <dt className="text-[#d8b978]">Edición</dt><dd>Serie limitada de cinco ejemplares</dd>
                  <dt className="text-[#d8b978]">Música</dt><dd>“Napoli Meets Tehran” · Luigi Pascal Rondanini</dd>
                </dl>
              </div>
            </div>
          </div>

          <section aria-labelledby="publicaciones-heading" className="mt-20 border-t border-[#d8b978]/40 pt-12">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">Escrituras · Relatos · Publicaciones</p>
            <h2 id="publicaciones-heading" className="mt-3 max-w-4xl font-serif text-3xl leading-tight sm:text-4xl">Textos publicados</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#f1e8df]/70">Una selección de relatos, ficciones y ensayos de Leandro Cuellar publicados en revistas y plataformas culturales.</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="flex flex-col justify-between border border-[#d8b978]/40 bg-[#2b0c19] p-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#d8b978]">Anomalía · Publicación cultural</p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">Pollería La Esperanza</h3>
                </div>
                <a href="https://anomalia.com.ar/articulos/polleria-la-esperanza" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex self-start border border-[#d8b978]/60 px-4 py-3 text-[10px] uppercase tracking-[0.18em] hover:bg-white/5">Leer en Anomalía ↗</a>
              </article>

              <article className="flex flex-col justify-between border border-[#d8b978]/40 bg-[#2b0c19] p-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#d8b978]">Aporia Literary · English</p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">A Certain Masculine Alteration</h3>
                </div>
                <a href="https://aporialit.com/piece-a-certain-masculine-alteration.html" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex self-start border border-[#d8b978]/60 px-4 py-3 text-[10px] uppercase tracking-[0.18em] hover:bg-white/5">Read at Aporia Literary ↗</a>
              </article>

              <article className="flex flex-col justify-between border border-[#d8b978]/40 bg-[#2b0c19] p-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#d8b978]">Tiempo Provincial · Relato · 24 noviembre 2025</p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">A Large Week-end in Balvanera</h3>
                  <p className="mt-3 text-xs leading-6 text-[#f1e8df]/65">Relato publicado en Tiempo Provincial. Ficha y versión disponible en Academia.edu.</p>
                </div>
                <a href="https://www.academia.edu/145408416/A_large_week_end_in_balvanera_Relato_de_Leandro_A_Cuellar" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex self-start border border-[#d8b978]/60 px-4 py-3 text-[10px] uppercase tracking-[0.18em] hover:bg-white/5">Consultar relato ↗</a>
              </article>

              <article className="flex flex-col justify-between border border-[#d8b978]/40 bg-[#2b0c19] p-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#d8b978]">LinkedIn · Amour du cinéma · 3 diciembre 2025</p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">El Aleph onírico: Spinoza, Buñuel y la imaginación</h3>
                  <p className="mt-3 text-xs leading-6 text-[#f1e8df]/65">El cine como espacio del inconsciente y lo indecible.</p>
                </div>
                <a href="https://www.linkedin.com/pulse/el-aleph-on%C3%ADrico-spinoza-bu%C3%B1uel-y-la-imaginaci%C3%B3n-cine-leandro-cuellar-1ibwf" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex self-start border border-[#d8b978]/60 px-4 py-3 text-[10px] uppercase tracking-[0.18em] hover:bg-white/5">Leer en LinkedIn ↗</a>
              </article>

              <article className="flex flex-col justify-between border border-[#d8b978]/40 bg-[#2b0c19] p-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#d8b978]">LinkedIn · 30 noviembre 2025</p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">Una anécdota personal con un candidato presidencial 2027</h3>
                  <p className="mt-3 text-xs leading-6 text-[#f1e8df]/65">Las tensiones de una reunión amistosa desde una obra de Hanna Pauli.</p>
                </div>
                <a href="https://www.linkedin.com/pulse/una-an%C3%A9cdota-personal-con-un-candidato-presidencial-2027-cuellar-qgsrf" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex self-start border border-[#d8b978]/60 px-4 py-3 text-[10px] uppercase tracking-[0.18em] hover:bg-white/5">Leer en LinkedIn ↗</a>
              </article>
            </div>
          </section>
        </article>
      </section>
    </main>
    <Footer />
  </div>
);

export default ThisIsNotAaart;
