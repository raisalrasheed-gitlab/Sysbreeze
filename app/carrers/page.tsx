"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CountUp from "@/components/Ui/CountUp";

const stats = [
    {
        label: "Years of Professional Web Development Experience",
        value: "8+",
        icon: "fa-code"
    },
    {
        label: "Successful Websites & Digital Projects Delivered",
        value: "120+",
        icon: "fa-check-double"
    },
    {
        label: "Industries Served Across Global Business Markets",
        value: "15+",
        icon: "fa-globe"
    },
    {
        label: "Long Term Client Trust and Satisfaction",
        value: "100%",
        icon: "fa-heart"
    }
];

const openPositions = [
    {
        title: "Frontend Developer",
        description: "Build responsive, high-quality interfaces using modern web technologies.",
        badges: ["Full Time", "Remote"],
        requirements: [
            "HTML, CSS, JavaScript",
            "React or Vue (bonus)",
            "Responsive design"
        ]
    },
    {
        title: "UI/UX Designer",
        description: "Create stunning, user-centric designs for a variety of digital platforms.",
        badges: ["Contract", "Remote"],
        requirements: [
            "Figma or Adobe XD",
            "Strong layout and color theory",
            "Prototyping skills"
        ]
    }
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_0%,rgba(34,211,238,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#c1227d] animate-pulse"></span>
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/80">
                            Join Us
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none uppercase max-w-5xl"
                    >
                        Collaboration <br /> Opportunities
                    </motion.h1>
                </div>

                {/* Why Work With Us Section */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-12 md:mb-16 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#c1227d]"></span>
                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/60">
                                Why Work With Us
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-10 leading-none">
                            Build, Learn, and Grow
                        </h2>

                        <p className="text-xl md:text-2xl text-white/50 font-medium leading-tight mb-12">
                            At Sysbreeze, we focus on quality, creativity, and long-term growth. You'll work on real projects, sharpen your skills, and grow alongside a passionate team.
                        </p>

                        <ul className="space-y-6">
                            {[
                                "Flexible and remote-friendly work",
                                "Real-world web development projects",
                                "Creative and supportive environment",
                                "Opportunities to grow your skills"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 text-lg font-bold text-white/80"
                                >
                                    <span className="w-2 h-2 rounded-full bg-[#c1227d]" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Let's Build Together Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/[0.02] border border-white/5 rounded-[4rem] p-10 md:p-20 text-center mb-12 max-w-6xl mx-auto relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.1),transparent_50%)]" />

                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 relative z-10">
                        Let's Build Together
                    </h2>
                    <p className="text-xl md:text-2xl text-white/50 font-medium mb-12 max-w-2xl mx-auto relative z-10">
                        Join Sysbreeze and be part of meaningful digital projects.
                    </p>

                    <Link href="/contact" className="relative z-10 inline-block">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 rounded-full border border-[#c1227d] text-[#c1227d] font-black text-xl hover:bg-[#c1227d] hover:text-black transition-all duration-300 uppercase tracking-tighter"
                        >
                            Contact Us
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Statistics Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-white/10 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-6">
                                <i className={`fa-solid ${stat.icon} text-xl text-[#c1227d]`} />
                            </div>
                            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/40 mb-6 min-h-[40px]">
                                {stat.label}
                            </h4>
                            <div className="text-6xl md:text-7xl font-black tracking-tighter text-white/20 group-hover:text-[#c1227d] transition-colors">
                                <CountUp value={stat.value} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Open Positions Section */}
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-12 md:mb-16 uppercase"
                    >
                        Open Positions
                    </motion.h2>

                    <div className="flex flex-col gap-8">
                        {openPositions.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#0a0a0a] p-10 md:p-14 rounded-[3rem] border border-white/5 group hover:border-white/10 transition-all overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="relative z-10">
                                    <div className="flex flex-wrap gap-3 mb-8 justify-center">
                                        {job.badges.map((badge, bIndex) => (
                                            <span
                                                key={bIndex}
                                                className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-widest uppercase text-white/60 group-hover:border-[#c1227d]/30 group-hover:text-[#c1227d]/80 transition-colors"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-center mb-6 group-hover:text-[#c1227d] transition-colors">
                                        {job.title}
                                    </h3>

                                    <p className="text-xl text-white/50 text-center font-medium mb-10 max-w-2xl mx-auto">
                                        {job.description}
                                    </p>

                                    <ul className="flex flex-col gap-4 items-center mb-12">
                                        {job.requirements.map((req, rIndex) => (
                                            <li key={rIndex} className="flex items-center gap-3 text-lg font-bold text-white/80">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#c1227d]" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-10 py-4 rounded-2xl border border-[#c1227d] text-[#c1227d] font-black text-lg uppercase tracking-tight transition-all hover:bg-[#c1227d] hover:text-black shadow-[0_0_30px_rgba(193,34,125,0.2)] hover:shadow-[0_0_50px_rgba(193,34,125,0.4)]"
                                        >
                                            Apply Now
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
