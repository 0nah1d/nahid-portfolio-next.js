// import Image from "next/image";
import {JSX} from "react";
import StartCard from "@/components/startCard";

export default function Home(): JSX.Element {
    return (
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

        <div className={'w-full h-screen bg-black flex justify-center items-center'}>
            <StartCard/>
        </div>
    );
}
