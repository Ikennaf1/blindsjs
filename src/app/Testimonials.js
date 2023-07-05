import Image from 'next/image';

const Testimonial = ({ children, img, testifier, testifierTitle }) => {
    return (
        <div className="flex flex-col gap-8 p-4 w-80 h-40 border rounded-2xl">
            <div className="text-left text-sm">
                <p>"{ children }"</p>
            </div>

            <div  className="flex flex-row gap-8">
                <Image
                 src={img}
                 width={16}
                 height={16}
                 alt={`Picture of ${testifier}`}
                />

                <div className="flex flex-col gap-4">
                    <p>{testifier}</p>
                    <p>{testifierTitle}</p>
                </div>
            </div>
        </div>
    );
}

const Testimonials = () => {
    return (
        <section>
            <div className="body-margin flex flex-col gap-8">
                <div className="flex flex-row justify-center">
                    <div className="ceo-quote">
                        <i></i>
                        Blindsjs represents a unique way of interaction between businesses and technology.
                        We bridge the gap between great technology, professionalism, and affordability.
                        We occupy a strategic position where we best serve both businesses and world class developers,
                        delivering enterprise-grade solutions for the price and flexibility of freelance.
                        <p className="mt-2 text-center text-sm">- Ikenna Isiogu</p>
                    </div>
                </div>

                <div className="flex flex-col gap-8 text-center">
                    <p className="text-4xl">
                       <span className="font-light text-[#ff00ff]"> We go beyond expectations</span><br />
                        to solve your web development needs
                    </p>
                    <p>
                        Our mission is to provide the best possible solutions with our products and our services.<br />
                        Some of our satisfied clients have this to say about us:
                    </p>

                    <div className="flex flex-row gap-8 overflow-auto">
                        <Testimonial>
                            We snmng si ngs ing isnfin snfi sifn snifni sfign snfi visninfnbisd ifn sdfisnvnspnpsinf psn vs fisnivnsfv isnpn ifn bs.
                        </Testimonial>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
