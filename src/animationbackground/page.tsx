import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
export function AnimatedBackground({
    colors = ['#F9C81B', '#3b82f6', '#F9C81B'],
    particleCount = 6,
    className = '',
}: {
    colors?: string[];
    particleCount?: number;
    className?: string;
}) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {colors.map((color, i) => (
                <div
                    key={i}
                    className={`absolute rounded-full blur-3xl animate-pulse`}
                    style={{
                        backgroundColor: color + '20', // 12.5% opacity
                        width: i === 0 ? '60%' : i === 1 ? '50%' : '100%',
                        height: i === 0 ? '60%' : i === 1 ? '50%' : '100%',
                        top: i === 0 ? '-20%' : i === 1 ? '80%' : '50%',
                        left: i === 0 ? '60%' : i === 1 ? '-10%' : '50%',
                        transform: i === 2 ? 'translate(-50%, -50%)' : 'none',
                    }}
                />
            ))}
            {mounted && Array.from({ length: particleCount }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-[#F9C81B]/20 backdrop-blur-sm border border-white/10"
                    style={{
                        width: Math.random() * 100 + 40,
                        height: Math.random() * 100 + 40,
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: Math.random() * 8 + 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
export default AnimatedBackground;