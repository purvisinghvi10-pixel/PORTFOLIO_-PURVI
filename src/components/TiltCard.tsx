import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tiltMax?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", onClick, tiltMax = 10 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltMax, -tiltMax]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltMax, tiltMax]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative group perspective-1000 ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full transition-shadow duration-500"
      >
        <div 
          style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
          className="w-full h-full"
        >
          {children}
        </div>
        
        {/* Premium Light Reflection Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[inherit] overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent"
            style={{
              translateX: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
              translateY: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
              transform: "translateZ(30px)", // Float the reflection slightly
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
