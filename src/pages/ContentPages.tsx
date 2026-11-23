import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import ArcadeDonkeyKong from "@/components/ArcadeDonkeyKong";

type PageShellProps = { title: string; eyebrow: string; description: string; children: ReactNode };
const PageShell = ({ title, eyebrow, description, children }: PageShellProps) => (
  <div className="min-h-screen bg-[#35101f] text-[#f1e8df]">
    <SEO title={title} description={description} />
    <Header />
    <main>
      <section className="border-b border-white/15 px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">{eyebrow}</p>
          <h1 className="mt-4 max-w-5xl font-serif text-4xl leading-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#f1e8df]/75">{description}</p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl space-y-12 px-6 py-14 md:px-10 md:py-20 lg:px-14">{children}</div>
    </main>
    <Footer />
  </div>
);

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="border-b border-white/15 pb-10 last:border-0">
    <h2 className="mb-5 font-serif text-3xl sm:text-4xl">{title}</h2>
    <div className="max-w-4xl space-y-5 text-[15px] leading-8 text-[#f1e8df]/80">{children}</div>
  </section>
);

export const EcosistemaPage = () => (
  <PageShell title="Ecosistema Vilanova Group" eyebrow="Empresa · Innovación · Comunicación" description="Un ecosistema de proyectos que integra comunicación estratégica, formación, cultura, investigación e inteligencia artificial aplicada.">
    <Block title="Vilanova Group">
      <p>Vilanova Group® es un ecosistema a favor del pensamiento, la cultura, la libertad de expresión, la innovación y la comunicación política con responsabilidad ética. Fundado por Leandro A. Cuellar, articula proyectos de comunicación, cultura, formación e inteligencia artificial.</p>
      <p>El ecosistema integra comunicación estratégica, branding, consultoría institucional, formación, investigación social e IA aplicada a la toma de decisiones. Su enfoque combina tecnología, datos y comportamiento humano para ayudar a organizaciones a comprender escenarios y desarrollar estrategias de largo plazo.</p>
      <p>La inteligencia artificial se aborda con criterios de ética, transparencia y responsabilidad: debe ampliar las capacidades humanas, no sustituir el juicio ni utilizarse para manipular, polarizar o desinformar.</p>
    </Block>
    <Block title="Proyectos del ecosistema">
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Comunicadores Libres","/proyectos/comunicadores-libres"],
          ["Amour du cinéma","/proyectos/amour-du-cinema"],
          ["Archivos ATENEA","/proyectos/archivos-atenea"],
          ["Vilanova AI Solutions","/proyectos/vilanova-ai"],
          ["Vilanova Partners","/proyectos/vilanova-partners"],
        ].map(([name,href]) => <a key={href} href={href} className="border border-white/20 px-5 py-4 text-sm hover:border-[#d8b978]">{name} ↗</a>)}
      </div>
      <a href="https://www.linkedin.com/company/vilanovagroupai" target="_blank" rel="noopener noreferrer" className="inline-flex border border-[#d8b978]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em]">Vilanova Group en LinkedIn ↗</a>
    </Block>
    <Block title="Ética, tecnología y comunicación">
      <p>La propuesta busca fortalecer el debate público, el acceso a información verificable y la autonomía de las personas. La tecnología se integra como herramienta para mejorar procesos y decisiones, con responsabilidad sobre sus efectos.</p>
      <div className="flex flex-wrap gap-3">
        <a className="border border-white/20 px-4 py-3 text-xs" href="https://www.academia.edu/180201632/C%C3%B3digo_de_%C3%89tica_para_el_Uso_de_la_Inteligencia_Artificial_en_Campa%C3%B1as_Pol%C3%ADticas_en_Argentina" target="_blank" rel="noreferrer">Código de ética IA para campañas políticas ↗</a>
        <a className="border border-white/20 px-4 py-3 text-xs" href="https://realpolitik.com.ar/nota/75068/deepfakes-en-dos-minutos-podes-arruinar-la-imagen-de-un-candidato-antes-de-votar/" target="_blank" rel="noreferrer">Deepfakes y política · RealPolitik ↗</a>
      </div>
    </Block>
    <ArcadeDonkeyKong />
  </PageShell>
);

