import { useEffect, useRef, useState } from "react";

const W = 640;
const H = 420;
const platforms = [
  { y: 380, x1: 20, x2: 620 },
  { y: 300, x1: 20, x2: 620 },
  { y: 220, x1: 20, x2: 620 },
  { y: 140, x1: 20, x2: 620 },
  { y: 65, x1: 20, x2: 620 },
];
const ladders = [{ x: 560, y1: 300, y2: 380 }, { x: 75, y1: 220, y2: 300 }, { x: 555, y1: 140, y2: 220 }, { x: 90, y1: 65, y2: 140 }];

export default function ArcadeDonkeyKong() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("INSERT COIN");
  const [round, setRound] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !running) return;
    let raf = 0;
    let last = 0;
    let player = { x: 52, y: 354, vy: 0, climbing: false, grounded: true };
    let barrels: { x: number; y: number; dir: number; speed: number }[] = [];
    let keys: Record<string, boolean> = {};
    let spawn = 0;
    let points = score;
    let ended = false;
    const keydown = (e: KeyboardEvent) => {
      if (["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)) e.preventDefault();
      keys[e.key] = true;
    };
    const keyup = (e: KeyboardEvent) => { keys[e.key] = false; };
    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);
    const draw = (time: number) => {
      const dt = Math.min((time - (last || time)) / 16.67, 2);
      last = time;
      ctx.fillStyle = "#100d0a"; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "#f2c230"; ctx.font = "bold 13px monospace"; ctx.fillText("SCORE " + String(points).padStart(6,"0"), 22, 24);
      ctx.fillText("HIGH SCORE 004200", 440, 24);
      // ladders
      ladders.forEach(l => { ctx.strokeStyle="#55c7d7"; ctx.lineWidth=5; ctx.beginPath(); ctx.moveTo(l.x-9,l.y1); ctx.lineTo(l.x-9,l.y2); ctx.moveTo(l.x+9,l.y1); ctx.lineTo(l.x+9,l.y2); ctx.stroke(); ctx.lineWidth=2; for(let y=l.y1+8;y<l.y2;y+=13){ctx.beginPath();ctx.moveTo(l.x-9,y);ctx.lineTo(l.x+9,y);ctx.stroke();} });
      // girders
      platforms.forEach((p,i)=>{ctx.fillStyle=i%2?"#e34b36":"#e0a12d";ctx.fillRect(p.x1,p.y,p.x2-p.x1,9);ctx.fillStyle="#f7d56b";for(let x=p.x1+8;x<p.x2;x+=24)ctx.fillRect(x,p.y+2,9,3);});
      // Kong and princess
      ctx.fillStyle="#9c5429";ctx.fillRect(520,38,54,28);ctx.fillStyle="#f1c7a0";ctx.fillRect(533,29,27,17);ctx.fillStyle="#17110d";ctx.fillRect(539,37,4,4);ctx.fillRect(551,37,4,4);
      ctx.fillStyle="#f3a5bf";ctx.fillRect(590,39,15,24);ctx.fillStyle="#f5d6a4";ctx.fillRect(590,31,15,12);ctx.fillStyle="#f4d04e";ctx.fillRect(588,27,19,6);
      // barrel spawner
      spawn += dt;
      if(spawn>100){barrels.push({x:505,y:125,dir:-1,speed:1.55+round*.18});spawn=0;}
      barrels = barrels.filter(b=>b.x>-20&&b.x<W+20);
      barrels.forEach(b=>{b.x+=b.dir*b.speed*dt; const floor=platforms.find(p=>Math.abs((p.y-11)-b.y)<4); if(floor){const ladder=ladders.find(l=>Math.abs(l.x-b.x)<8&&Math.random()<0.012);if(ladder){b.y=ladder.y2-10;b.dir*=-1;}else if(b.x<25||b.x>615)b.dir*=-1;} ctx.fillStyle="#b66b2b";ctx.beginPath();ctx.arc(b.x,b.y,11,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#f4c06a";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(b.x-8,b.y-5);ctx.lineTo(b.x+8,b.y+5);ctx.moveTo(b.x-8,b.y+5);ctx.lineTo(b.x+8,b.y-5);ctx.stroke();});
      // movement
      const nearLadder=ladders.find(l=>Math.abs(player.x-l.x)<17&&player.y+22>=l.y1&&player.y<=l.y2);
      if(nearLadder&&(keys.ArrowUp||keys.ArrowDown)){player.climbing=true;player.y+=(keys.ArrowUp?-2.3:2.3)*dt;player.y=Math.max(nearLadder.y1-20,Math.min(nearLadder.y2-20,player.y));player.vy=0;player.grounded=false;}
      else {player.climbing=false;if(keys.ArrowLeft)player.x-=2.7*dt;if(keys.ArrowRight)player.x+=2.7*dt;if(keys[" "]&&player.grounded){player.vy=-7.5;player.grounded=false;}player.vy+=0.34*dt;player.y+=player.vy*dt;const floor=platforms.find(p=>player.x+10>p.x1&&player.x-10<p.x2&&player.y+24>=p.y&&player.y+24<=p.y+12&&player.vy>=0);if(floor){player.y=floor.y-24;player.vy=0;player.grounded=true;} }
      player.x=Math.max(15,Math.min(625,player.x));
      // player
      ctx.fillStyle="#f1c232";ctx.fillRect(player.x-8,player.y+7,16,16);ctx.fillStyle="#e34b36";ctx.fillRect(player.x-9,player.y,18,9);ctx.fillStyle="#f0b68b";ctx.fillRect(player.x-6,player.y-7,12,9);ctx.fillStyle="#315fba";ctx.fillRect(player.x-7,player.y+18,6,7);ctx.fillRect(player.x+2,player.y+18,6,7);
      // collisions
      if(barrels.some(b=>Math.abs(b.x-player.x)<18&&Math.abs(b.y-(player.y+12))<20)){ended=true;setMessage("GAME OVER");setRunning(false);setScore(points);return;}
      if(player.x>570&&player.y<55){points+=500;setScore(points);setMessage("YOU SAVED HER!");setRunning(false);return;}
      if(!ended)raf=requestAnimationFrame(draw);
    };
    raf=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("keydown",keydown);window.removeEventListener("keyup",keyup);};
  },[running,round]);

  const start=()=>{setScore(0);setMessage("GO!");setRound(v=>v+1);setRunning(true);};
  return <section className="mt-10 border-4 border-[#d8b978] bg-[#100d0a] p-3 shadow-[8px_8px_0_#000] sm:p-5" aria-label="Donkey Kong arcade vintage">
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#e34b36] pb-3 font-mono text-xs tracking-[0.16em] text-[#f2c230]"><span>★ DONKEY KONG · FREE ARCADE ★</span><span>1981 / RETRO EDITION</span></div>
    <div className="relative mx-auto max-w-[640px] overflow-hidden border-2 border-[#e34b36]">
      <canvas ref={canvasRef} width={W} height={H} className="block h-auto w-full" />
      {!running&&<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 text-center"><p className="font-mono text-2xl font-black tracking-[0.18em] text-[#f2c230]">{message}</p><p className="mt-2 font-mono text-xs text-white/80">RESCATA A PAULINE · ESQUIVA LOS BARRILES</p><button onClick={start} className="mt-5 border-2 border-[#f2c230] bg-[#e34b36] px-7 py-3 font-mono text-sm font-bold tracking-widest text-white hover:bg-[#b92e25]">{score?"PLAY AGAIN":"START GAME"}</button></div>}
    </div>
    <div className="mt-4 grid gap-3 font-mono text-[10px] uppercase tracking-wider text-[#f2c230] sm:grid-cols-2"><p>← → Mover · ↑ ↓ Escaleras · ESPACIO Saltar</p><p className="sm:text-right">Objetivo: llegar hasta Pauline</p></div>
    <div className="mt-3 flex justify-center gap-3 sm:hidden"><button onClick={()=>{}} aria-label="Controles disponibles mediante teclado" className="border border-[#d8b978] px-3 py-2 font-mono text-xs text-[#f2c230]">CONTROLES TÁCTILES EN DESARROLLO</button></div>
    <p className="mt-4 border-t border-[#d8b978]/40 pt-3 text-center font-mono text-[9px] tracking-[0.15em] text-[#f1e8df]/55">HOMENAJE ARCADE NO OFICIAL · VERSIÓN LIBRE</p>
  </section>;
}
