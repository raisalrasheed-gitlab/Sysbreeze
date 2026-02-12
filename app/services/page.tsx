"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        title: "BRANDING",
        subtitle: "Turn Your Vision into a Powerful Brand Identity",
        description: "We craft unique brand identities that resonate with your target audience and stand out in competitive markets. Our comprehensive approach includes logo design, color palette selection, typography, and brand messaging.",
        image: "/images/branding.jpg"
    },
    {
        title: "DIGITAL MARKETING",
        subtitle: "Reach the Right Audience. Convert Better. Grow Faster.",
        description: "Our data-driven marketing strategies are designed to maximize your ROI and accelerate business growth. We combine SEO, content marketing, social media management, and pay-per-click advertising.",
        image: "/images/digitalmarketing.jpg"
    },
    {
        title: "HR MANAGEMENT",
        subtitle: "People. Process. Performance.",
        description: "Optimize your workforce with our professional human resource management solutions tailored to your specific needs. We handle talent acquisition, employee onboarding, performance evaluations, and strategic workforce planning.",
        image: "/images/hr.jpg"
    },
    {
        title: "WEBSITE DESIGN",
        subtitle: "Websites That Look Great & Work Even Better",
        description: "We build high-performance, responsive websites that combine aesthetic excellence with seamless user experience. We use the latest technologies like React and Next.js to provide a modern, future-proof digital platform.",
        image: "/images/webdevelop.jpg"
    },
    {
        title: "ECOMMERCE DEVELOP",
        subtitle: "Sell Online Without Limits",
        description: "Launch and scale your online store with our robust ecommerce solutions designed for growth and reliability. We provide secure payment gateway integration, intuitive product management, and optimized checkout flows.",
        image: "/images/ecommerce.jpg"
    },
    {
        title: "MOBILE APPLICATION",
        subtitle: "Apps That Engage, Perform & Scale",
        description: "Create powerful mobile experiences with our custom iOS and Android app development services for modern businesses. We design intuitive user interfaces that promote engagement and provide exceptional value.",
        image: "/images/mobileapp.jpg"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background Animated Trails */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,57,249,0.15),transparent_50%)]" />
                <motion.div
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                            Our Services
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-none uppercase"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-white/70 max-w-2xl font-medium leading-tight mx-auto"
                    >
                        We build bold ideas, powered by AI and human creativity, that push boundaries and spark growth.
                    </motion.p>
                </div>

                {/* Services Cards */}
                <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group flex flex-col bg-[#0a0a0a] rounded-[3rem] overflow-hidden border border-white/5 hover:border-white/10 transition-colors shadow-2xl"
                        >
                            {/* Card Image */}
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    priority={index < 2}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />

                                {/* Overlay Content Header (Small) */}
                                <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-black tracking-[0.2em] uppercase text-white">
                                        Service {index + 1}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-10 md:p-14 pt-6">
                                <motion.h2
                                    className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-none"
                                >
                                    {service.title}
                                </motion.h2>
                                <p className="text-xl text-white/80 font-bold mb-4">
                                    {service.subtitle}
                                </p>
                                <p className="text-lg text-white/50 font-medium leading-relaxed mb-10">
                                    {service.description}
                                </p>
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-3 text-white font-black tracking-widest uppercase text-xs group/btn border-b border-white/10 pb-2 w-fit"
                                >
                                    Explore Solution
                                    <i className="fa-solid fa-arrow-right-long text-cyan-400 transition-transform group-hover/btn:translate-x-2" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
