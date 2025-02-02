import Image from "next/image";
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


// <div className="flex justify-center items-center h-screen w-screen">
//     <Image
//         src="/girl.jpg"
//         alt="Image"
//         width={300}
//         height={800}
//         priority
//         style={{width: "auto", height: "auto"}}
//     />
// </div>