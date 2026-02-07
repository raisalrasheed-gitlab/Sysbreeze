"use client";

import React from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function InspirationQuote() {
    return (
        <section className="py-32 bg-zinc-950 text-white overflow-hidden flex items-center justify-center min-h-[60vh]">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    scrollLag={1.5}
                    textClassName="text-3xl md:text-5xl font-black italic tracking-tighter leading-tight text-white/90"
                    wordAnimationEnd="bottom center"
                >
                    When does a man die? When he is hit by a bullet? No! When he suffers a disease?
                    No! When he ate a soup made out of a poisonous mushroom?
                    No! A man dies when he is forgotten!
                </ScrollReveal>

                <div className="mt-12 flex items-center justify-center gap-4 opacity-50">
                    <div className="w-12 h-[1px] bg-white"></div>
                    <span className="text-xs font-bold tracking-[0.5em] uppercase">Dr. Hiriluk</span>
                    <div className="w-12 h-[1px] bg-white"></div>
                </div>
            </div>
        </section>
    );
}
