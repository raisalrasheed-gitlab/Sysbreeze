"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const services = [

    {
        title: "Professional Branding Services",
        subtitle: "Create a Strong Business Brand Identity",
        description:
            "Expert branding services including logo design, brand identity creation, brand strategy, and business branding solutions. We help startups and businesses build a professional brand that attracts customers and increases trust.",
        image: "/images/branding.jpg"
    },

    {
        title: "Digital Marketing Services",
        subtitle: "SEO, Social Media and Online Marketing Solutions",
        description:
            "Complete digital marketing services including SEO services, social media marketing, Google Ads management, Meta Ads campaigns, and content marketing to increase website traffic and generate business leads.",
        image: "/images/digitalmarketing.jpg"
    },

    {
        title: "HR Management & Recruitment Services",
        subtitle: "Complete Human Resource Solutions",
        description:
            "Professional HR management and recruitment services including hiring, employee onboarding, payroll support, performance management, and workforce planning for startups and growing businesses.",
        image: "/images/hr.jpg"
    },

    {
        title: "Website Design & Development Services",
        subtitle: "SEO-Friendly Business Websites",
        description:
            "Professional website design and development services for businesses. We create fast, mobile-friendly, and SEO-optimized websites that improve online visibility and attract customers.",
        image: "/images/webdevelop.jpg"
    },

    {
        title: "Ecommerce Website Development Services",
        subtitle: "Online Store Development Solutions",
        description:
            "Ecommerce website development services with secure payment gateway integration, product management systems, and conversion-optimized checkout pages to increase online sales.",
        image: "/images/ecommerce.jpg"
    },

    {
        title: "Mobile App Development Services",
        subtitle: "Android and iOS App Development",
        description:
            "Custom mobile app development services for Android and iOS platforms. We build scalable, secure, and user-friendly mobile applications for startups and businesses.",
        image: "/images/mobileapp.jpg"
    }

];
export default function ServicesContent() {
    return (
        <main className="min-h-screen bg-black/2 text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background Animated Trails */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#c1227d,transparent_20%)]" />
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
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c1227d]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
                />
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
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                            Our Services
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-none uppercase"
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
                                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
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
                                    className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-none"
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
                                    <i className="fa-solid fa-arrow-right-long text-[#c1227d] transition-transform group-hover/btn:translate-x-2" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
