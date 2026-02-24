import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  targetOpacity: number;
  depth: number; // 0-1, where 1 is front
  life: number;
  maxLife: number;
}

export const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Gradient colors
  const COLOR_START = { r: 30, g: 58, b: 138 }; // #1E3A8A (Deep Blue)
  const COLOR_END = { r: 124, g: 58, b: 237 };   // #7C3AED (Vibrant Purple)

  const interpolateColor = (factor: number) => {
    const r = Math.round(COLOR_START.r + (COLOR_END.r - COLOR_START.r) * factor);
    const g = Math.round(COLOR_START.g + (COLOR_END.g - COLOR_START.g) * factor);
    const b = Math.round(COLOR_START.b + (COLOR_END.b - COLOR_START.b) * factor);
    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let lastTime = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const createParticle = (isInit = false): Particle => {
      const depth = Math.random();
      // Random position, full screen
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      const colorFactor = Math.random(); // 0 = blue, 1 = purple
      
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * (0.5 + Math.random() * 1.5), // 0.5 - 2 px/s approx speed range
        vy: (Math.random() - 0.5) * (0.5 + Math.random() * 1.5),
        size: (Math.random() * 3 + 1) * (0.5 + depth * 0.5), // Size based on depth
        color: interpolateColor(colorFactor),
        opacity: isInit ? 0.3 + Math.random() * 0.5 : 0, // Start visible if init, else fade in
        targetOpacity: 0.3 + Math.random() * 0.5,
        depth, // 0 (back) to 1 (front)
        life: 0,
        maxLife: 8000 + Math.random() * 4000, // 8-12 seconds
      };
    };

    const initParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.1), 150);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(true));
      }
    };

    const draw = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      // Clear with slight trail effect? No, clean clear for crisp look
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        // Update life
        p.life += deltaTime;
        
        // Fade in/out logic
        if (p.life < 1000) {
          p.opacity = (p.life / 1000) * p.targetOpacity;
        } else if (p.life > p.maxLife - 1000) {
          p.opacity = ((p.maxLife - p.life) / 1000) * p.targetOpacity;
        } else {
          p.opacity = p.targetOpacity;
        }

        // Respawn if dead
        if (p.life >= p.maxLife) {
          particles[i] = createParticle();
          return;
        }

        // Movement (No Parallax)
        p.x += p.vx * (deltaTime / 16); 
        p.y += p.vy * (deltaTime / 16);

        // Wrap around X
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        
        // Wrap around Y
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        // Mouse interaction
        // Use client coordinates directly since canvas is absolute to parent now (not fixed)
        const mouseX = mouseRef.current.x;
        const mouseY = mouseRef.current.y; 
        
        // Get particle position relative to viewport (since canvas scrolls with page now)
        const rect = canvas.getBoundingClientRect();
        const pScreenX = p.x + rect.left;
        const pScreenY = p.y + rect.top;

        const dx = mouseX - pScreenX;
        const dy = mouseY - pScreenY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const maxDist = 200;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          p.x -= dx * force * 0.05;
          p.y -= dy * force * 0.05;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (Math.abs(p.depth - p2.depth) > 0.2) continue;

          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y; 
          const dist2 = Math.sqrt(dx2*dx2 + dy2*dy2);

          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            const grad = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            grad.addColorStop(0, p.color);
            grad.addColorStop(1, p2.color);
            
            ctx.strokeStyle = grad;
            ctx.globalAlpha = Math.min(p.opacity, p2.opacity) * (1 - dist2 / 120) * 0.5;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    
    resize();
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};
