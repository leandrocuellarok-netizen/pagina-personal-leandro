import { siteConfig } from "@/config/site";

const Hero = () => {
  return (
    <section id="inicio" className="border-b border-black/10 px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-black/55">Perfil editorial</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-light leading-[0.9] sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/70">
            Página biográfica organizada en torno a cuatro dimensiones: escritor, consultor, profesor, y comunicador.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.3em] text-black/60">
            <span>Filosofía Imagen</span>
            <span>Filosofía Poder</span>
            <span>Filosofía IA</span>
            <span>Profesor</span>
            <span>Comunicador</span>
          </div>
        </div>

        <figure className="border border-black/10 bg-white p-4 sm:p-6">
          <img
            src="/photos/hero.webp"
            alt="Leandro A. Cuellar"
            className="w-full"
            loading="eager"
          />
          <figcaption className="mt-3 text-[10px] uppercase tracking-[0.3em] text-black/45">
            Leandro A. Cuellar / hero
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