export const ComunicadorPage = () => (
  <PageShell title="Yo soy el comunicador libre" eyebrow="Comunicación · Cultura · Medios" description="Una práctica independiente de comunicación, análisis y divulgación para ampliar la conversación pública.">
    <Block title="Cultura digital, IA y filosofía política">
      <p>Mi reflexión sobre inteligencia artificial parte de una pregunta: qué significa ser humano cuando el lenguaje, las imágenes y la memoria pueden ser producidos y procesados por máquinas.</p>
      <p>El mind uploading plantea un problema central: si pudiéramos trasladar recuerdos y pensamientos a un sistema artificial, ¿seguiríamos siendo nosotros mismos? ¿La conciencia es información o existe algo irreductible en la experiencia de vivir?</p>
      <p>Entiendo la IA como un acontecimiento filosófico que transforma nuestra relación con el cuerpo, la identidad, la memoria y el deseo. La pregunta no es solo qué puede hacer una máquina, sino qué cambia en nosotros cuando delegamos en ella capacidades humanas.</p>
      <p>También publico reflexiones sobre inteligencia artificial, cultura digital, comunicación y filosofía política en medios y plataformas especializadas.</p>
      <div className="flex flex-wrap gap-3">
        <a className="border border-white/20 px-4 py-3 text-xs" href="https://www.linkedin.com/posts/leandrocuellar_c%C3%B3mo-sabemos-qui%C3%A9nes-somos-con-un-dibujo-ugcPost-7517760616326180864--FCi/" target="_blank" rel="noreferrer">Publicaciones sobre IA en LinkedIn ↗</a>
        <a className="border border-white/20 px-4 py-3 text-xs" href="https://quepasaamerica.com.ar/ia-redes-y-vacio-legal-que-dice-la-filosofia-del-derecho-sobre-el-caso-nahir-galarza/" target="_blank" rel="noreferrer">IA, redes y filosofía del derecho ↗</a>
      </div>
    </Block>
    <Block title="Voy a los medios sin ser Moria">
      <p>Participaciones, entrevistas y artículos en los que comparto análisis sobre política, cultura, comunicación e inteligencia artificial. Una conversación pública que también se construye escuchando, preguntando y discutiendo.</p>
      <p>Mi actividad incluye participación como analista político y cultural en medios y espacios de debate, entre ellos Canal 26 y RealPolitik. También publico columnas, entrevistas y reflexiones en medios digitales y plataformas de divulgación.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <a className="border border-white/20 px-4 py-4 text-xs uppercase tracking-[0.12em]" href="https://realpolitik.com.ar/nota/75068/deepfakes-en-dos-minutos-podes-arruinar-la-imagen-de-un-candidato-antes-de-votar/" target="_blank" rel="noreferrer">RealPolitik · IA y política ↗</a>
        <a className="border border-white/20 px-4 py-4 text-xs uppercase tracking-[0.12em]" href="https://escobaradiario.com.ar/interes-general/ia-y-comunicacion-estrategica-para-posicionar-tu-negocio/" target="_blank" rel="noreferrer">Escobar a Diario · Comunicación e IA ↗</a>
        <a className="border border-white/20 px-4 py-4 text-xs uppercase tracking-[0.12em]" href="https://www.agencianova.com/opinion/2026/10/22/174271/por-que-propongo-institucionalizar-la-semana-del-emprendedor-escobarense/" target="_blank" rel="noreferrer">Agencia NOVA · Opinión ↗</a>
        <a className="border border-white/20 px-4 py-4 text-xs uppercase tracking-[0.12em]" href="https://www.notaalpie.com.ar/2023/08/03/el-cine-en-tiempos-de-angustia-una-obra-literaria-ideal-para-los-amantes-del-septimo-arte-y-la-filosofia/" target="_blank" rel="noreferrer">Nota al Pie · Libros y cultura ↗</a>
      </div>
    </Block>
    <Block title="Comunicadores Libres">
      <p>Creé Comunicadores Libres, una comunidad de trabajo para comunicadores argentinos y latinoamericanos, orientada a compartir contactos, notas y oportunidades. La comunicación es una práctica plural: poner ideas en circulación, conectar voces y fortalecer el diálogo democrático.</p>
      <a href="/proyectos/comunicadores-libres" className="inline-flex border border-[#d8b978]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em]">Conocer Comunicadores Libres ↗</a>
    </Block>
  </PageShell>
);

