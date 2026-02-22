"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const isContactPage = pathname === "/contact";

    return (
        <footer className="bg-black py-12 md:py-16 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Large CTA Section */}
                {!isContactPage && (
                    <div className="mb-12 md:mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20">
                                LET&apos;S WORK <br /> TOGETHER
                            </h2>
                            <Link href="/contact">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-4 bg-white text-black px-5 py-3 rounded-full font-black text-lg uppercase tracking-tighter hover:bg-pink-500 cursor-pointer transition-colors"
                                >
                                    CONTACT US
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>
                )}

                {/* Navigation Grid */}
                <div className={`grid grid-cols-2 m
                d:grid-cols-4 gap-10 mb-10 ${!isContactPage ? 'border-t border-white/10  pt-10' : 'pt-0'}`}>
                    {/* Brand Info */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="mb-6 block h-20 w-80 relative">
                            <Image
                                src="/sysbreeze logo-whitesvg.svg"
                                alt="Sysbreeze Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-white/50 text-sm max-w-[200px]">
                            Crafting digital experiences that define the future of business.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Sitemap</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-white/50 hover:text-white text-sm transition-colors">Home</Link></li>
                            <li><Link href="/services" className="text-white/50 hover:text-white text-sm transition-colors">Services</Link></li>
                            <li><Link href="/trainings" className="text-white/50 hover:text-white text-sm transition-colors">Trainings</Link></li>
                            <li><Link href="/careers" className="text-white/50 hover:text-white text-sm transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Contact</h4>
                        <ul className="space-y-4">
                            <li className="text-white/50 text-sm ">info@sysbreeze.com</li>
                            <li className="text-white/50 text-sm">+91 94466 21444</li>
                            <li className="text-white/50 text-sm">Kinfra Hi-Tech Park, Calicut, Kerala, India</li>
                        </ul>
                    </div>

                    {/* Social links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Social</h4>
                        <div className="flex gap-4">
                            <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-pink-500 hover:text-pink-500 transition-colors">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </motion.a>
                            <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-pink-500 hover:text-pink-500 transition-colors">
                                <i className="fa-brands fa-instagram"></i>
                            </motion.a>
                            <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-pink-500 hover:text-pink-500 transition-colors">
                                <i className="fa-brands fa-x-twitter"></i>
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:row items-center justify-between gap-6 pt-10 border-t border-white/10">
                    <p className="text-white/20 text-xs uppercase tracking-widest font-bold">
                        © {new Date().getFullYear()} SYSBREEZE SOLUTIONS. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-white/20 hover:text-white/40 text-[10px] uppercase font-bold tracking-widest transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-white/20 hover:text-white/40 text-[10px] uppercase font-bold tracking-widest transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Background Decorative Text */}
            <div
                aria-hidden="true"
                className="opacity-[0.05] pointer-events-none select-none absolute bottom-0 left-0 w-full overflow-hidden text-white font-black text-[30vw] leading-none text-center"
            >
                SYSBREEZE
            </div>
        </footer>
    );
}
