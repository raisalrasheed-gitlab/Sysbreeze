"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center pt-20">
            {/* 3D Cube Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000">
                <motion.div
                    className="w-full h-full relative preserve-3d"
                    animate={{
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Cube Faces */}
                    <div className="absolute inset-0 bg-white border border-zinc-200 face-front">
                        <div className="relative w-full h-full p-4">
                            <Image src="/logo_black.jpeg" alt="Logo" fill className="object-contain p-8" />
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-white border border-zinc-200 face-back">
                        <div className="relative w-full h-full p-4">
                            <Image src="/logo_black.jpeg" alt="Logo" fill className="object-contain p-8" />
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-white border border-zinc-200 face-left">
                        <div className="relative w-full h-full p-4">
                            <Image src="/logo_black.jpeg" alt="Logo" fill className="object-contain p-8" />
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-white border border-zinc-200 face-right">
                        <div className="relative w-full h-full p-4">
                            <Image src="/logo_black.jpeg" alt="Logo" fill className="object-contain p-8" />
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-white border border-zinc-200 face-top">
                        <div className="relative w-full h-full p-4">
                            <Image src="/logo_black.jpeg" alt="Logo" fill className="object-contain p-8" />
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-white border border-zinc-200 face-bottom">
                        <div className="relative w-full h-full p-4">
                            <Image src="/logo_black.jpeg" alt="Logo" fill className="object-contain p-8" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer Branding Text */}
            <div className="absolute bottom-8 left-0 w-full px-6 md:px-12 flex  md:flex-row items-center justify-between text-[10px] md:text-xs font-medium tracking-widest text-zinc-400 uppercase gap-4 md:gap-0">
                <div className="text-center md:text-left hidden lg:block">
                    READY TO FIND YOUR NEXT IDEAL<br />TEMPLATE
                </div>
                <div className="text-center">
                    Sysbreeze<br />Technologies
                </div>
                <div className="text-center md:text-right">
                    MADE TO<br />LEAVE A MARK
                </div>
            </div>

            <style jsx global>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        /* Desktop Face Transforms (160px = 320px cube / 2) */
        .face-front  { transform: rotateY(  0deg) translateZ(160px); }
        .face-back   { transform: rotateY(180deg) translateZ(160px); }
        .face-right  { transform: rotateY( 90deg) translateZ(160px); }
        .face-left   { transform: rotateY(-90deg) translateZ(160px); }
        .face-top    { transform: rotateX( 90deg) translateZ(160px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(160px); }

        /* Mobile Face Transforms (128px = 256px cube / 2) */
        @media (max-width: 768px) {
          .face-front  { transform: rotateY(  0deg) translateZ(128px); }
          .face-back   { transform: rotateY(180deg) translateZ(128px); }
          .face-right  { transform: rotateY( 90deg) translateZ(128px); }
          .face-left   { transform: rotateY(-90deg) translateZ(128px); }
          .face-top    { transform: rotateX( 90deg) translateZ(128px); }
          .face-bottom { transform: rotateX(-90deg) translateZ(128px); }
        }
      `}</style>
        </section>
    );
}
