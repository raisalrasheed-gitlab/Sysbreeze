"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function AboutUs() {
    return (
        <section className="py-8 md:py-16 bg-white overflow-hidden" id="about">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Label / Title */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-32"
                        >
                            <span className="text-pink-600 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                                👋 Who We Are
                            </span>
                            <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter leading-none mb-8">
                                ABOUT<br />SYSBREEZE
                            </h2>
                            <div className="w-20 h-2 bg-black rounded-full mb-8"></div>
                        </motion.div>
                    </div>

                    {/* Animated Content */}
                    <div className="lg:col-span-8 space-y-12">
                        <ScrollReveal
                            baseOpacity={0.1}
                            baseRotation={2}
                            blurStrength={8}
                            scrollLag={1.2}
                            textClassName="text-2xl md:!text-4xl font-bold text-zinc-900 leading-tight"
                        >
                            Sysbreeze is a future-focused business consulting, IT services, and training company dedicated to helping brands grow, businesses scale, and professionals build real-world skills.
                        </ScrollReveal>

                        <ScrollReveal
                            baseOpacity={0.1}
                            baseRotation={1}
                            blurStrength={5}
                            scrollLag={1.5}
                            textClassName="text-lg md:!text-4xl font-medium text-zinc-600 leading-relaxed"
                        >
                            We bring together strategy, technology, marketing, HR, and education under one roof — making us a true one-stop solution for businesses and learners alike. From building powerful brand identities to delivering cutting-edge digital solutions and industry-ready training, Sysbreeze is driven by results that matter.
                        </ScrollReveal>

                        <div className="pt-8 border-t border-zinc-100">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-xl font-black text-black uppercase tracking-widest mb-6"
                            >
                                Our Mission is Simple
                            </motion.h3>

                            <ScrollReveal
                                baseOpacity={0.05}
                                baseRotation={0}
                                blurStrength={10}
                                scrollLag={2}
                                textClassName="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 tracking-tighter"
                            >
                                Build strong brands. Power sustainable growth. Shape future tech leaders.
                            </ScrollReveal>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
