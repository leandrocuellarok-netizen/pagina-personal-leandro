import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const amourImages = [
  { src: "/photos/autor_libro_1.webp", alt: "Leandro A. Cuellar - Autor - Libro", caption: "Autor / libro 01", wide: true },
  { src: "/photos/autor_foto_1.webp", alt: "Leandro A. Cuellar - Autor - Fotografía 1", caption: "Autor / fotografía 01" },
  { src: "/photos/autor_foto_2.webp", alt: "Leandro A. Cuellar - Autor - Fotografía 2", caption: "Autor / fotografía 02" },
  { src: "/photos/autor_foto_3.webp", alt: "Leandro A. Cuellar - Autor - Fotografía 3", caption: "Autor / fotografía 03" },
  { src: "/photos/autor_foto_4.webp", alt: "Leandro A. Cuellar - Autor - Fotografía 4", caption: "Autor / fotografía 04" }
];

const amourVideos = [
  { href: "https://www.youtube.com/watch?v=Dx8oXMBTo_8", title: "filosofiaImagen - Video 01" },
  { href: "https://www.youtube.com/watch?v=NRBDfdrw8L0", title: "filosofiaImagen - Video 02" }
];

const projects: Record<string, { title: string; eyebrow: string; paragraphs: string[]; external?: { label: string; href: string } }> = {
  "amour-du-cinema": {
    title: "Amour du cinéma",
    eyebrow: "Escuela de cine y filosofía · Productora audiovisual under",
    paragraphs: [
      "Su trabajo explora la identidad, la memoria, el tiempo y las relaciones humanas a través del cine, la escritura y la fotografía.",
      "Estos lenguajes dialogan entre sí y conforman una búsqueda autoral que entiende la imagen como una forma de conocimiento y reflexión.",
      "Su propósito es construir una obra que permanezca, abra preguntas y proponga una mirada propia sobre el mundo.",
      "En 2020 fundó Amour du cinéma, una escuela dedicada a pensar el cine y su relación con la filosofía y el pensamiento contemporáneo.",
      "El proyecto privilegia la reflexión estética y cultural antes que la formación técnica, y promueve el intercambio entre personas de distintos países.",
      "Con el tiempo, Amour du cinéma amplió su actividad y también impulsó proyectos de producción audiovisual.",
      "En 2022 publicó El cine en tiempos de angustia, obra reeditada en 2023.",
      "Actualmente desarrolla Ensayos sobre la identidad, un proyecto multidisciplinario que reúne fotografía, audiovisual y escritura.",
      "Organizado en capítulos, explora la angustia, la intimidad, la sensualidad y otras dimensiones de la experiencia contemporánea.",
      "Su búsqueda reúne pensamiento y creación para interrogar la identidad, el tiempo y la experiencia humana."
    ],
    external: { label: "Visitar Amour du cinéma", href: "https://www.amourducinema.site" }
  },
  "comunicadores-libres": {
    title: "Comunicadores Libres",
    eyebrow: "Comunidad y desarrollo profesional para comunicadores",
    paragraphs: [
      "Leandro Cuellar entiende la comunicación como una práctica plural que permite poner ideas en circulación y fortalecer el diálogo en una democracia deliberativa. Por eso, ha creado la plataforma de Comunicadores Libres, que se complementa con una herramienta útil en WhatsApp para cualquier persona que tenga algo para comunicar.",
      "Desde esta plataforma de Vilanova Group, impulsa FOCO LATAM, un espacio de análisis político que reúne a dirigentes y referentes de distintas corrientes para promover el intercambio de perspectivas. El proyecto nació a partir de una idea de la periodista chilena Cintia Otey: realizar un espacio de estas características con políticos argentinos. En la edición de 2026 se incluyeron distintas expresiones políticas: trotskismo, libertarismo, cordobesismo, radicalismo, kirchnerismo, democracia cristiana y un espacio emergente. La segunda temporada reanuda el 3 de enero de 2027.",
      "También creó la web de Comunicadores Libres y busca articulaciones con universidades vinculadas a la comunicación y al periodismo para contribuir a una comunicación más responsable. Desde Vilanova Group, se lanzó el Código de Ética para regular el uso de la inteligencia artificial en campañas electorales en Argentina, y se apoyan proyectos de ley orientados a ese objetivo, sin importar su ideología.",
      "Su actividad incluye la participación como analista político y cultural en medios y espacios de debate, especialmente en Agencia NOVA y RealPolitik. También participó en Canal 26 y en distintos streams a través del experimento narrativo de Nano Vilanova, un personaje ficticio inspirado en Roger Stone, creado para investigar la persuasión, la propaganda y la construcción de liderazgos.",
      "Asimismo, ha participado durante años en medios como crítico de cine, entre ellos Bendito Spoiler, Edición Sunset y Peliplat. También se desempeñó como entrevistador en Revista Común, de México, para dar a conocer el arte y sus diversas expresiones en Argentina."
    ],
    external: { label: "Acceder a la comunidad de WhatsApp", href: "https://chat.whatsapp.com/HqboLKpOskI5M2HhZnaOPM" }
  },
  "archivos-atenea": {
    title: "Archivos ATENEA",
    eyebrow: "Repositorio digital",
    paragraphs: ["Repositorio digital sobre la representación audiovisual de la mujer."],
    external: { label: "Visitar Archivos ATENEA", href: "https://archivosatenea.sbs/" }
  },
  "vilanova-ai": {
    title: "Vilanova AI Solutions",
    eyebrow: "Inteligencia artificial aplicada",
    paragraphs: ["Capacitaciones sobre inteligencia artificial in company y para profesionales."]
  },
  "vilanova-partners": {
    title: "Vilanova Partners",
    eyebrow: "Comunicación política",
    paragraphs: ["Análisis y asesoramiento en comunicación política."]
  }
};

