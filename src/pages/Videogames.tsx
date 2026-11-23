import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Gamepad2, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const games = [
  { title: "Super Mario Bros.", year: "1985", platform: "NES", genre: "Plataformas", note: "El clásico que convirtió a Mario en un icono mundial.", mark: "M", color: "from-red-600 to-orange-500" },
  { title: "Sonic the Hedgehog", year: "1991", platform: "Sega Mega Drive", genre: "Plataformas", note: "Velocidad, loops y una identidad visual inolvidable.", mark: "S", color: "from-blue-600 to-cyan-400" },
  { title: "Donkey Kong Country", year: "1994", platform: "Super Nintendo", genre: "Plataformas", note: "Aventura de plataformas con una estética revolucionaria.", mark: "DK", color: "from-amber-700 to-yellow-500" },
  { title: "Pac-Man", year: "1980", platform: "Arcade", genre: "Arcade y acción", note: "Laberintos, fantasmas y una mecánica perfecta.", mark: "●", color: "from-yellow-500 to-amber-300" },
  { title: "Space Invaders", year: "1978", platform: "Arcade", genre: "Arcade y acción", note: "Uno de los grandes pioneros de los videojuegos.", mark: "INV", color: "from-emerald-700 to-lime-400" },
  { title: "Metal Slug", year: "1996", platform: "Neo Geo", genre: "Arcade y acción", note: "Acción lateral, humor y animación artesanal.", mark: "MS", color: "from-orange-700 to-red-500" },
  { title: "The Legend of Zelda", year: "1986", platform: "NES", genre: "Aventuras y RPG", note: "Exploración, secretos y el comienzo de una saga histórica.", mark: "Z", color: "from-green-700 to-lime-500" },
  { title: "Pokémon Red / Blue", year: "1996", platform: "Game Boy", genre: "Aventuras y RPG", note: "Coleccionar, entrenar y explorar un mundo por descubrir.", mark: "PK", color: "from-red-700 to-blue-500" },
  { title: "Final Fantasy VI", year: "1994", platform: "Super Nintendo", genre: "Aventuras y RPG", note: "Un RPG coral reconocido por su historia y música.", mark: "FF", color: "from-violet-800 to-indigo-500" },
  { title: "Street Fighter II", year: "1991", platform: "Arcade / SNES", genre: "Pelea y deportes", note: "El juego que definió el combate competitivo moderno.", mark: "SF", color: "from-rose-700 to-orange-500" },
  { title: "Mortal Kombat", year: "1992", platform: "Arcade / Mega Drive", genre: "Pelea y deportes", note: "Combates intensos y una estética que marcó los noventa.", mark: "MK", color: "from-stone-800 to-red-700" },
  { title: "International Superstar Soccer Deluxe", year: "1995", platform: "Super Nintendo", genre: "Pelea y deportes", note: "Fútbol clásico, ritmo rápido y tardes interminables.", mark: "ISS", color: "from-green-800 to-emerald-500" },
  { title: "Age of Empires", year: "1997", platform: "PC", genre: "Estrategia y PC", note: "Construcción, expansión y estrategia en tiempo real.", mark: "AOE", color: "from-amber-800 to-yellow-600" },
  { title: "Prince of Persia", year: "1989", platform: "PC / Apple II", genre: "Estrategia y PC", note: "Plataformas cinematográficas y animación pionera.", mark: "POP", color: "from-slate-700 to-sky-500" },
  { title: "Tetris", year: "1984", platform: "Arcade / Game Boy", genre: "Estrategia y PC", note: "Un desafío de lógica simple, elegante y eterno.", mark: "T", color: "from-fuchsia-700 to-violet-500" },
];

const categories = ["Todos", "Plataformas", "Arcade y acción", "Aventuras y RPG", "Pelea y deportes", "Estrategia y PC"];

const Videogames = () => {
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const visibleGames = useMemo(() => games.filter((game) => {
    const matchesCategory = category === "Todos" || game.genre === category;
    const matchesQuery = `${game.title} ${game.platform} ${game.year}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [category, query]);

  return (
    <div className="min-h-screen bg-[#160d1d] text-[#f1e8df]">
      <SEO title="Videogames retro" description="Una colección de 15 videojuegos retro: plataformas, arcade, aventuras, RPG, deportes y estrategia. Un recorrido por la historia del videojuego." />
      <Header />
      <main>
        <section className="border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#442044] via-[#1d1024] to-[#160d1d] px-6 py-16 md:px-10 md:py-24 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#d8b978] hover:text-white"><ArrowLeft size={14} /> Volver al sitio personal</Link>
            <div className="mt-10 flex items-center gap-4 text-[#d8b978]"><Gamepad2 size={28} /><span className="text-[10px] uppercase tracking-[0.35em]">Archivo de videojuegos clásicos</span></div>
            <h1 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">VIDEO<span className="text-[#d8b978]">GAMES</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#f1e8df]/75">Quince clásicos para volver a jugar, descubrir y recordar. Una colección abierta dedicada a la cultura del videojuego retro.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-[#d8b978]"><span className="border border-[#d8b978]/40 px-3 py-2">15 títulos</span><span className="border border-[#d8b978]/40 px-3 py-2">5 categorías</span><span className="border border-[#d8b978]/40 px-3 py-2">1978 - 1997</span></div>
          </div>
        </section>
        <section className="px-6 py-12 md:px-10 md:py-16 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div><p className="text-[10px] uppercase tracking-[0.3em] text-[#d8b978]">Explorá la colección</p><h2 className="mt-2 font-serif text-3xl sm:text-4xl">Los clásicos</h2></div>
              <label className="flex w-full items-center gap-3 border border-white/20 px-4 py-3 lg:max-w-xs"><Search size={16} className="text-[#d8b978]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar juego o plataforma" className="w-full bg-transparent text-sm outline-none placeholder:text-white/40" /></label>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`border px-3 py-2 text-[10px] uppercase tracking-[0.12em] transition-colors ${category === item ? "border-[#d8b978] bg-[#d8b978] text-[#1b1020]" : "border-white/20 text-[#f1e8df]/70 hover:border-[#d8b978] hover:text-[#d8b978]"}`}>{item}</button>)}
            </div>
            <p className="mt-5 text-xs text-white/45">{visibleGames.length} de 15 juegos</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleGames.map((game, index) => <article key={game.title} className="group overflow-hidden border border-white/10 bg-white/[0.035] transition-colors hover:border-[#d8b978]/60">
                <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${game.color}`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                  <span className="relative font-mono text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_0_rgba(0,0,0,.35)]">{game.mark}</span>
                  <span className="absolute bottom-3 right-3 font-mono text-[10px] text-white/80">PLAYER 1 · #{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-[#d8b978]"><span>{game.genre}</span><span>{game.year}</span></div>
                  <h3 className="mt-3 font-serif text-xl leading-snug">{game.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/40">{game.platform}</p>
                  <p className="mt-4 text-sm leading-6 text-[#f1e8df]/65">{game.note}</p>
                </div>
              </article>)}
            </div>
            {visibleGames.length === 0 && <p className="border border-white/10 p-8 text-center text-sm text-white/60">No encontramos juegos con esa búsqueda.</p>}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Videogames;
