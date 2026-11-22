import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "@/lib/icons";
import { navLinks } from "@/data/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#35101f]/95 text-[#f1e8df] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-3 md:px-10 lg:px-14">
        <Link to="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#f1e8df]">
          <img src="/photos/leandro-cuellar.webp" alt="Leandro A. Cuellar" className="h-11 w-11 rounded-sm border border-[#d8b978]/70 object-cover object-center" />
          <span>Leandro A. Cuellar</span>
          <img src="/photos/leandro-cuellar.webp" alt="" aria-hidden="true" className="h-11 w-11 rounded-sm border border-[#d8b978]/70 object-cover object-center" />
        </Link>
        <nav className="hidden flex-wrap justify-end gap-x-5 gap-y-3 lg:flex">
          {navLinks.filter((link) => link.href !== "/").map((link) => (
            <Link key={link.href} to={link.href} className={`text-[10px] uppercase tracking-[0.12em] transition-colors hover:text-[#d8b978] ${location.pathname === link.href ? "text-[#d8b978]" : "text-[#f1e8df]/75"}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="text-[#f1e8df] lg:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/15 bg-[#35101f] px-6 py-3 lg:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-[11px] uppercase tracking-[0.15em] text-[#f1e8df]/85">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
