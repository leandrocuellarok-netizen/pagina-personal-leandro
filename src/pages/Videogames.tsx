import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Gamepad2, Play, X, RotateCcw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

type Game = { title: string; year: string; platform: string; genre: string; note: string; mark: string; color: string };
const categories = [
  { name: "Plataformas", slug: "plataformas", subtitle: "Saltos, mundos y aventuras", description: "Clásicos de plataformas que definieron generaciones.", range: "1985 - 1994", mark: "JUMP", color: "from-red-800 to-orange-500" },
  { name: "Arcade y acción", slug: "arcade-accion", subtitle: "Récords, reflejos y adrenalina", description: "La esencia de las salas arcade: partidas rápidas y desafíos memorables.", range: "1978 - 1996", mark: "ARCADE", color: "from-emerald-800 to-lime-500" },
  { name: "Aventuras y RPG", slug: "aventuras-rpg", subtitle: "Exploración e historias", description: "Mundos para recorrer, personajes para conocer y grandes historias.", range: "1986 - 1996", mark: "QUEST", color: "from-violet-900 to-indigo-500" },
  { name: "Pelea y deportes", slug: "pelea-deportes", subtitle: "Combate y competencia", description: "Duelos legendarios y fútbol para jugar con amigos.", range: "1991 - 1995", mark: "VS", color: "from-rose-900 to-orange-500" },
  { name: "Estrategia y PC", slug: "estrategia-pc", subtitle: "Ingenio y planificación", description: "Pensar cada movimiento, construir y superar desafíos.", range: "1984 - 1997", mark: "TACTIC", color: "from-slate-800 to-sky-500" },
];
const games: Game[] = [
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

function ArcadeGame({ game, onClose }: { game: Game; onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [run, setRun] = useState(0);
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const W = 480, H = 300;
    let player = { x: 42, y: 150 };
    let coins = Array.from({ length: 7 }, (_, i) => ({ x: 105 + i * 52, y: 45 + ((i * 67) % 210), taken: false }));
    let hazards = Array.from({ length: 4 }, (_, i) => ({ x: 150 + i * 92, y: 65 + i * 43, vx: i % 2 ? -1.7 : 1.5, vy: i % 2 ? 1.1 : -1.2 }));
    let active = true, points = 0, frame = 0;
    const keys = new Set<string>();
    const down = (e: KeyboardEvent) => { if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)) e.preventDefault(); keys.add(e.key); };
    const up = (e: KeyboardEvent) => keys.delete(e.key);
    window.addEventListener("keydown", down); window.addEventListener("keyup", up);
    const draw = () => {
      if (!active) return;
      frame++;
      const dx = (keys.has("ArrowRight") || keys.has("d") ? 1 : 0) - (keys.has("ArrowLeft") || keys.has("a") ? 1 : 0) + direction.x;
      const dy = (keys.has("ArrowDown") || keys.has("s") ? 1 : 0) - (keys.has("ArrowUp") || keys.has("w") ? 1 : 0) + direction.y;
      player.x = Math.max(13, Math.min(W - 13, player.x + dx * 2.7));
      player.y = Math.max(13, Math.min(H - 13, player.y + dy * 2.7));
      ctx.fillStyle = "#100d18"; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(255,220,70,.10)"; ctx.lineWidth = 1;
      for (let x=0;x<W;x+=20){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
      for (let y=0;y<H;y+=20){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
      coins.forEach(c => { if(c.taken)return; ctx.fillStyle="#ffd83d";ctx.fillRect(c.x-6,c.y-6,12,12);ctx.fillStyle="#fff3a0";ctx.fillRect(c.x-2,c.y-2,4,4); if(Math.hypot(player.x-c.x,player.y-c.y)<17){c.taken=true;points++;setScore(points);} });
      hazards.forEach(h => {h.x+=h.vx;h.y+=h.vy;if(h.x<12||h.x>W-12)h.vx*=-1;if(h.y<12||h.y>H-12)h.vy*=-1;ctx.fillStyle="#e94b58";ctx.fillRect(h.x-9,h.y-9,18,18);ctx.fillStyle="#ffb0a5";ctx.fillRect(h.x-3,h.y-3,6,6);});
      ctx.fillStyle="#79e0bc";ctx.fillRect(player.x-8,player.y-8,16,16);ctx.fillStyle="#f5bd20";ctx.fillRect(player.x-3,player.y-3,6,6);
      ctx.fillStyle="#fff0c2";ctx.font="12px monospace";ctx.fillText("RECOLECTÁ LOS 7 CRISTALES · EVITÁ LOS BLOQUES ROJOS",12,20);
      if(hazards.some(h=>Math.hypot(player.x-h.x,player.y-h.y)<18)){active=false;setFinished(true);}
      if(points===7){active=false;setFinished(true);}
      if(active) requestAnimationFrame(draw);
    };
    const id=requestAnimationFrame(draw);
    return()=>{active=false;cancelAnimationFrame(id);window.removeEventListener("keydown",down);window.removeEventListener("keyup",up);};
  },[run,direction]);
  const restart=()=>{setScore(0);setFinished(false);setDirection({x:0,y:0});setRun(v=>v+1);};
  return <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={`Juego: ${game.title}`}>
    <div className="arcade-cabinet my-auto w-full max-w-xl">
      <div className="arcade-marquee"><span>VILANOVA ARCADE</span><span>PLAYER 1</span></div>
      <div className="mb-3 flex items-center justify-between gap-3 px-1 text-[#321d15]"><div><p className="font-mono text-[10px] uppercase tracking-widest">Demo arcade original</p><h2 className="font-serif text-xl">{game.title}</h2></div><button onClick={onClose} aria-label="Cerrar juego" className="rounded border-2 border-[#321d15] p-2"><X size={20}/></button></div>
      <div className="arcade-screen"><canvas ref={canvasRef} width={480} height={300} className="arcade-canvas" /></div>
      <div className="mt-2 flex items-center justify-between px-2 font-mono text-xs text-[#321d15]"><span>PUNTOS: {score}/7</span><span>{finished ? (score===7 ? "¡MISIÓN CUMPLIDA!" : "FIN DE PARTIDA") : "EN JUEGO"}</span></div>
      {finished && <div className="my-3 flex items-center justify-between gap-3 bg-[#68182f] p-3 text-sm text-[#fff0c2]"><span>{score===7?"¡Excelente! Completaste el desafío.":"Te atraparon. Probá otra vez."}</span><button onClick={restart} className="flex items-center gap-2 border border-[#ffdc32] px-3 py-2 text-xs"><RotateCcw size={14}/> Reintentar</button></div>}
      <div className="arcade-controls"><button onClick={()=>setDirection({x:-1,y:0})} onTouchEnd={()=>setDirection({x:0,y:0})}>←</button><div><button onClick={()=>setDirection({x:0,y:-1})} onTouchEnd={()=>setDirection({x:0,y:0})}>↑</button><button onClick={()=>setDirection({x:0,y:1})} onTouchEnd={()=>setDirection({x:0,y:0})}>↓</button></div><button onClick={()=>setDirection({x:1,y:0})} onTouchEnd={()=>setDirection({x:0,y:0})}>→</button></div>
      <div className="arcade-speaker">{Array.from({length:16},(_,i)=><i key={i}/>)}</div>
      <p className="mt-2 text-center font-mono text-[10px] text-[#321d15]">TECLADO: FLECHAS O WASD · MÓVIL: CONTROLES EN PANTALLA</p>
    </div>
  </div>;
}

