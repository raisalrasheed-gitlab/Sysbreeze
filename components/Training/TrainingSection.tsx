"use client";

import { motion } from "framer-motion";
import TrainingCarousel from "./TrainingCarousel";

const trainingPrograms = [
    {
        icon: "fa-user-tie",
        title: "HR TRAINING",
        subtitle: "Become a Job-Ready HR Professional",
        description: "Recruitment, payroll, compliance & HR operations with practical exposure.",
        color: "from-blue-600 to-indigo-600"
    },
    {
        icon: "fa-hashtag",
        title: "DIGITAL MARKETING",
        subtitle: "Master Online Marketing from Basics to Advanced",
        description: "SEO, Ads, Social Media, Analytics & Live Campaign Training.",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: "fa-code",
        title: "PYTHON FULLSTACK",
        subtitle: "Build Complete Web Applications from Scratch",
        description: "Python, Django, APIs, frontend & real-world projects.",
        color: "from-yellow-500 to-green-500"
    },
    {
        icon: "fa-robot",
        title: "AI & ROBOTICS",
        subtitle: "Learn the Future of Technology Today",
        description: "Hands-on training in AI concepts, robotics & automation.",
        color: "from-cyan-500 to-blue-500"
    },
    {
        icon: "fa-layer-group",
        title: "MERN STACK",
        subtitle: "Become a Modern Fullstack Developer",
        description: "MongoDB, Express, React & Node with real-time applications.",
        color: "from-green-600 to-teal-600"
    },
    {
        icon: "fa-chart-line",
        title: "DATA SCIENCE",
        subtitle: "Turn Data into Powerful Business Insights",
        description: "Data analysis, visualization & real-world case studies.",
        color: "from-purple-600 to-fuchsia-600"
    },
    {
        icon: "fa-brain",
        title: "MACHINE LEARNING",
        subtitle: "Train Machines to Think Smarter",
        description: "Algorithms, models, and practical ML applications.",
        color: "from-pink-600 to-rose-600"
    }
];

export default function TrainingSection() {
    return (
        <section className="py-8 md:py-16 relative z-20 bg-zinc-950 text-white overflow-hidden" id="training">
            <div className="container mx-auto px-6">
                <div className="text-center mb-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        🎓 Training Programs
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black tracking-tight"
                    >
                        Industry-Focused Training for Real Careers
                    </motion.h2>
                </div>

                <div className="mb-20">
                    <TrainingCarousel programs={trainingPrograms} />
                </div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        { icon: "fa-certificate", text: "Certification" },
                        { icon: "fa-laptop-code", text: "Live Projects" },
                        { icon: "fa-briefcase", text: "Placement" },
                        { icon: "fa-chalkboard-user", text: "Expert Trainers" },
                        { icon: "fa-tools", text: "Latest Tools" },
                        { icon: "fa-headset", text: "Support" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/3 border border-white/5"
                        >
                            <i className={`fa-solid ${item.icon} text-cyan-400 text-xl`}></i>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
