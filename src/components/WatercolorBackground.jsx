import { useEffect, useRef } from 'react';

// Animated gradient mesh background
// Backup of original watercolor version: WatercolorBackground.backup.jsx

export default function WatercolorBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Mesh blobs — each drifts on a slow sin/cos path
    const blobs = [
      { baseX: 0.15, baseY: 0.20, r: 0.42, color: [139, 120, 210], speedX: 0.00031, speedY: 0.00019, phase: 0.0 },
      { baseX: 0.75, baseY: 0.15, r: 0.38, color: [200, 110, 180], speedX: 0.00023, speedY: 0.00027, phase: 1.1 },
      { baseX: 0.50, baseY: 0.60, r: 0.50, color: [100, 140, 230], speedX: 0.00017, speedY: 0.00033, phase: 2.2 },
      { baseX: 0.85, baseY: 0.70, r: 0.36, color: [220, 130, 160], speedX: 0.00029, speedY: 0.00021, phase: 3.3 },
      { baseX: 0.10, baseY: 0.75, r: 0.40, color: [120, 160, 220], speedX: 0.00025, speedY: 0.00015, phase: 4.4 },
    ];

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      t += 1;

      ctx.clearRect(0, 0, W, H);

      // Base — very light warm white
      ctx.fillStyle = '#f8f7fc';
      ctx.fillRect(0, 0, W, H);

      // Draw each floating blob
      blobs.forEach(b => {
        const x = (b.baseX + 0.12 * Math.sin(t * b.speedX * 1000 + b.phase)) * W;
        const y = (b.baseY + 0.10 * Math.cos(t * b.speedY * 1000 + b.phase)) * H;
        const radius = b.r * Math.max(W, H);

        const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const [r, g, bl] = b.color;
        grad.addColorStop(0,   `rgba(${r},${g},${bl},0.28)`);
        grad.addColorStop(0.4, `rgba(${r},${g},${bl},0.14)`);
        grad.addColorStop(1,   `rgba(${r},${g},${bl},0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
}
