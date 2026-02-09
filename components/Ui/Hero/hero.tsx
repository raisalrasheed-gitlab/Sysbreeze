"use client";

import { motion } from "framer-motion";
import { ScrollVelocity } from "../../ScrollVelocity/ScrollVelocity";
import LiquidEther from "@/components/Gradient/LiquidEther";

export default function Hero() {
    return (
        <section className="relative h-full w-full bg-white overflow-hidden flex flex-col items-center justify-center pt-20">
            {/* Background Liquid Effect */}
            {/* <div className="absolute inset-0 z-0">
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div> */}

            {/* Slogans */}
            {/* <div className="absolute top-24 md:top-28 z-20 text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-xs md:text-base font-bold tracking-[0.3em] text-zinc-800 uppercase mb-2 px-8"
                >
                    From Branding to AI — We Build, Market & Train for Tomorrow.
                </motion.h2>
            </div> */}

            {/* 3D Cube Container */}
            <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 perspective-1000 mt-28 md:mt-20 ">
                <motion.div
                    className="w-full h-full relative preserve-3d"
                    animate={{
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* ... cube faces remain same ... */}
                    {/* Cube Faces */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] border border-white/20 face-front  backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
                            <h3 className="text-white font-black text-3xl md:text-4xl tracking-tighter mb-4 italic">SYSBREEZE</h3>
                            <p className="text-white/80 text-[10px] md:text-xs leading-tight tracking-[0.2em] uppercase font-medium">Building Brands. Powering Growth. Shaping Future Tech Leaders.</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] border border-white/20 face-back  backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
                            <h3 className="text-white font-black text-2xl md:text-3xl tracking-tighter mb-4">MARKETING</h3>
                            <p className="text-white/80 text-[10px] md:text-xs leading-tight tracking-[0.2em] uppercase font-medium">Reach the Right Audience. Convert Better. Grow Faster.</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] border border-white/20 face-left  backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
                            <h3 className="text-white font-black text-2xl md:text-3xl tracking-tighter mb-4 uppercase">HR MANAGEMENT</h3>
                            <p className="text-white/80 text-[10px] md:text-xs leading-tight tracking-[0.2em] uppercase font-medium">People. Process. Performance.</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] border border-white/20 face-right  backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
                            <h3 className="text-white font-black text-2xl md:text-3xl tracking-tighter mb-4">IT SERVICES</h3>
                            <p className="text-white/80 text-[10px] md:text-xs leading-tight tracking-[0.2em] uppercase font-medium">Websites That Look Great & Work Even Better</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] border border-white/20 face-top  backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
                            <h3 className="text-white font-black text-2xl md:text-3xl tracking-tighter mb-4 uppercase">BUSINESS CONSULTING</h3>
                            <p className="text-white/80 text-[10px] md:text-xs leading-tight tracking-[0.2em] uppercase font-medium">Turn Your Vision into a Powerful Brand Identity</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D81B8C] via-[#612D91] to-[#21094E] border border-white/20 face-bottom  backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
                            <h3 className="text-white font-black text-2xl md:text-3xl tracking-tighter mb-4 uppercase">TRAINING PROGRAMS</h3>
                            <p className="text-white/80 text-[10px] md:text-xs leading-tight tracking-[0.2em] uppercase font-medium">Industry-Focused Training for Real Careers</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Buttons Positioning Below Cube */}
            <div className="relative z-20 mt-28 md:mt-24 w-full flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center px-6">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-fit md:w-auto flex items-center gap-3 bg-white border border-zinc-200 pl-2 pr-6 md:pr-8 py-2 rounded-full  transition-all group"
                >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center text-white text-sm md:text-lg group-hover:rotate-45 transition-transform duration-300">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <span className="text-black font-bold tracking-tight text-sm md:text-lg whitespace-nowrap uppercase">GROW YOUR BUSINESS</span>
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-fit md:w-auto flex items-center gap-3 bg-white border border-zinc-200 pl-2 pr-6 md:pr-8 py-2 rounded-full   transition-all group"
                >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center text-white text-sm md:text-lg group-hover:rotate-45 transition-transform duration-300">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <span className="text-black font-bold tracking-tight text-sm md:text-lg whitespace-nowrap uppercase">UPGRADE YOUR SKILLS</span>
                </motion.button>
            </div>

            {/* Dynamic Scrolling Sections */}
            <div className="relative z-10 w-full mt-16 md:mt-24 space-y-2 md:space-y-4 opacity-90 grayscale grayscale-0 transition-all duration-700">
                <ScrollVelocity
                    texts={["BRANDING | DIGITAL MARKETING | HR MANAGEMENT | WEBSITE DESIGN | ECOMMERCE DEVELOP | MOBILE APPLICATION"]}
                    velocity={30}
                    className="scroller-text text-white"
                    parallaxStyle={{ backgroundColor: 'black', padding: '15px 0' }}
                />
                <ScrollVelocity
                    texts={["HR | DIGITAL MARKETING | PYTHON FULLSTACK | MERN STACK | DATA SCIENCE | MACHINE LEARNING | MOBILE APPLICATION"]}
                    velocity={-30}
                    className="scroller-text text-white"
                    parallaxStyle={{ backgroundColor: 'black', padding: '15px 0' }}
                />
            </div>

            {/* Footer Branding Text */}
            <div className="absolute bottom-8   w-full px-6 md:px-12 flex  md:flex-row items-center justify-center text-[10px] md:text-xs font-medium tracking-widest text-zinc-400 uppercase gap-4 md:gap-0">

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
           @media (max-width: 640px) {
          .face-front  { transform: rotateY(  0deg) translateZ(112px); }
          .face-back   { transform: rotateY(180deg) translateZ(112px); }
          .face-right  { transform: rotateY( 90deg) translateZ(112px); }
          .face-left   { transform: rotateY(-90deg) translateZ(112px); }
          .face-top    { transform: rotateX( 90deg) translateZ(112px); }
          .face-bottom { transform: rotateX(-90deg) translateZ(112px); }
        }
      `}</style>
        </section>
    );
}
