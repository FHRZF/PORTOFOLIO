import React, { useEffect, useRef, useState } from 'react';

// Helper function to interpolate colors for smooth gradient
function interpolateColor(color1, color2, factor) {
  const r1 = parseInt(color1.substring(1, 3), 16);
  const g1 = parseInt(color1.substring(3, 5), 16);
  const b1 = parseInt(color1.substring(5, 7), 16);

  const r2 = parseInt(color2.substring(1, 3), 16);
  const g2 = parseInt(color2.substring(3, 5), 16);
  const b2 = parseInt(color2.substring(5, 7), 16);

  const r = Math.round(r1 + factor * (r2 - r1));
  const g = Math.round(g1 + factor * (g2 - g1));
  const b = Math.round(b1 + factor * (b2 - b1));

  return `rgb(${r}, ${g}, ${b})`;
}

class Particle {
  constructor(x, y, originX, originY, color) {
    this.x = x + (Math.random() - 0.5) * 150; // Random offset for entrance transition
    this.y = y + (Math.random() - 0.5) * 150;
    this.originX = originX;
    this.originY = originY;
    this.color = color;
    this.size = Math.random() * 1.5 + 1.2; // 1.2px - 2.7px
    this.vx = 0;
    this.vy = 0;
    this.ease = Math.random() * 0.06 + 0.03; // Return speed to original position
    this.friction = 0.88;
    this.speedMultiplier = Math.random() * 2 + 1;
    this.idleSeed = Math.random() * 100; // Offset for unique wave pattern
  }

  update(mouseX, mouseY, isHovered, time) {
    // 1. Calculate Idle float (breathing animation)
    const idleX = Math.sin(time + this.idleSeed) * 2;
    const idleY = Math.cos(time + this.idleSeed) * 2;

    const targetX = this.originX + idleX;
    const targetY = this.originY + idleY;

    // 2. Mouse Repulsion & Swirl
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const forceRadius = 90; // Influence area

    if (isHovered && distance < forceRadius) {
      // Repulsion force
      const force = (forceRadius - distance) / forceRadius;
      const angle = Math.atan2(dy, dx);
      
      // Accelerate away
      this.vx -= Math.cos(angle) * force * 3.5 * this.speedMultiplier;
      this.vy -= Math.sin(angle) * force * 3.5 * this.speedMultiplier;

      // Add a cool cyber swirl effect
      const swirlAngle = angle + Math.PI / 2;
      this.vx += Math.cos(swirlAngle) * force * 1.5;
      this.vy += Math.sin(swirlAngle) * force * 1.5;
    } else {
      // 3. Return back to target position
      const dxTarget = targetX - this.x;
      const dyTarget = targetY - this.y;
      
      this.vx += dxTarget * this.ease;
      this.vy += dyTarget * this.ease;
    }

    // Apply friction and move
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function ParticleText() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let particles = [];
    let animationFrameId;

    // Define responsive canvas size and recreate particles
    const initCanvas = () => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.clientWidth || window.innerWidth;
      // Responsive height based on window width
      const isMobile = window.innerWidth < 640;
      const height = isMobile ? 240 : 150;

      canvas.width = width;
      canvas.height = height;

      // Temporary offscreen canvas to render text and scan pixels
      const offscreen = document.createElement('canvas');
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      // Responsive font setup
      const fontName = '"Space Grotesk", sans-serif';
      const lines = isMobile ? ['FAHRIZ', 'FITRA', 'ANNAS'] : ['FAHRIZ FITRA ANNAS'];
      
      // Calculate font size to fit container width
      const longestLine = lines.reduce((a, b) => a.length > b.length ? a : b);
      const padding = 20;
      const availableWidth = width - padding * 2;
      
      // Heuristic for font size: character width is roughly 0.6 * font size
      let fontSize = Math.min((availableWidth) / (longestLine.length * 0.58), isMobile ? 65 : 100);
      // Ensure a reasonable minimum size
      fontSize = Math.max(fontSize, 40);

      offCtx.font = `bold ${fontSize}px ${fontName}`;
      offCtx.textBaseline = 'middle';
      offCtx.textAlign = 'center';
      offCtx.fillStyle = '#white';

      // Draw text to offscreen canvas
      const lineHeight = fontSize * 1.1;
      const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2;

      lines.forEach((line, index) => {
        offCtx.fillText(line, width / 2, startY + index * lineHeight);
      });

      // Get image data
      const imgData = offCtx.getImageData(0, 0, width, height);
      const { data } = imgData;

      // Extract particles based on pixel opacity
      particles = [];
      const step = isMobile ? 3 : 4; // Adjust density based on device for optimal performance

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const alphaIndex = (y * width + x) * 4 + 3;
          if (data[alphaIndex] > 128) {
            // Calculate gradient color based on horizontal ratio
            const ratio = x / width;
            let color;
            if (ratio < 0.5) {
              color = interpolateColor('#a855f7', '#06b6d4', ratio * 2); // Purple to Cyan
            } else {
              color = interpolateColor('#06b6d4', '#ec4899', (ratio - 0.5) * 2); // Cyan to Pink
            }

            particles.push(new Particle(x, y, x, y, color));
          }
        }
      }
    };

    initCanvas();

    // Physics & render loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.0015;

      particles.forEach((p) => {
        p.update(mouseRef.current.x, mouseRef.current.y, isHovered, time);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners for window resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initCanvas();
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isHovered]);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas || e.touches.length === 0) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center items-center select-none cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
      style={{ minHeight: '150px' }}
    >
      <canvas
        ref={canvasRef}
        className="block max-w-full"
      />
    </div>
  );
}
