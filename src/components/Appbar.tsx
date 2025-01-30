"use client"
import React, {JSX} from "react";
import Link from "next/link";

export default function Appbar(): JSX.Element {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="flex justify-between items-center max-w-7xl w-full mx-auto py-6">
            <Link href="/" className="text-3xl font-bold">
                LOGO
            </Link>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer bg-orange-400 p-3 rounded-xl">
                <div className={`w-7 h-1 bg-white mb-1 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-7 h-1 bg-white mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-7 h-1 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
        </div>
    )
}