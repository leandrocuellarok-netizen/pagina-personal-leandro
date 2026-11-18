import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

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
    ]
  },
  "comunicadores-libres": {
    title: "Comunicadores Libres",
    eyebrow: "Comunidad y desarrollo profesional para comunicadores",
    paragraphs: [
      "Cuellar entiende la comunicación como una práctica plural que permite poner ideas en circulación y fortalecer el diálogo democrático.",
      "Impulsa FOCO LATAM, un espacio de análisis político que reúne a dirigentes y referentes de distintas corrientes para promover el intercambio de perspectivas.",
      "También creó Comunicadores Libres, una comunidad de trabajo para comunicadores argentinos y latinoamericanos, orientada a compartir contactos, notas y oportunidades.",
      "Su actividad incluye participación como analista político y cultural en medios y espacios de debate, entre ellos Canal 26 y RealPolitik.",
      "Considera que comunicar no es solo transmitir información: también es crear espacios de encuentro y ampliar la conversación pública.",
      "Como experimento narrativo desarrolló Nano Vilanova, un personaje ficticio para investigar la persuasión, la propaganda y la construcción de liderazgos.",
      "El proyecto incorporó recursos de performance, estética y actuación para explorar cómo se construye una identidad pública.",
      "Esta experiencia forma parte de su interés por los vínculos entre representación, comunicación estratégica e identidad."
    ],
    external: { label: "Acceder a la comunidad de WhatsApp", href: "https://chat.whatsapp.com/HqboLKpOskI5M2HhZnaOPM" }
  },
  "archivos-atenea": {
    title: "Archivos ATENEA",
    eyebrow: "Repositorio digital",
    paragraphs: [
      "Repositorio digital sobre la representación audiovisual de la mujer."
    ],
    external: { label: "Visitar Archivos ATENEA", href: "https://archivosatenea.sbs/" }
  },
  "vilanova-ai": {
    title: "Vilanova AI Solutions",
    eyebrow: "Inteligencia artificial aplicada",
    paragraphs: [
      "Capacitaciones sobre inteligencia artificial in company y para profesionales."
    ]
  },
  "vilanova-partners": {
    title: "Vilanova Partners",
    eyebrow: "Comunicación política",
    paragraphs: [
      "Análisis y asesoramiento en comunicación política."
    ]
  }
};

const ProjectPage = () => {
  const { slug = "" } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#35101f] px-6 py-20 text-[#f1e8df]">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl">Proyecto no encontrado</h1>
          <Link to="/" className="mt-8 inline-block underline underline-offset-4">Volver a Leandro A. Cuellar</Link>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#35101f] text-[#f1e8df]">
      <SEO title={project.title} description={project.eyebrow} />
      <main className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <article className="mx-auto max-w-4xl">
          <Link to="/" className="text-[10px] uppercase tracking-[0.3em] text-[#f1e8df]/65 transition-opacity hover:opacity-100">← Leandro A. Cuellar</Link>
          <p className="mt-20 text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">Vilanova Group® · Ecosistema</p>
          <h1 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">{project.title}</h1>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#f1e8df]/60">{project.eyebrow}</p>
          <div className="mt-14 max-w-3xl space-y-7 text-base leading-8 text-[#f1e8df]/85 md:text-lg md:leading-9">
            {project.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {project.external && (
            <a href={project.external.href} target="_blank" rel="noreferrer" className="mt-12 inline-flex border border-[#d8b978]/50 px-5 py-4 text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-white/5">{project.external.label} ↗</a>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
