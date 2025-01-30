import Image from "next/image";

export default function Home() {
    return (
        <div style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Image
                src="/girl.avif"
                alt="image"
                height={600}
                width={320}
            />
        </div>
    );
}
