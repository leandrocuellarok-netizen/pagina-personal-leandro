import Header from "@/components/Header";
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
  { src: `${sectionImageBase}/intec_1.webp`, alt: "Leandro A. Cuellar - Autor - Libro", caption: "libro 01 / Agotado", wide: true },
  { src: `${sectionImageBase}/intec_2.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 1", caption: "Intelectual / marca" },
  { src: `${sectionImageBase}/intec_3.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 2", caption: "Intelectual / Cine" },
  { src: `${sectionImageBase}/intec_4.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 3", caption: "Intelectual / libro 02" },
  { src: `${sectionImageBase}/intec_5.webp`, alt: "Leandro A. Cuellar - Autor - Fotografía 4", caption: "Intelectual / fotografía" },
] as const;

const bookCover = `${sectionImageBase}/portada_libro.webp`;

const libro2Links = [
  { label: "Nota: El Pensador", href: "https://elpensador.io/mientras-aun-haya-imagenes-diario-privado-espectador/" },
  { label: "Nota: Voces de la Comuna 15", href: "https://vocesdelacomuna15.com.ar/press/leandro-a-cuellar-presenta-su-segundo-libro-mientras-todavia-hayaimagenes/" },
  { label: "Nota: Pehuenche Digital", href: "https://www.pehuenchedigital.com.ar/articulo/17753/leandro-cuellar-presenta----mientras-todav--a-haya-im--genes--el-diario-privado-de-un-espectador-" },
] as const;

const authorLinks = [
  { label: "Artículo académico", href: "https://www.academia.edu/143381434/Cuellar_Leandro_Abel_Cap%C3%ADtulo_Una_mirada_al_documental_El_Bot%C3%B3n_de_N%C3%A1car_En_El_cine_en_tiempos_de_angustia_2023_" },
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

const EditorialImage = ({ src, alt, caption, wide = false }: { src: string; alt: string; caption: string; wide?: boolean }) => (
  <figure className={wide ? "md:col-span-2" : ""}>
    <img src={src} alt={alt} className="w-full border border-black/10 bg-white" loading="lazy" />
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
    "Su trabajo parte de la observación de lo cotidiano y de la exploración de la identidad, la memoria, el tiempo y las relaciones humanas, buscando construir una obra con una voz propia.",
    "Esta dimensión reúne tres disciplinas que dialogan entre sí: el cine como lenguaje de la imagen en movimiento, la escritura como herramienta de reflexión y creación de sentido, y la fotografía como ejercicio de observación y síntesis visual. Cada una alimenta a las otras, conformando una producción autoral coherente que privilegia la sensibilidad, el pensamiento y una estética personal.",
    "Más que producir contenidos, aspira a construir una obra capaz de permanecer en el tiempo, abrir preguntas y establecer un diálogo con quienes la contemplan. Es la dimensión desde la cual Leandro Cuellar entiende la creación como una forma de conocimiento y como una manera de interpretar el mundo. No importa con qué herramienta sea.",
    "En noviembre de 2020, Leandro Cuellar fundó la escuela de cine Amour du cinéma. Más que un centro dedicado a la realización cinematográfica, el proyecto nació como un espacio para pensar el cine. A través de clases, encuentros y conferencias, reúne a personas de distintos países interesadas en explorar el diálogo entre el cine, la filosofía y el pensamiento contemporáneo.",
    "A lo largo de su trayectoria, Amour du cinéma ha recibido críticas por un supuesto \"elitismo artístico\". Sin embargo, su propuesta nunca ha sido la formación técnica de cineastas, sino la reflexión sobre el cine como forma de pensamiento y sobre la imagen como herramienta filosófica, estética y cultural.",
    "Con el paso de los años, el proyecto amplió su horizonte y hoy Amour du cinéma también funciona como productora audiovisual, impulsando proyectos cinematográficos.",
    "En el ámbito editorial, Leandro Cuellar publicó en 2022 el libro El cine en tiempos de angustia, una obra dedicada a analizar la relación entre el cine, la subjetividad y el contexto contemporáneo. Debido a su recepción, el libro fue reeditado en 2023.",
    "En el ámbito de la fotografía, Leandro Cuellar desarrolla actualmente el proyecto Ensayos sobre la identidad, una obra de carácter multidisciplinario que trasciende el lenguaje fotográfico. Aunque la fotografía constituye su eje central, el proyecto integra también recursos audiovisuales y textos ensayísticos, conformando un recorrido en el que la imagen y la escritura dialogan entre sí.",
    "Organizado en capítulos temáticos, Ensayos sobre la identidad explora distintas dimensiones de la experiencia humana, entre ellas la angustia, la intimidad, la sensualidad y otras manifestaciones de la identidad contemporánea. La propuesta busca comprender la identidad no como una esencia fija, sino como un proceso en permanente transformación, articulando reflexión filosófica, sensibilidad estética y experimentación visual.",
    "En conclusión, Leandro Cuellar como autor se caracteriza por una búsqueda constante de unidad entre pensamiento y creación. Ya sea a través del cine, la escritura o la fotografía, su obra concibe la imagen como una forma de conocimiento y el arte como un espacio desde el cual interrogar la identidad, el tiempo y la experiencia humana. Más que desarrollar disciplinas por separado, su propósito es construir una obra autoral coherente, en la que cada lenguaje contribuya a una misma búsqueda estética e intelectual.",
  ];

  const intelectualParagraphs = [
    "El pensamiento constituye uno de los ejes centrales de la trayectoria de Leandro Cuellar. Su interés por la filosofía, el psicoanálisis, la teoría política y las ciencias sociales atraviesa tanto su producción artística como su actividad docente de seminarios privados y en investigación independiente. Entiende el conocimiento como una práctica viva, capaz de vincular disciplinas y ofrecer nuevas formas de comprender la realidad contemporánea.",
    "Su trabajo se caracteriza por un enfoque interdisciplinario, estableciendo puentes entre autores clásicos y problemas actuales. Desde la filosofía de Friedrich Nietzsche hasta el psicoanálisis de Sigmund Freud y Jacques Lacan, pasando por el pensamiento político de Nicolás Maquiavelo o Carl Schmitt, desarrolla una lectura que integra distintas tradiciones para analizar la cultura, la identidad, el poder y la subjetividad.",
    "Como docente, ha impulsado seminarios privados destinados a estudiantes de cine, profesionales, psicoanalistas, antropólogos, y público general, privilegiando el diálogo, el pensamiento crítico y la construcción colectiva del conocimiento. Sus seminarios buscan convertir conceptos complejos en herramientas para interpretar la vida cotidiana, el arte y la política.",
    "En paralelo, desarrolla una labor permanente de investigación sobre cine, filosofía, comunicación, inteligencia artificial, marketing político y transformaciones culturales. Más que especializarse en un único campo, procura comprender los fenómenos contemporáneos desde una perspectiva transversal, donde las distintas disciplinas se complementan y enriquecen mutuamente.",
    "Para Leandro Cuellar, pensar no constituye una actividad separada de la creación o de la acción. La reflexión filosófica, la investigación y la enseñanza forman parte de un mismo proceso: producir conocimiento que permita comprender mejor el mundo y actuar sobre él con mayor lucidez.",
    "Durante su trayectoria académica, Leandro Cuellar mantuvo un conflicto con el investigador Javier Flax a raíz de profundas diferencias sobre el rol de la docencia universitaria y la libertad de pensamiento en el aula.",
    "Según Leandro Cuellar, durante una clase se expusieron posicionamientos políticos que, a su juicio, excedían el análisis académico y eran presentados como verdades incuestionables. Entre los aspectos que cuestionó se encontraba el tratamiento de temas de fuerte controversia política y la manifestación de preferencias partidarias en el ámbito de la evaluación, por considerar que la universidad debe promover el pensamiento crítico y el debate plural antes que la adhesión a una determinada posición ideológica.",
    "Leandro Cuellar sostiene que un docente tiene derecho a poseer convicciones políticas, filosóficas o religiosas, pero considera que estas no deben imponerse a los estudiantes ni constituir un criterio de evaluación. Desde su perspectiva, la función de la educación es ofrecer herramientas para el análisis crítico y garantizar un espacio donde puedan coexistir distintas posiciones dentro del respeto y el rigor intelectual.",
    "Asimismo, Leandro Cuellar sostiene haber recibido amenazas por parte de Javier Flax durante el desarrollo de este conflicto. También afirma que sus diferencias con el pensamiento predominante dentro de determinados ámbitos académicos influyeron negativamente en su trayectoria universitaria. Según su relato, fue objeto de acusaciones que considera infundadas y de situaciones que, a su entender, obstaculizaron el pleno ejercicio de su derecho a cursar y participar en una universidad pública en condiciones de igualdad y libertad de expresión.",
    "Como consecuencia de estas experiencias, Leandro Cuellar decidió orientar su actividad docente hacia seminarios y espacios de formación independientes, sustentados en el pluralismo intelectual, el respeto por la diversidad de ideas y el pensamiento crítico. Su propuesta pedagógica se basa en el análisis comparativo de autores y tradiciones, entendiendo que la educación no debe formar adherentes a una doctrina, sino personas capaces de construir un juicio propio.",
    "En sus seminarios es posible estudiar y contrastar perspectivas muy diferentes entre sí, es posible leer a historiadores contemporáneos y contrastarlos como pueden ser: el marxista Eric Hobsbawm y el liberal Rondo Cameron, así como otros autores de diversas corrientes de pensamiento. Para Leandro Cuellar, el verdadero aprendizaje surge de la confrontación respetuosa entre ideas y de la libertad de cada alumno para elaborar sus propias conclusiones y crear pensamiento autónomo. Incluso en sus propias palabras: estoy de acuerdo en pensar que todas mis creencias actuales pueden ser falsas.",
  ];

  const filosofiaPoderParagraphs = [
    "En este marco, Leandro Cuellar fundó Vilanova Group, un holding especializado en estrategia, comunicación e innovación que integra distintas áreas de trabajo vinculadas al marketing empresarial, el marketing político, la inteligencia artificial y el análisis de la opinión pública. Su propósito es desarrollar soluciones interdisciplinarias que permitan a organizaciones, empresas, gobiernos y líderes comprender escenarios complejos, fortalecer su posicionamiento y diseñar estrategias de largo plazo.",
    "A través de sus diferentes unidades, Vilanova Group articula herramientas de comunicación estratégica, branding, consultoría institucional, formación ejecutiva, investigación social e inteligencia artificial aplicada a la toma de decisiones. El holding parte de la premisa de que la comunicación contemporánea requiere integrar tecnología, análisis de datos, comportamiento humano y construcción de narrativas para interpretar con mayor precisión las dinámicas de la sociedad.",
    "Desde esta perspectiva, Vilanova Group concibe la estrategia no solo como un instrumento para alcanzar objetivos, sino como una metodología para comprender la opinión pública, anticipar transformaciones y construir organizaciones más sólidas, adaptables e innovadoras.",
    "Cree que la inteligencia artificial constituye una de las herramientas más trascendentes del siglo XXI. Sin embargo, sostiene que su desarrollo debe estar guiado por principios éticos, transparencia y responsabilidad. La IA no debe reemplazar el juicio humano ni convertirse en un mecanismo de manipulación de las personas, sino ampliar las capacidades de análisis, creatividad y toma de decisiones de individuos e instituciones.",
    "Desde esta perspectiva, cuestiona el uso de la inteligencia artificial y de las tecnologías de comunicación con fines exclusivamente propagandísticos. Considera que una democracia pierde calidad cuando las herramientas digitales se orientan a reforzar sesgos, polarizar a la ciudadanía o influir emocionalmente sobre los votantes mediante la desinformación, la segmentación opaca o la manipulación algorítmica.",
    "Para Leandro Cuellar, la tecnología debe contribuir a una ciudadanía mejor informada y más libre, no a una ciudadanía más predecible o manipulable. Por ello, sostiene que la comunicación política debe privilegiar el debate público, el acceso a información verificable, la confrontación respetuosa de ideas y la autonomía crítica de los ciudadanos. La inteligencia artificial, afirma, alcanza su mayor valor cuando fortalece la deliberación democrática y amplía la capacidad de las personas para comprender la realidad, en lugar de sustituir su libertad de pensar.",
  ];

  const comunicadorParagraphs = [
    "La comunicación constituye una de las herramientas fundamentales mediante las cuales Leandro Cuellar busca trasladar sus ideas al espacio público. Su propuesta parte de una concepción pluralista del diálogo, entendiendo que una sociedad democrática se fortalece cuando diferentes perspectivas pueden encontrarse, debatir y confrontar argumentos en un marco de respeto intelectual.",
    "Con ese propósito impulsa FOCO LATAM, un espacio de análisis político que reúne a dirigentes, candidatos y referentes de distintos partidos y corrientes ideológicas. El proyecto busca contribuir a una conversación pública más amplia, privilegiando el intercambio de ideas por encima de la confrontación partidaria y promoviendo el acceso de la ciudadanía a una diversidad de voces y perspectivas.",
    "En paralelo, creó su proyecto máximo -a su forma de ver- Comunicadores Libres. Una comunidad que sirve como herramienta de trabajo a comunicadores argentinos y latinoamericanos. Con un enfoque puesto en el pluralismo y la posibilidad de que todos participen brindando contactos, compartiendo notas o links para seguimiento en redes sociales.",
    "Su actividad como comunicador también incluye la participación habitual como presidente de Vilanova Group y analista político y cultural en medios de comunicación y espacios de debate. Ha sido invitado a programas de televisión, señales informativas y plataformas de streaming, entre ellas Canal 26, así como distintos espacios digitales de análisis político y actualidad como RealPolitik. Del mismo modo, sus artículos, entrevistas y opiniones han sido publicados por diversos portales periodísticos y medios especializados.",
    "Para Leandro Cuellar, comunicar no consiste únicamente en transmitir información, sino en generar espacios de encuentro donde las ideas puedan circular libremente. Su objetivo es contribuir a una esfera pública más plural, crítica y abierta al diálogo, entendiendo que la comunicación adquiere su mayor valor cuando fortalece la comprensión mutua y la calidad del debate democrático.",
    "Como parte de sus investigaciones sobre comunicación política y construcción de identidad, desarrolló el personaje Nano Vilanova, un asesor político ficticio inspirado en la figura del consultor estadounidense Roger Stone. Concebido como un ejercicio de experimentación narrativa y performática, el personaje encarna una personalidad fría, calculadora y cínica, permitiéndole explorar los mecanismos de la persuasión, el poder, la propaganda y la construcción de liderazgo en la política contemporánea.",
    "La propuesta trascendió el plano teórico: Leandro Cuellar llegó a participar en distintos espacios de comunicación bajo esa identidad, diseñó tarjetas personales y desarrolló una imagen pública diferenciada, convirtiendo a Nano Vilanova en un laboratorio sobre la construcción del personaje político. A través de recursos provenientes de la actuación de método y de la performance, investigó hasta qué punto una identidad puede moldearse mediante el lenguaje, la estética y el comportamiento.",
    "Esta experiencia se inscribe dentro de una preocupación más amplia por comprender cómo se construyen las figuras públicas y cómo la comunicación puede transformar la percepción de una persona. Para Leandro Cuellar, Nano Vilanova no representa una identidad paralela, sino una herramienta de investigación sobre los límites entre la representación, la comunicación estratégica y la identidad en la vida pública.",
  ];

  const FilosofiaIAParagraphs = [
    "La filosofía de la inteligencia artificial de Leandro A. Cuellar nace de una preocupación más antigua que la propia tecnología: comprender qué significa ser humano en una época en la que las imágenes, el lenguaje y la memoria pueden comenzar a ser producidos, almacenados y procesados por máquinas. Formado en filosofía y profundamente vinculado al cine y a la teoría de la imagen, Leandro encuentra en la inteligencia artificial un nuevo escenario para interrogar la condición humana.",
    "En su pensamiento aparece una pregunta especialmente radical: ¿qué sucedería si aquello que llamamos conciencia pudiera ser trasladado a una máquina? El problema del mind uploading -como explicó en Perfil con Juan Bernaus y Julieta Fantini- lleva hasta el límite una cuestión que atraviesa su reflexión: si pudiéramos copiar nuestra memoria, nuestros pensamientos o incluso nuestra personalidad en un sistema artificial, ¿seguiríamos siendo nosotros mismos? ¿Dónde comienza y dónde termina una persona? ¿Es la conciencia información, o existe algo irreductible en la experiencia de estar vivo?",
    "Desde esta perspectiva, Leandro Cuellar no entiende la inteligencia artificial únicamente como una herramienta tecnológica. La considera un acontecimiento filosófico capaz de modificar nuestra relación con el cuerpo, la identidad, la memoria, el deseo y la muerte. Su pregunta no es solamente qué puede hacer una máquina, sino qué ocurre con nosotros cuando comenzamos a delegar en ella facultades que históricamente consideramos humanas.",
    "También colabora en medios de comunicación, como la radio de la Universidad de San Luis y Perfil, y publica regularmente reflexiones sobre inteligencia artificial en LinkedIn.",
  ];

  return (
    <>
      <SEO title="Leandro A. Cuellar" description="Página biográfica editorial de Leandro A. Cuellar, en torno a la filósofía de la imagen, el poder y la inteligencia artificial." />
      <div className="min-h-screen bg-white text-black">
        <Header />
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
              </div>
            </div>
          </section>
          


          <section id="profesor" className="border-b border-black/10 px-6 py-16 md:px-10 md:py-24 lg:px-14">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div className="mt-8">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-black/50">Profesor</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Profesor</h2>
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
                    <img src={bookCover} alt="Portada del libro El cine en tiempos de angustia" className="w-full" loading="lazy" />
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
