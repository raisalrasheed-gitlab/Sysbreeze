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
    const [resizeKey, setResizeKey] = useState(0);

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

        // Force a layout calculation by waiting a tiny bit for the browser to settle
        const words = Array.from(el.querySelectorAll('.reveal-word')) as HTMLElement[];

        const groupLines = () => {
            const grouped: HTMLElement[][] = [];
            let currentLine: HTMLElement[] = [];
            let currentTop = -1;

            words.forEach((word) => {
                // reset color to measure properly if needed, though offsetTop is usually stable
                const top = word.offsetTop;
                if (Math.abs(top - currentTop) > 5) { // Threshold for line detection
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
                    onRefresh: () => {
                        // Re-trigger color states if needed on mobile orientation change
                    }
                }
            });

            calculatedLines.forEach((line, index) => {
                tl.fromTo(
                    line,
                    { color: 'rgba(0, 0, 0, 0.1)' },
                    {
                        color: 'rgba(0, 0, 0, 1)',
                        ease: 'none',
                        duration: 1
                    },
                    index * 0.75
                );
            });
        });

        // Re-calculate on resize
        const handleResize = () => {
            setResizeKey(prev => prev + 1);
        };

        window.addEventListener('resize', handleResize);

        // Refresh ScrollTrigger to ensure correct positions
        ScrollTrigger.refresh();

        return () => {
            ctx.revert();
            window.removeEventListener('resize', handleResize);
        };
    }, [children, resizeKey]);

    return (
        <div ref={containerRef} className={`scroll-reveal-container ${containerClassName}`}>
            <h2 className={`scroll-reveal-h2 ${textClassName}`}>
                {splitText}
            </h2>
        </div>
    );
};

export default ScrollReveal;
