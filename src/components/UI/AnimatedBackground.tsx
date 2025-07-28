"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

const AnimatedBackground = () => {
  const [shapes, setShapes] = useState<FloatingShape[]>([]);

  // Color palette inspired by your design
  const colors = [
    "rgba(124, 77, 255, 0.1)", // Purple (main theme)
    "rgba(59, 130, 246, 0.08)", // Blue steel
    "rgba(156, 163, 175, 0.06)", // Gray scale
    "rgba(236, 72, 153, 0.08)", // Slight pink
    "rgba(34, 197, 94, 0.06)", // Mint fog
    "rgba(14, 165, 233, 0.08)", // Soft sea
    "rgba(168, 162, 158, 0.05)", // Sand tones
  ];

  useEffect(() => {
    const generateShapes = () => {
      const newShapes: FloatingShape[] = [];

      // Generate floating shapes
      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 200 + 50,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 2,
          duration: Math.random() * 30 + 20, // ช่วงเวลา 20-50 วินาที (เดิม 10-30)
        });
      }

      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50" />

      {/* Animated mesh gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(124, 77, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 60%, rgba(124, 77, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 20% 40%, rgba(14, 165, 233, 0.03) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: shape.color,
          }}
          animate={{
            x: [0, 20, -15, 0], // ลดการเคลื่อนไหวลง
            y: [0, -15, 20, 0], // ลดการเคลื่อนไหวลง
            scale: [1, 1.05, 0.95, 1], // ลด scale ให้นุ่มนวลกว่า
            rotate: [0, 90, 180, 270, 360], // หมุนช้าลง
          }}
          transition={{
            duration: shape.duration * 2, // เพิ่มความช้า 2 เท่า
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Color palette inspired particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: colors[i % colors.length].replace("0.1", "0.3"),
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 77, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 77, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          x: [0, 25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Color swatches floating animation */}
      <div className="absolute inset-0">
        {["#7C4DFF", "#3B82F6", "#9CA3AF", "#EC4899", "#22C55E", "#0EA5E9"].map(
          (color, i) => (
            <motion.div
              key={`swatch-${i}`}
              className="absolute w-8 h-8 rounded-lg shadow-lg opacity-20"
              style={{
                backgroundColor: color,
                left: `${20 + i * 12}%`,
                top: `${10 + i * 8}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default AnimatedBackground;
