import React, { useEffect, useRef } from 'react';

const DottedCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth);
    let height = (canvas.height = 650);

    const gridSpacing = 28;
    const baseRadius = 2.2;
    const maxRadius = 6.5;
    const mouseRadius = 160;

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 650;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    let startTime = performance.now();

    const draw = () => {
      const time = (performance.now() - startTime) * 0.0012; // Slow organic drift time
      ctx.clearRect(0, 0, width, height);

      const colsCount = Math.ceil(width / gridSpacing) + 1;
      const rowsCount = Math.ceil(height / gridSpacing) + 1;

      for (let i = 0; i < colsCount; i++) {
        for (let j = 0; j < rowsCount; j++) {
          const baseX = i * gridSpacing;
          const baseY = j * gridSpacing;

          // Continuous slow organic floating drift when cursor is away
          const driftX = Math.sin(time * 0.8 + i * 0.4 + j * 0.2) * 5;
          const driftY = Math.cos(time * 0.6 + j * 0.4 + i * 0.2) * 5;

          const dotX = baseX + driftX;
          const dotY = baseY + driftY;

          // Calculate distance to cursor
          const dx = dotX - mouse.x;
          const dy = dotY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let currentRadius = baseRadius;
          let alpha = 0.45;
          let pushX = 0;
          let pushY = 0;

          if (dist < mouseRadius) {
            const factor = 1 - dist / mouseRadius;
            currentRadius = baseRadius + (maxRadius - baseRadius) * factor;
            alpha = 0.45 + 0.45 * factor;

            // Subtle magnetic push
            const angle = Math.atan2(dy, dx);
            const pushDist = factor * 8;
            pushX = Math.cos(angle) * pushDist;
            pushY = Math.sin(angle) * pushDist;
          }

          // Downward fade
          const fadeFactor = Math.max(0, 1 - dotY / (height * 0.85));
          const finalAlpha = alpha * fadeFactor;

          if (finalAlpha <= 0.01) continue;

          ctx.beginPath();
          ctx.arc(dotX + pushX, dotY + pushY, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 116, 139, ${finalAlpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 right-0 w-full pointer-events-none z-0"
      style={{ height: '650px' }}
    />
  );
};

export default DottedCanvas;