export const ServiciosPage = () => (
  <PageShell title="Servicios profesionales" eyebrow="Diseño · Contenido · Identidad · Inteligencia artificial" description="Creatividad humana potenciada por inteligencia artificial. Estrategia, diseño y comunicación para marcas, profesionales y organizaciones.">
    <section className="space-y-5">
      <div className="border-2 border-[#d8b978] bg-[#f1e8df] p-6 text-[#35101f] shadow-[8px_8px_0_#d8b978] sm:p-9">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8d3c36]">01 · Servicio destacado</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl">Diseño web + IA by Vilanova AI Solutions</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7">Sitios y landing pages para comunicar, posicionar y convertir. Desde sólo 30 mil pesos mensuales, dependiendo del caso. La IA vino a solucionarte el precio y a mí la existencia.</p>
        <a href="https://wa.me/5491130538404?text=Hola%2C%20quiero%20consultar%20por%20dise%C3%B1o%20web." className="mt-6 inline-flex bg-[#35101f] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f1e8df] hover:bg-[#65283c]">Consultar por WhatsApp ↗</a>
      </div>
      <div className="border-2 border-[#d8b978] bg-white/5 p-6 sm:p-9">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b978]">02 · Servicio destacado</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl">Community Manager · Nivel Dios</h2>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d8b978]">Lead / Head of Social Media · +10 años de experiencia</p>
        <p className="mt-4 max-w-3xl text-sm leading-7">Estrategia, calendario editorial, contenidos y gestión de comunidades con una combinación de sensibilidad humana, creatividad e inteligencia artificial. No se trata de publicar por publicar: construimos conversación, consistencia y presencia digital con objetivos claros.</p>
        <a href="https://wa.me/5491130538404?text=Hola%2C%20quiero%20consultar%20por%20Community%20Manager." className="mt-6 inline-flex border border-[#d8b978] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f1e8df] hover:bg-[#d8b978] hover:text-[#35101f]">Consultar por WhatsApp ↗</a>
      </div>
      <div className="border-2 border-[#d8b978] bg-white/5 p-6 sm:p-9">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b978]">03 · Servicio destacado</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl">BRANDING / IA by Vilanova</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7">Necesitás un concepto de marca y una voz reconocible. Traducimos la identidad de tu proyecto en posicionamiento, personalidad, tono, narrativa y universo visual. Lo que antes podía llevar cien horas de brief, exploración y desarrollo hoy se agiliza radicalmente con IA como asistente de investigación y producción, bajo dirección creativa humana. Más velocidad, procesos eficientes y propuestas de valor más accesibles para tu bolsillo.</p>
        <a href="https://wa.me/5491130538404?text=Hola%2C%20quiero%20consultar%20por%20BRANDING%20%2F%20IA%20by%20Vilanova." className="mt-6 inline-flex border border-[#d8b978] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f1e8df] hover:bg-[#d8b978] hover:text-[#35101f]">Consultar por WhatsApp ↗</a>
      </div>
    </section>
    <Block title="Inteligencia artificial para empresas">
      <p>Capacitaciones para equipos y profesionales que necesitan incorporar inteligencia artificial a su trabajo cotidiano, con criterio, seguridad y objetivos concretos.</p>
      <p>La propuesta combina alfabetización en IA, diseño de prompts, automatización de tareas, comunicación y análisis de procesos. El punto de partida es identificar dónde la IA puede ahorrar tiempo, mejorar decisiones y generar valor.</p>
      <a href="https://wa.me/5491130538404?text=Hola%2C%20me%20interesa%20la%20capacitaci%C3%B3n%20en%20inteligencia%20artificial." className="inline-flex border border-[#d8b978]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em]">Consultar por WhatsApp ↗</a>
    </Block>
    <Block title="Comunicación estratégica">
      <p>Asesoramiento en comunicación institucional, prensa, posicionamiento digital, narrativa de marca y desarrollo de contenidos. Trabajo orientado a ordenar mensajes, construir reputación y conectar organizaciones con sus públicos.</p>
      <a href="https://wa.me/5491130538404?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20comunicaci%C3%B3n%20estrat%C3%A9gica." className="inline-flex border border-[#d8b978]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em]">Consultar por WhatsApp ↗</a>
    </Block>
    <Block title="Conferencias y formación ejecutiva">
      <p>Charlas, talleres y seminarios sobre inteligencia artificial, cultura digital, filosofía de la tecnología, comunicación y transformaciones sociales. Formatos presenciales y virtuales para empresas, universidades e instituciones.</p>
      <a href="https://wa.me/5491130538404?text=Hola%2C%20me%20interesan%20las%20conferencias%20y%20la%20formaci%C3%B3n%20ejecutiva." className="inline-flex border border-[#d8b978]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em]">Consultar por WhatsApp ↗</a>
    </Block>
  </PageShell>
);
export const PrensaPage = () => (
  <PageShell title="Prensa y medios" eyebrow="Participaciones · Entrevistas · Publicaciones" description="Artículos, entrevistas y participaciones públicas sobre política, cultura, comunicación e inteligencia artificial.">
    <Block title="Artículos y participaciones">
      <div className="grid gap-3 sm:grid-cols-2">
        <a className="border border-white/20 px-4 py-4 text-sm" href="https://realpolitik.com.ar/nota/75068/deepfakes-en-dos-minutos-podes-arruinar-la-imagen-de-un-candidato-antes-de-votar/" target="_blank" rel="noreferrer">RealPolitik · Deepfakes y política ↗</a>
        <a className="border border-white/20 px-4 py-4 text-sm" href="https://escobaradiario.com.ar/interes-general/ia-y-comunicacion-estrategica-para-posicionar-tu-negocio/" target="_blank" rel="noreferrer">Escobar a Diario · IA y comunicación ↗</a>
        <a className="border border-white/20 px-4 py-4 text-sm" href="https://www.agencianova.com/opinion/2026/10/22/174271/por-que-propongo-institucionalizar-la-semana-del-emprendedor-escobarense/" target="_blank" rel="noreferrer">Agencia NOVA · Opinión ↗</a>
        <a className="border border-white/20 px-4 py-4 text-sm" href="https://www.notaalpie.com.ar/2023/08/03/el-cine-en-tiempos-de-angustia-una-obra-literaria-ideal-para-los-amantes-del-septimo-arte-y-la-filosofia/" target="_blank" rel="noreferrer">Nota al Pie · Cine y filosofía ↗</a>
      </div>
    </Block>
    <Block title="Contacto para prensa">
      <p>Para entrevistas, columnas, participaciones en programas, consultas editoriales o invitaciones a espacios de debate:</p>
      <a href="mailto:leandrocuellarok@gmail.com?subject=Prensa%20y%20medios" className="inline-flex border border-[#d8b978]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em]">Escribir por prensa ↗</a>
    </Block>
  </PageShell>
);

