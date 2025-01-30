"use client";
import dynamic from "next/dynamic";
import {JSX} from "react";

const Navbar = dynamic(() => import("./Navbar"), {ssr: false});

export default function NavbarWrapper(): JSX.Element {
    return <Navbar/>;
}
