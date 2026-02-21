"use client";

import { motion } from "framer-motion";
import WorksGrid from "./WorksGrid";

const projects = [
    {
        title: "ALL FOR ONE",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Visual Identity",
        category: "Design",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Design Projects",
        category: "UX/UI",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "The MOVE",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Digital Studio",
        category: "Web Dev",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Creative Portrait",
        category: "Art",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    }
];

export default function WorksSection() {
    return (
        <section className="bg-black overflow-hidden" id="works">
            {/* Header with container constraints */}
            <div className="container mx-auto px-[5vw] py-8 md:py-16 text-center">
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

            {/* Grid with full-width */}
            <WorksGrid projects={projects} />
        </section>
    );
}
