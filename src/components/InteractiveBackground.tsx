import React, { useEffect, useState, useMemo } from 'react';

interface VibeElement {
    id: number;
    emoji: string;
    size: string;
    top: string;
    left: string;
    parallaxSpeed: { x: number; y: number };
    floatDelay: string;
    floatDuration: string;
}

const InteractiveBackground: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const elements = useMemo<VibeElement[]>(() => {
        const emojis = ['🍅', '🌿', '🫒', '🌶️', '🧀', '🍄', '🧅'];
        return Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            emoji: emojis[i % emojis.length],
            size: `${20 + Math.random() * 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            parallaxSpeed: {
                x: (Math.random() - 0.5) * 30,
                y: (Math.random() - 0.5) * 30,
            },
            floatDelay: `${Math.random() * 5}s`,
            floatDuration: `${4 + Math.random() * 4}s`,
        }));
    }, []);

    const shapes = [
        { size: 'w-64 h-64', color: 'bg-primary/10', initial: { top: '10%', left: '10%' }, speed: 0.8 },
        { size: 'w-96 h-96', color: 'bg-secondary/5', initial: { top: '60%', left: '70%' }, speed: -1.2 },
        { size: 'w-80 h-80', color: 'bg-accent/5', initial: { top: '20%', left: '80%' }, speed: 0.5 },
        { size: 'w-72 h-72', color: 'bg-primary/5', initial: { top: '80%', left: '20%' }, speed: -0.7 },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-background">
            {/* Dynamic Glows */}
            {shapes.map((shape, i) => (
                <div
                    key={i}
                    className={`absolute rounded-full blur-[100px] transition-transform duration-1000 ease-out ${shape.size} ${shape.color}`}
                    style={{
                        ...shape.initial,
                        transform: `translate(${mousePos.x * shape.speed * 20}px, ${mousePos.y * shape.speed * 20}px)`,
                    }}
                />
            ))}

            {/* Thematic Elements (Ingredients) */}
            {elements.map((el) => (
                <div
                    key={el.id}
                    className="absolute select-none opacity-20 filter blur-[1px] transition-transform duration-500 ease-out"
                    style={{
                        top: el.top,
                        left: el.left,
                        fontSize: el.size,
                        animation: `float ${el.floatDuration} ease-in-out infinite alternate`,
                        animationDelay: el.floatDelay,
                        transform: `translate(${mousePos.x * el.parallaxSpeed.x}px, ${mousePos.y * el.parallaxSpeed.y}px)`,
                    }}
                >
                    {el.emoji}
                </div>
            ))}

            {/* Subtle Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

            {/* Interactive Light Follower */}
            <div
                className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] transition-all duration-500 ease-out"
                style={{
                    left: `calc(50% + ${mousePos.x * 50}% - 250px)`,
                    top: `calc(50% + ${mousePos.y * 50}% - 250px)`,
                    opacity: 0.4
                }}
            />
        </div>
    );
};

export default InteractiveBackground;