export const InvestigacionPage = () => (
  <PageShell title="Investigación y pensamiento" eyebrow="Filosofía · Cultura · Sociedad" description="Un espacio de investigación interdisciplinaria sobre imagen, poder, subjetividad, tecnología y transformaciones culturales.">
    <Block title="Filosofía, cine e imagen">
      <p>Mi trabajo explora la identidad, la memoria, el tiempo y las relaciones humanas a través del cine, la escritura y la fotografía. Estos lenguajes dialogan y conforman una búsqueda autoral que entiende la imagen como una forma de conocimiento y reflexión.</p>
      <p>En 2020 fundé Amour du cinéma, una escuela dedicada a pensar el cine y su relación con la filosofía y el pensamiento contemporáneo. En 2022 publiqué <em>El cine en tiempos de angustia</em>, obra reeditada en 2023. Actualmente desarrollo proyectos que reúnen fotografía, audiovisual y escritura.</p>
      <a href="/proyectos/amour-du-cinema" className="inline-flex border border-white/20 px-4 py-3 text-xs">Amour du cinéma ↗</a>
    </Block>
    <Block title="Pensamiento político y ciencias sociales">
      <p>Mi interés por la filosofía, el psicoanálisis, la teoría política y las ciencias sociales se expresa en la docencia, la investigación y la creación. Trabajo desde un enfoque interdisciplinario que pone en diálogo tradiciones y autores para pensar la cultura, el poder y la subjetividad.</p>
      <p>Investigo sobre cine, filosofía, comunicación, inteligencia artificial, marketing político y transformaciones culturales. En seminarios y espacios de formación propongo contrastar autores y corrientes diferentes: aprender implica revisar las propias creencias y construir un juicio autónomo.</p>
    </Block>
    <Block title="Filosofía de la inteligencia artificial">
      <p>La pregunta no es solamente qué pueden hacer los sistemas artificiales, sino qué cambia en la experiencia humana cuando delegamos en ellos capacidades vinculadas con el lenguaje, la memoria, la creación y la decisión.</p>
      <a href="/yo-soy-el-comunicador-libre" className="inline-flex border border-white/20 px-4 py-3 text-xs">Cultura digital, IA y filosofía política ↗</a>
    </Block>
  </PageShell>
);
