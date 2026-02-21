"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        rating: 5,
        text: "Sysbreeze has been a master of Project Management. With their deep professional and practical knowledge, they shared their valuable experiences and abilities.",
        author: "Dhillon",
        role: "Project Tester",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
        rating: 5,
        text: "Sysbreeze is the best professional project partner in the world! They are a great motivator for beginners in this discipline in organic colleagues in India. ",
        author: "Marvin McKinney",
        role: "Team Leader",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
        rating: 5,
        text: "The IT services provided by Sysbreeze transformed our digital presence. Their attention to detail and innovative solutions helped us scale faster than we ever imagined. Truly a future-focused partner.",
        author: "Sarah Johnson",
        role: "CEO, TechFlow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(0); // 1 for right, -1 for left

    const handleNext = useCallback(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-play logic
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [handleNext, isPaused]);

    return (
        <section className="bg-black relative py-24  overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            {/* Decorative background elements */}

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-blue-100 mb-8"
                    >
                        <Star className="w-4 h-4 text-[#4B2AAD] fill-[#4B2AAD]" />
                        <span className="text-[#4B2AAD] font-bold text-sm">Testimonials</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black text-[#ffffff] tracking-tighter mb-6 leading-tight"
                    >
                        Used by More Than <br /> 100+ Business
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-500 max-w-2xl font-medium"
                    >
                        Hear what they say about Sysbreeze and why <br className="hidden md:block" /> you should choose Sysbreeze
                    </motion.p>
                </div>

                {/* Testimonials Slider Container */}
                <div className="relative max-w-4xl mx-auto h-[450px] md:h-[400px]">
                    <AnimatePresence initial={false} mode="wait" custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={{
                                enter: (direction: number) => ({
                                    x: direction > 0 ? 200 : -200,
                                    opacity: 0,
                                    scale: 0.95
                                }),
                                center: {
                                    zIndex: 1,
                                    x: 0,
                                    y: 0,
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: (direction: number) => ({
                                    zIndex: 0,
                                    x: direction < 0 ? 200 : -200,
                                    opacity: 0,
                                    scale: 0.95
                                })
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = offset.x;
                                const swipeThreshold = 50;
                                if (swipe < -swipeThreshold) {
                                    handleNext();
                                } else if (swipe > swipeThreshold) {
                                    handlePrev();
                                }
                            }}
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.4 }
                            }}
                            className="absolute inset-0 bg-white p-8 md:p-12 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group cursor-grab active:cursor-grabbing"
                        >
                            <div>
                                {/* Stars */}
                                <div className="flex gap-1 mb-8">
                                    {[...Array(testimonials[index].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#4B2AAD] fill-[#4B2AAD]" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 font-medium italic">
                                    "{testimonials[index].text}"
                                </p>
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-gray-100">
                                        <img
                                            src={testimonials[index].image}
                                            alt={testimonials[index].author}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-[#1E1B4B] font-bold text-xl uppercase tracking-tight">
                                            {testimonials[index].author}
                                        </h4>
                                        <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">
                                            {testimonials[index].role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls - Desktop only */}
                    <div className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 z-20">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#4B2AAD] shadow-md hover:bg-[#4B2AAD] hover:text-white transition-all duration-300"
                            aria-label="Previous Testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    </div>
                    <div className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 z-20">
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#4B2AAD] shadow-md hover:bg-[#4B2AAD] hover:text-white transition-all duration-300"
                            aria-label="Next Testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Pagination Indicators */}
                    <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 flex gap-3">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > index ? 1 : -1);
                                    setIndex(i);
                                }}
                                className={`h-2 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-[#4B2AAD]" : "w-2 bg-gray-200"
                                    }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
