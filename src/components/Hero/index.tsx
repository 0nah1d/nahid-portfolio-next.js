import {JSX} from "react";
import Image from "next/image";

export default function Hero(): JSX.Element {
    return (
        <div className="min-h-screen h-full w-screen flex justify-center items-center">
            <Image
                src="/girl.jpg"
                alt="Image"
                width={300}
                height={800}
                priority
                style={{width: "auto", height: "auto"}}
            />
        </div>
    )
}