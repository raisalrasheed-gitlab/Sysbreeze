"use client";

import { motion } from "framer-motion";
import TrainingStack from "./TrainingStack";

const trainingPrograms = [
    {
        icon: "fa-user-tie",
        title: "HR Management Training Course",
        subtitle: "Job-Oriented Online and Offline HR Training",
        description:
            "Learn recruitment, payroll management, HR operations, and labor law compliance through practical HR training with real-world experience.",
        color: "from-blue-600 to-indigo-600"
    },

    {
        icon: "fa-hashtag",
        title: "Digital Marketing Training Course",
        subtitle: "Professional Online and Offline Marketing Training",
        description:
            "Master SEO, Google Ads, social media marketing, analytics, and live campaign management with practical digital marketing training.",
        color: "from-orange-500 to-red-500"
    },

    {
        icon: "fa-code",
        title: "Python Full Stack Development Course",
        subtitle: "Online and Offline Programming Training",
        description:
            "Learn Python programming, Django framework, APIs, and frontend development by building real-world projects.",
        color: "from-yellow-500 to-green-500"
    },

    {
        icon: "fa-robot",
        title: "Artificial Intelligence & Robotics Training",
        subtitle: "Advanced Online and Offline AI Training",
        description:
            "Hands-on Artificial Intelligence and robotics training including automation, AI tools, and practical projects.",
        color: "from-cyan-500 to-blue-500"
    },

    {
        icon: "fa-layer-group",
        title: "MERN Stack Development Course",
        subtitle: "Full Stack Web Development Training",
        description:
            "Learn MongoDB, Express.js, React, and Node.js to build modern web applications with practical training.",
        color: "from-green-600 to-teal-600"
    },

    {
        icon: "fa-chart-line",
        title: "Data Science Training Course",
        subtitle: "Professional Data Analytics Training",
        description:
            "Learn data analysis, data visualization, and business analytics using real-world datasets and tools.",
        color: "from-purple-600 to-fuchsia-600"
    },

    {
        icon: "fa-brain",
        title: "Machine Learning Training Course",
        subtitle: "Advanced AI and ML Training",
        description:
            "Learn machine learning algorithms, predictive models, and real-world ML applications with practical training.",
        color: "from-pink-600 to-rose-600"
    }
];
export default function TrainingSection() {
    return (
        <section className="pt-12 md:py-12 relative z-20 bg-zinc-950 text-white" id="training">
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

                <div className="relative">
                    <TrainingStack programs={trainingPrograms} />
                </div>

                <div className="md:mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        { icon: "fa-certificate", text: "Certification" },
                        { icon: "fa-laptop-code", text: "Live Projects" },
                        { icon: "fa-briefcase", text: "Placement Assistance" },
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
                            <span className="text-[10px] uppercase tracking-widest font-bold text-center text-zinc-500">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
