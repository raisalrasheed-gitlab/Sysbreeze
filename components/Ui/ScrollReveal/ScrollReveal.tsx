"use client";

import React, { useEffect, useRef, useMemo, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
    children: string;
    containerClassName?: string;
    textClassName?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    containerClassName = '',
    textClassName = '',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lines, setLines] = useState<HTMLElement[][]>([]);

    const splitText = useMemo(() => {
        return children.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return <span key={index}>{word}</span>;
            return (
                <span className="reveal-word inline-block" key={index}>
                    {word}
                </span>
            );
        });
    }, [children]);

    useLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const words = Array.from(el.querySelectorAll('.reveal-word')) as HTMLElement[];

        const groupLines = () => {
            const grouped: HTMLElement[][] = [];
            let currentLine: HTMLElement[] = [];
            let currentTop = -1;

            words.forEach((word) => {
                const top = word.offsetTop;
                if (top !== currentTop) {
                    if (currentLine.length > 0) grouped.push(currentLine);
                    currentLine = [word];
                    currentTop = top;
                } else {
                    currentLine.push(word);
                }
            });
            if (currentLine.length > 0) grouped.push(currentLine);
            return grouped;
        };

        const calculatedLines = groupLines();

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    end: 'bottom 40%',
                    scrub: 1,
                }
            });

            calculatedLines.forEach((line, index) => {
                // To achieve "start when previous is 25% through":
                // If each line takes 1 unit of time, we start the next at index * 0.75
                tl.fromTo(
                    line,
                    { color: 'rgba(0, 0, 0, 0.1)' },
                    {
                        color: 'rgba(0, 0, 0, 1)',
                        ease: 'none',
                        duration: 1
                    },
                    index * 0.75 // Overlap logic: starts at 0, 0.75, 1.5, etc.
                );
            });
        });

        // Re-calculate on resize
        const handleResize = () => {
            ctx.revert();
            // Trigger re-run of this effect or similar logic
            // Simplified here for brevity, GSAP context handles most cleanups
        };
        window.addEventListener('resize', handleResize);

        return () => {
            ctx.revert();
            window.removeEventListener('resize', handleResize);
        };
    }, [children]);

    return (
        <div ref={containerRef} className={`scroll-reveal-container ${containerClassName}`}>
            <h2 className={`scroll-reveal-h2 ${textClassName}`}>
                {splitText}
            </h2>
        </div>
    );
};

export default ScrollReveal;
