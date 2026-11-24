import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArcadePacman from "@/components/ArcadePacman";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import MonthlyVisits from "@/components/MonthlyVisits";

const Index = () => (
  <>
    <SEO title="Inteligencia artificial, filosofía y comunicación" description="Capacitación en inteligencia artificial para empresas, comunicación estratégica y formación profesional. Conocé los proyectos, servicios y publicaciones de Leandro A. Cuellar." />
    <div className="min-h-screen bg-[#35101f] text-[#f1e8df]">
      <Header />
      <main>
        <section className="px-6 pb-12 pt-20 md:px-10 md:pb-16 md:pt-28 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d8b978]">Filosofía · Inteligencia artificial · Transformación de organizaciones</p>
            <h1 className="mt-6 max-w-5xl font-serif text-5xl font-normal leading-[0.98] tracking-[-0.035em] sm:text-7xl lg:text-8xl">Leandro A. Cuellar</h1>
            <img src="/photos/leandro-cuellar.webp" alt="Leandro A. Cuellar" className="mt-8 h-48 w-48 rounded-sm border border-[#d8b978]/70 object-cover object-center sm:h-56 sm:w-56" />
            <div className="mt-7 max-w-3xl text-base leading-8 text-[#f1e8df]/85 sm:text-lg sm:leading-9"><p>Docente, escritor, comunicador y analista de la transformación tecnológica y cultural. Fundador de Vilanova Group. Divulgo inteligencia artificial, pensamiento crítico y nuevas formas de comunicación pública. Activista en Belén de Escobar y fanático de los Baba.</p><p className="mt-3 text-sm sm:text-base"><a href="https://linkedin.com/in/leandrocuellar" target="_blank" rel="noopener noreferrer" className="underline decoration-[#d8b978] underline-offset-4 hover:text-[#d8b978]">+18.000 contactos profesionales en LinkedIn ↗</a></p></div>
            <div className="mt-8 max-w-3xl border border-[#d8b978]/50 bg-[#2b0c19] p-4 sm:p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8b978]">Banda sonora personal</p>
              <h2 className="mt-2 font-serif text-2xl">Babasónicos</h2>
              <p className="mt-1 mb-4 text-xs text-[#f1e8df]/65">Un disco para acompañar la visita. Dale play cuando quieras.</p>
              <iframe
                title="Álbum de Babasónicos en Spotify"
                src="https://open.spotify.com/embed/album/7FYLw9fTOiYnJFbFk2Mntn?utm_source=generator&theme=0"
                width="100%"
                height="352"
                style={{ borderRadius: "8px" }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section aria-label="Tecnologías y plataformas" className="overflow-hidden border-y-2 border-[#e6a900] bg-[#f3e8d2] py-6 text-[#211b17]">
          <style>{`@keyframes home-tech-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}.home-tech-track{animation:home-tech-scroll 38s linear infinite;width:max-content}.home-tech-marquee:hover .home-tech-track{animation-play-state:paused}@media(prefers-reduced-motion:reduce){.home-tech-track{animation:none}}`}</style>
          <p className="mb-4 text-center text-[9px] font-black uppercase tracking-[.25em] text-[#9c3025]">Tecnologías y plataformas del ecosistema digital</p>
          <div className="home-tech-marquee overflow-hidden" style={{maskImage:"linear-gradient(to right,transparent,black 6%,black 94%,transparent)"}}>
            <div className="home-tech-track flex items-center">
              {[0,1].map(copy=><div key={copy} aria-hidden={copy===1} className="flex shrink-0 items-center gap-10 px-6 sm:gap-14 sm:px-8">
                {[
                  ["OpenAI","openai"],["Gemini","googlegemini"],["Grok","xai"],["Pinterest","pinterest"],["Meta","meta"],["Anthropic","anthropic"],["Hostinger","hostinger"],["LinkedIn","linkedin"],["CapCut","capcut"],["Google Flow","google"]
                ].map(([name,slug])=><div key={name} className="flex shrink-0 items-center gap-2 whitespace-nowrap">
                  <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/${slug}.svg`} alt="" loading="lazy" className="h-7 w-7 object-contain sm:h-8 sm:w-8" onError={e=>{e.currentTarget.style.display="none"}}/>
                  <span className="font-sans text-sm font-extrabold sm:text-base">{name}</span>
                </div>)}
              </div>)}
            </div>
          </div>
        </section>

        <section aria-label="Video de presentación" className="border-y border-white/15 px-6 py-8 md:px-10 lg:px-14">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mx-auto aspect-[9/16] max-h-[720px] overflow-hidden border border-white/15 bg-black">
                <iframe className="h-full w-full" src="https://www.youtube-nocookie.com/embed/DzLUr_J_xZc" title="Leandro A. Cuellar - presentación" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
              <a href="https://www.youtube.com/shorts/DzLUr_J_xZc" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[10px] uppercase tracking-[0.2em] text-[#d8b978]">Ver Short en YouTube ↗</a>
            </div>
            <ArcadePacman />
          </div>
        </section>

        <section id="servicios-profesionales" className="border-y border-white/15 bg-[#2b0c19] px-6 py-16 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">Consultoría · Creatividad · Estrategia</p>
            <h2 className="mt-3 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">Servicios profesionales</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#f1e8df]/80">Soluciones para marcas, profesionales y organizaciones. Creatividad humana potenciada por inteligencia artificial, con estrategia y dirección personalizada.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Diseño web + IA by Vilanova AI Solutions","Sitios y landing pages para comunicar, posicionar y convertir. Desde sólo 30 mil pesos mensuales, dependiendo del caso. La IA vino a solucionarte el precio y a mí la existencia."],
                ["Community Manager · Nivel Dios by Vilanova AI Solutions","Lead / Head of Social Media · +10 años de experiencia. Estrategia, contenidos y gestión de comunidades. Desde sólo 50 mil pesos mensuales, dependiendo del caso. La IA vino a solucionarte el bolsillo y a mí la filosofía de vida."],
                ["BRANDING by Vilanova AI Solutions","Identidad, posicionamiento, narrativa y universo visual. Desde sólo 50 mil ARS por única vez. Diseño de logotipo nivel GOD, con posibilidad de 3 modificaciones por 50 mil ARS adicionales; o hacelo vos sólo con IA y el brief de branding que te entrego (jaja)."],
                ["Inteligencia artificial para empresas","Capacitación, automatización y mejora de procesos."],
                ["Comunicación estratégica","Prensa, reputación, contenidos y comunicación institucional."],
                ["Conferencias y formación ejecutiva","Talleres y seminarios para equipos y organizaciones."]
              ].map(([name,description]) => (
                <article key={name} className="border border-[#d8b978]/50 p-5">
                  <h3 className="font-serif text-xl text-[#f1e8df]">{name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#f1e8df]/70">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-9 border border-[#d8b978] bg-[#f1e8df] p-6 text-[#35101f] sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8d3c36]">Primera consulta sin cargo</p>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl">Reservá un Meet de 30 minutos</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7">Conversamos sobre tu proyecto y recibís consejos, sugerencias y una auditoría rápida de tu marca, sin costo ni compromiso.</p>
              <a href="https://wa.me/5491130538404?text=Hola%2C%20quiero%20reservar%20un%20Meet%20de%2030%20minutos%20para%20recibir%20una%20consulta%20y%20una%20auditor%C3%ADa%20r%C3%A1pida%20de%20mi%20marca%20sin%20cargo." target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex bg-[#35101f] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f1e8df] hover:bg-[#65283c]">Reservar mi Meet gratuito ↗</a>
              <p className="mt-3 text-xs text-[#35101f]/70">Coordinamos día y horario por WhatsApp.</p>
            </div>
            <Link to="/servicios-profesionales" className="mt-7 inline-flex border border-[#d8b978]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#f1e8df] hover:bg-white/5">Ver servicios y detalles ↗</Link>
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
