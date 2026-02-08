"use client";

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollStackProps {
    children: React.ReactNode[];
    className?: string;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
    children,
    className = "",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

            // Determine offset based on screen width
            const isMobile = window.innerWidth < 768;
            const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
            const cardOffset = isMobile ? 25 : (isTablet ? 32 : 54);
            const topMargin = isMobile ? 100 : 0; // Top margin for mobile pinning

            cards.forEach((card, index) => {
                // Set z-index so that newer cards stack on top
                card.style.zIndex = `${index}`;

                ScrollTrigger.create({
                    trigger: card,
                    start: isMobile
                        ? `top ${topMargin + (index * cardOffset)}px`
                        : `center center+=${index * cardOffset}`,
                    endTrigger: containerRef.current,
                    end: isMobile
                        ? `bottom ${topMargin + (cards.length * cardOffset)}px`
                        : `bottom center+=${(cards.length) * cardOffset}`,
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    invalidateOnRefresh: true,
                });

                // Progressive visual depth as cards go into stack (centered trigger)
                if (index < cards.length - 1) {
                    gsap.to(card, {
                        scale: 0.94,
                        filter: "brightness(0.5) blur(2px)",
                        scrollTrigger: {
                            trigger: cards[index + 1],
                            start: "top center",
                            end: "center center",
                            scrub: true,
                        }
                    });
                }
            });
        });

        return () => ctx.revert();
    }, [children]);

    return (
        <div ref={containerRef} className={`scroll-stack-container ${className}`}>
            <div className="scroll-stack-inner">
                {children.map((child, index) => (
                    <div
                        key={index}
                        ref={(el) => { cardsRef.current[index] = el; }}
                        className="scroll-stack-card-wrapper"
                    >
                        {child}
                    </div>
                ))}
            </div>
            {/* 
                This spacer ensures there's enough height in the container 
                to scroll through the stacking animation before the section ends.
            */}
            <div className="scroll-stack-spacer h-[50vh] md:h-[100vh]" />
        </div>
    );
};

export default ScrollStack;

export const ScrollStackItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = ""
}) => {
    return <div className={`scroll-stack-card-content ${className}`}>{children}</div>;
};
