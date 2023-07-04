import Link from "next/link"
import Image from 'next/image';


const DevExpCard = ({ children, title, text, imgSrc }) => {
    return (
        <div className="w-[360px] h-[420px] border overflow-hidden rounded-xl shadow-lg">
            <div className="w-full h-full bg-white">
                <div className="relative w-[360px] h-[320px]">
                    <Image
                    src={imgSrc}
                    width={360}
                    height={360}
                    objectFit="cover"
                    style={{width:"auto", height:"100%"}}
                    />
                    <div className="absolute mx-auto left-0 right-0 bottom-4 text-center">
                        <p className="text-center">{ title }</p>
                    </div>
                </div>

                <div>                    
                    <p className="text-white text-center">{ children }</p>
                </div>
            </div>
        </div>
    );
}

const DevExperience = () => {
    return (
        <section>
            <div className="body-margin flex flex-col gap-4">
                <p className="flex flex-col gap-1 text-4xl">
                    <span className="font-light text-[#ff00ff]">Premium</span>
                    developer experience
                </p>
                <p>
                    We are a team of engineers who love to build tools for other engineers, and products for online businesses.<br />
                    Our goal is to create a great development eco-system we&apos;ve always wished we had.<br />
                    Some of our tools and products:
                </p>
                <div className="flex flex-row gap-4 py-4 overflow-auto">
                    <DevExpCard imgSrc="/laptop-dark.jpg" title="Blinds dark mode">sbdrghsi</DevExpCard>
                </div>
                <Link className="inline-block w-40 rounded-3xl px-4 py-3 shadow-lg bg-gray-200 text-sm text-black hover:bg-gray-300 transition duration-100 ease-linear" href="/">See all products &rarr;</Link>
            </div>
        </section>
    );
}

export default DevExperience;
