import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Gamepad2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const categories = [
  { name: "Plataformas", slug: "plataformas", subtitle: "Saltos, mundos y aventuras", description: "Clásicos de plataformas que definieron generaciones.", range: "1985 - 1994", mark: "JUMP", color: "from-red-800 to-orange-500" },
  { name: "Arcade y acción", slug: "arcade-accion", subtitle: "Récords, reflejos y adrenalina", description: "La esencia de las salas arcade: partidas rápidas y desafíos memorables.", range: "1978 - 1996", mark: "ARCADE", color: "from-emerald-800 to-lime-500" },
  { name: "Aventuras y RPG", slug: "aventuras-rpg", subtitle: "Exploración e historias", description: "Mundos para recorrer, personajes para conocer y grandes historias.", range: "1986 - 1996", mark: "QUEST", color: "from-violet-900 to-indigo-500" },
  { name: "Pelea y deportes", slug: "pelea-deportes", subtitle: "Combate y competencia", description: "Duelos legendarios y fútbol para jugar con amigos.", range: "1991 - 1995", mark: "VS", color: "from-rose-900 to-orange-500" },
  { name: "Estrategia y PC", slug: "estrategia-pc", subtitle: "Ingenio y planificación", description: "Pensar cada movimiento, construir y superar desafíos.", range: "1984 - 1997", mark: "TACTIC", color: "from-slate-800 to-sky-500" },
];

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

const CategoryCard = ({ item }: { item: typeof categories[number] }) => {
  const count = games.filter((game) => game.genre === item.name).length;
  return <Link to={`/videogames/${item.slug}`} className="group overflow-hidden border border-white/10 bg-white/[0.035] transition-all hover:-translate-y-1 hover:border-[#d8b978]/70">
    <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${item.color}`}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <span className="relative font-mono text-4xl font-black tracking-widest text-white drop-shadow-lg">{item.mark}</span>
      <span className="absolute bottom-3 right-4 text-[10px] uppercase tracking-widest text-white/80">{count} juegos</span>
    </div>
    <div className="p-6">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#d8b978]">{item.range}</p>
      <h2 className="mt-2 font-serif text-2xl">{item.name}</h2>
      <p className="mt-2 text-xs uppercase tracking-wider text-white/45">{item.subtitle}</p>
      <p className="mt-4 text-sm leading-6 text-[#f1e8df]/65">{item.description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#d8b978]">Explorar categoría <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
    </div>
  </Link>;
};

const Videogames = () => {
  const { categorySlug } = useParams();
  const category = categories.find((item) => item.slug === categorySlug);
  const categoryGames = category ? games.filter((game) => game.genre === category.name) : [];

  return <div className="min-h-screen bg-[#160d1d] text-[#f1e8df]">
    <SEO title={category ? `${category.name} | Videogames retro` : "Videogames retro"} description={category ? `Colección de videojuegos retro de ${category.name}: títulos clásicos, año y plataforma original.` : "Explorá 15 videojuegos retro organizados en cinco categorías: plataformas, arcade, aventuras, pelea y estrategia."} />
    <Header />
    <main>
      <section className="border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#442044] via-[#1d1024] to-[#160d1d] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <Link to="/videogames" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#d8b978] hover:text-white"><ArrowLeft size={14} /> {category ? "Todas las categorías" : "Volver al archivo"}</Link>
          <div className="mt-10 flex items-center gap-4 text-[#d8b978]"><Gamepad2 size={28} /><span className="text-[10px] uppercase tracking-[0.35em]">Archivo de videojuegos clásicos</span></div>
          <h1 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">{category ? category.name.toUpperCase() : <>VIDEO<span className="text-[#d8b978]">GAMES</span></>}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#f1e8df]/75">{category ? category.description : "Quince clásicos para volver a jugar, descubrir y recordar. Elegí una categoría y recorré la historia del videojuego retro."}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-[#d8b978]">
            <span className="border border-[#d8b978]/40 px-3 py-2">{category ? `${categoryGames.length} títulos` : "15 títulos"}</span>
            <span className="border border-[#d8b978]/40 px-3 py-2">{category ? category.range : "5 categorías"}</span>
            <span className="border border-[#d8b978]/40 px-3 py-2">Colección retro</span>
          </div>
        </div>
      </section>
      <section className="px-6 py-12 md:px-10 md:py-16 lg:px-14">
        <div className="mx-auto max-w-6xl">
          {category ? <>
            <div className="mb-8"><p className="text-[10px] uppercase tracking-[0.3em] text-[#d8b978]">Biblioteca temática</p><h2 className="mt-2 font-serif text-3xl sm:text-4xl">Los juegos</h2></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categoryGames.map((game, index) => <article key={game.title} className="overflow-hidden border border-white/10 bg-white/[0.035] transition-colors hover:border-[#d8b978]/60">
                <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${game.color}`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                  <span className="relative font-mono text-5xl font-black text-white drop-shadow-lg">{game.mark}</span>
                  <span className="absolute bottom-3 right-3 font-mono text-[10px] text-white/80">PLAYER 1 · #{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="p-5"><div className="flex justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-[#d8b978]"><span>{game.genre}</span><span>{game.year}</span></div><h3 className="mt-3 font-serif text-xl leading-snug">{game.title}</h3><p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/40">{game.platform}</p><p className="mt-4 text-sm leading-6 text-[#f1e8df]/65">{game.note}</p></div>
              </article>)}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">{categories.filter((item) => item.slug !== category.slug).map((item) => <Link key={item.slug} to={`/videogames/${item.slug}`} className="border border-white/15 px-4 py-3 text-[10px] uppercase tracking-wider text-[#d8b978] hover:border-[#d8b978]">{item.name}</Link>)}</div>
          </> : <>
            <div className="mb-8"><p className="text-[10px] uppercase tracking-[0.3em] text-[#d8b978]">Explorá la colección</p><h2 className="mt-2 font-serif text-3xl sm:text-4xl">Elegí tu universo</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/55">Cada género tiene su propio espacio y dirección para que puedas recorrer la colección de manera ordenada.</p></div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{categories.map((item) => <CategoryCard key={item.slug} item={item} />)}</div>
          </>}
        </div>
      </section>
    </main>
    <Footer />
  </div>;
};

export default Videogames;
