"use client";

import Map from "@/components/Map/Map";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactContent() {
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
                            Get In Touch
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-12 leading-none uppercase"
                    >
                        Let's Start <br /> Project
                    </motion.h1>
                </div>

                {/* Content Section - Grid for Info Cards and Form */}
                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
                    {/* Left Column: Text + Info Cards */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            <div className="flex items-center gap-2 mb-8">
                                <span className="w-2 h-2 rounded-full bg-[#c1227d]"></span>
                                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/60">
                                    Contact Details
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-10 leading-none">
                                Let's Discuss Your Project
                            </h2>

                            <p className="text-xl md:text-2xl text-white/50 font-medium leading-tight mb-12 max-w-xl">
                                Have an idea or a project in mind? Feel free to reach out and share your goals. I'm always open to discussing new opportunities.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 hover:bg-white/20 border border-white/10 px-10 py-4 rounded-3xl text-xl font-bold tracking-tight transition-colors mb-20"
                            >
                                Get Free Quote
                            </motion.button>
                        </motion.div>

                        {/* Info Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: "fa-phone",
                                    label: "Contact Number",
                                    value: "+91 94466 21444",
                                    color: "text-[#c1227d]",
                                    actions: [
                                        { label: "Call", href: "tel:+919446621444", icon: "fa-phone", bg: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400" },
                                        { label: "WhatsApp", href: "https://wa.me/919446621444", icon: "fa-whatsapp", bg: "bg-green-500/10 hover:bg-green-500/20 text-green-400" }
                                    ]
                                },
                                {
                                    icon: "fa-envelope",
                                    label: "Email Address",
                                    value: "info@sysbreeze.com",
                                    color: "text-[#c1227d]",
                                    href: "mailto:info@sysbreeze.com"
                                },
                                {
                                    icon: "fa-location-dot",
                                    label: "Location",
                                    value: "Kinfra Techno Park, Calicut, Kerala, India",
                                    color: "text-[#c1227d]",
                                    href: "https://www.google.com/maps/dir/?api=1&destination=11.1517728,75.8900253"
                                },
                                {
                                    icon: "fa-clock",
                                    label: "Working Hours",
                                    value: "Mon - Sat: 9am - 6pm",
                                    color: "text-[#c1227d]"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-8 bg-white/[0.03] border border-white/5 rounded-[2.5rem] hover:border-white/10 transition-colors"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <i className={`fa-solid ${item.icon} text-2xl ${item.color}`} />
                                        </div>
                                        <h3 className="text-xl font-black tracking-tight mb-3">
                                            {item.label}
                                        </h3>
                                        {'href' in item ? (
                                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white/40 font-medium hover:text-white transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white/40 font-medium whitespace-pre-line">
                                                {item.value}
                                            </p>
                                        )}

                                        {/* Additional Actions for Phone */}
                                        {item && 'actions' in item && Array.isArray(item.actions) && (
                                            <div className="flex items-center gap-3 mt-6">
                                                {item.actions.map((action, aIdx) => (
                                                    <a
                                                        key={aIdx}
                                                        href={action.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${action.bg}`}
                                                    >
                                                        <i className={`fa-brands ${action.icon} ${action.icon === 'fa-phone' ? 'fa-solid' : ''}`} />
                                                        {action.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#0a0a0a] p-10 md:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden group shadow-2xl h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#c1227d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 relative z-10">
                            Send us a Message
                        </h2>

                        <form className="space-y-10 relative z-10">
                            <div className="relative border-b border-white/10 pb-4 focus-within:border-[#c1227d] transition-colors group/input">
                                <label className="block text-[10px] font-black tracking-widest uppercase text-white/40 mb-2">
                                    Full Name
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="text"
                                        placeholder="MaXel Morgan"
                                        className="bg-transparent border-none outline-none w-full text-xl font-bold placeholder:text-white/20"
                                    />
                                    <i className="fa-solid fa-user text-[#c1227d]/40 group-focus-within/input:text-[#c1227d] transition-colors" />
                                </div>
                            </div>

                            <div className="relative border-b border-white/10 pb-4 focus-within:border-[#c1227d] transition-colors group/input">
                                <label className="block text-[10px] font-black tracking-widest uppercase text-white/40 mb-2">
                                    Email Address
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="email"
                                        placeholder="hello@maxelstudio.com"
                                        className="bg-transparent border-none outline-none w-full text-xl font-bold placeholder:text-white/20"
                                    />
                                    <i className="fa-solid fa-envelope text-[#c1227d]/40 group-focus-within/input:text-[#c1227d] transition-colors" />
                                </div>
                            </div>

                            <div className="relative border-b border-white/10 pb-4 focus-within:border-[#c1227d] transition-colors group/input">
                                <label className="block text-[10px] font-black tracking-widest uppercase text-white/40 mb-2">
                                    Messages
                                </label>
                                <div className="flex items-start gap-4">
                                    <textarea
                                        placeholder="Let's start your project with MaXel"
                                        rows={4}
                                        className="bg-transparent border-none outline-none w-full text-xl font-bold placeholder:text-white/20 resize-none pt-1"
                                    />
                                    <i className="fa-solid fa-comments text-[#c1227d]/40 group-focus-within/input:text-[#c1227d] transition-colors mt-2" />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-[#c1227d] hover:bg-[#a61d6b] text-black py-6 rounded-2xl text-xl font-black tracking-tight transition-all shadow-[0_0_40px_rgba(193,34,125,0.3)] hover:shadow-[0_0_60px_rgba(193,34,125,0.5)]"
                                type="button"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Office Location Section - Moved below */}
                <div className="py-20 lg:py-32 border-t border-white/5 mt-20">
                    <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[16/9] lg:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/5"
                        >
                            <Map />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                        </motion.div>

                        <div className="flex flex-col">
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent uppercase leading-none">
                                Kinfra <br /> Techno Park
                            </h2>

                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                        <i className="fa-solid fa-clock text-[#c1227d]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/50 mb-2">
                                            Working Hours
                                        </h4>
                                        <p className="text-xl md:text-2xl text-white/80 font-medium">
                                            Monday – Saturday, 9am – 6pm IST
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                        <i className="fa-solid fa-location-dot text-[#c1227d]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/50 mb-2">
                                            Address
                                        </h4>
                                        <p className="text-xl md:text-2xl text-white/80 font-medium leading-tight">
                                            Sysbreeze Technologies Pvt. Ltd. <br />
                                            Neospace Building, Basement 1 <br />
                                            Kinfra Techno Park, Calicut <br />
                                            Kerala, India
                                        </p>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-bold text-sm tracking-widest uppercase transition-colors w-fit group"
                                >
                                    <a
                                        href="https://www.google.com/maps/dir/?api=1&destination=11.1517728,75.8900253"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-3 items-center"
                                    >
                                        Get Directions
                                        <i className="fa-solid fa-arrow-right-long text-[#c1227d] transition-transform group-hover:translate-x-2" />
                                    </a>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
