import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const sectionImageBase = "/photos";

const authorImages = [
  { src: `${sectionImageBase}/autor_libro_1.webp`, alt: "Leandro A. Cuellar - Autor - Libro", caption: "Autor / libro 01", wide: true },
  { src: `${sectionImageBase}/autor_foto_1.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 1", caption: "Autor / fotografía 01" },
  { src: `${sectionImageBase}/autor_foto_2.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 2", caption: "Autor / fotografía 02" },
  { src: `${sectionImageBase}/autor_foto_3.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 3", caption: "Autor / fotografía 03" },
  { src: `${sectionImageBase}/autor_foto_4.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 4", caption: "Autor / fotografía 04" },
] as const;

const intelectualImages = [
  { src: `${sectionImageBase}/intec_1.webp`, alt: "Portada de El cine en tiempos de angustia", caption: "ACCESO LIBRE A 72 PÁGINAS", wide: true, href: "https://www.academia.edu/144239998/Cuellar_Leandro_Abel_Comp_El_cine_en_tiempos_de_angustia_ensayos_reflexiones_y_cr%C3%ADticas_Segunda_ed_Selecci%C3%B3n_78_p%C3%A1ginas" },
  { src: `${sectionImageBase}/intec_2.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 1", caption: "Marca" },
  { src: `${sectionImageBase}/intec_3.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 2", caption: "Cine" },
  { src: `${sectionImageBase}/intec_4.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 3", caption: "Libro 02" },
  { src: `${sectionImageBase}/intec_5.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 4", caption: "Fotografía" },
] as const;

const bookCover = `${sectionImageBase}/portada_libro.webp`;

const libro2Links = [
  { label: "Nota: El Pensador", href: "https://elpensador.io/mientras-aun-haya-imagenes-diario-privado-espectador/" },
  { label: "Nota: Voces de la Comuna 15", href: "https://vocesdelacomuna15.com.ar/press/leandro-a-cuellar-presenta-su-segundo-libro-mientras-todavia-hayaimagenes/" },
  { label: "Nota: Pehuenche Digital", href: "https://www.pehuenchedigital.com.ar/articulo/17753/leandro-cuellar-presenta----mientras-todav--a-haya-im--genes--el-diario-privado-de-un-espectador-" },
] as const;

const authorLinks = [
  { label: "Una mirada al documental: El Botón de Nácar", href: "https://www.academia.edu/143381434/Cuellar_Leandro_Abel_Cap%C3%ADtulo_Una_mirada_al_documental_El_Bot%C3%B3n_de_N%C3%A1car_En_El_cine_en_tiempos_de_angustia_2023_" },
] as const;

const communicatorLinks = [
  { label: "Instagram", href: "https://www.instagram.com/leandrocuellar.online/" },
] as const;

const YouTubePreview = ({ href, title }: { href: string; title: string }) => {
  const embedSrc = href.replace("watch?v=", "embed/");

  return (
    <div className="overflow-hidden border border-black/12 bg-white">
      <div className="aspect-video bg-white">
        <iframe
          className="h-full w-full"
          src={embedSrc}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const EditorialImage = ({ src, alt, caption, wide = false, href }: { src: string; alt: string; caption: string; wide?: boolean; href?: string }) => (
  <figure className={wide ? "md:col-span-2" : ""}>
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${alt} en Academia.edu`} className="block transition-opacity hover:opacity-80">
        <img src={src} alt={alt} className="w-full border border-black/10 bg-white" loading="lazy" />
      </a>
    ) : (
      <img src={src} alt={alt} className="w-full border border-black/10 bg-white" loading="lazy" />
    )}
    <figcaption className="mt-2 text-[10px] uppercase tracking-[0.3em] text-black/45">{caption}</figcaption>
  </figure>
);

const Paragraphs = ({ items }: { items: string[] }) => (
  <div className="space-y-6 text-[15px] leading-8 text-black/75 md:text-base md:leading-9">
    {items.map((item) => (
      <p key={item}>{item}</p>
    ))}
  </div>
);

const Index = () => {
  const FilosofiaImagenParagraphs = [
    "Su trabajo explora la identidad, la memoria, el tiempo y las relaciones humanas a través del cine, la escritura y la fotografía.",
    "Estos lenguajes dialogan entre sí y conforman una búsqueda autoral que entiende la imagen como una forma de conocimiento y reflexión.",
    "Su propósito es construir una obra que permanezca, abra preguntas y proponga una mirada propia sobre el mundo.",
    "En 2020 fundó Amour du cinéma, una escuela dedicada a pensar el cine y su relación con la filosofía y el pensamiento contemporáneo.",
    "El proyecto privilegia la reflexión estética y cultural antes que la formación técnica, y promueve el intercambio entre personas de distintos países.",
    "Con el tiempo, Amour du cinéma amplió su actividad y también impulsó proyectos de producción audiovisual.",
    "En 2022 publicó El cine en tiempos de angustia, obra reeditada en 2023.",
    "Actualmente desarrolla Ensayos sobre la identidad, un proyecto multidisciplinario que reúne fotografía, audiovisual y escritura.",
    "Organizado en capítulos, explora la angustia, la intimidad, la sensualidad y otras dimensiones de la experiencia contemporánea.",
    "Su búsqueda reúne pensamiento y creación para interrogar la identidad, el tiempo y la experiencia humana.",
  ];

  const intelectualParagraphs = [
    "El pensamiento atraviesa la trayectoria de Leandro Cuellar. Su interés por la filosofía, el psicoanálisis, la teoría política y las ciencias sociales se expresa en la docencia, la investigación y la creación.",
    "Su enfoque es interdisciplinario: pone en diálogo tradiciones y autores como Nietzsche, Freud, Lacan, Maquiavelo y Carl Schmitt para pensar la cultura, el poder y la subjetividad.",
    "Como docente, impulsa seminarios privados para estudiantes y profesionales de distintas áreas, con énfasis en el diálogo y el pensamiento crítico.",
    "Investiga sobre cine, filosofía, comunicación, inteligencia artificial, marketing político y transformaciones culturales.",
    "Para Cuellar, pensar, crear y actuar forman parte de un mismo proceso: producir conocimiento para comprender el mundo.",
    "Durante su trayectoria académica mantuvo diferencias con el investigador Javier Flax sobre la docencia universitaria y la libertad de pensamiento.",
    "Cuellar cuestionó la presentación de posiciones políticas como verdades incuestionables y defendió el pluralismo en el aula.",
    "Sostiene que las convicciones personales de un docente no deben imponerse ni convertirse en criterios de evaluación.",
    "También afirma haber recibido amenazas y haber atravesado situaciones que, según su interpretación, afectaron su trayectoria universitaria.",
    "A partir de esas experiencias orientó parte de su actividad hacia espacios independientes de formación, basados en el pluralismo y el respeto por la diversidad de ideas.",
    "En sus seminarios propone contrastar autores y corrientes diferentes. Considera que aprender implica revisar las propias creencias y construir un juicio autónomo.",
  ];

  const filosofiaPoderParagraphs = [
    "Vilanova Group® es un ecosistema a favor del pensamiento, la cultura, la libertad de expresión, la innovación y la comunicación política con responsabilidad ética. Fundado por Leandro Cuellar, articula proyectos de comunicación, cultura, formación e inteligencia artificial.",
    "El ecosistema articula comunicación estratégica, branding, consultoría institucional, formación, investigación social e IA aplicada a la toma de decisiones.",
    "Su enfoque integra tecnología, datos y comportamiento humano para ayudar a organizaciones a comprender escenarios y desarrollar estrategias de largo plazo.",
    "Cuellar considera que la inteligencia artificial es una de las transformaciones centrales del siglo XXI y que debe desarrollarse con criterios éticos, transparencia y responsabilidad.",
    "Cuestiona el uso de tecnologías para manipular, polarizar o desinformar. La IA debe ampliar las capacidades humanas, no sustituir el juicio.",
    "Defiende una comunicación pública que fortalezca el debate, el acceso a información verificable y la autonomía de la ciudadanía.",
  ];

  const comunicadorParagraphs = [
    "Cuellar entiende la comunicación como una práctica plural que permite poner ideas en circulación y fortalecer el diálogo democrático.",
    "Impulsa FOCO LATAM, un espacio de análisis político que reúne a dirigentes y referentes de distintas corrientes para promover el intercambio de perspectivas.",
    "También creó Comunicadores Libres, una comunidad de trabajo para comunicadores argentinos y latinoamericanos, orientada a compartir contactos, notas y oportunidades.",
    "Su actividad incluye participación como analista político y cultural en medios y espacios de debate, entre ellos Canal 26 y RealPolitik.",
    "Considera que comunicar no es solo transmitir información: también es crear espacios de encuentro y ampliar la conversación pública.",
    "Como experimento narrativo desarrolló Nano Vilanova, un personaje ficticio para investigar la persuasión, la propaganda y la construcción de liderazgos.",
    "El proyecto incorporó recursos de performance, estética y actuación para explorar cómo se construye una identidad pública.",
    "Esta experiencia forma parte de su interés por los vínculos entre representación, comunicación estratégica e identidad.",
  ];

  const FilosofiaIAParagraphs = [
    "Su reflexión sobre inteligencia artificial parte de una pregunta: qué significa ser humano cuando el lenguaje, las imágenes y la memoria pueden ser producidos y procesados por máquinas.",
    "El mind uploading plantea un problema central: si pudiéramos trasladar recuerdos y pensamientos a un sistema artificial, ¿seguiríamos siendo nosotros mismos? ¿La conciencia es información o existe algo irreductible en la experiencia de vivir?",
    "Cuellar entiende la IA como un acontecimiento filosófico que transforma nuestra relación con el cuerpo, la identidad, la memoria y el deseo. La pregunta no es solo qué puede hacer una máquina, sino qué cambia en nosotros cuando delegamos en ella capacidades humanas.",
    "También publica y comparte reflexiones sobre inteligencia artificial en medios y plataformas como Perfil, la radio de la Universidad de San Luis y LinkedIn.",
  ];

  return (
    <>
      <SEO title="Leandro A. Cuellar" description="Página biográfica editorial de Leandro A. Cuellar, en torno a la filósofía de la imagen, el poder y la inteligencia artificial." />
      <div className="min-h-screen bg-white text-black">
        <Hero />

        <main>
          <section id="filosofiaIA" className="border-b border-black/10 px-6 py-16 md:px-10 md:py-24 lg:px-14">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-black/50">Filosofía de la Inteligencia Artificial</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Filosofía de la Inteligencia Artificial</h2>
                  <div className="mt-8">
                    <Paragraphs items={FilosofiaIAParagraphs.slice(0,2)} />
                  </div>
                </div>

                <div className="space-y-8 lg:pt-2">
                  <Paragraphs items={FilosofiaIAParagraphs.slice(2)} />
                  <a href="https://www.linkedin.com/posts/leandrocuellar_c%C3%B3mo-sabemos-qui%C3%A9nes-somos-con-un-dibujo-ugcPost-7517760616326180864--FCi/" target="_blank" rel="noreferrer" className="inline-flex border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">Publicaciones sobre IA en LinkedIn</a>
                  <a href="https://quepasaamerica.com.ar/ia-redes-y-vacio-legal-que-dice-la-filosofia-del-derecho-sobre-el-caso-nahir-galarza/" target="_blank" rel="noreferrer" className="inline-flex border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">IA, redes y vacío legal: filosofía del derecho</a>
                </div>
              </div>
            </div>
          </section>

          <section id="filosofiaImagen" className="border-b border-black/10 px-6 py-16 md:px-10 md:py-24 lg:px-14">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-black/50">Amour du cinéma</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Amour du cinéma</h2>
                  <div className="mt-8 max-w-xl">
                    <Paragraphs items={FilosofiaImagenParagraphs.slice(0)} />
                  </div>
                </div>

                <div className="space-y-10 lg:pt-2">


                  <div className="grid gap-4 md:grid-cols-2">
                    {authorImages.map((image) => (
                      <EditorialImage key={image.src} {...image} />
                    ))}
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {authorLinks.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <YouTubePreview href="https://www.youtube.com/watch?v=Dx8oXMBTo_8" title="filosofiaImagen - Video 01" />
                    <a href="https://www.notaalpie.com.ar/2023/08/03/el-cine-en-tiempos-de-angustia-una-obra-literaria-ideal-para-los-amantes-del-septimo-arte-y-la-filosofia/" target="_blank" rel="noreferrer" className="inline-flex border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">El cine en tiempos de angustia - Nota al Pie</a>
                    <YouTubePreview href="https://www.youtube.com/watch?v=NRBDfdrw8L0" title="filosofiaImagen - Video 02" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section id="filosofiaPoder" className="border-b border-black/10 px-6 py-16 md:px-10 md:py-24 lg:px-14">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-black/50">Vilanova Group</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Vilanova Group</h2>
                  <div className="mt-8">
                    <Paragraphs items={filosofiaPoderParagraphs.slice(0, 3)} />
                  </div>
                </div>

                <div className="space-y-8 lg:pt-2">
                  <Paragraphs items={filosofiaPoderParagraphs.slice(3)} />

                  <a href="https://www.academia.edu/180201632/C%C3%B3digo_de_%C3%89tica_para_el_Uso_de_la_Inteligencia_Artificial_en_Campa%C3%B1as_Pol%C3%ADticas_en_Argentina" target="_blank" rel="noreferrer" className="inline-flex border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">Código de ética IA para campañas políticas</a>
                  <a href="https://realpolitik.com.ar/nota/75068/deepfakes-en-dos-minutos-podes-arruinar-la-imagen-de-un-candidato-antes-de-votar/" target="_blank" rel="noreferrer" className="inline-flex border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">Deepfakes y la imagen de un candidato - RealPolitik</a>
                </div>

              <div className="mt-14 border-t border-[#d8c5b7]/25 pt-8">
                <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-black/50">Conocé los proyectos del ecosistema</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a href="/proyectos/comunicadores-libres" className="flex items-center justify-between border border-black/15 px-5 py-4 text-sm tracking-wide transition-colors hover:bg-black/5">Comunicadores Libres <span aria-hidden="true">↗</span></a>
                  <a href="/proyectos/amour-du-cinema" className="flex items-center justify-between border border-black/15 px-5 py-4 text-sm tracking-wide transition-colors hover:bg-black/5">Amour du cinéma <span aria-hidden="true">↗</span></a>
                  <a href="/proyectos/archivos-atenea" className="flex items-center justify-between border border-black/15 px-5 py-4 text-sm tracking-wide transition-colors hover:bg-black/5">Archivos ATENEA <span aria-hidden="true">↗</span></a>
                  <a href="/proyectos/vilanova-ai" className="flex items-center justify-between border border-black/15 px-5 py-4 text-sm tracking-wide transition-colors hover:bg-black/5">Vilanova AI Solutions <span aria-hidden="true">↗</span></a>
                  <a href="/proyectos/vilanova-partners" className="flex items-center justify-between border border-black/15 px-5 py-4 text-sm tracking-wide transition-colors hover:bg-black/5">Vilanova Partners <span aria-hidden="true">↗</span></a>
                </div>
              </div>/div>
              </div>
            </div>
          </section>
          


          <section id="profesor" className="border-b border-black/10 px-6 py-16 md:px-10 md:py-24 lg:px-14">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div className="mt-8">
                  <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-black/50">Profesor</p>
                  <h2 className="mt-0 text-3xl sm:text-4xl md:text-5xl">Profesor</h2>
                  <Paragraphs items={intelectualParagraphs.slice(0, 4)} />
                  <div className="mt-8 space-y-6">
                  <Paragraphs items={intelectualParagraphs.slice(4, 6)} />

                  <blockquote className="border-l border-black/20 pl-5 text-[15px] leading-8 text-black/75 md:text-base md:leading-9">
                    “La educación no consiste en acumular información, sino en aprender a pensar y crear. Una persona verdaderamente educada no es la que repite conocimientos, sino la que ha desarrollado una mirada propia sobre el mundo de forma autónoma. Enseñar es ofrecer herramientas para esa búsqueda, no imponer conclusiones doctrinarias. El pensamiento incomoda“. Leandro Cuellar.
                  </blockquote>

                  <Paragraphs items={intelectualParagraphs.slice(6, 9)} />
                  </div>
                </div>
                
                <div className="space-y-8 lg:pt-2">
                  <Paragraphs items={intelectualParagraphs.slice(9)} />  
                  <div className="grid gap-4 md:grid-cols-2">
                    {intelectualImages.map((image) => (
                      <EditorialImage key={image.src} {...image} />
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          </section>

          <section id="comunicador" className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-black/50">Comunicadores Libres</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Comunicadores Libres</h2>
                  <div className="mt-8">
                    <Paragraphs items={comunicadorParagraphs.slice(0, 5)} />
                  </div>
                </div>

                <div className="space-y-8 lg:pt-2">
                  <Paragraphs items={comunicadorParagraphs.slice(5)} />

                  <div className="grid gap-4 md:grid-cols-2">
                    {communicatorLinks.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <a href="https://chat.whatsapp.com/HqboLKpOskI5M2HhZnaOPM" target="_blank" rel="noreferrer" className="inline-flex border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">Unirse a la comunidad de Comunicadores Libres</a>
                  <a href="https://freemedia.com.ar/comunicadores-libres-comunidad-etica-libertad-expresion/?fma_fid=uqgvyhhmu0kfskumjjilhuuwlqcn6q3x" target="_blank" rel="noreferrer" className="inline-flex border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">Comunicadores Libres en Free Media</a>
                  <YouTubePreview href="https://www.youtube.com/watch?v=HKyg4wg_R-A" title="Comunicadores Libres - Video 01" />
                  <YouTubePreview href="https://www.youtube.com/watch?v=Zos5RhTT0OA" title="Comunicadores Libres - Video 02" />
                </div>
              </div>
            </div>
          </section>

          
          <section id="movimientoVecinal" className="border-b border-black/10 px-6 py-16 md:px-10 md:py-24 lg:px-14">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-black/50">Movimiento Vecinal Escobar</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Movimiento Vecinal Escobar</h2>
                </div>
                <div className="space-y-8 lg:pt-2">
                  <Paragraphs items={[
                    'La propuesta se aleja de las estructuras partidarias tradicionales y adopta como lema la frase «ser vecino es un deber diplomático». Impulsa una identidad política basada en la convivencia barrial, la transparencia y el contacto directo con la comunidad.',
                    'Promueve iniciativas para conectar a jóvenes con oportunidades de formación, servicios y nuevos mercados. Considera que Escobar debe superar una mirada localista y apostar a la exportación de empleo mediante el uso de inteligencia artificial, conectando capacidades locales con oportunidades en otros países frente a la actual crisis de desempleo.',
                    'En redes sociales se ha interpretado equivocadamente que una fotografía de Leandro Cuellar con el intendente Ariel Sujarchuk implicaría una alineación política. Nada más lejos de la intención: ese encuentro se inscribe en la convicción de que son necesarios los diálogos institucionales.',
                    'Tal como expresó en sus redes: «La política se construye dialogando. El disenso es democracia. Y, si hay consenso, que sea en favor de los vecinos». La frase expresa la posibilidad de convivir y dialogar con distintos actores políticos en beneficio de los vecinos y las vecinas de Escobar.',
                    'El movimiento impulsó iniciativas por un Escobar más limpio, que reunieron más de 150 firmas y promovieron la declaración del 3 de marzo como «Día por un Escobar más limpio». También reunió más de 350 firmas en apoyo a la declaración de interés municipal de la Semana de la Emprendedora y el Emprendedor Escobarense.'
                  ]} />
                  <a href="https://escobaradiario.com.ar/interes-general/movimiento-vecinal-escobar/" target="_blank" rel="noreferrer" className="inline-flex border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">Movimiento Vecinal Escobar - Escobar a Diario</a>
                  <a href="https://escobaradiario.com.ar/interes-general/ia-y-comunicacion-estrategica-para-posicionar-tu-negocio/" target="_blank" rel="noreferrer" className="inline-flex border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">IA y comunicación estratégica para posicionar tu negocio - Escobar a Diario</a>
                  <a href="https://www.agencianova.com/opinion/2026/10/22/174271/por-que-propongo-institucionalizar-la-semana-del-emprendedor-escobarense/" target="_blank" rel="noreferrer" className="inline-flex border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">Por qué propongo institucionalizar la Semana del Emprendedor Escobarense - Agencia NOVA</a>
                  <YouTubePreview href="https://www.youtube.com/watch?v=wW0uneOAngA" title="Movimiento Vecinal Escobar - Video" />
                </div>
              </div>
            </div>
          </section>

<section id="libro" className="border-y border-black/10 px-6 py-16 md:px-10 md:py-24 lg:px-14">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

                <div>
                  <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Libro</h2>
                  <br />
                  <figure className="overflow-hidden border border-black/10 bg-white">
                    <img src={bookCover} alt="Portada del libro" className="w-full" loading="lazy" />
                  </figure>
                  <br />
                  <a
                    href="https://www.academia.edu/175471821/MIENTRAS_TODAV%C3%8DA_HAYA_IM%C3%81GENES_El_diario_privado_de_un_espectador_2023_2025_Versi%C3%B3n_e_book_completa_Leandro_A_Cuellar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex border border-black bg-[#5f050f] px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-80"
                  >
                    Acceso libre
                  </a>
                </div>
                <div className="space-y-6 lg:pt-2">
                    <div className="grid gap-4 md:grid-cols-2">
                    {libro2Links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">
                        {link.label}
                      </a>
                    ))}
                    </div>
                    <YouTubePreview href="https://www.youtube.com/watch?v=tiyjrNutQbQ" title="Entrevista - Libro" />
                    <a href="https://elpensador.io/mientras-aun-haya-imagenes-diario-privado-espectador/" target="_blank" rel="noreferrer" className="inline-flex border border-black/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70">Mientras todavía haya imágenes - El Pensador</a>
                    <blockquote className="mt-8 border-l border-black/20 pl-5 text-[15px] leading-8 text-black/75 md:text-base md:leading-9">
                      “En un ecosistema cultural dominado por la inmediatez algorítmica, las plataformas de streaming y lo que el propio autor ironiza como la «ideología Netflix» -un flujo incesante de estímulos anestésicos y provocaciones vacías-, el ejercicio crítico que propone Cuellar adquiere un valor de trinchera intelectual”.
                      <footer className="mt-3 text-[11px] uppercase tracking-[0.2em] text-black/50">Miguel Mendoza Jorquera</footer>
                    </blockquote>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
