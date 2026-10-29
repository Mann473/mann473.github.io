import React, { useEffect, useRef } from 'react';

/**
 * NeuralCanvasBackground
 * ----------------------------------------------------------------------------
 * Renders a lightweight, 60fps HTML5 canvas neural constellation and subtle
 * ambient spotlight that responds gently to cursor position.
 * Designed to evoke an AI & Software Engineering aesthetic without overwhelming
 * text readability or hurting mobile performance.
 */
export const NeuralCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width * 0.65, y: height * 0.35, active: false };

    // Keep particle count modest for crisp performance on both desktop and mobile
    const getNodeCount = () => {
      if (window.innerWidth < 640) return 26;
      if (window.innerWidth < 1024) return 44;
      return 62;
    };

    interface NodeParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      hue: string;
    }

    let nodes: NodeParticle[] = [];

    const initNodes = () => {
      const count = getNodeCount();
      const colors = [
        'rgba(34, 211, 238, 0.55)', // Cyan
        'rgba(59, 130, 246, 0.5)',  // Electric Blue
        'rgba(139, 92, 246, 0.45)', // Violet
      ];
      nodes = Array.from({ length: count }, (_, idx) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        radius: Math.random() * 1.6 + 0.9,
        hue: colors[idx % colors.length],
      }));
    };

    initNodes();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const maxConnectDistance = 145;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.hue;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const alpha = (1 - dist / maxConnectDistance) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Subtle interactive connection to cursor
        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 180) {
            const alpha = (1 - mDist / 180) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Deep midnight radial gradient backdrop */}
      <div className="absolute inset-0 bg-[#04060b]" />
      <div className="absolute -top-48 left-1/4 w-[36rem] h-[36rem] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute bottom-0 left-1/3 w-[34rem] h-[34rem] rounded-full bg-violet-600/10 blur-[160px]" />

      {/* Subtle architectural cyber grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-70" />

      {/* Interactive neural constellation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />

      {/* Top and bottom vignette to preserve crisp typography contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04060b]/40 via-transparent to-[#04060b]/90" />
    </div>
  );
};
