"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    title: string;
    category: string;
    image: string;
    link: string;
}

interface WorksGridProps {
    projects: Project[];
}

export default function WorksGrid({ projects }: WorksGridProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="w-full bg-black">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        project={project}
                        index={i}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {/* Full Image Modal (Lightbox) */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-6xl w-full h-full max-h-[85vh] rounded-[40px] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-contain bg-zinc-950"
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <span className="text-pink-500 font-bold text-sm uppercase tracking-[0.3em] mb-2 block">
                                    {selectedProject.category}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                                    {selectedProject.title}
                                </h3>
                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-xl transition-all"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ProjectCard({ project, index, onClick }: { project: Project, index: number, onClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer aspect-[16/10]"
            onClick={onClick}
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Hover Content Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0 text-center">
                    <span className="text-pink-500 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-2 block">
                        {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight">
                        {project.title}
                    </h3>
                </div>
            </div>

            {/* Project Index */}
            <div className="absolute top-6 right-6 opacity-20 font-black text-white text-xl">
                0{index + 1}
            </div>
        </motion.div>
    );
}
