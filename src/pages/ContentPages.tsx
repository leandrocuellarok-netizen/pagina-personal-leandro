import { useEffect, useRef, useState, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import ArcadeDonkeyKong from "@/components/ArcadeDonkeyKong";

type PageShellProps = { title: string; eyebrow: string; description: string; children: ReactNode };
const PageShell = ({ title, eyebrow, description, children }: PageShellProps) => (
  <div className="min-h-screen bg-[#35101f] text-[#f1e8df]">
    <SEO title={title} description={description} />
    <Header />
    <main>
      <section className="border-b border-white/15 px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#d8b978]">{eyebrow}</p>
          <h1 className="mt-4 max-w-5xl font-serif text-4xl leading-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#f1e8df]/75">{description}</p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl space-y-12 px-6 py-14 md:px-10 md:py-20 lg:px-14">{children}</div>
    </main>
    <Footer />
  </div>
);

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="border-b border-white/15 pb-10 last:border-0">
    <h2 className="mb-5 font-serif text-3xl sm:text-4xl">{title}</h2>
    <div className="max-w-4xl space-y-5 text-[15px] leading-8 text-[#f1e8df]/80">{children}</div>
  </section>
);

export const EcosistemaPage = () => (
  <PageShell title="WIN with VILANOVA GROUP" eyebrow="Empresa · Innovación · Comunicación" description="Un ecosistema de proyectos que integra comunicación estratégica, formación, cultura, investigación e inteligencia artificial aplicada.">
    <Block title="Vilanova Group">
      <p>Vilanova Group® es un ecosistema a favor del pensamiento, la cultura, la libertad de expresión, la innovación y la comunicación política con responsabilidad ética. Fundado por Leandro A. Cuellar, articula proyectos de comunicación, cultura, formación e inteligencia artificial.</p>
      <p>El ecosistema integra comunicación estratégica, branding, consultoría institucional, formación, investigación social e IA aplicada a la toma de decisiones. Su enfoque combina tecnología, datos y comportamiento humano para ayudar a organizaciones a comprender escenarios y desarrollar estrategias de largo plazo.</p>
      <p>La inteligencia artificial se aborda con criterios de ética, transparencia y responsabilidad: debe ampliar las capacidades humanas, no sustituir el juicio ni utilizarse para manipular, polarizar o desinformar.</p>
    </Block>
    <Block title="Proyectos del ecosistema">
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Comunicadores Libres","/proyectos/comunicadores-libres"],
          ["Amour du cinéma","/proyectos/amour-du-cinema"],
          ["Archivos ATENEA","/proyectos/archivos-atenea"],
          ["Vilanova AI Solutions","/proyectos/vilanova-ai"],
          ["Vilanova Partners","/proyectos/vilanova-partners"],
        ].map(([name,href]) => <a key={href} href={href} className="border border-white/20 px-5 py-4 text-sm hover:border-[#d8b978]">{name} ↗</a>)}
      </div>
      <a href="https://www.linkedin.com/company/vilanovagroupai" target="_blank" rel="noopener noreferrer" className="inline-flex border border-[#d8b978]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em]">Vilanova Group en LinkedIn ↗</a>
    </Block>
    <Block title="Ética, tecnología y comunicación">
      <p>La propuesta busca fortalecer el debate público, el acceso a información verificable y la autonomía de las personas. La tecnología se integra como herramienta para mejorar procesos y decisiones, con responsabilidad sobre sus efectos.</p>
      <div className="flex flex-wrap gap-3">
        <a className="border border-white/20 px-4 py-3 text-xs" href="https://www.academia.edu/180201632/C%C3%B3digo_de_%C3%89tica_para_el_Uso_de_la_Inteligencia_Artificial_en_Campa%C3%B1as_Pol%C3%ADticas_en_Argentina" target="_blank" rel="noreferrer">Código de ética IA para campañas políticas ↗</a>
        <a className="border border-white/20 px-4 py-3 text-xs" href="https://realpolitik.com.ar/nota/75068/deepfakes-en-dos-minutos-podes-arruinar-la-imagen-de-un-candidato-antes-de-votar/" target="_blank" rel="noreferrer">Deepfakes y política · RealPolitik ↗</a>
      </div>
    </Block>
    <ArcadeDonkeyKong />
  </PageShell>
);

