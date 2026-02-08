"use client";

import { motion } from "framer-motion";
import ThreeDCarousel from "./ThreeDCarousel";

const projects = [
    {
        title: "Fintech Revolution",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Luxury E-commerce",
        category: "Web Platform",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "SaaS Analytics",
        category: "Dashboard",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Eco Smart Home",
        category: "IoT App",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Future Fashion",
        category: "Brand Identity",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    }
];

export default function WorksSection() {
    return (
        <section className="py-20 bg-black overflow-hidden" id="works">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-pink-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        📂 Portfolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase"
                    >
                        Digital Craftsmanship <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                            Our Latest Works
                        </span>
                    </motion.h2>
                </div>

                <ThreeDCarousel items={projects} />
            </div>
        </section>
    );
}
