"use client";

import { motion } from "framer-motion";

const services = [
    {
        icon: "fa-palette",
        title: "BRANDING",
        subtitle: "Turn Your Vision into a Powerful Brand Identity",
        description: "Logos, brand strategy, and visuals that make your business unforgettable.",
        color: "from-pink-500 to-rose-500"
    },
    {
        icon: "fa-bullhorn",
        title: "DIGITAL MARKETING",
        subtitle: "Reach the Right Audience. Convert Better. Grow Faster.",
        description: "SEO, social media, ads, and performance marketing that actually delivers leads.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: "fa-users-gear",
        title: "HR MANAGEMENT",
        subtitle: "People. Process. Performance.",
        description: "Complete HR solutions to manage, scale, and retain top talent.",
        color: "from-purple-500 to-indigo-500"
    },
    {
        icon: "fa-globe",
        title: "WEBSITE DESIGN",
        subtitle: "Websites That Look Great & Work Even Better",
        description: "Fast, responsive, SEO-friendly websites built to convert visitors into customers.",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: "fa-cart-shopping",
        title: "ECOMMERCE DEVELOP",
        subtitle: "Sell Online Without Limits",
        description: "Custom ecommerce solutions with secure payments, smooth UX, and scalability.",
        color: "from-orange-500 to-amber-500"
    },
    {
        icon: "fa-mobile-screen-button",
        title: "MOBILE APPLICATION",
        subtitle: "Apps That Engage, Perform & Scale",
        description: "Android & iOS apps designed for performance, usability, and growth.",
        color: "from-indigo-500 to-violet-500"
    }
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-pink-600 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        🚀 Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-black tracking-tight"
                    >
                        Smart Solutions That Drive Real Results
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-pink-200 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                                <i className={`fa-solid ${service.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2 tracking-tight">{service.title}</h3>
                            <h4 className="text-sm font-bold text-zinc-900 mb-4 tracking-wide uppercase leading-tight font-instrument-sans">
                                {service.subtitle}
                            </h4>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
