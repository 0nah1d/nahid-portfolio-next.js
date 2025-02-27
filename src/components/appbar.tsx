"use client";
import React, {JSX, useEffect, useState} from "react";
import Link from "next/link";
import {useScrollLockWithLenis} from "@/hooks/scrollLockWithLenis";

export default function Appbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const toggleLenis = useScrollLockWithLenis();

    useEffect(() => {
        toggleLenis(isOpen);
    }, [isOpen, toggleLenis]);

    return (
        <div className="fixed top-0 w-screen z-50">
            <div className="flex justify-between items-center max-w-7xl w-full mx-auto py-6">
                <Link href="/" className="text-3xl font-bold">LOGO</Link>
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="cursor-pointer bg-orange-400 p-3 rounded-xl flex flex-col gap-1"
                >
                    <div
                        className={`w-7 h-1 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <div className={`w-7 h-1 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}/>
                    <div
                        className={`w-7 h-1 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                </button>
            </div>
        </div>
    );
}
