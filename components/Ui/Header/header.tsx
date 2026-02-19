"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [{ name: "Home", href: "/" },
{ name: "About Us", href: "#about" },
{ name: "Services", href: "/services" },
{ name: "Trainings", href: "/trainings" },
{ name: "Careers", href: "/careers" },

{ name: "Contact Us", href: "/contact" },
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
                        className="px-5 py-2.5 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] text-white text-sm font-bold rounded-full hover:brightness-110 transition-all transform hover:scale-105 active:scale-95 shadow-lg border border-white/20"
                    >
                        Ai Powered Training Programs
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden w-12 h-12 rounded-2xl flex flex-col items-center justify-center gap-1.5 group overflow-hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <motion.span
                        animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-1 bg-gradient-to-br from-indigo-700 via-purple-800 rounded-full transition-colors group-hover:from-white group-hover:to-white"
                    />
                    <motion.span
                        animate={mobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                        className="w-8 h-1 bg-gradient-to-br from-indigo-700 via-purple-800 rounded-full transition-colors group-hover:from-white group-hover:to-white"
                    />
                    <motion.span
                        animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-1 bg-gradient-to-br from-indigo-700 via-purple-800 rounded-full transition-colors group-hover:from-white group-hover:to-white"
                    />
                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, height: "auto", scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, height: 0, scale: 0.95, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-100 overflow-hidden"
                    >
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={{
                                animate: {
                                    transition: {
                                        staggerChildren: 0.08,
                                        delayChildren: 0.1
                                    }
                                }
                            }}
                            className="flex flex-col space-y-4 px-6 py-4"
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    variants={{
                                        initial: {
                                            opacity: 0,
                                            x: index % 2 === 0 ? -50 : 50,
                                            rotateX: -20,
                                            filter: "blur(10px)"
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0,
                                            rotateX: 0,
                                            filter: "blur(0px)"
                                        }
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15,
                                        mass: 1
                                    }}
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
                                    initial: { opacity: 0, scale: 0.8, y: 20 },
                                    animate: { opacity: 1, scale: 1, y: 0 }
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 20,
                                    delay: 0.4
                                }}
                                className="pt-4"
                            >
                                <Link
                                    href="/contact"
                                    className="block w-full py-4 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] text-white text-center font-bold rounded-xl hover:brightness-110 transition-all border border-white/20 active:scale-[0.98]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Ai Powered Training Programs
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
