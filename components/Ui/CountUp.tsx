"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";

interface CountUpProps {
    value: string;
}

export default function CountUp({ value }: CountUpProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    // Extract number and suffix (e.g., "8+" -> 8, "+")
    const match = value.match(/(\d+)(.*)/);
    const targetValue = match ? parseInt(match[1]) : 0;
    const suffix = match ? match[2] : "";

    const count = useMotionValue(0);
    const springValue = useSpring(count, {
        stiffness: 100,
        damping: 30,
        duration: 2000,
    });

    const displayValue = useTransform(springValue, (latest) =>
        Math.floor(latest).toLocaleString() + suffix
    );

    useEffect(() => {
        if (isInView) {
            count.set(targetValue);
        }
    }, [isInView, count, targetValue]);

    return (
        <motion.span ref={ref}>
            {displayValue}
        </motion.span>
    );
}
