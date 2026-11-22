import { siteConfig } from "@/config/site";

const Footer = () => (
  <footer id="contacto" className="border-t border-white/20 bg-[#2b0c19] px-6 py-12 text-[#f1e8df] md:px-10 lg:px-14">
    <div className="mx-auto max-w-6xl">
      <p className="text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">Contacto profesional</p>
      <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="font-serif text-3xl">Hablemos de proyectos.</h2>
          <p className="mt-4 text-sm text-[#f1e8df]/80">{siteConfig.contact.email}</p>
          <p className="mt-2 text-sm text-[#f1e8df]/80">WhatsApp: +5491130538404</p>
        </div>
        <div className="flex flex-wrap gap-5 text-[11px] uppercase tracking-[0.2em] text-[#f1e8df]/75">
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <div className="mt-10 border-t border-white/15 pt-5 text-xs text-[#f1e8df]/45">© {new Date().getFullYear()} {siteConfig.name}</div>
      <div className="mt-6">
        <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7306694018501910528" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-3 border border-white/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f1e8df] hover:border-[#d8b978]">
          <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-sm font-bold text-[#0A66C2]">in</span>
          Newsletter en LinkedIn: Versículos de Judas ↗
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
