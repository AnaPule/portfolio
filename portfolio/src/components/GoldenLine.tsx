import React, { useEffect, useRef } from 'react';

/**
 * FLOWING GOLDEN LINE ANIMATION
 * 
 * An elegant, flowing golden line that moves gracefully across the screen.
 * Matches the regal gold theme from your components.
 * 
 * CONCEPTS:
 * 1. Smooth sine wave path
 * 2. Gradient stroke for shimmer effect
 * 3. Trail effect for motion
 * 4. Simple and elegant
 */

const GoldenLine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // LINE CONFIGURATION
    const line = {
      points: [] as Array<{ x: number; y: number }>,
      pointCount: 150,        // Number of points making up the line
      startX: -100,
      centerY: canvas.height / 2,
      time: 0,
      speed: 0.020,             // How fast it moves
      waveAmplitude: 90,      // How much it waves up/down
      waveFrequency: 0.015,   // Tightness of waves
      lineWidth: 5            // Thickness of the line
    };
    
    // Initialize points
    for (let i = 0; i < line.pointCount; i++) {
      line.points.push({
        x: line.startX + i * 10,
        y: line.centerY
      });
    }
    
    let animationFrameId: number;
    
    const animate = () => {
      // Fade previous frame for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      line.time += 0.05;
      
      // UPDATE POINTS - create flowing wave pattern
      for (let i = 0; i < line.pointCount; i++) {
        const point = line.points[i];
        
        // Move forward
        point.x += line.speed;
        
        // Wave motion (sine wave)
        point.y = line.centerY + 
          Math.sin(line.time + i * line.waveFrequency) * line.waveAmplitude;
        
        // Reset point when it goes off screen
        if (point.x > canvas.width + 100) {
          point.x = -100;
        }
      }
      
      // DRAW THE GOLDEN LINE
      if (line.points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(line.points[0].x, line.points[0].y);
        
        // Draw smooth curve through all points
        for (let i = 1; i < line.points.length - 1; i++) {
          const currentPoint = line.points[i];
          const nextPoint = line.points[i + 1];
          
          // Use quadratic curves for smoothness
          const midX = (currentPoint.x + nextPoint.x) / 2;
          const midY = (currentPoint.y + nextPoint.y) / 2;
          
          ctx.quadraticCurveTo(currentPoint.x, currentPoint.y, midX, midY);
        }
        
        // Line styling - REGAL GOLD GRADIENT
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(255, 239, 213, 0.2)');    // Light gold (transparent)
        gradient.addColorStop(0.3, 'rgba(212, 175, 55, 0.8)');   // Rich gold
        gradient.addColorStop(0.5, 'rgba(255, 239, 213, 1)');    // Bright gold
        gradient.addColorStop(0.7, 'rgba(212, 175, 55, 0.8)');   // Rich gold
        gradient.addColorStop(1, 'rgba(201, 160, 40, 0.2)');     // Deep gold (transparent)
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = line.lineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
        
        ctx.stroke();
        
        // Draw again with less blur for sharp core
        ctx.shadowBlur = 5;
        ctx.stroke();
        
        // Reset shadow
        ctx.shadowBlur = 0;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      line.centerY = canvas.height / 2;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        zIndex: 1,
        opacity: 0.4  // Subtle and elegant
      }}
    />
  );
};

export default GoldenLine;