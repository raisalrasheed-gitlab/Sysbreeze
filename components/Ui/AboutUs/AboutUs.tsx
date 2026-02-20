"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Play } from "lucide-react";

const SecondSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeText = "ABOUT IMMIX TECHNOLOGIES";

    // Array for marquee items
    const items = Array(4).fill(marqueeText);

    // Parallax Logic: Track scroll progress of this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax offset: Moves as you scroll
    const parallaxX = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const smoothParallaxX = useSpring(parallaxX, { stiffness: 100, damping: 30 });

    return (
        <section
            ref={containerRef}
            className="bg-black text-white overflow-hidden select-none pt-6"
        >
            <div className="relative flex whitespace-nowrap overflow-hidden">
                {/* Outer Div: Handles the Parallax Offset */}
                <motion.div
                    style={{ x: smoothParallaxX }}
                    className="flex"
                >
                    {/* Inner Div: Handles Continuous Marquee Animation */}
                    <motion.div
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex items-center gap-12 pr-12"
                    >
                        {/* Two sets of items for seamless marquee loop */}
                        {[...items, ...items].map((text, idx) => (
                            <div key={idx} className="flex items-center gap-12">
                                <div className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/40 group transition-colors duration-500 hover:border-brand-accent">
                                    <Play fill="white" size={24} className="ml-1 md:scale-150 transition-transform duration-500 group-hover:scale-[1.7]" />
                                </div>
                                <h2 className="text-7xl md:text-[12rem] font-black  uppercase tracking-tighter leading-none hover:text-brand-accent transition-colors duration-500">
                                    {text}
                                </h2>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Agency Info Section */}
            <div className="container mx-auto px-[5vw] py-8 md:py-16 flex flex-col items-center text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                    className="text-white text-3xl md:text-6xl font-medium max-w-5xl leading-[1.1] tracking-tight mb-20"
                >
                    Sysbreeze is a future-focused business consulting, IT services, and training company dedicated to helping brands grow, businesses scale, and professionals build real-world skills.
                </motion.h3>

                <motion.a
                    href="/about"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="group flex flex-col items-center gap-2"
                >
                    <span className="relative text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors duration-300">
                        MORE ABOUT US
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                </motion.a>
            </div>
        </section>
    );
};

export default SecondSection;
