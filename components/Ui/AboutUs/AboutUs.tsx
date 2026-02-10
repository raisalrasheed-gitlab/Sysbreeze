"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function AboutUs() {
    return (
        <section className="py-8 md:py-16 bg-white overflow-hidden" id="about">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                    {/* Label / Title */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-32"
                        >
                            <span className="text-pink-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block px-3 py-1 bg-pink-50 rounded-full">
                                OUR IDENTITY
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-black  leading-none mb-8">
                                ABOUT<br />SYSBREEZE
                            </h2>
                            <div className="w-20 h-2 bg-black rounded-full "></div>
                        </motion.div>
                    </div>

                    {/* Animated Content */}
                    <div className="lg:col-span-8">
                        <ScrollReveal
                            textClassName="text-2xl md:text-5xl lg:text-6xl "
                        >
                            Sysbreeze is a future-focused business consulting, IT services, and training company dedicated to helping brands grow, businesses scale, and professionals build real-world skills.
                        </ScrollReveal>


                    </div>

                </div>
            </div>
        </section>
    );
}
