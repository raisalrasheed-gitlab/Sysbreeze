"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Item {
    title: string;
    category: string;
    image: string;
    link: string;
}

interface ThreeDCarouselProps {
    items: Item[];
}

export default function ThreeDCarousel({ items }: ThreeDCarouselProps) {
    const [index, setIndex] = useState(2); // Start with the center item (assuming 5 items)

    const handleNext = () => setIndex((prev) => (prev + 1) % items.length);
    const handlePrev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                <AnimatePresence initial={false}>
                    {items.map((item, i) => {
                        const distance = (i - index + items.length) % items.length;
                        const normalizedDistance = distance > items.length / 2 ? distance - items.length : distance;

                        // Logic for 3D positioning
                        const isActive = normalizedDistance === 0;
                        const isPrev = normalizedDistance === -1;
                        const isNext = normalizedDistance === 1;
                        const isFarPrev = normalizedDistance === -2;
                        const isFarNext = normalizedDistance === 2;

                        if (Math.abs(normalizedDistance) > 2) return null;

                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                animate={{
                                    x: normalizedDistance * 280, // Horizontal offset
                                    scale: isActive ? 1 : 0.8,
                                    rotateY: normalizedDistance * -35, // 3D Rotation
                                    zIndex: 10 - Math.abs(normalizedDistance),
                                    opacity: Math.abs(normalizedDistance) > 1 ? 0.3 : 1,
                                    filter: isActive ? "blur(0px)" : "blur(2px)",
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute w-[320px] md:w-[450px] aspect-[4/5] md:aspect-square rounded-[40px] overflow-hidden shadow-2xl cursor-pointer bg-neutral-900 border border-white/10"
                                onClick={() => setIndex(i)}
                            >
                                {/* Image Placeholder/Content */}
                                <div className="absolute inset-0 z-0">
                                    <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-white/10 text-9xl">
                                        {i + 1}
                                    </div>
                                    {/* In a real app, use <Image /> here */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover mix-blend-overlay opacity-60"
                                    />
                                </div>

                                {/* Info Overlay */}
                                <div className={`absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                    <span className="text-pink-500 font-bold text-xs uppercase tracking-widest mb-1 block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight uppercase">
                                        {item.title}
                                    </h3>
                                    <div className="mt-4 flex items-center gap-4">
                                        <div className="w-12 h-1 bg-white rounded-full" />
                                        <span className="text-white text-xs font-bold uppercase tracking-widest">View Project</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-[-60px] flex items-center gap-8">
                <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <div className="flex gap-2">
                    {items.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-pink-500' : 'bg-white/20'}`}
                        />
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}
