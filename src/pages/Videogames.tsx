import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

function Arkanoid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [status, setStatus] = useState("ready");
  const restartRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const W = 480, H = 360;
    let paddle = { x: W / 2 - 42, y: H - 28, w: 84, h: 10 };
    let ball = { x: W / 2, y: H - 45, vx: 3.1, vy: -3.5, r: 7 };
    let bricks = Array.from({ length: 35 }, (_, i) => ({ x: 22 + (i % 7) * 63, y: 42 + Math.floor(i / 7) * 23, alive: true, color: ["#ff5252", "#ffad32", "#ffe04a", "#4edc89", "#42a5f5"][Math.floor(i / 7)] }));
    let points = 0, remaining = 3, running = true, launched = false;
    const keys = new Set<string>();
    const keydown = (e: KeyboardEvent) => { if (["ArrowLeft", "ArrowRight", " "].includes(e.key)) e.preventDefault(); keys.add(e.key); if (e.key === " " && !launched) launched = true; };
    const keyup = (e: KeyboardEvent) => keys.delete(e.key);
    const move = (e: PointerEvent) => { const rect = canvas.getBoundingClientRect(); paddle.x = Math.max(0, Math.min(W - paddle.w, (e.clientX - rect.left) * W / rect.width - paddle.w / 2)); };
    canvas.addEventListener("pointermove", move);
    window.addEventListener("keydown", keydown); window.addEventListener("keyup", keyup);
    setScore(0); setLives(3); setStatus("ready");
    let raf = 0;
    const draw = () => {
      if (!running) return;
      if (keys.has("ArrowLeft") || keys.has("a")) paddle.x -= 6;
      if (keys.has("ArrowRight") || keys.has("d")) paddle.x += 6;
      paddle.x = Math.max(0, Math.min(W - paddle.w, paddle.x));
      if (launched) {
        ball.x += ball.vx; ball.y += ball.vy;
        if (ball.x < ball.r || ball.x > W - ball.r) ball.vx *= -1;
        if (ball.y < ball.r) ball.vy *= -1;
        if (ball.vy > 0 && ball.y + ball.r >= paddle.y && ball.y - ball.r <= paddle.y + paddle.h && ball.x >= paddle.x && ball.x <= paddle.x + paddle.w) {
          ball.vy = -Math.abs(ball.vy); ball.vx = ((ball.x - (paddle.x + paddle.w / 2)) / (paddle.w / 2)) * 4.5;
        }
        const hit = bricks.find(b => b.alive && ball.x > b.x && ball.x < b.x + 55 && ball.y - ball.r < b.y + 15 && ball.y + ball.r > b.y);
        if (hit) { hit.alive = false; ball.vy *= -1; points += 10; setScore(points); }
        if (ball.y > H + 10) {
          remaining--; setLives(remaining);
          if (remaining <= 0) { running = false; setStatus("over"); }
          else { ball = { x: W / 2, y: H - 45, vx: 3.1, vy: -3.5, r: 7 }; launched = false; setStatus("ready"); }
        }
        if (bricks.every(b => !b.alive)) { running = false; setStatus("won"); }
      }
      ctx.fillStyle = "#080b16"; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(255,216,61,.12)"; for (let x=0;x<W;x+=24) {ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
      bricks.forEach(b => { if (!b.alive) return; ctx.fillStyle = b.color; ctx.fillRect(b.x,b.y,55,15); ctx.fillStyle="rgba(255,255,255,.28)";ctx.fillRect(b.x,b.y,55,3); });
      ctx.fillStyle = "#ffd83d"; ctx.fillRect(paddle.x,paddle.y,paddle.w,paddle.h);
      ctx.beginPath();ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2);ctx.fillStyle="#fff";ctx.fill();
      ctx.fillStyle="#fff0c2";ctx.font="12px monospace";ctx.fillText("ARKANOID  ·  " + points + " PTS  ·  VIDAS " + remaining,14,20);
      if (!launched && running) {ctx.fillStyle="#fff0c2";ctx.font="14px monospace";ctx.textAlign="center";ctx.fillText("PRESIONÁ ESPACIO O TOCÁ LA PANTALLA",W/2,H-65);ctx.textAlign="left";}
      if (running) raf = requestAnimationFrame(draw);
    };
    const launch = () => { if (!launched) launched = true; };
    canvas.addEventListener("pointerdown", launch);
    raf = requestAnimationFrame(draw);
    return () => { running=false;cancelAnimationFrame(raf);canvas.removeEventListener("pointermove",move);canvas.removeEventListener("pointerdown",launch);window.removeEventListener("keydown",keydown);window.removeEventListener("keyup",keyup); };
  }, [restartRef.current]);

  const restart = () => { restartRef.current++; setStatus("ready"); setScore(0); setLives(3); };
  return <GameFrame title="ARKANOID" subtitle="Destruí los bloques y evitá que caiga la pelota" score={score} detail={`VIDAS: ${lives}`} status={status} onRestart={restart}>
    <canvas ref={canvasRef} width={480} height={360} className="block w-full touch-pan-y" />
    <p className="px-3 pb-3 text-center font-mono text-[10px] text-[#21190b]/70">← → / A D · ESPACIO PARA LANZAR · MOVER EL DEDO PARA CONTROLAR</p>
  </GameFrame>;
}

