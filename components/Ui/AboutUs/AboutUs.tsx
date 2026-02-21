"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Play } from "lucide-react";

const SecondSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);
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
            className="relative bg-black text-white overflow-hidden select-none pt-6"
        >
            {/* <div className="relative flex whitespace-nowrap overflow-hidden">
                <motion.div
                    style={{ x: smoothParallaxX }}
                    className="flex"
                >
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
            </div> */}

            {/* Agency Info Section */}
            <div className="container mx-auto px-[5vw] py-8 md:py-16 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                    className="max-w-5xl mb-12 md:mb-20"
                >
                    <h3 className="text-white text-3xl md:text-6xl font-medium leading-[1.1] tracking-tight">
                        <span className="inline md:hidden">
                            Sysbreeze Technologies Pvt. Ltd. is a future-focused business consulting, IT services, and HR services company helping organizations grow faster, scale smarter, and build high-performance teams. We deliver innovative digital solutions, workforce management, and AI-powered training programs
                            {!isExpanded ? (
                                <>
                                    {"... "}
                                    <button
                                        onClick={() => setIsExpanded(true)}
                                        className="text-xl font-bold ml-1 cursor-pointer"
                                    >
                                        more
                                    </button>
                                </>
                            ) : (
                                " designed to develop real-world skills, improve productivity, and accelerate business transformation. Our integrated approach combines technology, talent, and strategy to drive sustainable growth for startups, enterprises, and professionals"
                            )}
                        </span>
                        <span className="hidden md:inline">
                            Sysbreeze Technologies Pvt. Ltd. is a future-focused business consulting, IT services, and HR services company helping organizations grow faster, scale smarter, and build high-performance teams. We deliver innovative digital solutions, workforce management, and AI-powered training programs designed to develop real-world skills, improve productivity, and accelerate business transformation. Our integrated approach combines technology, talent, and strategy to drive sustainable growth for startups, enterprises, and professionals
                        </span>
                    </h3>
                </motion.div>

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
