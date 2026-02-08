"use client";

import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "../Ui/ScrollStack/ScrollStack";

const services = [
    {
        icon: "fa-palette",
        title: "BRANDING",
        subtitle: "Turn Your Vision into a Powerful Brand Identity",
        description: "Logos, brand strategy, and visuals that make your business unforgettable.",
        bgColor: "#6339f9"
    },
    {
        icon: "fa-bullhorn",
        title: "DIGITAL MARKETING",
        subtitle: "Reach the Right Audience. Convert Better. Grow Faster.",
        description: "SEO, social media, ads, and performance marketing that actually delivers leads.",
        bgColor: "#ff3d64"
    },
    {
        icon: "fa-users-gear",
        title: "HR MANAGEMENT",
        subtitle: "People. Process. Performance.",
        description: "Complete HR solutions to manage, scale, and retain top talent.",
        bgColor: "#00c4ff"
    },
    {
        icon: "fa-globe",
        title: "WEBSITE DESIGN",
        subtitle: "Websites That Look Great & Work Even Better",
        description: "Fast, responsive, SEO-friendly websites built to convert visitors into customers.",
        bgColor: "#ff9100"
    },
    {
        icon: "fa-cart-shopping",
        title: "ECOMMERCE DEVELOP",
        subtitle: "Sell Online Without Limits",
        description: "Custom ecommerce solutions with secure payments, smooth UX, and scalability.",
        bgColor: "#00d166"
    },
    {
        icon: "fa-mobile-screen-button",
        title: "MOBILE APPLICATION",
        subtitle: "Apps That Engage, Perform & Scale",
        description: "Android & iOS apps designed for performance, usability, and growth.",
        bgColor: "#8e24aa"
    }
];

export default function ServicesSection() {
    return (
        <section className="py-10 md:py-16 bg-black overflow-hidden " id="services">
            <div className="container mx-auto px-0 md:px-6">
                <div className="text-center mb-8xnpm run dev
                 md:mb-16 px-6">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-pink-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        🚀 Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tight"
                    >
                        Smart Solutions That Drive Real Results
                    </motion.h2>
                </div>

                {/* Mobile & Tablet: ScrollStack Stacking Effect */}
                <div className="lg:hidden">
                    <ScrollStack className="max-w-7xl mx-auto px-4">
                        {services.map((service, index) => (
                            <ScrollStackItem key={index}>
                                <ServiceCardContent service={service} index={index} />
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group h-[500px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <ServiceCardContent service={service} index={index} isGrid />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCardContent({ service, index = 0, isGrid = false }: { service: typeof services[0], index?: number, isGrid?: boolean }) {
    const displayIndex = (index + 1).toString().padStart(2, '0');

    return (
        <>
            <div
                className="absolute inset-0 z-0"
                style={{ backgroundColor: service.bgColor }}
            />

            {/* Aesthetic Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className={`relative z-10 flex flex-col items-center text-center p-8 md:p-12 text-white h-full ${!isGrid ? 'md:flex-row md:text-left' : ''}`}>
                {/* Number Indicator - More visible on mobile */}
                <div className={`absolute top-0 left-0 md:top-12 md:left-12 opacity-20 font-black text-6xl md:text-8xl tracking-tighter ${isGrid ? 'hidden' : 'block'}`}>
                    {displayIndex}
                </div>

                <div className={`flex-1 ${!isGrid ? 'md:pr-12' : 'mb-8'}`}>
                    <h3 className={`${isGrid ? 'text-3xl lg:text-4xl px-4' : 'text-4xl md:text-5xl lg:text-7xl'} font-black mb-4 leading-none tracking-tighter uppercase`}>
                        {service.title}
                    </h3>
                    <p className={`text-white/90 ${isGrid ? 'text-base px-6' : 'text-xl md:text-2xl'} font-medium max-w-xl mb-6 leading-tight`}>
                        {service.subtitle}
                    </p>
                    <p className={`text-white/70 ${isGrid ? 'text-sm px-8' : 'text-sm md:text-lg'} max-w-md ${isGrid ? 'block' : 'hidden md:block'}`}>
                        {service.description}
                    </p>
                </div>

                <div className={`relative z-10 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-[40px] border-[1px] border-white/30 shadow-2xl overflow-hidden shrink-0
                    ${isGrid ? 'w-32 h-32 md:w-36 md:h-36' : 'w-48 h-48 md:w-72 md:h-72'} self-center`}>
                    {/* Subtle Internal Gradient for Icon Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                    <i className={`fa-solid ${service.icon} ${isGrid ? 'text-4xl md:text-5xl' : 'text-7xl md:text-8xl'} text-white drop-shadow-lg`}></i>
                </div>
            </div>
        </>
    );
}
