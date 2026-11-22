import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer id="contacto" className="border-t border-black/10 px-6 py-16 md:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-black/50">Contacto</p>
            <p className="mt-4 text-sm leading-7 text-black/70">{siteConfig.contact.email}</p>
            <p id="telefono" className="text-sm leading-7 text-black/70">{siteConfig.contact.phone}</p>
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

        <div className="border-t border-black/10 pt-8">
          <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7306694018501910528" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-3 rounded-full bg-[#0A66C2] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#004182]">
            <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-[15px] font-bold leading-none text-[#0A66C2]">in</span>
            Newsletter en LinkedIn: Versículos de Judas
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
