"use client";

import React, { useEffect, useRef } from "react";

/* ================================================================
   CELEBRATION CONFETTI BURST (HIGH PERFORMANCE CANVAS PARTICLE SYSTEM)
================================================================ */

const CONFETTI_COLORS = [
  "#D9254C", // HighEd Crimson Accent
  "#253A7B", // HighEd Navy Primary
  "#FBBF24", // Golden Amber
  "#10B981", // Emerald Green
  "#6366F1", // Indigo
  "#EC4899", // Rose Pink
  "#06B6D4", // Electric Cyan
  "#F59E0B", // Bright Gold
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  tilt: number;
  tiltSpeed: number;
  shape: "rect" | "circle" | "ribbon";
  opacity: number;
  decay: number;
  wobble: number;
  wobbleSpeed: number;
}

export interface ConfettiBurstProps {
  show: boolean;
}

export const ConfettiBurst: React.FC<ConfettiBurstProps> = ({ show }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!show) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const particles: Particle[] = [];
    const count = 125;

    for (let i = 0; i < count; i++) {
      const originType = i % 3;
      let startX = width * 0.5;
      const startY = height * 0.42;
      let baseAngle: number;
      let speed: number;

      if (originType === 0) {
        startX = width * 0.35;
        baseAngle = -Math.PI * 0.45 + (Math.random() - 0.5) * 0.75;
        speed = 11 + Math.random() * 15;
      } else if (originType === 1) {
        startX = width * 0.65;
        baseAngle = -Math.PI * 0.55 + (Math.random() - 0.5) * 0.75;
        speed = 11 + Math.random() * 15;
      } else {
        startX = width * 0.5;
        baseAngle = -Math.PI * 0.5 + (Math.random() - 0.5) * 1.25;
        speed = 13 + Math.random() * 17;
      }

      const shapeRand = Math.random();
      const shape: "rect" | "circle" | "ribbon" =
        shapeRand < 0.55 ? "rect" : shapeRand < 0.82 ? "ribbon" : "circle";

      particles.push({
        x: startX,
        y: startY,
        vx: Math.cos(baseAngle) * speed,
        vy: Math.sin(baseAngle) * speed,
        size: shape === "ribbon" ? 4 + Math.random() * 3 : 6 + Math.random() * 6,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        tilt: Math.random() * Math.PI,
        tiltSpeed: 0.08 + Math.random() * 0.12,
        shape,
        opacity: 1,
        decay: 0.005 + Math.random() * 0.005,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.05 + Math.random() * 0.06,
      });
    }

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      ctx.clearRect(0, 0, width, height);

      let anyAlive = false;

      for (const p of particles) {
        if (p.opacity <= 0 || p.y > height + 80) continue;

        anyAlive = true;

        p.x += p.vx + Math.sin(p.wobble) * 0.85;
        p.y += p.vy;
        p.vy += 0.32; // Gravity
        p.vx *= 0.985; // Air friction
        p.wobble += p.wobbleSpeed;
        p.rotation += p.rotationSpeed;
        p.tilt += p.tiltSpeed;
        p.opacity -= p.decay;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        // 3D tumble projection
        ctx.scale(Math.cos(p.tilt), 1);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size, p.size, p.size * 1.5);
        } else if (p.shape === "ribbon") {
          ctx.fillRect(-p.size / 2, -p.size * 2, p.size, p.size * 3.2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      if (anyAlive && elapsed < 4500) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    const onResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
    };
  }, [show]);

  if (!show) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full"
      aria-hidden="true"
    />
  );
};

export default ConfettiBurst;