export const ComunicadorPage = () => (
  <PageShell title="Yo soy el comunicador libre" eyebrow="Comunicación · Cultura · Medios" description="Una práctica independiente de comunicación, análisis y divulgación para ampliar la conversación pública.">
    <Block title="Cultura digital, IA y filosofía política">
      <p>Mi reflexión sobre inteligencia artificial parte de una pregunta: qué significa ser humano cuando el lenguaje, las imágenes y la memoria pueden ser producidos y procesados por máquinas.</p>
      <p>El mind uploading plantea un problema central: si pudiéramos trasladar recuerdos y pensamientos a un sistema artificial, ¿seguiríamos siendo nosotros mismos? ¿La conciencia es información o existe algo irreductible en la experiencia de vivir?</p>
      <p>Entiendo la IA como un acontecimiento filosófico que transforma nuestra relación con el cuerpo, la identidad, la memoria y el deseo. La pregunta no es solo qué puede hacer una máquina, sino qué cambia en nosotros cuando delegamos en ella capacidades humanas.</p>
      <p>También publico reflexiones sobre inteligencia artificial, cultura digital, comunicación y filosofía política en medios y plataformas especializadas.</p>
      <div className="flex flex-wrap gap-3">
        <a className="border border-white/20 px-4 py-3 text-xs" href="https://www.linkedin.com/posts/leandrocuellar_c%C3%B3mo-sabemos-qui%C3%A9nes-somos-con-un-dibujo-ugcPost-7517760616326180864--FCi/" target="_blank" rel="noreferrer">Publicaciones sobre IA en LinkedIn ↗</a>
        <a className="border border-white/20 px-4 py-3 text-xs" href="https://quepasaamerica.com.ar/ia-redes-y-vacio-legal-que-dice-la-filosofia-del-derecho-sobre-el-caso-nahir-galarza/" target="_blank" rel="noreferrer">IA, redes y filosofía del derecho ↗</a>
      </div>
    </Block>
    <Block title="Voy a los medios sin ser Moria">
      <p>Participaciones, entrevistas y artículos en los que comparto análisis sobre política, cultura, comunicación e inteligencia artificial. Una conversación pública que también se construye escuchando, preguntando y discutiendo.</p>
      <p>Mi actividad incluye participación como analista político y cultural en medios y espacios de debate, entre ellos Canal 26 y RealPolitik. También publico columnas, entrevistas y reflexiones en medios digitales y plataformas de divulgación.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <a className="border border-white/20 px-4 py-4 text-xs uppercase tracking-[0.12em]" href="https://realpolitik.com.ar/nota/75068/deepfakes-en-dos-minutos-podes-arruinar-la-imagen-de-un-candidato-antes-de-votar/" target="_blank" rel="noreferrer">RealPolitik · IA y política ↗</a>
        <a className="border border-white/20 px-4 py-4 text-xs uppercase tracking-[0.12em]" href="https://escobaradiario.com.ar/interes-general/ia-y-comunicacion-estrategica-para-posicionar-tu-negocio/" target="_blank" rel="noreferrer">Escobar a Diario · Comunicación e IA ↗</a>
        <a className="border border-white/20 px-4 py-4 text-xs uppercase tracking-[0.12em]" href="https://www.agencianova.com/opinion/2026/10/22/174271/por-que-propongo-institucionalizar-la-semana-del-emprendedor-escobarense/" target="_blank" rel="noreferrer">Agencia NOVA · Opinión ↗</a>
        <a className="border border-white/20 px-4 py-4 text-xs uppercase tracking-[0.12em]" href="https://www.notaalpie.com.ar/2023/08/03/el-cine-en-tiempos-de-angustia-una-obra-literaria-ideal-para-los-amantes-del-septimo-arte-y-la-filosofia/" target="_blank" rel="noreferrer">Nota al Pie · Libros y cultura ↗</a>
      </div>
    </Block>
    <Block title="Comunicadores Libres">
      <p>Creé Comunicadores Libres, una comunidad de trabajo para comunicadores argentinos y latinoamericanos, orientada a compartir contactos, notas y oportunidades. La comunicación es una práctica plural: poner ideas en circulación, conectar voces y fortalecer el diálogo democrático.</p>
      <a href="/proyectos/comunicadores-libres" className="inline-flex border border-[#d8b978]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em]">Conocer Comunicadores Libres ↗</a>
    </Block>
  </PageShell>
);

