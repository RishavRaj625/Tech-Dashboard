import React, { useEffect, useRef, useState } from 'react';

const CursorEffect = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect theme changes
  useEffect(() => {
    const detectTheme = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
                    document.body.classList.contains('dark') ||
                    window.matchMedia('(prefers-color-scheme: dark)').matches ||
                    document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDarkMode(isDark);
    };

    detectTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class', 'data-theme'] 
    });
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    // Also listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', detectTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', detectTheme);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    // Get theme-appropriate colors
    const getThemeColors = () => {
      if (isDarkMode) {
        return {
          particleHues: [200, 260, 180, 220], // Blues, purples, cyans
          lightness: [60, 80],
          saturation: 100,
          connectionColor: 'rgba(100, 200, 255, 0.5)',
          glowColor: ['rgba(100, 200, 255, 0.3)', 'rgba(100, 200, 255, 0)'],
          burstHues: [200, 260, 300, 180]
        };
      } else {
        return {
          particleHues: [300, 260, 200, 340], // Magentas, purples, blues
          lightness: [40, 60],
          saturation: 80,
          connectionColor: 'rgba(150, 50, 200, 0.6)',
          glowColor: ['rgba(200, 50, 150, 0.4)', 'rgba(200, 50, 150, 0)'],
          burstHues: [300, 260, 320, 280]
        };
      }
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Particle class
    class Particle {
      constructor(x, y, isBurst = false) {
        const colors = getThemeColors();
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        
        const hues = isBurst ? colors.burstHues : colors.particleHues;
        const hue = hues[Math.floor(Math.random() * hues.length)];
        const lightness = colors.lightness[0] + Math.random() * (colors.lightness[1] - colors.lightness[0]);
        
        this.color = `hsl(${hue}, ${colors.saturation}%, ${lightness}%)`;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.originalSize = this.size;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size = this.originalSize * this.life;
        
        if (this.life <= 0) {
          this.life = 0;
        }
      }

      draw(ctx) {
        if (this.life > 0) {
          ctx.save();
          ctx.globalAlpha = this.life;
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // Handle mouse move
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Create new particles at mouse position
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(
          e.clientX + (Math.random() - 0.5) * 20,
          e.clientY + (Math.random() - 0.5) * 20
        ));
      }
    };

    // Handle mouse click for burst effect
    const handleMouseClick = (e) => {
      for (let i = 0; i < 15; i++) {
        const angle = (Math.PI * 2 * i) / 15;
        const particle = new Particle(e.clientX, e.clientY);
        particle.speedX = Math.cos(angle) * 4;
        particle.speedY = Math.sin(angle) * 4;
        particle.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
        particles.push(particle);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        
        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 100) * 0.3;
            ctx.strokeStyle = 'rgba(100, 200, 255, 0.5)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw cursor glow
      const mouse = mouseRef.current;
      if (mouse.x !== 0 || mouse.y !== 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 50
        );
        gradient.addColorStop(0, 'rgba(100, 200, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');
        
        ctx.save();
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Limit particle count for performance
      if (particles.length > 200) {
        particles = particles.slice(-200);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default CursorEffect;