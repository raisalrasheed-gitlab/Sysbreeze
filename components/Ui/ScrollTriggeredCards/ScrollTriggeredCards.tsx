"use client"

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

interface Service {
    icon: string;
    title: string;
    subtitle?: string;
    description?: string;
    bgColor: string;
}

interface ScrollTriggeredCardsProps {
    services: Service[];
}

export default function ScrollTriggeredCards({ services }: ScrollTriggeredCardsProps) {
    return (
        <div className="flex flex-col items-center w-full pt-0 pb-20 no-scrollbar">
            {services.map((service, i) => (
                <CardSection key={i} i={i} service={service} />
            ))}
        </div>
    );
}

function CardSection({ i, service }: { i: number, service: Service }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Dynamic transformations based on scroll
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.5]);
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 0, 6]);

    return (
        <div
            ref={containerRef}
            className="h-[70vh] w-full relative mb-8"
            style={{ zIndex: i }}
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                <motion.div
                    style={{ scale, opacity, rotate }}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full max-w-[450px] aspect-[1/1.2] flex justify-center items-center relative"
                >
                    {/* Splash Background - Rotated -10deg via parent onscreen animation */}
                    <div
                        className="absolute inset-0 z-0 bg-white   rounded-[60px]"
                        style={{
                            clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
                        }}
                    />

                    {/* White Card Content */}
                    <motion.div
                        variants={cardVariants}
                        className="w-[310px] h-[440px] rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-10 origin-center bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] flex flex-col items-center justify-center p-4 text-white"
                    >
                        <div className="mb-6 flex items-center justify-center">
                            <i className={`fa-solid ${service.icon} text-7xl text-white`}></i>
                        </div>
                        <h3 className="text-3xl font-black text-center uppercase tracking-tighter leading-none mb-3">
                            {service.title}
                        </h3>
                        {service.subtitle && (
                            <p className="text-sm font-bold text-white/90 text-center uppercase tracking-wider mb-2 leading-tight">
                                {service.subtitle}
                            </p>
                        )}
                        {service.description && (
                            <p className="text-[11px] text-white/70 text-center leading-relaxed line-clamp-5 mb-4">
                                {service.description} <span className="text-white font-bold italic">more..</span>
                            </p>
                        )}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-bold text-[10px] tracking-widest uppercase transition-colors backdrop-blur-sm flex items-center gap-2 mt-2"
                        >
                            Explore More
                            <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
            {/* The gap is created by the 130vh height minus the 100vh sticky area */}
        </div>
    );
}

const cardVariants: Variants = {
    offscreen: {
        y: 400,
        rotate: 0,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.35,
            duration: 1,
        },
    },
};