function ServicesSnake() {
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const [score,setScore]=useState(0),[round,setRound]=useState(0),[status,setStatus]=useState("ready");
  const direction=useRef({x:1,y:0}),next=useRef({x:1,y:0});
  useEffect(()=>{
    const canvas=canvasRef.current,ctx=canvas?.getContext("2d");if(!canvas||!ctx)return;
    const cell=20,cols=24,rows=16,W=480,H=320;
    let body=[{x:6,y:8},{x:5,y:8},{x:4,y:8}],food={x:16,y:8},points=0,started=false,alive=true;
    direction.current={x:1,y:0};next.current={x:1,y:0};setScore(0);setStatus("ready");
    const spawn=()=>{let p;do{p={x:Math.floor(Math.random()*cols),y:Math.floor(Math.random()*rows)}}while(body.some(b=>b.x===p.x&&b.y===p.y));food=p};
    const turn=(x:number,y:number)=>{if(x!==-direction.current.x||y!==-direction.current.y){next.current={x,y};started=true;setStatus("playing")}};
    const key=(e:KeyboardEvent)=>{const m:Record<string,[number,number]>={ArrowUp:[0,-1],w:[0,-1],ArrowDown:[0,1],s:[0,1],ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0]};const d=m[e.key];if(d){e.preventDefault();turn(d[0],d[1])}};
    window.addEventListener("keydown",key);
    const paint=()=>{ctx.fillStyle="#080b16";ctx.fillRect(0,0,W,H);ctx.strokeStyle="rgba(245,189,32,.08)";for(let x=0;x<=W;x+=cell){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}for(let y=0;y<=H;y+=cell){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}ctx.fillStyle="#ff5964";ctx.beginPath();ctx.arc(food.x*cell+10,food.y*cell+10,7,0,Math.PI*2);ctx.fill();body.forEach((p,i)=>{ctx.fillStyle=i===0?"#ffe078":"#65f58b";ctx.fillRect(p.x*cell+2,p.y*cell+2,16,16)});ctx.fillStyle="#fff0c2";ctx.font="12px monospace";ctx.fillText("SNAKE  /  "+points+" PTS",12,18);if(!started&&alive){ctx.textAlign="center";ctx.font="13px monospace";ctx.fillText("PRESIONÁ UNA FLECHA PARA EMPEZAR",W/2,H/2);ctx.textAlign="left"}if(!alive){ctx.fillStyle="rgba(0,0,0,.7)";ctx.fillRect(0,0,W,H);ctx.textAlign="center";ctx.fillStyle="#ffe078";ctx.font="bold 26px monospace";ctx.fillText("GAME OVER",W/2,H/2);ctx.font="13px monospace";ctx.fillStyle="#fff0c2";ctx.fillText("PUNTOS: "+points,W/2,H/2+25);ctx.textAlign="left"}};
    paint();
    const timer=window.setInterval(()=>{if(!started||!alive)return;direction.current=next.current;const head={x:body[0].x+direction.current.x,y:body[0].y+direction.current.y},eat=head.x===food.x&&head.y===food.y,check=eat?body:body.slice(0,-1);if(head.x<0||head.x>=cols||head.y<0||head.y>=rows||check.some(p=>p.x===head.x&&p.y===head.y)){alive=false;setStatus("over");paint();return}body=[head,...body];if(eat){points+=10;setScore(points);spawn()}else body.pop();paint()},125);
    return()=>{alive=false;clearInterval(timer);window.removeEventListener("keydown",key)};
  },[round]);
  const move=(x:number,y:number)=>{if(x!==-direction.current.x||y!==-direction.current.y){next.current={x,y};setStatus("playing")}};
  return <section className="overflow-hidden border-[3px] border-[#211b17] bg-[#f3e8d2] text-[#211b17] shadow-[8px_8px_0_#e6a900]"><div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#211b17] bg-[#65172d] px-5 py-4 text-[#fff0c2]"><div><p className="text-[9px] font-black uppercase tracking-[.3em] text-[#f5bd20]">Bonus stage · Vilanova arcade</p><h2 className="mt-1 font-mono text-2xl font-black">SNAKE</h2></div><div className="text-right font-mono text-xs"><p>PUNTOS: {score}</p><p className="mt-1 text-[#f5bd20]">{status==="over"?"GAME OVER":status==="playing"?"EN JUEGO":"INSERT COIN"}</p></div></div><div className="bg-[#080b16]"><canvas ref={canvasRef} width={480} height={320} className="block w-full touch-pan-y"/></div><div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-[10px] font-bold uppercase tracking-wider text-[#342b25]/70">Flechas o W A S D. Comé los puntos rojos y evitá chocar.</p><button onClick={()=>setRound(v=>v+1)} className="border-2 border-[#211b17] bg-[#e6a900] px-5 py-3 font-mono text-[10px] font-black tracking-widest shadow-[3px_3px_0_#211b17]">JUGAR / REINICIAR ↻</button></div><div className="grid grid-cols-3 gap-2 px-5 pb-5 sm:hidden"><span/><button onClick={()=>move(0,-1)} className="bg-[#65172d] py-3 text-xl text-white">↑</button><span/><button onClick={()=>move(-1,0)} className="bg-[#65172d] py-3 text-xl text-white">←</button><button onClick={()=>move(0,1)} className="bg-[#65172d] py-3 text-xl text-white">↓</button><button onClick={()=>move(1,0)} className="bg-[#65172d] py-3 text-xl text-white">→</button></div></section>;
}

