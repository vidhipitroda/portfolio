import { useEffect, useRef } from 'react';

export default function FallingPetals() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Petal shapes — each petal is a small ellipse with rotation + sway
    const petals = Array.from({ length: 55 }, () => createPetal());

    function createPetal(fromTop = false) {
      return {
        x: Math.random() * window.innerWidth,
        y: fromTop ? -20 : Math.random() * window.innerHeight,
        r1: Math.random() * 7 + 4,        // ellipse long radius
        r2: Math.random() * 4 + 2,        // ellipse short radius
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.04,
        vy: Math.random() * 1.2 + 0.5,    // fall speed
        vx: (Math.random() - 0.5) * 0.6,  // horizontal drift
        sway: Math.random() * Math.PI * 2, // sway phase
        swaySpeed: Math.random() * 0.018 + 0.008,
        swayAmp: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.5 + 0.35,
        // pink tones
        color: `hsl(${330 + Math.random() * 20}, ${60 + Math.random() * 25}%, ${80 + Math.random() * 12}%)`,
      };
    }

    function drawPetal(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = p.opacity;

      // petal shape — two overlapping ellipses for a natural look
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r1, p.r2, 0, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // subtle highlight
      ctx.beginPath();
      ctx.ellipse(-p.r1 * 0.2, -p.r2 * 0.2, p.r1 * 0.5, p.r2 * 0.5, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.fill();

      ctx.restore();
    }

    function draw() {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      petals.forEach((p) => {
        // sway side to side
        p.sway += p.swaySpeed;
        p.x += p.vx + Math.sin(p.sway) * p.swayAmp;
        p.y += p.vy;
        p.angle += p.spin;

        // reset when off screen
        if (p.y > H + 20 || p.x < -40 || p.x > W + 40) {
          Object.assign(p, createPetal(true));
          p.x = Math.random() * W;
        }

        drawPetal(p);
      });

      animFrame = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
