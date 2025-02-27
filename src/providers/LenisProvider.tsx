"use client";
import React, {useEffect} from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({children}: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.075, // Adjust smoothness
            wheelMultiplier: 1.2, // Adjust sensitivity
            nfinite: false, // Set true for infinite looping scroll
            easing: (t: number) => 1 - Math.pow(1 - t, 3), // Custom easing for fluidity
        } as {
            smooth: boolean;
            lerp: number;
            wheelMultiplier: number;
            nfinite: boolean;
            easing: (t: number) => number;
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.stop(); // Stop smooth scrolling
            lenis.destroy(); // Clean up Lenis instance
        };
    }, []);

    return <>{children}</>;
}
