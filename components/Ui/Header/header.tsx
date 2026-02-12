"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Trainings", href: "/trainings" },
    { name: "Careers", href: "/carrers" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "py-3 bg-white backdrop-blur-md shadow-sm border-b border-gray-50"
                : "py-3 bg-white"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="relative flex items-center">
                    <Image
                        src="/Gemini_Generated_Image_2w2muj2w2muj2w2m.png"
                        alt="Sysbreeze Logo"
                        width={100}
                        height={60}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-zinc-600 hover:text-black transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:bg-zinc-800 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-700 via-purple-800 to-zinc-950 flex flex-col items-center justify-center gap-1.5 shadow-lg border border-white/10 group overflow-hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <motion.span
                        animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-white/80 rounded-full transition-colors group-hover:bg-white"
                    />
                    <motion.span
                        animate={mobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                        className="w-4 h-0.5 bg-white/80 rounded-full transition-colors group-hover:bg-white"
                        style={{ alignSelf: 'center' }}
                    />
                    <motion.span
                        animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-5 h-0.5 bg-white/80 rounded-full transition-colors group-hover:bg-white"
                        style={{ alignSelf: 'flex-start', marginLeft: '12px' }}
                    />
                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                        className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
                    >
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={{
                                animate: {
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                            className="flex flex-col space-y-4 px-6 py-8"
                        >
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.name}
                                    variants={{
                                        initial: { opacity: 0, x: -20 },
                                        animate: { opacity: 1, x: 0 }
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-lg font-bold text-zinc-600 hover:text-pink-600 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0, scale: 0.9 },
                                    animate: { opacity: 1, scale: 1 }
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="pt-2"
                            >
                                <Link
                                    href="/contact"
                                    className="block w-full py-4 bg-black text-white text-center font-bold rounded-xl hover:bg-zinc-900 transition-all border border-transparent active:scale-[0.98]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
