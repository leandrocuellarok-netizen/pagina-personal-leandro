import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer id="contacto" className="border-t border-black/10 px-6 py-16 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
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

      <div className="mx-auto mt-10 max-w-6xl border-t border-black/10 pt-6 text-sm text-black/50">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
};

export default Footer;
