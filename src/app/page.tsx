import {JSX} from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home(): JSX.Element {
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Contact/>
        </div>
    );
}