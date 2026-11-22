import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const Index = () => (
  <>
    <SEO title="Leandro A. Cuellar" description="Docente, escritor, comunicador y analista de la transformación tecnológica y cultural. Fundador de Vilanova Group. Divulgación de inteligencia artificial, pensamiento crítico y comunicación pública. Activista en Belén de Escobar." />
    <div className="min-h-screen bg-[#35101f] text-[#f1e8df]">
      <Header />
      <main>
        <section className="px-6 pb-12 pt-20 md:px-10 md:pb-16 md:pt-28 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d8b978]">Filosofía · Comunicación · Inteligencia artificial</p>
            <h1 className="mt-6 max-w-5xl font-serif text-5xl font-normal leading-[0.98] tracking-[-0.035em] sm:text-7xl lg:text-8xl">Leandro A. Cuellar</h1>
            <img src="/photos/leandro-cuellar.webp" alt="Leandro A. Cuellar" className="mt-8 h-48 w-48 rounded-sm border border-[#d8b978]/70 object-cover object-center sm:h-56 sm:w-56" />
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#f1e8df]/85 sm:text-lg sm:leading-9">Docente, escritor, comunicador y analista de la transformación tecnológica y cultural. Fundador de Vilanova Group. Divulgación de inteligencia artificial, pensamiento crítico y comunicación pública. Activista en Belén de Escobar.</p>
          </div>
        </section>

        <section aria-label="Video de presentación" className="border-y border-white/15 px-6 py-8 md:px-10 lg:px-14">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto aspect-[9/16] max-h-[720px] overflow-hidden border border-white/15 bg-black">
              <iframe className="h-full w-full" src="https://www.youtube-nocookie.com/embed/DzLUr_J_xZc" title="Leandro A. Cuellar - presentación" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <a href="https://www.youtube.com/shorts/DzLUr_J_xZc" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[10px] uppercase tracking-[0.2em] text-[#d8b978]">Ver Short en YouTube ↗</a>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">Identidad y trabajo público</p>
            <h2 className="mt-3 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">Yo soy el comunicador libre</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#f1e8df]/80">Un espacio donde convergen cultura digital, inteligencia artificial, filosofía política y participación en los medios. Investigo cómo se transforma la conversación pública y cómo comunicar con autonomía, criterio y responsabilidad.</p>
            <Link to="/yo-soy-el-comunicador-libre" className="mt-7 inline-flex border border-[#d8b978]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#f1e8df] hover:bg-white/5">Entrar a esta sección ↗</Link>
          </div>
        </section>

        <section id="libros" className="border-y border-white/15 bg-[#2b0c19] px-6 py-16 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">Obra publicada</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Libros</h2>
            <div className="mt-10 grid gap-12 md:grid-cols-2">
              <article className="grid gap-6 sm:grid-cols-[0.8fr_1.2fr] sm:items-start">
                <img src="/photos/portada_libro.webp" alt="Portada de Mientras todavía haya imágenes" className="w-full border border-white/15" loading="lazy" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8b978]">2026</p>
                  <h3 className="mt-2 font-serif text-2xl">Mientras todavía haya imágenes</h3>
                  <p className="mt-4 text-sm leading-7 text-[#f1e8df]/70">El diario privado de un espectador. Una exploración de la imagen, la memoria y la experiencia contemporánea.</p>
                  <a href="https://www.academia.edu/175471821/MIENTRAS_TODAV%C3%8DA_HAYA_IM%C3%81GENES_El_diario_privado_de_un_espectador_2023_2025_Versi%C3%B3n_e_book_completa_Leandro_A_Cuellar" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex border border-[#d8b978]/60 px-4 py-3 text-[10px] uppercase tracking-[0.18em]">Leer el libro · Acceso libre ↗</a>
                </div>
              </article>
              <article className="grid gap-6 sm:grid-cols-[0.8fr_1.2fr] sm:items-start">
                <img src="/photos/intec_1.webp" alt="Portada de El cine en tiempos de angustia" className="w-full border border-white/15" loading="lazy" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8b978]">Primera edición 2022 · Segunda edición 2023</p>
                  <h3 className="mt-2 font-serif text-2xl">El cine en tiempos de angustia</h3>
                  <p className="mt-4 text-sm leading-7 text-[#f1e8df]/70">Ensayos, reflexiones y críticas sobre cine, filosofía y experiencia humana.</p>
                  <a href="https://www.academia.edu/144239998/Cuellar_Leandro_Abel_Comp_El_cine_en_tiempos_de_angustia_ensayos_reflexiones_y_cr%C3%ADticas_Segunda_ed_Selecci%C3%B3n_78_p%C3%A1ginas" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex border border-[#d8b978]/60 px-4 py-3 text-[10px] uppercase tracking-[0.18em]">Leer el libro · Acceso libre ↗</a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </>
);

export default Index;
