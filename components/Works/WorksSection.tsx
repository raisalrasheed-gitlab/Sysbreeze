"use client";

import { motion } from "framer-motion";
import WorksGrid from "./WorksGrid";

const projects = [
    {
        title: "Eco-Modern Rebranding",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Global Growth Analytics",
        category: "Digital Marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Dynamic Workforce Portal",
        category: "HR Management",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Next-Gen Fintech Platform",
        category: "Website Design",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Luxury Shopping Interface",
        category: "eCommerce",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Smart Healthcare Solution",
        category: "Mobile Application",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
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
