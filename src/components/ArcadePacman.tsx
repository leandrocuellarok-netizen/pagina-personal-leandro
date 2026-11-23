import { useEffect, useRef } from "react";

const MAZE = [
  "###################",
  "#........#........#",
  "#.##.###.#.###.##.#",
  "#o##.###.#.###.##o#",
  "#.................#",
  "#.##.#.#####.#.##.#",
  "#....#...#...#....#",
  "####.###.#.###.####",
  "####.#.......#.####",
  ".....#..###..#.....",
  "####.#..# #..#.####",
  "####.#..###..#.####",
  "#.................#",
  "#.##.###.#.###.##.#",
  "#o.#.....P.....#.o#",
  "##.#.#.#####.#.#.##",
  "#....#...#...#....#",
  "#.######.#.######.#",
  "#.................#",
  "###################",
].map((row) => row.replaceAll(" ", "."));

const TILE = 20;
const DIRECTIONS: Record<string, [number, number]> = {
  ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0],
};

export default function ArcadePacman() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const map = MAZE.map((row) => row.split(""));
    let player = { x: 9, y: 14, direction: [0, 0] as [number, number], next: [0, 0] as [number, number] };
    let score = 0;
    let tick = 0;
    let alive = true;
    const ghosts = [
      { x: 8, y: 9, color: "#e84b43", direction: [1, 0] as [number, number] },
      { x: 10, y: 9, color: "#ed83b8", direction: [-1, 0] as [number, number] },
    ];

    const wall = (x: number, y: number) => !map[y] || !map[y][x] || map[y][x] === "#";
    const draw = () => {
      ctx.fillStyle = "#100d18";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      map.forEach((row, y) => row.forEach((cell, x) => {
        const px = x * TILE, py = y * TILE;
        if (cell === "#") {
          ctx.fillStyle = "#211c66";
          ctx.fillRect(px + 1, py + 1, TILE - 2, TILE - 2);
          ctx.strokeStyle = "#6d65c7";
          ctx.lineWidth = 1;
          ctx.strokeRect(px + 3, py + 3, TILE - 6, TILE - 6);
        } else if (cell === "." || cell === "o") {
          ctx.fillStyle = "#ffe8a0";
          ctx.beginPath();
          ctx.arc(px + TILE / 2, py + TILE / 2, cell === "o" ? 4 : 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }));
      ghosts.forEach((g) => {
        ctx.fillStyle = g.color;
        ctx.beginPath();
        ctx.arc(g.x * TILE + 10, g.y * TILE + 10, 8, Math.PI, 0);
        ctx.lineTo(g.x * TILE + 18, g.y * TILE + 18);
        ctx.lineTo(g.x * TILE + 14, g.y * TILE + 15);
        ctx.lineTo(g.x * TILE + 10, g.y * TILE + 18);
        ctx.lineTo(g.x * TILE + 6, g.y * TILE + 15);
        ctx.lineTo(g.x * TILE + 2, g.y * TILE + 18);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.fillRect(g.x * TILE + 6, g.y * TILE + 7, 3, 4);
        ctx.fillRect(g.x * TILE + 12, g.y * TILE + 7, 3, 4);
      });
      const px = player.x * TILE + 10, py = player.y * TILE + 10;
      ctx.fillStyle = "#ffd629";
      ctx.beginPath();
      const angle = Math.atan2(player.direction[1], player.direction[0]);
      const mouth = tick % 2 ? 0.22 : 0.04;
      ctx.moveTo(px, py);
      ctx.arc(px, py, 9, angle + mouth, angle + Math.PI * 2 - mouth);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#fff3bd";
      ctx.font = "bold 12px monospace";
      ctx.textAlign = "left";
      ctx.fillText(String(score).padStart(5, "0"), 8, canvas.height - 5);
      if (!alive) {
        ctx.fillStyle = "rgba(8,6,16,.78)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffd629";
        ctx.font = "bold 25px monospace";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
        ctx.font = "12px monospace";
        ctx.fillText("PRESS ENTER", canvas.width / 2, canvas.height / 2 + 25);
      }
    };

    const move = () => {
      if (!alive) return;
      tick++;
      if (!wall(player.x + player.next[0], player.y + player.next[1])) player.direction = [...player.next];
      const nx = player.x + player.direction[0], ny = player.y + player.direction[1];
      if (!wall(nx, ny)) { player.x = nx; player.y = ny; }
      const cell = map[player.y][player.x];
      if (cell === "." || cell === "o") { score += cell === "o" ? 50 : 10; map[player.y][player.x] = " "; }
      ghosts.forEach((g) => {
        if (Math.random() < 0.35 || wall(g.x + g.direction[0], g.y + g.direction[1])) {
          const dirs = [[1,0],[-1,0],[0,1],[0,-1]] as [number,number][];
          const valid = dirs.filter(([dx,dy]) => !wall(g.x + dx, g.y + dy));
          if (valid.length) g.direction = valid[Math.floor(Math.random() * valid.length)];
        }
        g.x += g.direction[0]; g.y += g.direction[1];
        if (g.x === player.x && g.y === player.y) alive = false;
      });
      if (!map.some((row) => row.some((cell) => cell === "." || cell === "o"))) {
        map.forEach((row,y) => row.forEach((cell,x) => { if (cell === " ") map[y][x] = "."; }));
      }
      draw();
    };

    const onKey = (event: KeyboardEvent) => {
      if (DIRECTIONS[event.key]) { event.preventDefault(); player.next = DIRECTIONS[event.key]; }
      if (event.key === "Enter" && !alive) {
        alive = true; score = 0; player = { x: 9, y: 14, direction: [0,0], next: [0,0] };
        ghosts[0].x = 8; ghosts[0].y = 9; ghosts[1].x = 10; ghosts[1].y = 9;
        map.forEach((row,y) => row.forEach((cell,x) => { if (cell !== "#" && !(x === 9 && y === 14)) map[y][x] = (y === 3 && (x === 1 || x === 17)) || (y === 14 && (x === 2 || x === 16)) ? "o" : "."; }));
        draw();
      }
    };
    window.addEventListener("keydown", onKey);
    const timer = window.setInterval(move, 145);
    draw();
    return () => { window.clearInterval(timer); window.removeEventListener("keydown", onKey); };
  }, []);

  const press = (key: string) => {
    const event = new KeyboardEvent("keydown", { key, bubbles: true });
    window.dispatchEvent(event);
  };

  return (
    <div className="arcade-cabinet w-full max-w-[440px] mx-auto">
      <div className="arcade-marquee" aria-hidden="true"><span>★</span><span>1980</span><span>★</span></div>
      <div className="arcade-screen">
        <canvas ref={canvasRef} width={380} height={400} className="arcade-canvas" aria-label="Juego arcade Pac-Man" />
      </div>
      <div className="arcade-controls">
        <button type="button" onClick={() => press("ArrowUp")} aria-label="Arriba">▲</button>
        <div><button type="button" onClick={() => press("ArrowLeft")} aria-label="Izquierda">◀</button><button type="button" onClick={() => press("ArrowDown")} aria-label="Abajo">▼</button><button type="button" onClick={() => press("ArrowRight")} aria-label="Derecha">▶</button></div>
      </div>
      <div className="arcade-speaker" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
    </div>
  );
}