function SpaceInvaders() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [status, setStatus] = useState("ready");
  const [restart, setRestart] = useState(0);
  const controls = useRef({ left: false, right: false, fire: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const W = 480, H = 360;
    let ship = { x: W / 2, y: H - 35 };
    let aliens = Array.from({ length: 24 }, (_, i) => ({ x: 45 + (i % 8) * 52, y: 55 + Math.floor(i / 8) * 38, alive: true }));
    let shots: {x:number;y:number}[] = [], enemyShots: {x:number;y:number}[] = [];
    let dir = 1, points = 0, remaining = 3, frame = 0, running = true, won = false;
    const keys = new Set<string>();
    const down = (e: KeyboardEvent) => { if (["ArrowLeft","ArrowRight"," ","a","d"].includes(e.key)) e.preventDefault(); keys.add(e.key); };
    const up = (e: KeyboardEvent) => keys.delete(e.key);
    const pointer = (e: PointerEvent) => { const rect=canvas.getBoundingClientRect();ship.x=Math.max(18,Math.min(W-18,(e.clientX-rect.left)*W/rect.width)); };
    canvas.addEventListener("pointermove",pointer);
    window.addEventListener("keydown",down);window.addEventListener("keyup",up);
    setScore(0);setLives(3);setStatus("ready");
    let raf=0;
    const draw=()=>{
      if(!running)return;
      frame++;
      const c=controls.current;
      if(keys.has("ArrowLeft")||keys.has("a")||c.left)ship.x-=4.5;
      if(keys.has("ArrowRight")||keys.has("d")||c.right)ship.x+=4.5;
      ship.x=Math.max(18,Math.min(W-18,ship.x));
      if((keys.has(" ")||c.fire)&&frame%12===0)shots.push({x:ship.x,y:ship.y-15});
      if(frame%95===0&&aliens.some(a=>a.alive)){const a=aliens.filter(a=>a.alive)[Math.floor(Math.random()*aliens.filter(a=>a.alive).length)];enemyShots.push({x:a.x,y:a.y+10});}
      const alive=aliens.filter(a=>a.alive);
      if(alive.some(a=>a.x>W-22)||alive.some(a=>a.x<22)){dir*=-1;aliens.forEach(a=>a.y+=12);}
      aliens.forEach(a=>{if(a.alive)a.x+=dir*(0.65+points/450);});
      shots=shots.filter(s=>s.y>0);shots.forEach(s=>{s.y-=6;const hit=aliens.find(a=>a.alive&&Math.abs(a.x-s.x)<15&&Math.abs(a.y-s.y)<14);if(hit){hit.alive=false;s.y=-20;points+=10;setScore(points);}});
      enemyShots=enemyShots.filter(s=>s.y<H);enemyShots.forEach(s=>{s.y+=3;if(Math.abs(s.x-ship.x)<15&&Math.abs(s.y-ship.y)<14){s.y=H+10;remaining--;setLives(remaining);if(remaining<=0){running=false;setStatus("over");}}});
      if(aliens.some(a=>a.alive&&a.y>H-65)){running=false;setStatus("over");}
      if(alive.length===0){running=false;won=true;setStatus("won");}
      ctx.fillStyle="#050914";ctx.fillRect(0,0,W,H);
      ctx.fillStyle="rgba(255,255,255,.55)";for(let i=0;i<55;i++){const x=(i*83)%W,y=(i*47)%H;ctx.fillRect(x,y,2,2);}
      ctx.fillStyle="#65f58b";aliens.forEach(a=>{if(!a.alive)return;ctx.fillRect(a.x-10,a.y-7,20,14);ctx.fillRect(a.x-14,a.y-2,5,8);ctx.fillRect(a.x+9,a.y-2,5,8);ctx.fillStyle="#050914";ctx.fillRect(a.x-5,a.y-3,3,3);ctx.fillRect(a.x+3,a.y-3,3,3);ctx.fillStyle="#65f58b";});
      ctx.fillStyle="#ffe04a";ctx.beginPath();ctx.moveTo(ship.x,ship.y-15);ctx.lineTo(ship.x-15,ship.y+10);ctx.lineTo(ship.x+15,ship.y+10);ctx.closePath();ctx.fill();
      ctx.fillStyle="#fff";shots.forEach(s=>ctx.fillRect(s.x-2,s.y,4,10));ctx.fillStyle="#ff5964";enemyShots.forEach(s=>ctx.fillRect(s.x-2,s.y,4,10));
      ctx.fillStyle="#fff0c2";ctx.font="12px monospace";ctx.fillText("SPACE INVADERS  ·  "+points+" PTS  ·  VIDAS "+remaining,12,20);
      if(alive.length>0&&running)raf=requestAnimationFrame(draw);
    };
    raf=requestAnimationFrame(draw);
    return()=>{running=false;cancelAnimationFrame(raf);canvas.removeEventListener("pointermove",pointer);window.removeEventListener("keydown",down);window.removeEventListener("keyup",up);};
  },[restart]);
  const hold=(key:"left"|"right"|"fire",value:boolean)=>{controls.current[key]=value;};
  return <GameFrame title="SPACE INVADERS" subtitle="Defendé la Tierra de la invasión" score={score} detail={`VIDAS: ${lives}`} status={status} onRestart={()=>setRestart(v=>v+1)}>
    <canvas ref={canvasRef} width={480} height={360} className="block w-full touch-pan-y" />
    <div className="flex items-center justify-center gap-3 px-3 pb-3">
      {(["left","fire","right"] as const).map(key=><button key={key} onPointerDown={()=>hold(key,true)} onPointerUp={()=>hold(key,false)} onPointerLeave={()=>hold(key,false)} onPointerCancel={()=>hold(key,false)} className="min-w-16 rounded border border-[#35101c]/35 bg-[#65172d] px-4 py-3 font-mono text-sm text-[#fff0c2] active:bg-[#a12b48]">{key==="left"?"←":key==="right"?"→":"FUEGO"}</button>)}
    </div>
    <p className="px-3 pb-3 text-center font-mono text-[10px] text-[#21190b]/70">← → / A D PARA MOVER · ESPACIO PARA DISPARAR · TAMBIÉN PODÉS TOCAR LA PANTALLA</p>
  </GameFrame>;
}

