"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TrainingProgram {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    color: string;
}

interface TrainingStackProps {
    programs: TrainingProgram[];
}

export default function TrainingStack({ programs }: TrainingStackProps) {
    return (
        <div className="flex flex-col items-center w-full gap-20 md:py-10">
            {programs.map((program, i) => (
                <TrainingCard key={i} program={program} index={i} total={programs.length} />
            ))}
        </div>
    );
}

function TrainingCard({ program, index, total }: { program: TrainingProgram; index: number; total: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Animation values
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    return (
        <div ref={containerRef} className="h-[600px] w-full flex items-center justify-center sticky top-0 md:top-20">
            <motion.div
                style={{ y, opacity, scale }}
                className="relative w-full max-w-[400px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-neutral-900 border border-white/10 flex flex-col group transition-all duration-500 hover:border-white/20"
            >
                {/* Gradient Background Header */}
                <div className={`h-1/2 w-full bg-gradient-to-br ${program.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
                    <i className={`fa-solid ${program.icon} text-8xl text-white relative z-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110`}></i>

                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/20 rounded-full blur-3xl" />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 flex flex-col justify-between bg-zinc-900 gap-4">
                    <div>
                        <h4 className="text-cyan-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-2 italic">
                            {program.subtitle}
                        </h4>
                        <h3 className="text-2xl font-black text-white leading-tight uppercase mb-4">
                            {program.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {program.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-[1px] bg-white/10" />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-8 py-3 rounded-full bg-gradient-to-r ${program.color} text-white text-[10px] font-bold tracking-widest uppercase shadow-lg`}
                        >
                            Enroll Now
                        </motion.button>
                        <div className="flex-1 h-[1px] bg-white/10" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
