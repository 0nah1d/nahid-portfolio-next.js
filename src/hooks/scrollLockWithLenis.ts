import {useEffect, useRef} from "react";
import Lenis from "@studio-freight/lenis";

export function useScrollLockWithLenis() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        if (!lenisRef.current) {
            const lenis = new Lenis();
            lenisRef.current = lenis;

            const raf = (time: number) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);
        }

        return () => {
            lenisRef.current?.destroy();
            lenisRef.current = null;
        };
    }, []);

    return (isPaused: boolean) => {
        if (isPaused) {
            lenisRef.current?.stop();
        } else {
            lenisRef.current?.start();
        }
    };
}