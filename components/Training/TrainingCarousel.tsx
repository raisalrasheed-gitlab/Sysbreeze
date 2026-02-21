"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrainingProgram {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    color: string;
}

interface TrainingCarouselProps {
    programs: TrainingProgram[];
}

export default function TrainingCarousel({ programs }: TrainingCarouselProps) {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const handleNext = useCallback(() => {
        setIndex((prev) => (prev + 1) % programs.length);
    }, [programs.length]);

    const handlePrev = useCallback(() => {
        setIndex((prev) => (prev - 1 + programs.length) % programs.length);
    }, [programs.length]);

    // Auto-play logic
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            handleNext();
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer);
    }, [handleNext, isPaused]);

    return (
        <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative h-[450px] sm:h-[600px] w-full flex items-center justify-center perspective-1000 overflow-hidden"
        >
            <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                <AnimatePresence initial={false}>
                    {programs.map((program, i) => {
                        const distance = (i - index + programs.length) % programs.length;
                        const normalizedDistance = distance > programs.length / 2 ? distance - programs.length : distance;

                        // Logic for 3D positioning
                        const isActive = normalizedDistance === 0;

                        if (Math.abs(normalizedDistance) > 2) return null;

                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                animate={{
                                    x: normalizedDistance * 120, // More compact horizontal offset
                                    scale: isActive ? 1 : 0.85, // Slightly larger inactive cards
                                    rotateY: normalizedDistance * -45, // Sharper 3D Rotation
                                    zIndex: 10 - Math.abs(normalizedDistance),
                                    opacity: Math.abs(normalizedDistance) > 1 ? 0.2 : 1,
                                    filter: isActive ? "blur(0px)" : "blur(4px)",
                                }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className={`absolute w-[300px] md:w-[400px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl cursor-pointer bg-neutral-900 border border-white/10 flex flex-col`}
                                onClick={() => setIndex(i)}
                            >
                                {/* Gradient Background Header */}
                                <div className={`h-1/2 w-full bg-gradient-to-br ${program.color} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
                                    <motion.i
                                        animate={{ rotate: isActive ? 0 : 15 }}
                                        className={`fa-solid ${program.icon} text-8xl text-white relative z-10 drop-shadow-2xl`}
                                    ></motion.i>

                                    {/* Decorative elements */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/20 rounded-full blur-3xl" />
                                </div>

                                {/* Content Section */}
                                <div className={`flex-1 p-5 flex flex-col justify-between bg-zinc-900 transition-opacity duration-300 gap-2 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                                    <div>
                                        <h4 className="text-cyan-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-2 italic">
                                            {program.subtitle}
                                        </h4>
                                        <h3 className="text-2xl font-black text-white leading-tight uppercase mb-4">
                                            {program.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                                            {program.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 h-[1px] bg-white/10" />
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`px-6 py-2 rounded-full bg-gradient-to-r ${program.color} text-white text-[10px] font-bold tracking-widest uppercase shadow-lg`}
                                        >
                                            Enroll Now
                                        </motion.button>
                                        <div className="flex-1 h-[1px] bg-white/10" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-[-40px] flex items-center gap-8">
                <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:border-white hover:text-black transition-all"
                    aria-label="Previous Training"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <div className="flex gap-2">
                    {programs.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-[#f6339a]' : 'w-2 bg-white/20'}`}
                            aria-label={`Go to training ${i + 1}`}
                        />
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:border-white hover:text-black transition-all"
                    aria-label="Next Training"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}
