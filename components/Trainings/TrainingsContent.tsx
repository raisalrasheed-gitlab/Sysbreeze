"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const trainingPrograms = [
    {
        title: "HR Management Training Course",
        description:
            "Professional HR Management training course covering recruitment, employee onboarding, payroll management, and labor law compliance. This job-oriented certification program provides practical HR skills with placement assistance. Available in both online and offline training modes.",
        image: "/images/hr.jpg",
        tags: ["HR Certification", "Placement Support", "Online & Offline"],
        href: "#"
    },

    {
        title: "Digital Marketing Training Course",
        description:
            "Comprehensive Digital Marketing training including SEO, Google Ads, social media marketing, content marketing, and analytics. Learn practical skills through live projects and real campaigns. Ideal for students and professionals seeking a career in digital marketing.",
        image: "/images/digitalmarketing.jpg",
        tags: ["SEO Training", "Live Projects", "Online & Offline"],
        href: "#"
    },

    {
        title: "Python Full Stack Development Course",
        description:
            "Job-oriented Python Full Stack Development course covering Python programming, Django, APIs, and frontend technologies. Learn to build real-world web applications and become a professional full stack developer. Available in online and offline classes.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        tags: ["Python", "Fullstack", "Online & Offline"],
        href: "#"
    },

    {
        title: "Artificial Intelligence & Robotics Training",
        description:
            "Advanced Artificial Intelligence and Robotics training program covering AI fundamentals, machine vision, automation, and robotics systems. Gain practical experience with modern AI tools and technologies through hands-on training.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        tags: ["AI Training", "Robotics", "Online & Offline"],
        href: "#"
    },

    {
        title: "MERN Stack Development Course",
        description:
            "Professional MERN Stack training course covering MongoDB, Express.js, React, and Node.js. Learn modern web development by building real-time applications. Ideal for students who want to become full stack web developers.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        tags: ["MERN Stack", "React", "Online & Offline"],
        href: "#"
    },

    {
        title: "Data Science Certification Course",
        description:
            "Complete Data Science training program covering Python, data analysis, machine learning basics, and data visualization. Learn how to analyze business data and build predictive models with real-world datasets.",
        image: "/images/webdevelop.jpg",
        tags: ["Data Science", "Analytics", "Online & Offline"],
        href: "#"
    },

    {
        title: "Machine Learning Training Course",
        description:
            "Professional Machine Learning training covering supervised learning, deep learning, and neural networks. Learn to build intelligent systems and predictive models using real-world datasets and practical projects.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        tags: ["Machine Learning", "AI", "Online & Offline"],
        href: "#"
    }
];

export default function TrainingsContent() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.1),transparent_50%)]" />
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
                            Selected Programs
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none uppercase max-w-5xl"
                    >
                        Industry-Focused <br /> Training Program
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50 text-xl md:text-2xl font-medium max-w-3xl mt-10 leading-tight"
                    >
                        Empower your career with our specialized training programs designed for real-world excellence. We offer flexible learning with both **online and offline classes** to suit your schedule.
                    </motion.p>
                </div>

                {/* Programs Showcase */}
                <div className="grid gap-12 max-w-6xl mx-auto">
                    {trainingPrograms.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group"
                        >
                            <Link href={program.href} className="flex flex-col items-center">
                                <div className="relative aspect-[16/9] w-full rounded-[3rem] overflow-hidden border border-white/5 mb-10">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-center mb-6 group-hover:text-[#c1227d] transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-white/50 text-center max-w-2xl mb-8 leading-relaxed font-medium">
                                    {program.description}
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {program.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-widest uppercase text-white/60 group-hover:border-[#c1227d]/30 group-hover:text-[#c1227d]/80 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
