"use client";

import { motion } from "framer-motion";
import ScrollTriggeredCards from "../Ui/ScrollTriggeredCards/ScrollTriggeredCards";

const services = [
    {
        icon: "fa-palette",
        title: "BRANDING",
        subtitle: "Turn Your Vision into a Powerful Brand Identity",
        description: "We craft unique brand identities that resonate with your target audience and stand out in competitive markets. Our comprehensive approach includes logo design, color palette selection, typography, and brand messaging. We ensure every touchpoint reflects your core values and business mission. From initial concept to full brand guidelines, we build the foundation for your long-term success. Let us help you create an unforgettable impression that drives loyalty and trust.",
        bgColor: "#6339f9"
    },
    {
        icon: "fa-bullhorn",
        title: "DIGITAL MARKETING",
        subtitle: "Reach the Right Audience. Convert Better. Grow Faster.",
        description: "Our data-driven marketing strategies are designed to maximize your ROI and accelerate business growth. We combine SEO, content marketing, social media management, and pay-per-click advertising to reach your ideal customers. We constantly monitor performance metrics to optimize campaigns for higher conversion rates and better engagement. Our team stays ahead of industry trends to ensure your brand remains relevant and competitive. Transform your digital presence into a powerful lead generation engine.",
        bgColor: "#ff3d64"
    },
    {
        icon: "fa-users-gear",
        title: "HR MANAGEMENT",
        subtitle: "People. Process. Performance.",
        description: "Optimize your workforce with our professional human resource management solutions tailored to your specific needs. We handle talent acquisition, employee onboarding, performance evaluations, and strategic workforce planning. Our goal is to foster a productive work environment that inspires peak performance and long-term employee retention. We ensure compliance with labor laws while implementing best practices in organizational development and culture. Scale your business with the right people and efficient management systems.",
        bgColor: "#00c4ff"
    },
    {
        icon: "fa-globe",
        title: "WEBSITE DESIGN",
        subtitle: "Websites That Look Great & Work Even Better",
        description: "We build high-performance, responsive websites that combine aesthetic excellence with seamless user experience. Our development process focuses on speed, security, and search engine optimization to ensure your site performs under pressure. We use the latest technologies like React and Next.js to provide a modern, future-proof digital platform for your business. Every element is carefully crafted to guide visitors toward conversion while reflecting your brand's unique identity. Establish a professional online presence that works for you 24/7.",
        bgColor: "#ff9100"
    },
    {
        icon: "fa-cart-shopping",
        title: "ECOMMERCE DEVELOP",
        subtitle: "Sell Online Without Limits",
        description: "Launch and scale your online store with our robust ecommerce solutions designed for growth and reliability. We provide secure payment gateway integration, intuitive product management, and optimized checkout flows to reduce cart abandonment. Our platforms are built to handle high traffic and complex inventory needs while maintaining lightning-fast performance. We focus on mobile-first design, ensuring your customers can shop effortlessly from any device. Take your retail business to the global market with a scalable and secure online store.",
        bgColor: "#00d166"
    },
    {
        icon: "fa-mobile-screen-button",
        title: "MOBILE APPLICATION",
        subtitle: "Apps That Engage, Perform & Scale",
        description: "Create powerful mobile experiences with our custom iOS and Android app development services for modern businesses. We design intuitive user interfaces that promote engagement and provide exceptional value to your mobile users. Our team focuses on native-like performance and smooth animations to ensure a premium feel across all screen sizes. From initial wireframes to App Store deployment, we handle every stage of the mobile lifestyle. Build a direct and meaningful connection with your audience through a feature-rich mobile app.",
        bgColor: "#8e24aa"
    }
];

export default function ServicesSection() {
    return (
        <section className="py-10 md:py-16 bg-black overflow-clip no-scrollbar" id="services">
            <div className="container mx-auto px-0 md:px-6">
                <div className="text-center mb-6 px-6">
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

                {/* Mobile & Tablet: Scroll Triggered List Effect */}
                <div className="lg:hidden px-4 relative -top-20">
                    <ScrollTriggeredCards services={services} />
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group h-[500px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E]"
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
            {/* Aesthetic Background Elements - Keeping it premium with subtle light blurs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className={`relative z-10 flex flex-col items-center text-center pt-10 text-white h-full ${!isGrid ? 'md:flex-row md:text-left' : ''}`}>
                {/* Number Indicator - Subtle white highlight */}
                <div className={`absolute top-0 left-0 md:top-12 md:left-12 opacity-10 font-black text-6xl md:text-8xl tracking-tighter text-white ${isGrid ? 'hidden' : 'block'}`}>
                    {displayIndex}
                </div>

                <div className={`flex-1 ${!isGrid ? 'md:pr-12' : 'mb-8'}`}>
                    <h3 className={`${isGrid ? 'text-3xl lg:text-4xl px-4' : 'text-4xl md:text-5xl lg:text-7xl'} font-black mb-4 leading-none tracking-tighter uppercase text-white`}>
                        {service.title}
                    </h3>
                    <p className={`text-white/90 ${isGrid ? 'text-base px-6' : 'text-xl md:text-2xl'} font-medium max-w-xl mb-6 leading-tight`}>
                        {service.subtitle}
                    </p>
                    <p className={`text-white/70 ${isGrid ? 'text-sm px-8 line-clamp-5' : 'text-sm md:text-lg'} max-w-md ${isGrid ? 'block' : 'hidden md:block'}`}>
                        {service.description}{isGrid && <span className="text-white font-bold ml-1 italic">more..</span>}
                    </p>
                </div>
            </div>
        </>
    );
}
