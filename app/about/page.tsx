"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, Target, Eye, Shield, Zap, Users } from "lucide-react";

export default function AboutPage() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    const values = [
        {
            icon: <Zap className="w-6 h-6 text-white" />,
            title: "Innovation First",
            description: "We constantly push the boundaries of what's possible in tech and business."
        },
        {
            icon: <Target className="w-6 h-6 text-white" />,
            title: "Result Oriented",
            description: "Our strategies are data-driven and focused on delivering measurable growth."
        },
        {
            icon: <Shield className="w-6 h-6 text-white" />,
            title: "Trust & Integrity",
            description: "We build long-lasting partnerships based on transparency and reliability."
        },
        {
            icon: <Users className="w-6 h-6 text-white" />,
            title: "People Centric",
            description: "Empowering talent and building high-performance teams is our core strength."
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-brand-accent selection:text-white">
            {/* Hero Section */}
            <section className="relative h-fit mt-30 pb-12  flex flex-col items-center justify-center overflow-hidden px-6">
                <motion.div
                    style={{ opacity, scale }}
                    className="relative z-10 text-center max-w-5xl mx-auto"
                ><div className="w-fit mx-auto">    <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-fit flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                        Who We Are
                    </span>
                </motion.div></div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12"
                    >
                        SHAPING THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D81B8C] via-[#612D91] to-[#21094E]">FUTURE OF TECH</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-white/60 font-medium max-w-3xl mx-auto leading-relaxed"
                    >
                        Sysbreeze Technologies Pvt. Ltd. is a future-focused business consulting, IT services, and HR services company helping organizations grow faster, scale smarter, and build high-performance teams.
                    </motion.p>
                </motion.div>

                {/* Animated Background Gradients */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-transparent rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[#21094E] to-transparent rounded-full blur-[100px] animate-bounce-slow" />
                </div>
            </section>

            {/* Our Story / Mission Vision */}
            <section className="py-12 md:py-16 bg-zinc-950 px-[5vw]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">
                            The Vision Behind <span className="text-white/40">Sysbreeze</span>
                        </h2>
                        <div className="space-y-6 text-white/70 text-lg md:text-xl leading-relaxed font-light">
                            <p>
                                We believe that technology should be a catalyst for business growth, not a barrier. Founded with a vision to democratize access to cutting-edge digital solutions and high-level consulting, Sysbreeze has evolved into a strategic partner for businesses worldwide.
                            </p>
                            <p>
                                Our integrated approach combines technology, talent, and strategy to drive sustainable growth for startups, enterprises, and professionals.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-sm group hover:border-white/20 transition-all duration-500"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-[#D81B8C] to-[#612D91] rounded-2xl flex items-center justify-center mb-6">
                                <Target className="text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight italic">Our Mission</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                To deliver innovative digital solutions and workforce management that develop real-world skills, improve productivity, and accelerate business transformation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-sm group hover:border-white/20 transition-all duration-500"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-[#612D91] to-[#21094E] rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight italic">Our Vision</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                To be the global leader in shaping the future of tech and business, fostering a world where businesses scale smarter and professionals lead with innovation.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-12 md:py-16 px-[5vw]">
                <div className="text-center mb-20 md:mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black tracking-tighter uppercase "
                    >
                        Our Core Values
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 border border-white/10 rounded-[2.5rem] flex flex-col items-center text-center group hover:bg-white hover:text-black transition-all duration-700 ease-in-out"
                        >
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:bg-black transition-colors duration-700">
                                {v.icon}
                            </div>
                            <h4 className="text-xl md:text-2xl font-bold mb-4  uppercase tracking-tight">{v.title}</h4>
                            <p className="text-white/50 group-hover:text-black/70 leading-relaxed transition-colors duration-700">
                                {v.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>



            <style jsx global>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(30px, -30px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 10s infinite ease-in-out;
                }
            `}</style>
        </main>
    );
}
