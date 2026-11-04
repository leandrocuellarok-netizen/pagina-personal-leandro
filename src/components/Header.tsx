import { useState } from "react";
import { Menu, X } from "@/lib/icons";
import { navLinks } from "@/data/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fcfbf7]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <a href="#inicio" className="text-[11px] uppercase tracking-[0.35em] text-black">
          Leandro A. Cuellar
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="text-black md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/10 bg-[#fcfbf7] px-6 py-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-[11px] uppercase tracking-[0.3em] text-black/70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
