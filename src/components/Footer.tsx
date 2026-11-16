import { siteConfig } from "@/config/site";

const casaDeLasIdeasUrl = "https://share.google/sxlw7pMbiiy6NvAWK";

const Footer = () => {
  return (
    <footer id="contacto" className="border-t border-black/10 px-6 py-16 md:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-12">
        <section aria-labelledby="casa-de-las-ideas">
          <p className="text-[10px] uppercase tracking-[0.35em] text-black/50">Un espacio para encontrarnos</p>
          <h2 id="casa-de-las-ideas" className="mt-4 text-3xl sm:text-4xl md:text-5xl">CASA DE LAS IDEAS</h2>
          <p className="mt-3 text-lg text-black/75">Filosofía, arte y conversación.</p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-black/65">
            Una invitación del profesor escobarense Leandro A. Cuellar.
          </p>
          <div className="mt-8 overflow-hidden border border-black/10 bg-black/5">
            <iframe
              title="Ubicación de Casa de las Ideas en Google Maps"
              src="https://www.google.com/maps?q=https%3A%2F%2Fshare.google%2Fsxlw7pMbiiy6NvAWK&output=embed"
              className="h-[320px] w-full md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={casaDeLasIdeasUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex border border-black bg-[#5f050f] px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-80"
          >
            Ver ubicación y cómo llegar
          </a>
        </section>

        <div className="grid gap-10 border-t border-black/10 pt-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-black/50">Contacto</p>
            <p className="mt-4 text-sm leading-7 text-black/70">{siteConfig.contact.email}</p>
            <p className="text-sm leading-7 text-black/70">{siteConfig.contact.phone}</p>
          </div>

          <div className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.3em] text-black/70 md:items-end">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
              Instagram
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-black/10 pt-6 text-sm text-black/50">
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