export const ServiciosPage = () => (
  <PageShell title="Servicios profesionales" eyebrow="Vilanova AI Solutions · Comunicación que mueve" description="Ideas bien pensadas. Imágenes que dejan huella. Tecnología puesta a trabajar. Soluciones para profesionales, marcas y organizaciones que quieren comunicar mejor y crecer.">
    <section className="relative overflow-hidden border-[3px] border-[#211b17] bg-[#f3e8d2] text-[#211b17] shadow-[9px_9px_0_#e6a900]">
      <div className="absolute inset-x-0 top-0 h-3 bg-[#e6a900]" />
      <div className="grid md:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10 px-6 pb-9 pt-12 sm:px-10 sm:pb-12 sm:pt-14">
          <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#9c3025]">Vilanova AI Solutions presenta</p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[0.98] sm:text-6xl">Tu próxima gran idea merece <span className="text-[#c63b25]">hacerse ver.</span></h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#342b25]/80">Diseño, estrategia y creatividad humana con herramientas de inteligencia artificial. Menos vueltas. Más claridad. Mejor comunicación.</p>
          <a href="https://wa.me/5491130538404?text=Hola%2C%20quiero%20conocer%20los%20servicios%20de%20Vilanova%20AI%20Solutions." className="mt-7 inline-flex items-center gap-3 border-2 border-[#211b17] bg-[#e6a900] px-6 py-4 text-[11px] font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_#211b17] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none">Hablemos de tu proyecto <span aria-hidden="true">↗</span></a>
        </div>
        <div className="relative min-h-[260px] overflow-hidden bg-[#e6a900]">
          <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full border-[24px] border-[#f7edda]/70" />
          <div className="absolute bottom-5 left-0 h-5 w-full -rotate-6 bg-[#c63b25]" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t-2 border-[#211b17] bg-[#211b17] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#f3e8d2] sm:px-10">
        <span>Una mirada estratégica. Herramientas actuales.</span><span>Est. Vilanova Group</span>
      </div>
    </section>

    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-[10px] uppercase tracking-[0.3em] text-[#d8b978]">Elegí tu punto de partida</p><h2 className="mt-2 font-serif text-3xl sm:text-4xl">Soluciones para poner en marcha</h2></div>
        <p className="max-w-sm text-xs leading-6 text-[#f1e8df]/60">Cada proyecto se ajusta a tus objetivos, necesidades y alcance.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        <article className="flex flex-col border-2 border-[#e6a900] bg-[#f3e8d2] p-6 text-[#211b17] shadow-[5px_5px_0_#e6a900] sm:p-7">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#a83226]">01 / Presencia digital</p>
          <h3 className="mt-4 font-serif text-3xl leading-tight">Diseño web + IA</h3>
          <p className="mt-3 text-sm leading-6 text-[#342b25]/80">Sitios web y landing pages para presentar tu propuesta, generar confianza y convertir visitas en consultas.</p>
          <p className="mt-6 border-t border-[#211b17]/20 pt-4 text-[10px] font-bold uppercase tracking-[0.18em]">Desde</p>
          <p className="mt-1 font-serif text-3xl">$30.000 <span className="font-sans text-xs font-bold">/ mes</span></p>
          <p className="mt-1 text-[10px] text-[#342b25]/65">Precio sujeto al alcance del proyecto.</p>
          <a href="https://wa.me/5491130538404?text=Hola%2C%20quiero%20consultar%20por%20dise%C3%B1o%20web." className="mt-auto inline-flex justify-center border-2 border-[#211b17] bg-[#e6a900] px-4 py-3 mt-6 text-[10px] font-black uppercase tracking-[0.18em] hover:bg-[#211b17] hover:text-[#f3e8d2]">INSERT COIN ↗</a>
        </article>
        <article className="flex flex-col border border-[#d8b978]/70 bg-white/[0.045] p-6 sm:p-7">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#e6a900]">02 / Comunidad y contenidos</p>
          <h3 className="mt-4 font-serif text-3xl leading-tight">Community Manager</h3>
          <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#d8b978]">Lead / Head of Social Media · +10 años</p>
          <p className="mt-4 text-sm leading-6 text-[#f1e8df]/75">Estrategia, planificación, contenidos y gestión de comunidades para que tus redes tengan dirección y consistencia.</p>
          <p className="mt-6 border-t border-white/15 pt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8b978]">Desde</p>
          <p className="mt-1 font-serif text-3xl">$50.000 <span className="font-sans text-xs font-bold">/ mes</span></p>
          <p className="mt-1 text-[10px] text-[#f1e8df]/50">Precio sujeto al alcance del proyecto.</p>
          <a href="https://wa.me/5491130538404?text=Hola%2C%20quiero%20consultar%20por%20Community%20Manager." className="mt-auto inline-flex justify-center border border-[#d8b978] px-4 py-3 mt-6 text-[10px] font-black uppercase tracking-[0.18em] hover:bg-[#e6a900] hover:text-[#211b17]">INSERT COIN ↗</a>
        </article>
        <article className="flex flex-col border border-[#d8b978]/70 bg-white/[0.045] p-6 sm:p-7">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#e6a900]">03 / Identidad de marca</p>
          <h3 className="mt-4 font-serif text-3xl leading-tight">Branding</h3>
          <p className="mt-3 text-sm leading-6 text-[#f1e8df]/75">Identidad, posicionamiento, narrativa y universo visual. Una marca reconocible empieza por una idea clara.</p>
          <p className="mt-6 border-t border-white/15 pt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8b978]">Desde</p>
          <p className="mt-1 font-serif text-3xl">$50.000 <span className="font-sans text-xs font-bold">/ única vez</span></p>
          <p className="mt-1 text-[10px] leading-5 text-[#f1e8df]/50">Incluye diseño de logotipo. 3 modificaciones adicionales: $50.000. También podés crear con IA a partir de un brief estratégico.</p>
          <a href="https://wa.me/5491130538404?text=Hola%2C%20quiero%20consultar%20por%20branding." className="mt-auto inline-flex justify-center border border-[#d8b978] px-4 py-3 mt-6 text-[10px] font-black uppercase tracking-[0.18em] hover:bg-[#e6a900] hover:text-[#211b17]">INSERT COIN ↗</a>
        </article>
      </div>
    </section>

    <section className="border-y border-white/15 py-10">
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8b978]">También podemos trabajar juntos en</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div><h3 className="font-serif text-2xl">IA para empresas</h3><p className="mt-2 text-sm leading-7 text-[#f1e8df]/70">Capacitación práctica, prompts, automatización y rediseño de tareas para incorporar IA con criterio, seguridad y objetivos medibles.</p></div>
        <div><h3 className="font-serif text-2xl">Comunicación estratégica</h3><p className="mt-2 text-sm leading-7 text-[#f1e8df]/70">Comunicación institucional, prensa, reputación, narrativa de marca y contenidos para conectar con tus públicos.</p></div>
        <div><h3 className="font-serif text-2xl">Conferencias y formación</h3><p className="mt-2 text-sm leading-7 text-[#f1e8df]/70">Charlas y talleres sobre IA, cultura digital, filosofía de la tecnología y transformaciones del trabajo.</p></div>
      </div>
      <a href="https://wa.me/5491130538404?text=Hola%2C%20quiero%20consultar%20por%20capacitaciones%20y%20servicios%20para%20mi%20organizaci%C3%B3n." className="mt-8 inline-flex border-2 border-[#e6a900] bg-[#e6a900] px-6 py-4 text-[10px] font-black uppercase tracking-[0.18em] text-[#211b17] hover:bg-transparent hover:text-[#f1e8df]">Contame qué necesitás ↗</a>
    </section>
    <ServicesSnake/>
  </PageShell>
);
export const PrensaPage = () => (
  <PageShell title="Prensa y medios" eyebrow="Participaciones · Entrevistas · Publicaciones" description="Artículos, entrevistas y participaciones públicas sobre política, cultura, comunicación e inteligencia artificial.">
    <Block title="Artículos y participaciones">
      <div className="grid gap-3 sm:grid-cols-2">
        <a className="border border-white/20 px-4 py-4 text-sm" href="https://realpolitik.com.ar/nota/75068/deepfakes-en-dos-minutos-podes-arruinar-la-imagen-de-un-candidato-antes-de-votar/" target="_blank" rel="noreferrer">RealPolitik · Deepfakes y política ↗</a>
        <a className="border border-white/20 px-4 py-4 text-sm" href="https://escobaradiario.com.ar/interes-general/ia-y-comunicacion-estrategica-para-posicionar-tu-negocio/" target="_blank" rel="noreferrer">Escobar a Diario · IA y comunicación ↗</a>
        <a className="border border-white/20 px-4 py-4 text-sm" href="https://www.agencianova.com/opinion/2026/10/22/174271/por-que-propongo-institucionalizar-la-semana-del-emprendedor-escobarense/" target="_blank" rel="noreferrer">Agencia NOVA · Opinión ↗</a>
        <a className="border border-white/20 px-4 py-4 text-sm" href="https://www.notaalpie.com.ar/2023/08/03/el-cine-en-tiempos-de-angustia-una-obra-literaria-ideal-para-los-amantes-del-septimo-arte-y-la-filosofia/" target="_blank" rel="noreferrer">Nota al Pie · Cine y filosofía ↗</a>
      </div>
    </Block>
    <Block title="Contacto para prensa">
      <p>Para entrevistas, columnas, participaciones en programas, consultas editoriales o invitaciones a espacios de debate:</p>
      <a href="mailto:leandrocuellarok@gmail.com?subject=Prensa%20y%20medios" className="inline-flex border border-[#d8b978]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em]">Escribir por prensa ↗</a>
    </Block>
  </PageShell>
);

export const InvestigacionPage = () => (
  <PageShell title="Investigación y pensamiento" eyebrow="Filosofía · Cultura · Sociedad" description="Un espacio de investigación interdisciplinaria sobre imagen, poder, subjetividad, tecnología y transformaciones culturales.">
    <Block title="Filosofía, cine e imagen">
      <p>Mi trabajo explora la identidad, la memoria, el tiempo y las relaciones humanas a través del cine, la escritura y la fotografía. Estos lenguajes dialogan y conforman una búsqueda autoral que entiende la imagen como una forma de conocimiento y reflexión.</p>
      <p>En 2020 fundé Amour du cinéma, una escuela dedicada a pensar el cine y su relación con la filosofía y el pensamiento contemporáneo. En 2022 publiqué <em>El cine en tiempos de angustia</em>, obra reeditada en 2023. Actualmente desarrollo proyectos que reúnen fotografía, audiovisual y escritura.</p>
      <a href="/proyectos/amour-du-cinema" className="inline-flex border border-white/20 px-4 py-3 text-xs">Amour du cinéma ↗</a>
    </Block>
    <Block title="Pensamiento político y ciencias sociales">
      <p>Mi interés por la filosofía, el psicoanálisis, la teoría política y las ciencias sociales se expresa en la docencia, la investigación y la creación. Trabajo desde un enfoque interdisciplinario que pone en diálogo tradiciones y autores para pensar la cultura, el poder y la subjetividad.</p>
      <p>Investigo sobre cine, filosofía, comunicación, inteligencia artificial, marketing político y transformaciones culturales. En seminarios y espacios de formación propongo contrastar autores y corrientes diferentes: aprender implica revisar las propias creencias y construir un juicio autónomo.</p>
    </Block>
    <Block title="Filosofía de la inteligencia artificial">
      <p>La pregunta no es solamente qué pueden hacer los sistemas artificiales, sino qué cambia en la experiencia humana cuando delegamos en ellos capacidades vinculadas con el lenguaje, la memoria, la creación y la decisión.</p>
      <a href="/yo-soy-el-comunicador-libre" className="inline-flex border border-white/20 px-4 py-3 text-xs">Cultura digital, IA y filosofía política ↗</a>
    </Block>
  </PageShell>
);
