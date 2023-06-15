import CodeClip from "./CodeClip";
import { Link } from "react-router-dom";

const SectionThree = () => {
    return (
        <section className="mt-16">
            <div className="body-margin">
                
                <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto text-center">
                    <div className="flex items-center justify-center bg-[teal]/20 w-16 h-16 rounded-2xl mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="teal" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>
                    </div>
                    <ul className="flex mt-4 justify-around items-center text-md sm:text-xl font-bold">
                        <li>Light weight</li>
                        <li>·</li>
                        <li>Flexible</li>
                        <li>·</li>
                        <li>Framework agnostic</li>
                    </ul>
                </div>
                <p className="mt-4 text-lg w-full sm:w-[80%] lg:w-[70%] text-center mx-auto">Regardless of your framework, Blinds has got you covered. Switch up to the plug that lets you easily customize. Blinds is robust, yet quiet.</p>
                <div class="flex justify-center mt-4">
                    <Link to="/docs" className="inline-block link">
                        Read documentation
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="inline-block ml-2 w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>

                <div className="block mt-16 w-full sm:flex sm:items-stretch sm:justify-between sm:gap-10">
                    <div className="section-three-items text-center bg-white">
                        <div className="">
                            <div className="inline-flex items-center justify-center bg-[indigo]/20 w-16 h-16 rounded-2xl mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="indigo" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </div>
                            <h4 className="mt-4 font-bold text-lg">Make your dark mode icons unique</h4>
                            <p className="mt-4">Skip the default icons. Get the freedom to use any markup, image, or SVG you wantfor your toggle icons.</p>
                            <Link to="/docs" className="inline-block mt-2 link">
                                Read documentation
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="inline-block ml-2 w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="section-three-items bg-white sm:order-first">
                        <CodeClip id="customizeBlindStyle">
{`setBlindsIcons({
  "normal": "<button>Normal</button>",
  "dark": "<button>Dark</button>"
});

blindsInit();;`}
                        </CodeClip>
                    </div>
                </div>
            </div>
        </section>
        // Personalize it with your own Icons
    );
}

export default SectionThree;