function GameFrame({title,subtitle,score,detail,status,onRestart,children}:{title:string;subtitle:string;score:number;detail:string;status:string;onRestart:()=>void;children:React.ReactNode}) {
  return <article className="overflow-hidden border-[3px] border-[#35101c] bg-[#ffe078] shadow-[0_14px_40px_rgba(0,0,0,.35)]">
    <header className="border-b-2 border-[#35101c]/35 bg-[#65172d] px-4 py-4 text-[#fff0c2]"><div className="flex items-center justify-between gap-2"><h2 className="font-mono text-lg font-black tracking-wider sm:text-xl">{title}</h2><span className="font-mono text-[10px] text-[#f5bd20]">PLAYER 1</span></div><p className="mt-1 text-xs text-[#21190b]/70">{subtitle}</p></header>
    <div className="flex items-center justify-between bg-[#35101c] px-4 py-2 font-mono text-xs text-[#ffe04a]"><span>PUNTOS: {score}</span><span>{detail}</span></div>
    <div className="bg-[#080b16]">{children}</div>
    <footer className="flex items-center justify-between gap-3 border-t border-[#35101c]/30 bg-[#65172d] px-4 py-3"><span className="font-mono text-[10px] uppercase tracking-widest text-[#21190b]/70">{status==="won"?"¡GANASTE!":status==="over"?"FIN DE PARTIDA":"INSERT COIN · READY"}</span><button onClick={onRestart} className="rounded bg-[#f5bd20] px-4 py-2 font-mono text-xs font-bold text-[#35101c] hover:bg-[#ffe078]">REINICIAR ↻</button></footer>
  </article>;
}

export default function Videogames() {
  return <div className="min-h-screen bg-[#f5bd20] text-[#21190b]">
    <SEO title="Videogames | Leandro Cuellar" description="Dos clásicos arcade jugables directamente en la web: Arkanoid y Space Invaders."/>
    <Header/>
    <main className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[.08]" style={{backgroundImage:"linear-gradient(rgba(255,220,70,.5) 1px, transparent 1px),linear-gradient(90deg,rgba(255,220,70,.5) 1px,transparent 1px)",backgroundSize:"32px 32px"}}/>
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 border-y-2 border-[#35101c] py-6 text-center sm:mb-10 sm:py-8">
          <p className="font-mono text-[10px] uppercase tracking-[.4em] text-[#f5bd20]">Leandro Cuellar · Mi sala arcade</p>
          <h1 className="mt-3 font-mono text-4xl font-black tracking-wider text-[#ffe078] sm:text-6xl">VIDEOGAMES</h1>
          <p className="mt-3 text-sm text-[#fff0c2]/75">Dos clásicos de los 80. Una sola pantalla. Jugá acá mismo.</p>
        </div>
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <Arkanoid/>
          <SpaceInvaders/>
        </div>
        <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[.25em] text-[#65172d]/70">Arcade classics · Play in browser · PC & mobile</p>
      </div>
    </main>
    <Footer/>
  </div>;
}
