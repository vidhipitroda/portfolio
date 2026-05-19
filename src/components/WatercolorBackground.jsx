import { useEffect, useRef } from 'react';

export default function WatercolorBackground() {
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

    // Dots
    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    // Blobs
    const blobs = [
      { x: 0.15, y: 0.25, rx: 0.38, ry: 0.18, color: '#e8c4cc' },
      { x: 0.55, y: 0.45, rx: 0.48, ry: 0.20, color: '#e8d0b0' },
      { x: 0.82, y: 0.15, rx: 0.32, ry: 0.15, color: '#d4cce8' },
    ];

    const drawBlob = (x, y, rx, ry, color) => {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry));
      grad.addColorStop(0, color + 'cc');
      grad.addColorStop(0.5, color + '88');
      grad.addColorStop(1, color + '00');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      // Base background
      ctx.fillStyle = '#f5f3f7';
      ctx.fillRect(0, 0, W, H);

      // Blobs
      blobs.forEach(b => drawBlob(b.x * W, b.y * H, b.rx * W, b.ry * H, b.color));

      // Animated dots
      dots.forEach(d => {
        d.x += d.dx;
        d.y += d.dy;
        if (d.x < 0) d.x = W;
        if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H;
        if (d.y > H) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(155, 139, 180, ${d.opacity})`;
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
