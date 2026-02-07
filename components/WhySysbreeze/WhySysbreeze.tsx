"use client";

import { motion } from "framer-motion";

const highLights = [
    "Industry-Expert Trainers",
    "Live Projects & Practical Learning",
    "Placement & Career Guidance",
    "Latest Tools & Technologies",
    "Affordable Pricing",
    "Dedicated Student Support"
];

const whySysbreeze = [
    {
        title: "One-Stop Solution",
        desc: "Services + Training under one roof",
        icon: "🚀"
    },
    {
        title: "Result-Driven Approach",
        desc: "Focused on growth & ROI",
        icon: "🎯"
    },
    {
        title: "Expert Team",
        desc: "Skilled professionals & trainers",
        icon: "🧠"
    },
    {
        title: "Practical Execution",
        desc: "Real projects, real outcomes",
        icon: "🛠️"
    }
];

const industries = [
    "Healthcare", "Education", "Ecommerce", "Startups", "Corporate", "Retail"
];

export default function WhySysbreeze() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Why Sysbreeze */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl font-black mb-8 tracking-tight text-black"
                        >
                            💡 Why Sysbreeze?
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {whySysbreeze.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:shadow-xl hover:shadow-zinc-200/50 transition-all"
                                >
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="font-bold text-lg mb-2 text-black">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Highlights & Industries */}
                    <div className="space-y-12">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-2xl font-black mb-6 tracking-tight text-black uppercase"
                            >
                                ⭐ Highlights
                            </motion.h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {highLights.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-center gap-3 text-zinc-600 font-medium"
                                    >
                                        <i className="fa-solid fa-check text-green-500"></i>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-2xl font-black mb-6 tracking-tight text-black uppercase"
                            >
                                🧩 Industries We Serve
                            </motion.h2>
                            <div className="flex flex-wrap gap-3">
                                {industries.map((industry, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 text-xs font-bold tracking-widest uppercase border border-zinc-200"
                                    >
                                        {industry}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Placeholder Block */}
                <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-r from-zinc-900 to-black text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <i className="fa-solid fa-quote-right text-9xl"></i>
                    </div>
                    <div className="relative z-10 max-w-3xl">
                        <span className="text-pink-500 font-bold tracking-widest uppercase text-xs mb-8 block">💬 What Our Clients Say</span>
                        <p className="text-2xl md:text-3xl font-medium italic leading-relaxed mb-8">
                            “Sysbreeze helped us transform our brand and increase our online presence significantly. Professional team, excellent support, and on-time delivery.”
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-black text-xl text-pink-500">S</div>
                            <div>
                                <div className="font-bold tracking-widest uppercase text-xs">Satisfied Client</div>
                                <div className="text-zinc-500 text-[10px] uppercase">Corporate Partner</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
