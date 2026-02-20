"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const trainingPrograms = [
    {
        title: "HR TRAINING",
        description: "Master the essentials of Human Resource Management, from talent acquisition and onboarding to payroll administration and labor law compliance. Our curriculum provides hands-on exposure to modern HR tools and real-world scenarios, ensuring you're ready for the dynamic corporate landscape. Available in both online and offline formats with guaranteed placement support.",
        image: "/images/hr.jpg",
        tags: ["Certification", "Placement Assistance", "Online & Offline"],
        href: "#"
    },
    {
        title: "DIGITAL MARKETING",
        description: "Transform your marketing career with our comprehensive Digital Marketing program. Dive deep into SEO, Google Ads, Social Media Marketing, Content Strategy, and Data Analytics. You'll work on live campaigns, learn to drive organic traffic, and optimize conversion rates under the guidance of industry experts. Flexible online and offline sessions available.",
        image: "/images/digitalmarketing.jpg",
        tags: ["Live Projects", "Online & Offline"],
        href: "#"
    },
    {
        title: "PYTHON FULLSTACK",
        description: "Become a versatile developer with our Python Fullstack course. Learn the intricacies of Python programming, Django and Flask frameworks, RESTful APIs, and frontend technologies like React. This program focuses on building scalable, real-world applications from scratch, preparing you for high-demand engineering roles. Choose from interactive online or hands-on offline batches.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        tags: ["Expert Trainers", "Fullstack", "Online & Offline"],
        href: "#"
    },
    {
        title: "AI & ROBOTICS",
        description: "Step into the future with our AI & Robotics training. This program covers fundamental Artificial Intelligence concepts, machine vision, and hands-on robotics engineering. You'll gain practical experience with sensors, actuators, and AI integration in automated systems. We provide state-of-the-art laboratory access for offline students and advanced virtual simulation environments for online learners.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        tags: ["Latest Tools", "Lab Access", "Online & Offline"],
        href: "#"
    },
    {
        title: "MERN STACK",
        description: "Dominate modern web development with the MERN Stack (MongoDB, Express, React, and Node.js). Our intensive course takes you from frontend design to backend architecture, focusing on real-time application building and efficient database management. This program is ideal for those looking to build fast, data-driven web solutions. Available through comprehensive online and offline training sessions.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        tags: ["React", "Placement Assistance", "Online & Offline"],
        href: "#"
    },
    {
        title: "DATA SCIENCE",
        description: "Unlock the power of data with our Data Science certification. Learn to collect, analyze, and interpret complex data sets using Python, R, and advanced visualization tools. Our curriculum covers statistical modeling, predictive analytics, and real-world case studies across various industries. Whether you join our flexible online batches or attend offline workshops, you'll gain the skills to drive informed business decisions.",
        image: "/images/webdevelop.jpg",
        tags: ["Analysis", "Big Data", "Online & Offline"],
        href: "#"
    },
    {
        title: "MACHINE LEARNING",
        description: "Delve into the world of intelligent algorithms with our Machine Learning program. We cover supervised and unsupervised learning, deep learning, and neural network architectures. You'll learn to build and deploy models that can learn from data and improve over time. Specialized training modules are available through both online and offline modes, tailored for aspiring AI engineers.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        tags: ["Modeling", "Advanced", "Online & Offline"],
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