const ProjectPage = () => {
  const { slug = "" } = useParams();
  const project = projects[slug];

  if (!project) return <main className="min-h-screen bg-[#35101f] px-6 py-20 text-[#f1e8df]"><div className="mx-auto max-w-3xl"><h1 className="font-serif text-4xl">Proyecto no encontrado</h1><Link to="/" className="mt-8 inline-block underline">Volver a Leandro A. Cuellar</Link></div></main>;

  const isAmour = slug === "amour-du-cinema";
  return (
    <div className="min-h-screen bg-[#35101f] text-[#f1e8df]">
      <SEO title={project.title} description={project.eyebrow} />
      <main className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <article className="mx-auto max-w-5xl">
          <Link to="/" className="text-[10px] uppercase tracking-[0.3em] text-[#f1e8df]/65 transition-opacity hover:opacity-100">← Leandro A. Cuellar</Link>
          <p className="mt-20 text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">Vilanova Group® · Ecosistema</p>
          <h1 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">{project.title}</h1>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#f1e8df]/60">{project.eyebrow}</p>
          <div className="mt-14 max-w-3xl space-y-7 text-base leading-8 text-[#f1e8df]/85 md:text-lg md:leading-9">
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {slug === "comunicadores-libres" && paragraph.startsWith("Leandro Cuellar entiende")
                  ? <>{paragraph.split("herramienta útil en WhatsApp")[0]}<a href="https://chat.whatsapp.com/HqboLKpOskI5M2HhZnaOPM" target="_blank" rel="noopener noreferrer" className="underline decoration-[#d8b978] underline-offset-4 hover:text-[#d8b978]">herramienta útil en WhatsApp</a>{paragraph.split("herramienta útil en WhatsApp").slice(1).join("herramienta útil en WhatsApp")}</>
                  : slug === "comunicadores-libres" && paragraph.startsWith("Desde esta plataforma")
                    ? <>{paragraph.split("FOCO LATAM")[0]}<a href="https://open.spotify.com/show/7kZsXyMhcoUVxi2MpxhfGE?si=Q6cheK7OSLeYMsv5mPkfIw" target="_blank" rel="noopener noreferrer" className="underline decoration-[#d8b978] underline-offset-4 hover:text-[#d8b978]">FOCO LATAM</a>{paragraph.split("FOCO LATAM").slice(1).join("FOCO LATAM")}</>
                    : slug === "comunicadores-libres" && paragraph.startsWith("También creó la web")
                      ? <>{paragraph.split("Código de Ética")[0]}<a href="https://www.academia.edu/180201632/C%C3%B3digo_de_%C3%89tica_para_el_Uso_de_la_Inteligencia_Artificial_en_Campa%C3%B1as_Pol%C3%ADticas_en_Argentina" target="_blank" rel="noopener noreferrer" className="underline decoration-[#d8b978] underline-offset-4 hover:text-[#d8b978]">Código de Ética</a>{paragraph.split("Código de Ética").slice(1).join("Código de Ética")}</>
                      : paragraph}
              </p>
            ))}
          </div>
          {slug === "comunicadores-libres" && (
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://open.spotify.com/show/7kZsXyMhcoUVxi2MpxhfGE?si=Q6cheK7OSLeYMsv5mPkfIw" target="_blank" rel="noopener noreferrer" className="inline-flex border border-[#d8b978]/60 px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-[#f1e8df] transition-colors hover:bg-[#d8b978]/10">
                Escuchar FOCO LATAM en Spotify
              </a>
              <a href="https://freemedia.com.ar/comunicadores-libres-comunidad-etica-libertad-expresion/?fma_fid=uqgvyhhmu0kfskumjjilhuuwlqcn6q3x" target="_blank" rel="noopener noreferrer" className="inline-flex border border-[#d8b978]/60 px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-[#f1e8df] transition-colors hover:bg-[#d8b978]/10">
                Leer publicación en Free Media
              </a>
            </div>
          )}
          {slug === "comunicadores-libres" && (
            <section className="mt-16 border-t border-[#f1e8df]/15 pt-12">
              <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">Video destacado</p>
              <div className="max-w-3xl overflow-hidden border border-[#f1e8df]/15">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/5IiHe5q2Y0c"
                    title="Video de Comunicadores Libres"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
          )}
          {slug === "comunicadores-libres" && (
            <section className="mt-16 border-t border-[#f1e8df]/15 pt-12">
              <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">Prensa y participaciones</p>
              <h2 className="mb-8 font-serif text-2xl md:text-3xl">Cuellar en medios</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <a href="https://revistacomun.com/blog/category/leandro-a-cuellar/" target="_blank" rel="noopener noreferrer" className="group border border-[#f1e8df]/20 p-6 transition-colors hover:border-[#d8b978]/70 hover:bg-white/5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8b978]">México · Revista Común</p>
                  <h3 className="mt-3 font-serif text-xl">Participación de Cuellar</h3>
                  <p className="mt-3 text-sm leading-6 text-[#f1e8df]/65">Artículos y colaboraciones publicados en Revista Común.</p>
                  <span className="mt-6 inline-block text-[10px] uppercase tracking-[0.2em] underline underline-offset-4">Consultar publicaciones ↗</span>
                </a>
                <a href="https://www.agencianova.com/resultados/leandro-cuellar/" target="_blank" rel="noopener noreferrer" className="group border border-[#f1e8df]/20 p-6 transition-colors hover:border-[#d8b978]/70 hover:bg-white/5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8b978]">Argentina · Agencia NOVA</p>
                  <h3 className="mt-3 font-serif text-xl">Análisis políticos</h3>
                  <p className="mt-3 text-sm leading-6 text-[#f1e8df]/65">Notas de opinión y análisis político de Leandro A. Cuellar.</p>
                  <span className="mt-6 inline-block text-[10px] uppercase tracking-[0.2em] underline underline-offset-4">Ver análisis ↗</span>
                </a>
                <a href="https://realpolitik.fm/nota/22351/leandro_cuellar_la_politica_se_volvio_parte_del_espectaculo/" target="_blank" rel="noopener noreferrer" className="group border border-[#f1e8df]/20 p-6 transition-colors hover:border-[#d8b978]/70 hover:bg-white/5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8b978]">Radio · RealPolitik FM</p>
                  <h3 className="mt-3 font-serif text-xl">Colaboraciones y entrevistas</h3>
                  <p className="mt-3 text-sm leading-6 text-[#f1e8df]/65">La política se volvió parte del espectáculo.</p>
                  <span className="mt-6 inline-block text-[10px] uppercase tracking-[0.2em] underline underline-offset-4">Leer entrevista ↗</span>
                </a>
              </div>
            </section>
          )}
          {slug === "comunicadores-libres" && (
            <section className="mt-16 border-t border-[#f1e8df]/15 pt-12">
              <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">En redes y medios</p>
              <h2 className="mb-6 font-serif text-2xl md:text-3xl">Radio 2 Rosario</h2>
              <div className="max-w-2xl overflow-hidden border border-[#f1e8df]/15 bg-white">
                <iframe
                  className="w-full"
                  src="https://platform.twitter.com/embed/Tweet.html?id=2117614586325000412&theme=light&dnt=true&lang=es"
                  title="Publicación de Radio 2 Rosario en X"
                  height="600"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <a href="https://x.com/radio2rosario/status/2117614586325000412" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-[10px] uppercase tracking-[0.2em] underline underline-offset-4">Abrir publicación en X ↗</a>
            </section>
          )}
          {isAmour && (
            <section className="mt-16 border-t border-[#f1e8df]/15 pt-12">
              <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">Archivo visual · Amour du cinéma</p>
              <div className="grid gap-5 md:grid-cols-2">
                {amourImages.map((item) => (
                  <figure key={item.src} className={item.wide ? "md:col-span-2" : ""}>
                    <img src={item.src} alt={item.alt} loading="lazy" className="w-full border border-[#f1e8df]/15 bg-white/5" />
                    <figcaption className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#f1e8df]/50">{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {amourVideos.map((video) => (
                  <div key={video.href} className="overflow-hidden border border-[#f1e8df]/15">
                    <div className="aspect-video">
                      <iframe className="h-full w-full" src={video.href.replace("watch?v=", "embed/")} title={video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                    </div>
                    <p className="px-3 py-3 text-[10px] uppercase tracking-[0.2em] text-[#f1e8df]/60">{video.title}</p>
                  </div>
                ))}
              </div>
              <a href="https://www.academia.edu/143381434/Cuellar_Leandro_Abel_Cap%C3%ADtulo_Una_mirada_al_documental_El_Bot%C3%B3n_de_N%C3%A1car_En_El_cine_en_tiempos_de_angustia_2023_" target="_blank" rel="noreferrer" className="mt-8 inline-flex border border-[#d8b978]/40 px-4 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-white/5">Una mirada al documental: El Botón de Nácar ↗</a>
              <a href="https://www.notaalpie.com.ar/2023/08/03/el-cine-en-tiempos-de-angustia-una-obra-literaria-ideal-para-los-amantes-del-septimo-arte-y-la-filosofia/" target="_blank" rel="noreferrer" className="ml-3 mt-8 inline-flex border border-[#d8b978]/40 px-4 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-white/5">El cine en tiempos de angustia - Nota al Pie ↗</a>
            </section>
          )}
          {project.external && <a href={project.external.href} target="_blank" rel="noreferrer" className="mt-12 inline-flex border border-[#d8b978]/50 px-5 py-4 text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-white/5">{project.external.label} ↗</a>}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
