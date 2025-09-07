'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface LightNetworkBackgroundProps {
  className?: string;
}

export default function LightNetworkBackground({ className = "" }: LightNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles - increased count and size for more prominent effect
    const particleCount = Math.min(120, Math.floor((canvas.width * canvas.height) / 8000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2, // Increased speed variation
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 6 + 2, // Increased from 3+1 to 6+2 (2-8px range)
        opacity: Math.random() * 0.4 + 0.5, // Increased opacity (0.5-0.9 range)
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get theme colors
      const isDark = theme === 'dark';
      const particleColor = isDark ? '48, 197, 155' : '0, 163, 255';
      const lineColor = isDark ? '48, 197, 155' : '0, 163, 255';

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle with glow effect
        ctx.save();
        ctx.shadowColor = `rgba(${particleColor}, 0.8)`;
        ctx.shadowBlur = particle.size * 2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity})`;
        ctx.fill();
        ctx.restore();

        // Draw connections - increased distance and visibility
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) { // Increased from 120 to 180
            const opacity = (1 - distance / 180) * 0.6; // Increased opacity multiplier
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
            ctx.lineWidth = 1.5; // Increased line width
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  return (
    <div className={`network-background ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          filter: theme === 'dark'
            ? 'brightness(1.6) contrast(1.5) saturate(1.4)'
            : 'brightness(1.3) contrast(1.4) saturate(1.3)'
        }}
      />
    </div>
  );
}