const CategoryCard = ({ item }: { item: typeof categories[number] }) => {
  const count = games.filter((game) => game.genre === item.name).length;
  return <Link to={`/videogames/${item.slug}`} className="group overflow-hidden border border-black/30 bg-[#fff0c2]/70 transition-all hover:-translate-y-1 hover:border-[#72172e]">
    <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${item.color}`}><div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",backgroundSize:"20px 20px"}}/><span className="relative font-mono text-4xl font-black tracking-widest text-white drop-shadow-lg">{item.mark}</span><span className="absolute bottom-3 right-4 text-[10px] uppercase tracking-widest text-white">{count} juegos</span></div>
    <div className="p-6"><p className="text-[10px] uppercase tracking-[0.2em] text-[#72172e]">{item.range}</p><h2 className="mt-2 font-serif text-2xl text-[#35101c]">{item.name}</h2><p className="mt-2 text-xs uppercase tracking-wider text-black/55">{item.subtitle}</p><p className="mt-4 text-sm leading-6 text-black/70">{item.description}</p><span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#72172e]">Explorar categoría <ArrowRight size={14}/></span></div>
  </Link>;
};

const Videogames = () => {
  const { categorySlug } = useParams();
  const category = categories.find((item) => item.slug === categorySlug);
  const categoryGames = category ? games.filter((game) => game.genre === category.name) : [];
  const [selectedGame,setSelectedGame] = useState<Game|null>(null);
  return <div className="min-h-screen bg-[#f5bd20] text-[#241a0b]">
    <SEO title={category ? `${category.name} | Videogames retro` : "Videogames retro"} description="Colección de videojuegos retro y experiencias arcade jugables directamente desde el navegador."/>
    <Header/>
    <main>
      <section className="border-b border-black/20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ffe078] via-[#f5bd20] to-[#d99a16] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-6xl"><Link to="/videogames" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#72172e] hover:text-black"><ArrowLeft size={14}/>{category?"Todas las categorías":"Volver al archivo"}</Link><div className="mt-10 flex items-center gap-4 text-[#72172e]"><Gamepad2 size={28}/><span className="text-[10px] uppercase tracking-[0.35em]">Archivo de videojuegos clásicos</span></div><h1 className="mt-5 font-serif text-5xl leading-none text-[#35101c] sm:text-7xl">{category?category.name.toUpperCase():<>VIDEO<span className="text-[#72172e]">GAMES</span></>}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-black/75">{category?category.description:"Quince clásicos para volver a jugar, descubrir y recordar. Elegí una categoría y recorré la historia del videojuego retro."}</p><div className="mt-8 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-[#72172e]"><span className="border border-[#72172e]/50 px-3 py-2">{category?`${categoryGames.length} títulos`:"15 títulos"}</span><span className="border border-[#72172e]/50 px-3 py-2">{category?category.range:"5 categorías"}</span><span className="border border-[#72172e]/50 px-3 py-2">Juegos en navegador</span></div></div>
      </section>
      <section className="px-6 py-12 md:px-10 md:py-16 lg:px-14"><div className="mx-auto max-w-6xl">
        {category?<><div className="mb-8"><p className="text-[10px] uppercase tracking-[0.3em] text-[#72172e]">Biblioteca temática</p><h2 className="mt-2 font-serif text-3xl text-[#35101c] sm:text-4xl">Los juegos</h2><p className="mt-2 text-sm text-black/60">Elegí "Jugar demo" para abrir una experiencia arcade original en esta misma página.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{categoryGames.map((game,index)=><article key={game.title} className="overflow-hidden border border-black/25 bg-[#fff0c2]/75 transition-colors hover:border-[#72172e]"><div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${game.color}`}><div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",backgroundSize:"18px 18px"}}/><span className="relative font-mono text-5xl font-black text-white drop-shadow-lg">{game.mark}</span><span className="absolute bottom-3 right-3 font-mono text-[10px] text-white">PLAYER 1 · #{String(index+1).padStart(2,"0")}</span></div><div className="p-5"><div className="flex justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-[#72172e]"><span>{game.genre}</span><span>{game.year}</span></div><h3 className="mt-3 font-serif text-xl leading-snug text-[#35101c]">{game.title}</h3><p className="mt-2 text-xs uppercase tracking-[0.12em] text-black/50">{game.platform}</p><p className="mt-4 text-sm leading-6 text-black/70">{game.note}</p><button onClick={()=>setSelectedGame(game)} className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#68182f] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fff0c2] hover:bg-[#421020]"><Play size={14}/> Jugar demo</button></div></article>)}</div><div className="mt-10 flex flex-wrap gap-3">{categories.filter(item=>item.slug!==category.slug).map(item=><Link key={item.slug} to={`/videogames/${item.slug}`} className="border border-[#72172e] px-4 py-3 text-[10px] uppercase tracking-wider text-[#72172e] hover:bg-[#68182f] hover:text-[#fff0c2]">{item.name}</Link>)}</div></>:<><div className="mb-8"><p className="text-[10px] uppercase tracking-[0.3em] text-[#72172e]">Explorá la colección</p><h2 className="mt-2 font-serif text-3xl text-[#35101c] sm:text-4xl">Elegí tu universo</h2><p className="mt-3 max-w-xl text-sm leading-6 text-black/65">Cada género tiene su propio espacio y dirección para recorrer la colección.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{categories.map(item=><CategoryCard key={item.slug} item={item}/>)}</div></>}
      </div></section>
    </main><Footer/>{selectedGame&&<ArcadeGame game={selectedGame} onClose={()=>setSelectedGame(null)}/>}
  </div>;
};
export default Videogames;
