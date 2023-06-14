import { Link } from "react-router-dom"
import CodeClip from "./CodeClip"

const SectionOne = () => {
    return (
        <section>
            <div className="body-margin mt-16">
                <div className="m-auto w-full text-center">
                    <div className="flex items-center justify-center bg-[#2e6ac4]/20 w-16 h-16 rounded-2xl mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2e6ac4" className="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                    </div>
                    <h3 className="text-3xl mt-8">Install Blinds the way you want</h3>
                    <p className="text-xl mt-2">Activate dark mode in your website with Blinds - Use the CDN, or install via NPM package manager</p>
                    <Link to="/docs" className="inline-block mt-2 link">
                        Read installation docs
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="inline-block ml-2 w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
                <div className="block w-full sm:mt-8 sm:mt-16 sm:flex sm:justify-between sm:gap-10">
                    <div className="section-one-items">
                        <div className="flex items-center justify-center bg-[#aa00ff]/20 w-12 h-12 rounded-xl mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#aa00ff" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                        </div>
                        <h4 className="mt-4 font-bold text-lg text-center">Install via NPM</h4>
                        <p className="mt-4">Install Blinds via NPM to quickly add dark mode capability to your website written in modern frameworks like React, Vue, and Angular.</p>
                        <div className="mt-4">
                            <CodeClip id="npm">
                                npm install --save blinds
                            </CodeClip>
                        </div>                        
                    </div>
                    <div className="section-one-items">
                        <div className="flex items-center justify-center bg-[#aa00ff]/20 w-12 h-12 rounded-xl mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#aa00ff" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>
                        </div>
                        <h4 className="mt-4 font-bold text-lg text-center">Include via CDN</h4>
                        <p className="mt-4">Include Blinds via CDN in your HTML as a quick set up script and easily modernize your website with a dark mode user interface.</p>
                        <div className="mt-4">
                            <CodeClip id="cdn">
                                {`<script src="https://cdn.jsdelivr.net/gh/Ikennaf1/blinds@0.6.1/dist/blinds.min.js" defer></script>`} 
                            </CodeClip>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionOne;
